import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  seatRequest: number = 0; // Number of seats requested
  seats: any[] = []; // Array representing seat rows and their status
  bookedSeats: number[] = []; // Array to keep track of booked seats

  constructor() {
    this.initializeSeats();
  }

  // Initialize seats: 7 seats per row, last row with 3 seats
  initializeSeats() {
    let seatNumber = 1;
    for (let i = 0; i < 12; i++) {
      const row = [];
      for (let j = 0; j < (i === 11 ? 3 : 7); j++) {
        row.push({ number: seatNumber, booked: false });
        seatNumber++;
      }
      this.seats.push(row);
    }
  }

  // Function to book seats
  bookSeats() {
    const seatsToBook = this.seatRequest;

    if (seatsToBook <= 0 || seatsToBook > 7) {
      alert('Please request between 1 and 7 seats.');
      return;
    }

    const availableSeats = this.findAvailableSeats(seatsToBook);

    if (availableSeats.length === seatsToBook) {
      availableSeats.forEach((seat) => {
        seat.booked = true;
        this.bookedSeats.push(seat.number);
      });
    } else {
      alert('Not enough adjacent seats available.');
    }
  }

  // Function to find the required number of available seats
  findAvailableSeats(seatsToBook: number) {
    let availableSeats = [];

    // First, try to find seats in one row
    for (let row of this.seats) {
      let freeSeats = row.filter((seat) => !seat.booked);
      if (freeSeats.length >= seatsToBook) {
        availableSeats = freeSeats.slice(0, seatsToBook);
        return availableSeats;
      }
    }

    // If not enough seats in one row, try to find nearby seats
    for (let row of this.seats) {
      for (let seat of row) {
        if (!seat.booked) availableSeats.push(seat);
        if (availableSeats.length === seatsToBook) return availableSeats;
      }
    }
    return availableSeats;
  }
}
