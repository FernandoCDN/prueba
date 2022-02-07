import { Component, OnInit } from '@angular/core';
import { CreditCardsService } from './services/credit-cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'carvajalFrontend';
  Data: any;
  clientIdentification: any;

  constructor(public creditCardsService: CreditCardsService){}

  ngOnInit()
  {
    this.creditCardsService.getAllCreditCards().subscribe(data => 
      {
        this.Data = data;
        console.log(this.Data);
      });
  }

  search()
  {
    this.creditCardsService.getCreditCards(this.clientIdentification).subscribe(data => 
      {
        this.Data = Array.of(data);
        console.log(this.Data);
      });
  }

}
