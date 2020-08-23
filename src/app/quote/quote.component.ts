import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes (1, 'Build in silence and let your success make the noise for you','Brooklyne', new Date(2020,8,21)),
    new Quotes (2, 'There is always light at the end of the tunnel. Never lose focus!', 'Shem', new Date(2020,4,12)),
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete) {
        this.quote.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
