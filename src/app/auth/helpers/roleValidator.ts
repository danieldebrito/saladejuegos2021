import { User } from 'src/app/auth/models/user.interface';

export class RoleValidator {
    isAlumno(user): boolean {
        return user.role === 'ALUMNO';
    }

    isAdministrador(user): boolean {
        return user.role === 'ADMINISTRADOR';
    }

    isProfesor(user): boolean {
        return user.role === 'PROFESOR';
    }
}
