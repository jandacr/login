import { Component, OnInit } from '@angular/core';
 
import { AlertService } from '../_services/index';
 
//este codigo es para cuando se recibe una alerta, le avise al html que aparezca en el div

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})
 
export class AlertComponent {
    message: any;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
