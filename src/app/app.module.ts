import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken: "pk.eyJ1Ijoid2VpY2h1bmd3IiwiYSI6ImNqbWdzdDM1Zzc5Z3AzcG9nYjBmNGdzN3EifQ.n3Rc4TxBtrgK1zCX5dkozg"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
