import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileIanComponent } from './components/profile-ian/profile-ian.component';
import { ZachComponent } from './components/zachcomponent/zachcomponent.component';
import { BobbyComponentComponent } from './components/bobby-component/bobby-component.component';
import { MahadComponent } from './components/mahad/mahad.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileIanComponent,
    ZachComponent,
    BobbyComponentComponent,
    MahadComponent
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
