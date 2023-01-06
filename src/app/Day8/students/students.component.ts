import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  studForm: any;
  data: any;
  constructor(private fb: FormBuilder, private router: Router, private studService: StudentService) {}

  ngOnInit(): void {
    this.initEmployeeForm();
  }

  initEmployeeForm() {
    this.studForm = this.fb.group({
      students: this.fb.array([]),
    });
    this.addStudent()
  }

  students(): FormArray {
    return this.studForm.get('students') as FormArray;
  }

  newStudent(): FormGroup {
    return this.fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern('[A-Z][a-z]* [A-Z][a-z]*')],
      ],
      email: ['', [Validators.required, Validators.email]],
      programs: this.fb.array([]),
    });
  }

  addStudent() {
    this.students().push(this.newStudent());
  }

  removeStudent(studIndex: number) {
    this.students().removeAt(studIndex);
  }

  studentPrograms(studIndex: number) {
    return this.students().at(studIndex).get('programs') as FormArray;
  }

  newProgram() {
    return this.fb.group({
      programName: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  addProgram(studIndex: number) {
    this.studentPrograms(studIndex).push(this.newProgram());
  }

  removeProgram(studIndex: number, pIndex: number) {
    this.studentPrograms(studIndex).removeAt(pIndex);
  }

  isPristine(): boolean {
    return this.studForm.pristine;
  }
  isTouched(): boolean {
    return this.studForm.touched;
  }
  isValid(): boolean {
    return this.studForm.valid;
  }

  Register(): void {
    // console.log(this.studForm.value);
    this.studService.setStudent(this.studForm.value)
    this.router.navigate(['student-list'])
    this.studForm.reset();
  }
}
