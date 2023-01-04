import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAnimalComponent } from 'src/app/Day10/dialog-animal/dialog-animal.component';
import { AnimalService } from 'src/app/shared/animal.service';
import { AuthService } from 'src/app/shared/auth-service.service';

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
    public dialog: MatDialog

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

  ngOnInit(): void {
    this.aService.getAnimals().subscribe((animals) => {
      animals.forEach((animal) => {
        this.ELEMENT_DATA.push(animal);
      });
    });
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

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        for (let product of this.ELEMENT_DATA) {
          if (result.id == product.id) {
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
          this.aService.createAnimal(result).subscribe((data) => {
            this.ELEMENT_DATA.push(data);
            this.snackBar.open(
              'New Product is created successfully with id ' + data.id,
              'close',
              {
                duration: 2000,
                // panelClass: ['blue-snackbar']
              }
            );
          });
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

  updateAnimal(animal: Animal) {
    const dialogRef = this.dialog.open(DialogAnimalComponent, {
      data: { animal: animal, button: 'update' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed', result);
      if (result) {
        this.aService.updateAnimal(result).subscribe(() => {
          let fIndex = this.ELEMENT_DATA.findIndex(
            (item) => item.id == result.id
          );
          if (fIndex > -1) {
            this.ELEMENT_DATA[fIndex] = result;
          }
        });
      } else {
        this.snackBar.open('Operation was canceled', 'close', {
          duration: 2000,
          // panelClass: ['blue-snackbar']
        });
      }
    });
  }

  deleteAnimal(id: number) {
    if (confirm(`Are you sure you want to delete this product`)) {
      this.aService.deleteAnimal(id).subscribe(() => {
        let fIndex = this.ELEMENT_DATA.findIndex((item) => item.id == id);
        if (fIndex > -1) {
          this.ELEMENT_DATA.splice(fIndex, 1);
          this.snackBar.open(
            `Product with id ${id} is deleted successfully.`,
            'close',
            {
              duration: 2000,
              // panelClass: ['blue-snackbar']
            }
          );
        }
      });
    }
  }
}
