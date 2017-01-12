/**
 * Created by villadsvalur on 26/10/2016.
 */
import { Component } from  '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app',
    templateUrl:'/app/templates/app.component.html',
    styleUrls: ['app/stylesheets/app.component.css']
})

export class AppComponent {
    constructor(private router: Router) { }

    gotoUser(): void {
        let link = [ '/user' ];
        this.router.navigate(link);
    }

    gotoSettings(): void{
        let link = ['/carrousel'];
        this.router.navigate(link);
    }
}
