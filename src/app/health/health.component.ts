import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _services: NewsapiserviceService) { }

  healthDisplay: any = [];
  coronaDisplay: any = [];


  ngOnInit(): void {
    this._services.health().subscribe((result) => {
      this.healthDisplay = result.articles;
    })

    this._services.coronaCounter().subscribe((result) => {
      this.coronaDisplay = result.Global;
    })
  }

}
