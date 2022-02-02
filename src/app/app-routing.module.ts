import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileIanComponent } from './components/profile-ian/profile-ian.component';

const routes: Routes = [{
  path : "profile-ian",
  component : ProfileIanComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
