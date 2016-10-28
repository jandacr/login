//este codigo es para prevenir que usuarios que no existen puedan ingresar, mas info aqui http://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
//nombres de las funciones que se importan
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            //usa almacenamiento local de html5, luego podra cambiarse para una bd
            // regresa true si fue logged in
            return true;
        }
 
        //y en caso de que no, lo redirije a la pagina de login o inicio o principal
        this.router.navigate(['/login']);
        return false;
    }
}