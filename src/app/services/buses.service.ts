import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from './models';

@Injectable({
  providedIn: 'root'
})
export class BusesService {
  private url = 'https://btal-ride.herokuapp.com/api/admin/bus';

  constructor(private http: HttpClient) {}

  // private buses: Bus[] = [
  //   {
  //     bus_id: 1,
  //     bus_name: 'Luna',
  //     status: false,
  //     price: 200,
  //     payment: 'cod',
  //     img_url: '../../assets/images/bus5.jpg'
  //   },
  //   {
  //     bus_id: 2,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus2.jpg'
  //   },
  //   {
  //     bus_id: 3,
  //     bus_name: 'Rizal',
  //     status: true,
  //     price: 300,
  //     payment: 'paypal',
  //     img_url: '../../assets/images/bus4.jpg'
  //   }
  // ];

  currentBus:any;

  getBuses() {
    return this.http.get(this.url);

    // return this.buses
  }

  updateBus() {
    alert('update');
  }

  deleteBus() {
    alert('delete');
  }
}
