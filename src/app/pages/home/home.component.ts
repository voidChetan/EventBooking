import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: any []= [];
  bookingObj: any = {
    "BookingId": 0,
    "UserId": 0,
    "EventId": 0,
    "NoOfTickets": 0,
    "EventBookingMembers": [
      
    ]
  };
  eventMemebrs: any =  {
    "BookingMemberId": 0,
    "BookingId": 0,
    "Name": "",
    "Age": 0,
    "IdentityCard": "",
    "CardNo": "",
    "ContactNo": ""
  };
  constructor(private http: HttpClient){
    const localData= localStorage.getItem('eventUser');
    if(localData != null) {
       
     const user = JSON.parse(localData);
     this.bookingObj.UserId = user.userId;
    }
  }
  ngOnInit(): void {
    this.loadAllEvents();
  }
  AddMember() {
    const obj = JSON.stringify(this.eventMemebrs);
    this.eventMemebrs = {
      "BookingMemberId": 0,
      "BookingId": 0,
      "Name": "",
      "Age": 0,
      "IdentityCard": "",
      "CardNo": "",
      "ContactNo": ""
    }
    this.bookingObj.EventBookingMembers.push(JSON.parse(obj))
  }

  loadAllEvents() {
    this.http.get('https://freeapi.miniprojectideas.com/api/EventBooking/GetAllEvents').subscribe((res:any) =>{
      this.events = res.data;
    })
  }
  bookNow(event:any) {
    this.bookingObj.EventId = event.eventId;
    const model = document.getElementById('bookModel');
    if(model != null) {
      model.style.display = 'block'
    }
  }
  closeModel() {
    const model = document.getElementById('bookModel');
    if(model != null) {
      model.style.display = 'none'
    }
  }
  makeBooking() {
    this.bookingObj.NoOfTickets = this.bookingObj.EventBookingMembers.length;
    this.http.post('https://freeapi.miniprojectideas.com/api/EventBooking/bookevent',this.bookingObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Booking Success')
        this.closeModel();
      } else {
        alert(res.message)
      }
    })
  }
  
}
