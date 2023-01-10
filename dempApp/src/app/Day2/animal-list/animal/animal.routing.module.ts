import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListComponent } from 'src/app/common/animallist/animal-list.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

const animalRoutes: Routes = [
  { path: '', component: AnimalListComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(animalRoutes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
