import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UvFormComponent} from "./uv-form/uv-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";

const routes: Routes = [
  { path: 'calculator', component: UvFormComponent },
  { path: 'register', component: RegisterFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
