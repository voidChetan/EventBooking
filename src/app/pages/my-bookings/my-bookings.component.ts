import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
 bookings:any[]=[];
  constructor(private http: HttpClient){
    const localData= localStorage.getItem('eventUser');
    if(localData != null) { 
     const user = JSON.parse(localData);
     this.getMyBpooking(user.userId)
    }
  }

  getMyBpooking(userid:number) {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetBookingsByCustomer?customerId='+userid).subscribe((res:any)=>{
    this.bookings = res.data;
    })
  }
}
