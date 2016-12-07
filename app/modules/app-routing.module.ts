/**
 * Created by villadsvalur on 02/11/2016.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PathLocationStrategy, LocationStrategy, HashLocationStrategy} from '@angular/common';


import {CardsComponent} from "../components/cards.component";
import {ImageDetailComponent} from "../components/image-detail.component";
import {SettingsComponent} from "../components/settings.component";
import {SingleUserComponent} from "../components/single-user.component";

const routes: Routes = [
    { path: '', redirectTo: '/cards', pathMatch: 'full' },
    {path: 'user', component: SingleUserComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'detail/:id', component: ImageDetailComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})

export class AppRoutingModule {}