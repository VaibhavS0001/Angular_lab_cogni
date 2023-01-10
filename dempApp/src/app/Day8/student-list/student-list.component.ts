import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

export interface tData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  data: any;
  constructor(private studService: StudentService, private route: Router) {}
  displayedColumns: string[] = ['name', 'email'];
  dataSource: { name: string; email: string }[] = [];
  ngOnInit(): void {
    this.data = this.studService.getStudents();
    if (this.data[0]) {
      this.dataSource = this.data[0].students;
    }else{
      this.route.navigate([''])
    }
  }
}
