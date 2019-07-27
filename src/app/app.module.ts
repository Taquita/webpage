import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {SideOffModule} from './components/smart/side-off/side-off.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    SideOffModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
