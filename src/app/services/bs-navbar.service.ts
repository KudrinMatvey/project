import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BsNavbarService {
  getUserFirstName(){

    return this.userService.getFirstName();
    //return null;
  }

  constructor(private userService:UserService) { }
}
