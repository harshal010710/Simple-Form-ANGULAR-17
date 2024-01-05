import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formss';

  public userData: any = {};

  getData(val : NgForm)
  {
    this.userData = val;
  }
}
