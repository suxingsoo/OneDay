import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  buses: Bus[];

  constructor(
    private busesService: BusesService
  ) { }

  ngOnInit(): void {
    this.getBuses()
  }
  getBuses() {
    this.busesService.getBuses().subscribe(buses => {
      this.buses = buses as Bus[];
      console.log(buses);
    })
  }
}
