import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../interfaces/review';
import { ReviewsService } from '../services/reviews.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'review-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  @Input() review!: Review;

  dateReview!:string;
  dateLaunchment!:string;

  ngOnInit() {
    this.dateLaunchment= this.transformDate(this.review.launchDate);
    this.dateReview = this.transformDate(this.review.reviewDate);
  }

  transformDate(date:Date):string{
    const myDate=String(date);
    return myDate.substring(0,10);
  }
}
