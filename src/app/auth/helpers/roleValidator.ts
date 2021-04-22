import { User } from 'src/app/auth/models/user.interface';

export class RoleValidator {
    isUsuario(user): boolean {
        return user.role === 'USUARIO';
    }

    isAdministrador(user): boolean {
        return user.role === 'ADMINISTRADOR';
    }
}
