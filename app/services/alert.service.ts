/* este servicio es el que hace que el componente de alert reciba y opere los mensajes de alerta o aviso
/ aqui estan los metodos para el success y error, y el metodo de getMessage con un Observable 
/ mas informacion aqui https://angular-2-training-book.rangle.io/handout/observables/using_observables.html
/ que hace que llegue la notificacion al componente para que muestre mensaje cuando se necesita mostrar.
*/
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
 
    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
 
    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
 
    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}