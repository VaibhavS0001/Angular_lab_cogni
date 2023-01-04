import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Animal } from 'src/app/Day2/animal-list/animal-list.component';

@Component({
  selector: 'app-dialog-animal',
  templateUrl: './dialog-animal.component.html',
  styleUrls: ['./dialog-animal.component.scss'],
})
export class DialogAnimalComponent {
  addAnimal: any;
  updateAnimal: any;
  file_store!: FileList;
  file_list: Array<string> = [];

  constructor(
    public dialogRef: MatDialogRef<DialogAnimalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { animal: Animal; button: string }
  ) {}

  ngOnInit(): void {
    this.initUpdateForm();
    this.initAddForm();
  }

  initAddForm() {
    this.addAnimal = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      description: ['', Validators.required],
      display: ['', Validators.required],
    });
  }

  initUpdateForm() {
    this.updateAnimal = this.fb.group({
      name: [this.data.animal?.name, Validators.required],
      age: [this.data.animal?.age, Validators.required],
      description: [this.data.animal?.description, Validators.required],
      display: [this.data.animal?.image, Validators.required],
    });
  }

  update() {
    if (this.updateAnimal.get('display').touched) {
      let res: Animal = {
        id: this.data.animal.id,
        name: this.updateAnimal.get('name').value,
        age: this.updateAnimal.get('age').value,
        description: this.updateAnimal.get('description').value,
        image: `assets/images/${this.file_store[0].name}`,
      };
      this.dialogRef.close(res);
    } else {
      let res: Animal = {
        id: this.data.animal.id,
        name: this.updateAnimal.get('name').value,
        age: this.updateAnimal.get('age').value,
        description: this.updateAnimal.get('description').value,
        image: this.data.animal.image,
      };
      this.dialogRef.close(res);
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  add() {
    let res: Animal = {
      id: this.getRandomInt(10000),
      name: this.addAnimal.get('name').value,
      age: this.addAnimal.get('age').value,
      description: this.addAnimal.get('description').value,
      image: `assets/images/${this.file_store[0].name}`,
    };
    this.dialogRef.close(res);
  }

  onNoClick(res: boolean): void {
    this.dialogRef.close(res);
  }

  handleFileInputChange(l: any): void {
    if (this.data.button === 'Add Animal') {
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.addAnimal.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.addAnimal.get('display').patchValue('');
      }
    } else {
      this.file_store = l;
      if (l.length) {
        const f = l[0];
        const count = l.length > 1 ? `(+${l.length - 1} files)` : '';
        this.updateAnimal.get('display').patchValue(`${f.name}${count}`);
      } else {
        this.updateAnimal.get('display').patchValue('');
      }
    }
  }
}
