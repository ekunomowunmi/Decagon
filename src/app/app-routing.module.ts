import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { FemaleUsersComponent } from './female-users/female-users.component';
import { MaleUsersComponent } from './male-users/male-users.component';


const routes: Routes = [
  {path:'',component: AllUsersComponent},
  {path:'all-users',component:AllUsersComponent},
  {path:'male-users',component:MaleUsersComponent},
  {path:'female-users',component:FemaleUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
