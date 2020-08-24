import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes ('Never stop dreaming. A dream is what it takes to achieve.', 'Montgamery', new Date(2010,4,5)),
    new Quotes ('Act as if what you do makes a difference. It does.', 'William James', new Date(2006,7,8)),
    new Quotes ('Success is not final, failure is not fatal: it is the courage to continue that counts.', 'Winston Churchill', new Date(1985,2,1)),
    new Quotes ('Never bend your head. Always hold it high. Look the world straight in the eye.','Hellen Keller', new Date(2000,1,8)),
    new Quotes ('What you get by achieving your goals is not as important as what you become by achieving your goals.', 'Zig Ziglar', new Date(2009,9,4)),
    new Quotes ('Believe you can and you are halfway there.', 'Theodore Roosevelt', new Date(1937,6,2))

  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quote[index].author}?`)

      if (toDelete) {
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.isCompleteDate = new Date(quote.CompleteDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
