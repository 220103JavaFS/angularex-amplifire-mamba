import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZachComponent } from './components/zachcomponent/zachcomponent.component';
import { BobbyComponentComponent } from './components/bobby-component/bobby-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ZachComponent,
    BobbyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
