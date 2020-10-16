import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private firestore: AngularFirestore) { }

  crearRespuesta(respuesta: Respuesta) {
    const id = this.firestore.createId();
    const doc = this.firestore.collection('respuestas').doc(id);
    respuesta.id = id;
    const param = JSON.parse(JSON.stringify(respuesta));
    return doc.set(param);
  }

  consultarRespuestas(){
    return this.firestore.collection('respuestas').valueChanges()
  }

}
