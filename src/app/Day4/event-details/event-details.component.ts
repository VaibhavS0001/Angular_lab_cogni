import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Events } from 'src/app/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  @Input() eventDets: Events;
  res
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.eventDets);
  }

  openDialog(p: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { price: '₹' + p + ' will be deduced from the account'}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      this.res = result;
    });
  }
}
