import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  URL: string = "https://se-backend-hanjalic.herokuapp.com/api/users/register/";

  constructor() { }

  ngOnInit(): void {
  }

}
