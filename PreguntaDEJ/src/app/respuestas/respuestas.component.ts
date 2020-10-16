import { Component, OnInit } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { PreguntasService } from '../services/preguntas.service';



@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  public respuestas=[];

  constructor(private service: PreguntasService) { }

  ngOnInit(): void {
    this.respuestas = this.service.consultarRespuestas();
    if(this.respuestas.length == 0)
    {

        var resp = new Respuesta();
        resp.contenido="No hay respuestas";
        resp.fecha="00/00/0000";
        this.respuestas.push(resp);
    }
  }
}
