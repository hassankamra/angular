import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from "../user.service";
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css'],
})
export class NewuserComponent implements OnInit {
  constructor(private pfee: UserService) {}

  ngOnInit(): void {}
  alert: boolean = false;
  addnewuser = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    userPassword: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  signin() {
    this.pfee.addnewuser(this.addnewuser.value).subscribe((result) => {
      this.alert = true;
      this.addnewuser.reset({});
    });
  }
}
