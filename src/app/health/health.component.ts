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


  ngOnInit(): void {
    this._services.health().subscribe((result) => {
      this.healthDisplay = result.articles;
    })
  }

}
