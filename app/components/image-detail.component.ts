/**
 * Created by villadsvalur on 22/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

import { MockUserImages } from "../user_info/MockUserImages";
import { UserService } from "../services/user.service";

@Component({
    selector: 'image-detail',
    templateUrl:'app/templates/image-detail.component.html',
    styleUrls: ['app/stylesheets/image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
    protected image: MockUserImages;
    protected userImages: MockUserImages[];
    private visible: boolean = false;
    private selectedImage: MockUserImages;
    public randomImageStringRight:string;
    public randomImageStringLeft:string;
    private randomNumber1: number;
    private randomNumber2: number;

    constructor(
        private router: ActivatedRoute,
        private imageRouter: Router,
        private userService: UserService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.router.params.forEach((params: Params) => {
            let id = +params['id'];
            this.userService.getImage(id)
                .then(image => this.image = image);
        });

        this.getImages();
        this.setRandomImageString();
    }

    getImages(): void{
        this.userService.getImages().then(userImages => this.userImages = userImages);
    }

    setRandomImageString(): void{
        this.randomNumber1 = Math.floor((Math.random() * 10)+1);
        this.randomNumber2 = Math.floor((Math.random() * 10)+1);

        if(this.randomNumber1 == this.randomNumber2){
            this.randomNumber1 = Math.floor((Math.random() * 10)+1);
        }
        else {
            this.randomImageStringRight = 'assets/mock-user-images/johnny/jd' + this.randomNumber1 +'.jpg';
            this.randomImageStringLeft = 'assets/mock-user-images/johnny/jd' + this.randomNumber2+'.jpg';
        }

        console.log(this.randomImageStringRight);
        console.log(this.randomImageStringLeft);
        console.log(this.randomNumber1);
        console.log(this.randomNumber2);
    }

    goBack(): void {
        this.location.back();
    }

    toggleCommentsAndSuggestions(){
        this.visible = !this.visible;
    }

    private gotoDetail(id:number): void {
        this.imageRouter.navigate(['/detail', id]);
    }
}