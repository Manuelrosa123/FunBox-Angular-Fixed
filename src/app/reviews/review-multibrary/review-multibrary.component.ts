import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../interfaces/review';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewFilterPipe } from '../pipes/review-filter.pipe';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'review-multibrary',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReviewFormComponent,
    ReviewCardComponent,
    ReviewFilterPipe,],
  templateUrl: './review-multibrary.component.html',
  styleUrls: ['./review-multibrary.component.css']
})
export class ReviewMultibraryComponent {

  reviews: Review[] = [];
  search = '';
  type="Videogame"
  order="title"

  types=[
    {value:"", label:"All"},
    {value:'Videogame',label:"Videogame"},
    {value:'Series',label:"Series"},
    {value:'Film',label:"Film"},
    {value:'Anime',label:"Anime"},
    {value: "Manga", label: "Manga"},
    {value: "Book", label: "Book"}];

  typeOfOrders=[
    {value:"title", label:"Title"},
    {value:"launchDate", label:"Launch"},
    {value:"reviewDate", label:"Newest"}
  ];

  constructor(private readonly reviewsService: ReviewsService) {}

  myReviewsOnly(reviews:Review[])
  {
    return reviews.filter((r)=>r.creator===JSON.parse(localStorage.getItem("user")!)._id) //this returns the reviews that are yours
  }

  ngOnInit(): void {
    this.reviewsService.getAll().subscribe(
      reviews => {
        const myReviews = this.myReviewsOnly(reviews);
        this.reviews = myReviews;
      }
    );
  }

  deleteReview(rev: Review) {
    this.reviews = this.reviews.filter((r) => r !== rev);
  }
}
