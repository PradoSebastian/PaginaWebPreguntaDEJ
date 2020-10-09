import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestasComponent } from './respuestas/respuestas.component';


const routes: Routes = [
  {
    path: '', component: PreguntaComponent
  },
  {
    path: 'respuestas', component: RespuestasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
