/**
 * Created by villadsvalur on 15/11/2016.
 */
import {Component, ViewEncapsulation, ViewChild, EventEmitter, NgModule, Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SwipeCardsModule } from "../swipe-cards/swipe-cards.module";


@Component({
    selector: 'swipe-cards',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app/templates/cards.component.html',
    styleUrls:['app/stylesheets/cards.component.css']
})
export class CardsComponent {

    @Input() alone: boolean;
    @ViewChild('cardLog') cardLogContainer: any;
    @ViewChild('tinderCardLog') tinderCardLogContainer: any;

    visible: boolean = false;
    cards: any[] = [];
    cardCursor: number = 0;
    orientation: string = "x";
    overlay: any = {
        like: {
            backgroundColor: ''
        },
        dislike: {
            backgroundColor: ''
        }
    };
    cardLogs: any = [];
    tinderCardLogs: any = [];
    private aloneArray:any = [];


    constructor() {
        var randomUser = ['Adam','Denise','El','Ida', 'Emmeli','Jonas', 'Maria', 'Elvira','Frederik','Gary','Sylvester'];
        this.imageAlone();
        for (let i = 0; i < 50; i++) {
            const randomNumber = Math.floor((Math.random()*10)+1);
            this.cards.push({
                id: i + 1,
                likeEvent: new EventEmitter(),
                destroyEvent: new EventEmitter(),
                leftUrl: 'assets/mock-user-images/'+randomUser[randomNumber]+'1.jpg   ',
                rightUrl:'assets/mock-user-images/'+randomUser[randomNumber]+'2.jpg',
                alone: this.aloneArray[i]
            });

        }
    }

    like(like) {
        var self = this;
        if (this.cards.length > 0) {
            self.cards[this.cardCursor++].likeEvent.emit({ like });
            this.tinderCardLogs.push("callLike(" + JSON.stringify({ like }) + ")");
            this.scrollToBottom(this.tinderCardLogContainer);
        }
    }

    onCardLike(event) {
        var item = this.cards[this.cardCursor++];
        this.tinderCardLogs.push("onLike(" + JSON.stringify(event) + ")");
        this.scrollToBottom(this.tinderCardLogContainer);
    }

    imageAlone() {
        for(var i = 0; i < 50; i++){
            var randomNumber = Math.floor((Math.random()) * 10);
            if(randomNumber < 8){
                this.aloneArray[i] = true;
            }else{
                this.aloneArray[i] = false;
            }
        }
        return this.aloneArray;
    }
    setButtonImage(){
        return this.aloneArray[this.cardCursor];
    }

    onRelease(event) {
        this.cardLogs.push("onRelease(event)");
        this.scrollToBottom(this.cardLogContainer);

    }

    onAbort(event) {
        this.cardLogs.push("onAbort(event)");
        this.scrollToBottom(this.cardLogContainer);
    }

    onSwipe(event) {
        this.cardLogs.push("onSwipe(event)");
        this.scrollToBottom(this.cardLogContainer);
    }

    scrollToBottom(el) {
        setTimeout(() => {
            el.nativeElement.scrollTop = el.nativeElement.scrollHeight;
        }, 100);
    }

    toggleComments(){
        this.visible = !this.visible;
    }
}

@NgModule({
    imports: [BrowserModule, FormsModule, SwipeCardsModule],
    declarations: [CardsComponent],
    bootstrap: [CardsComponent]
})
export class CardsModule { }
