import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service'

@Component({
  selector: 'app-corona-virus',
  templateUrl: './corona-virus.component.html',
  styleUrls: ['./corona-virus.component.css']
})
export class CoronaVirusComponent implements OnInit {

  constructor(private _services: NewsapiserviceService) { }

  coronaDisplay: any = [];


  ngOnInit(): void {
    this._services.coronaCounter().subscribe((result) => {
      this.coronaDisplay = result;
      console.log(this.coronaDisplay);
    })
  }

}
