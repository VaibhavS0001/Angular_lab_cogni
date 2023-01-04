import { Injectable } from '@angular/core';

export interface Program {
  programName: string;
  duration: string;
}

export class Student {
  name!: string;
  email!: string;
  program!: Program[];
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  student: any[] = [];
  data!: Student
  constructor() {}

  getStudents() {
    return this.student;
  }

  getStudentsWithEmail(email: string) {
    if(this.student[0]){
      this.student[0].students.forEach((student: Student) => {
        if(student.email == email){
          this.data = student;
        }
      })
    }
    return this.data
  }

  setStudent(student: Student) {
    this.student.push(student);
  }
}
