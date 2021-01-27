import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  buses: Bus[];

  constructor(
    private busesService: BusesService
  ) { }

  ngOnInit(): void {
    this.getBuses()
  }
  getBuses() {
    //backend side
    // this.busesService.getBuses().subscribe(buses => {
    //   this.buses = buses as Bus[];
    //   console.log(buses);
    // })
  }
}
