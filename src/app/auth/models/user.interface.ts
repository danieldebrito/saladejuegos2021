export type Roles = 'ALUMNO' | 'PROFESOR' | 'ADMINISTRADOR';

export interface User {
  uid?: string;
  nombre?: string;
  apellido?: string;
  email?: string;
  emailVerified?: boolean;
  displayName?: string;
  photoURL?: string;
  password?: string;
  dni?: number;
  sexo?: string;
  fechanacimiento?: string;
  foto?: string;
  paisOrigen?: string;
  role?: Roles;
}
