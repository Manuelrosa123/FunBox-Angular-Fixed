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
  @Output() deleted = new EventEmitter<void>();
  @Input() review!: Review;

  //address = '';
  //latitude= 37;
  //longitude= -0.5;

  dateReview!:string;
  dateLauchment!:string;

  ngOnInit() {
    this.dateLauchment= this.transformDate(this.review.launchDate);
    this.dateReview = this.transformDate(this.review.reviewDate);
    /*navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
    });*/
  }

  transformDate(date:Date):string{
    const myDate=String(date);
    return myDate.substring(0,10);
  }

  constructor(private readonly ReviewsService: ReviewsService) {}

  delete() {
    this.ReviewsService.delete(this.review._id as string).subscribe(
      () => this.deleted.emit()
    );
  }
  wishList() { //ok
    console.log(Error);
  }
  edit() {
    // this.reviewsService.edit(this.Review.id as number).subscribe(
    //   () => this..emit()
    // );
  }
}
