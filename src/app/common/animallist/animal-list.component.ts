import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DialogAnimalComponent } from 'src/app/Day10/dialog-animal/dialog-animal.component';
import { AnimalService } from 'src/app/services/animal.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { getAnimals } from 'src/app/state/animals/animal.selectors';
import { AnimalState } from 'src/app/state/animals/animal.state';
import * as AnimalActions from '../../state/animals/animal.actions';

export interface Animal {
  id: number;
  name: string;
  description: string;
  age: number;
  image: string;
}

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  img_height: number = 50;
  img_width: number = 100;
  text = 'hide Image';
  showImg: boolean = true;
  Sname: any;
  role: string;
  ELEMENT_DATA: Animal[] = [];
  links: Array<string> = [];
  temp2!: Animal[];
  isAuthenticated: boolean = false;
  title: string = 'Animal List';
  button: string = 'Add Animal';
  c: number = 0;

  constructor(
    private auth: AuthService,
    private aService: AnimalService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private store: Store<AnimalState>
  ) {
    this.role = this.auth.checkRole();
    this.isAuthenticated = this.auth.checkAuthStatus();

    if (!this.isAuthenticated) {
      this.links.push('products');
      this.links.push('login');
    } else {
      this.links.push('products');
      this.links.push('Logout');
    }
  }

  public allAnimals: Observable<Animal[]> = this.store.select(getAnimals);

  ngOnInit(): void {
    this.store.dispatch(AnimalActions.loadAnimals());
    this.allAnimals.subscribe((resp: Animal[]) => {
      this.ELEMENT_DATA = resp;
    });
    // this.aService.getAnimals().subscribe((animals) => {
    //   animals.forEach((animal) => {
    //     this.ELEMENT_DATA.push(animal);
    //   });
    // });
    this.temp2 = this.ELEMENT_DATA;
  }

  show() {
    if (this.text === 'hide Image') {
      this.text = 'show Image';
      this.showImg = false;
    } else {
      this.text = 'hide Image';
      this.showImg = true;
    }
  }

  filter() {
    if (this.Sname == '') {
      this.ELEMENT_DATA = this.temp2;
    }
    let temp: Animal[] = [];
    this.ELEMENT_DATA.forEach((e) => {
      if (e.name.includes(this.Sname)) {
        temp.push(e);
        this.ELEMENT_DATA = temp;
      } else {
        if (!(temp.length > 0)) {
          this.ELEMENT_DATA = this.temp2;
        }
      }
    });
  }

  addAnimal() {
    const dialogRef = this.dialog.open(DialogAnimalComponent, {
      data: { button: 'Add Animal' },
    });

    dialogRef.afterClosed().subscribe((animal) => {
      if (animal) {
        for (let a of this.ELEMENT_DATA) {
          if (animal.id == a.id) {
            this.c -= 1;
          } else {
            this.c += 1;
          }
        }
        if (this.c == this.ELEMENT_DATA.length - 2) {
          this.snackBar.open(
            'Something went wrong your product is not added yet please try again',
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
          this.addAnimal();
          this.c = 0;
        }
        if (this.c == this.ELEMENT_DATA.length) {
          this.store.dispatch(AnimalActions.createAnimal({ animal }));

          // this.aService.createAnimal(result).subscribe((data) => {
          //   this.ELEMENT_DATA.push(data);
          //   this.snackBar.open(
          //     'New Product is created successfully with id ' + data.id,
          //     'close',
          //     {
          //       duration: 2000,
          //       // panelClass: ['blue-snackbar']
          //     }
          //   );
          // });
          this.snackBar.open(
            'New Animal is created successfully with id ' + animal.id,
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
          this.c = 0;
        }
      } else {
        this.snackBar.open("Couldn't create new Product", 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      }
    });
  }

  updateAnimal(animals: Animal) {
    const dialogRef = this.dialog.open(DialogAnimalComponent, {
      data: { animal: animals, button: 'update' },
    });

    dialogRef.afterClosed().subscribe((animal) => {
      // console.log('The dialog was closed', result);
      if (animal) {
        // this.aService.updateAnimal(result).subscribe(() => {
        //   let fIndex = this.ELEMENT_DATA.findIndex(
        //     (item) => item.id == result.id
        //   );
        //   if (fIndex > -1) {
        //     this.ELEMENT_DATA[fIndex] = result;
        //   }
        // });
        this.store.dispatch(AnimalActions.updateAnimal({ animal }));
        this.snackBar.open('Animal Updated Successfully', 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      } else {
        this.snackBar.open('Operation was canceled', 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      }
    });
  }

  deleteAnimal(animalId: number) {
    if (confirm(`Are you sure you want to delete this product`)) {
      // this.aService.deleteAnimal(id).subscribe(() => {
      //   let fIndex = this.ELEMENT_DATA.findIndex((item) => item.id == id);
      //   if (fIndex > -1) {
      //     this.ELEMENT_DATA.splice(fIndex, 1);
      //     this.snackBar.open(
      //       `Product with id ${id} is deleted successfully.`,
      //       'close',
      //       {
      //         duration: 2000,
      //         // panelClass: ['blue-snackbar']
      //       }
      //     );
      //   }
      // });
      this.store.dispatch(AnimalActions.deleteAnimal({ animalId }));
      this.snackBar.open(
        `Animal with id ${animalId} is deleted successfully.`,
        'close',
        {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        }
      );
    }
  }
}
