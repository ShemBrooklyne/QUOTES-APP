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

  constructor() { }

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // Upvotes and Down nvotes functionality
  upVotes: number = 0;
  downVotes: number = 0;

  likeButtonClick(){
    this.upVotes++;
  }

  dislikeButtonClick(){
    this.downVotes++;
  }

  ngOnInit(): void {
  }

}










