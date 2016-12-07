/**
 * Created by villadsvalur on 22/11/2016.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MockUserInfo} from "../user_info/MockUserInfo";
import {MockUserImages} from "../user_info/MockUserImages";
import {UserService} from "../services/user.service";

@Component({
    selector:'single-user-component',
    templateUrl:'app/templates/single-user.component.html',
    styleUrls: ['app/stylesheets/single-user.component.css']
})

export class SingleUserComponent{
    userInfo: MockUserInfo[];
    userImages: MockUserImages[];
    selectedImage: MockUserImages;

    constructor(private router: Router,
        private userService: UserService) {
    }

    getUsers(): void {
        this.userService.getUsers().then(userInfo => this.userInfo = userInfo);
    }

    getImages(): void{
        this.userService.getImages().then(userImages => this.userImages = userImages);
    }
    ngOnInit(): void {
        this.getUsers();
        this.getImages();
    }

    private gotoDetail(image: MockUserImages): void {
        this.selectedImage = image;
        this.router.navigate(['/detail', this.selectedImage.id]);
    }
}