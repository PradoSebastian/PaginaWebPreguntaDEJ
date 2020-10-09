export class Respuesta {
  public id: string;
  public contenido: string;
  public fecha: string;

  constructor() {
  }

  obtenerFechaHoy(): string {
    const dateOb = new Date();

    // adjust 0 before single digit date
    const date = ("0" + dateOb.getDate()).slice(-2);

    // current month
    const month = ("0" + (dateOb.getMonth() + 1)).slice(-2);

    // current year
    const year = dateOb.getFullYear();

    const hour = dateOb.getHours();

    const minutes = dateOb.getMinutes();

    let result = null;

    result = date + '/' + month + '/' + year + ' ' + hour + ':' + minutes;

    this.fecha =  result;

    return result;

  }
}
