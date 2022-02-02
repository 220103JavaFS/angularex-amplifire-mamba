import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZachComponent } from './components/zachcomponent/zachcomponent.component';
import { BobbyComponentComponent } from './components/bobby-component/bobby-component.component';
import { MahadComponent } from './components/mahad/mahad.component';

const routes: Routes = [{
  path:"bobbyComponent",
  component:BobbyComponentComponent
}, {
  path:"zachComponent",
  component:ZachComponent
}, {
  path:"mahad",
  component:MahadComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
