import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { PreguntasService } from '../services/preguntas.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  public respuesta: Respuesta;
  public oculto = true;

  constructor(private service: PreguntasService) {

  }

  ngOnInit(): void {
    this.respuesta = new Respuesta();
  }

  responder() {
    this.respuesta.obtenerFechaHoy();
    this.service.crearRespuesta(this.respuesta);
    this.oculto = false;
  }

}
