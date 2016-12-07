/**
 * Created by villadsvalur on 02/11/2016.
 */
import { Component } from '@angular/core';
import { Location } from '@angular/common';
//TODO: Find ud af hvad den reelt skal den her component.
@Component({
    selector: 'settings-component',
    templateUrl:'app/templates/settings.component.html',
    styleUrls:['app/stylesheets/settings.component.css']
})

export class SettingsComponent{
    constructor(private location: Location) {}

    goBack(): void{
        this.location.back();
    }
}