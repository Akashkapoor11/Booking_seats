import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
