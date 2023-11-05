import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingsComponent } from './pages/my-bookings/my-bookings.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventBookingsComponent } from './pages/event-bookings/event-bookings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBookingsComponent,
    NewEventComponent,
    EventListComponent,
    EventBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
