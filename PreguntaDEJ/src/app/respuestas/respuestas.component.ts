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

  public respuestasAux=[];

  public cantidad = 0; 

  public ocultoSiguiente = false;

  public ocultoAnterior = false;
  constructor(private service: PreguntasService) { }

  ngOnInit(): void {
    this.consultar();
  }
  irAnterior(){
    this.cantidad = this.cantidad - 1;
    this.respuestas = [];
    var inicio = 10* this.cantidad;
    var final = inicio + 10;
    for(var i = inicio; i< final && i < this.respuestasAux.length; i++)
    {
      this.respuestas.push(this.respuestasAux[i]);
      this.ocultoSiguiente = true;
    }
    if(this.cantidad > 0)
    {
      this.ocultoAnterior = true;
    }else{
      this.ocultoAnterior = false;
    }
    if(final >  this.respuestasAux.length)
    {
      this.ocultoSiguiente = false;
    }else{
      this.ocultoSiguiente = true;
    }
    
  }
  irSiguiente(){
    this.cantidad = this.cantidad + 1;
    this.respuestas = [];
    var inicio = 10* this.cantidad;
    var final = inicio + 10;
    for(var i = inicio; i< final && i < this.respuestasAux.length; i++)
    {
      this.respuestas.push(this.respuestasAux[i]);
      this.ocultoAnterior = true;
    }
    if(final >=  this.respuestasAux.length)
    {
      this.ocultoSiguiente = false;
    }
    else{
      this.ocultoSiguiente = true;
    }
    if(this.cantidad > 0)
    {
      this.ocultoAnterior = true;
    }
    else{
      this.ocultoAnterior = false;
    }
  }
  consultar() {
    this.service.consultarRespuestas().subscribe(resp =>{
      resp.map(e =>{
      const r  = e as Respuesta;
      this.respuestasAux.push(r);
    });
    this.paginacion();
  },error => {
    console.log(error);
  }
  );
  }
  paginacion()
  {
    if(this.respuestasAux.length >10)
    {
      for(var i = 0; i<10; i++)
      {
        this.respuestas.push(this.respuestasAux[i]);
        this.ocultoSiguiente = true;
      }
    }
    else{
      for(var i = 0; i<this.respuestasAux.length; i++)
      {
        this.respuestas.push(this.respuestasAux[i]);
      }
    }
  }
}
