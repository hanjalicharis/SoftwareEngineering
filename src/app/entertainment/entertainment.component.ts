import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _services: NewsapiserviceService) { }

  entertainmentDisplay: any = [];

  ngOnInit(): void {

    this._services.entertainment().subscribe((result) => {
      this.entertainmentDisplay = result.articles;
    })
  }

}
