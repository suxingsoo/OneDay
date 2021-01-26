import { Component, OnInit } from '@angular/core';
import { Bus } from '../../services/models';
import { BusesService  } from '../../services/buses.service'
import { Router } from '@angular/router';
import axios from 'axios';
// import {MatDialog} from '@angular/material/'


@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  buses:  Bus[];

  constructor(
    private busesService: BusesService,
    private router :Router,
    // public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getBuses()
  }
hidden = false;
  deleteMsg(){
this.hidden = !this.hidden;
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
      this.router.navigate(['/admin/dashboard']);
    }).catch(err => {
      console.log(err)
    })
  }

  // delDialog(){
  //   const delText = this.dialog.open(BusDialog)
  // }
}

// @Component({
//   selector: 'BusDialog',
//   templateUrl: 'busdialog.component.html'
// })

// export class BusDialog{}
