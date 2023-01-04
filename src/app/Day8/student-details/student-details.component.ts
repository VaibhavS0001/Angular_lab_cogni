import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student, StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  email!: string;
  student: any;
  sub!: Subscription;
  displayedColumns: string[] = ['program_name', 'duration'];
  dataSource: { programName: string; duration: string }[] = [];
  constructor(
    private aRoute: ActivatedRoute,
    private service: StudentService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // console.log("hi")
    this.sub = this.aRoute.paramMap.subscribe((params) => {
      let email = params.get('email');
      if (email) {
        this.email = email;
      }
    });
    // console.log(this.email);
    this.student = this.service.getStudentsWithEmail(this.email);
    if (this.student) {
      this.dataSource = this.student.programs;
      // console.log(this.dataSource);
    } else {
      // console.log(this.student)
      this.router.navigate(['']);
    }
  }

  back(): void {
    this.router.navigate(['student-list']);
  }
}
