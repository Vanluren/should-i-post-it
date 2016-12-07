/**
 * Created by villadsvalur on 26/10/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from "../components/app.component";
import { SettingsComponent } from "../components/settings.component";

import { AppRoutingModule } from './app-routing.module';
import { UserService } from "../services/user.service";
import { SwipeCardsModule } from "../swipe-cards/swipe-cards.module";
import { CardsComponent } from "../components/cards.component";
import { SingleUserComponent} from "../components/single-user.component";
import { ImageDetailComponent } from "../components/image-detail.component";


@NgModule({
    imports:      [ BrowserModule,
                    AppRoutingModule, SwipeCardsModule],
    declarations: [ AppComponent,
                    SettingsComponent,
                    CardsComponent,
                    SingleUserComponent,
                    ImageDetailComponent],
    bootstrap:    [ AppComponent ],
    providers:    [ UserService]
})
export class AppModule { }