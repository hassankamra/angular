import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { OlduserComponent } from './olduser/olduser.component';
const routes: Routes = [
  { path: 'new', component: NewuserComponent },
  { path: 'old', component: OlduserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
