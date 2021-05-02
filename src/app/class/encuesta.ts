
export class Encuesta {
    constructor(
        public id?: string,
        public fecha?: string,
        public apellido?: string,
        public comentario?: string,
        public edad?: number,
        public nombre?: string,
        public sexo?: string,
        public telefono?: number,
        public terminos?: boolean,
        public juego?: string,
        public usuario?: string,
    ) { }
}
