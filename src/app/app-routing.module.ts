import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZachComponent } from './components/zachcomponent/zachcomponent.component';
import { BobbyComponentComponent } from './components/bobby-component/bobby-component.component';

const routes: Routes = [{
  path:"bobbyComponent",
  component:BobbyComponentComponent
}, {
  path:"zachComponent",
  component:ZachComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
