import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add FormsModule

import { AppComponent } from './app.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [AppComponent, SeatSelectionComponent, BookingSummaryComponent, ConfirmationComponent],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
