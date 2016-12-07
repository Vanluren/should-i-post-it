///<reference path="../../node_modules/@types/core-js/index.d.ts"/>
/**
 * Created by villadsvalur on 07/11/2016.
 */
import { Injectable } from '@angular/core';
import {USER_INFO, USER_IMAGES } from "../user_info/mock-data";
import {MockUserInfo} from "../user_info/MockUserInfo";
import {MockUserImages} from "../user_info/MockUserImages";

@Injectable()
export class UserService {
    getUsers(): Promise<MockUserInfo[]> {
        return Promise.resolve(USER_INFO);
    }
    getImages(): Promise<MockUserImages[]>{
        return Promise.resolve(USER_IMAGES);
    }
    getImage(id: number): Promise<MockUserImages> {
        return this.getImages()
            .then(USER_IMAGES => USER_IMAGES.find(image => image.id === id));
    }
}
