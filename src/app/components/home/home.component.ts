import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  currentCode = '';

  currentInput = '';
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}

  constructor() { }

  ngOnInit(): void {
   
  }
  onCountryChange(event)
  {
    console.log(event);
  }

  hasError(event) {
    console.log(event);
  }
  

  telInputObject(evnt) {

  }
  
}
