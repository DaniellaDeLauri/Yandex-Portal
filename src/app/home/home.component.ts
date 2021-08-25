import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portalPosition = 0;
  spinPortals = document.getElementById('spin-portals');

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
  }

  spin() {
    this.portalPosition++;
    // @ts-ignore
    this.spinPortals.style.transform = 'rotate(' + this.portalPosition * 45 + 'deg)';
  }

}
