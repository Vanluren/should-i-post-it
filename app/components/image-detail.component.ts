/**
 * Created by villadsvalur on 22/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { MockUserImages } from "../user_info/MockUserImages";
import { UserService } from "../services/user.service";

@Component({
    selector: 'image-detail',
    templateUrl:'app/templates/image-detail.component.html',
    styleUrls: ['app/stylesheets/image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
    image: MockUserImages;
    private visible: boolean = false;

    constructor(
        private router: ActivatedRoute,
        private userService: UserService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.router.params.forEach((params: Params) => {
            let id = +params['id'];
            this.userService.getImage(id)
                .then(image => this.image = image);
        });
    }

    goBack(): void {
        this.location.back();
    }

    toggleComments(){
        this.visible = !this.visible;
    }
}