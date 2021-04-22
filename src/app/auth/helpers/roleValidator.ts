import { User } from 'src/app/auth/models/user.interface';

export class RoleValidator {
    isUsuario(user): boolean {
        return (user.role === 'USUARIO' || user.role === 'ADMINISTRADOR');
    }

    isAdministrador(user): boolean {
        return user.role === 'ADMINISTRADOR';
    }
}
