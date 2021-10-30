import { Rol } from './rol.model';

export class Usuario {
    id: number = null as any;
    nombres: string = '';
    apellidos: string = '';
    documento: number = null as any;
    activo: boolean = false;
    usuario: string = '';
    clave: string = '';
}

export class CurrentUser {
    nombres: string = '';
    apellidos: string = '';
    documento: number = null as any;
    usuario: string = '';
    rol:Rol = new Rol();
}