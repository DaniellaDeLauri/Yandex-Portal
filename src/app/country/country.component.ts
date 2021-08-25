import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterState} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  id: any;
  country: any;

  constructor(private activatedRoute: ActivatedRoute, public dataService: DataService) {
    activatedRoute.queryParams
      .subscribe(params => {
          this.id = params.x;
          console.log(1);
          console.log(params.x);
        }
      );
    this.country = dataService.getCountry(this.id);
  }

  ngOnInit(): void {
  }

}
