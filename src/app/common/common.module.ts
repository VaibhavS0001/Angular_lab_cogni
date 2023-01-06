import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CommonRoutingModule } from './common.routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavComponent,
    ProductlistComponent,
    StarComponent
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    CommonModule,
    CommonRoutingModule,
    FormsModule
  ],
  exports: [NavComponent, ProductlistComponent, StarComponent]
})
export class SharedModule { }
