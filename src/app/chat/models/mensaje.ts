export interface Mensaje {
  nombre: string;
  mensaje: string;
  fecha?: number;
  uid?: string; // llave del usr que mando el mensaje
}
