import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
// import { BookingsService } from 'src/app/services/bookings.service';
import { BusesService  } from '../../services/buses.service'
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  buses:  Bus[];

  constructor(
    private busesService: BusesService,
    private router :Router
    ) { }

  ngOnInit(): void {
    this.getBuses()
  }

  getBuses(){
    this.busesService. getBuses().subscribe(buses => {
      this.buses = buses as Bus[];
      console.log(buses);
    })
  }
  update(id){
    this.router.navigate(['/admin/update-bus/'+id]);
  }
  addBus(){
    this.router.navigate(['/admin/add-bus']);
  }
  delete(id){
    axios.delete("https://btal-ride.herokuapp.com/api/admin/bus"+id).then(res => {
      this.router.navigate(['/admin/buses']);
    }).catch(err => {
      console.log(err)
    })
  }

}
