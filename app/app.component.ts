// Lo mismo que el anterior pero en component, define la root tag de app blablabla
//The app component is the root component of the application, it defines the root tag of the app as <app></app> with the selector property.
//The moduleId property is set to allow a relative path to be used for the templateUrl.

import { Component } from '@angular/core';
 
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
 
export class AppComponent { }