import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() author: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  // isComplete: Quotes;

  constructor() { }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  ngOnInit(): void {
  }

}
