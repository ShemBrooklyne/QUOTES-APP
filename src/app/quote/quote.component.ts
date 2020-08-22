import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes (1, 'Build in silence and let your success make the noise for you','Brooklyne'),
    new Quotes (2, 'There is always light at the end of the tunnel. Never lose focus!', 'Shem'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
