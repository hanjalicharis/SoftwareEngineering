import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  ngOnInit(): void {

    this._services.topHeading().subscribe((result) => {
      console.log(result);
    })

}
}