import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZachComponent } from './components/zachcomponent/zachcomponent.component';

const routes: Routes = [{
  path:"",
  component:ZachComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
