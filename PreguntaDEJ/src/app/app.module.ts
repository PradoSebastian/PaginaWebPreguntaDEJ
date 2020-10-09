import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { HeaderComponent } from './header/header.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestasComponent } from './respuestas/respuestas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreguntaComponent,
    RespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
