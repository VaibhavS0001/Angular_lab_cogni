import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PentHouseComponent } from './Day1/pent-house/pent-house.component';
import { WelcomeComponent } from './Day1/welcome/welcome.component';
import { AnimalListComponent } from './Day2/animal-list/animal-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductlistComponent } from './Day2/productlist/productlist.component';
import { StarComponent } from './Day3/star/star.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShoppingCartComponent } from './Day3/shopping-cart/shopping-cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RepeatDataPipe } from './repeat-data.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './Day4/nav/nav.component';
import { EventsComponent } from './Day4/events/events.component';
import { EventDetailsComponent } from './Day4/event-details/event-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/data.service';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { PStructureComponent } from './p-structure/p-structure.component';
import { HighlightDirective } from './Day6/highlight.directive';
import { EmployeeComponent } from './Day7/employee/employee.component';
import { TrusteeComponent } from './Day7/trustee/trustee.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BookComponent } from './Day7/book/book.component';
import { DatePipe } from '@angular/common';
import { StudentsComponent } from './Day8/students/students.component';
import { PageNotFoundComponent } from './Day8/page-not-found/page-not-found.component';
import { StudentListComponent } from './Day8/student-list/student-list.component';
import { StudentDetailsComponent } from './Day8/student-details/student-details.component';
import { LoginComponent } from './Day9/login/login.component';
import { DialogAnimalComponent } from './Day10/dialog-animal/dialog-animal.component';
import { GreetingComponent } from './Day10/greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent,
    WelcomeComponent,
    AnimalListComponent,
    ProductlistComponent,
    StarComponent,
    ShoppingCartComponent,
    RepeatDataPipe,
    NavComponent,
    EventsComponent,
    EventDetailsComponent,
    DialogComponent,
    PStructureComponent,
    HighlightDirective,
    EmployeeComponent,
    TrusteeComponent,
    BookComponent,
    StudentsComponent,
    PageNotFoundComponent,
    StudentListComponent,
    StudentDetailsComponent,
    LoginComponent,
    DialogAnimalComponent,
    GreetingComponent,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  exports: [MatFormFieldModule, MatInputModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
