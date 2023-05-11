import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../interfaces/review';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewFilterPipe } from '../pipes/review-filter.pipe';
import { ReviewsService } from '../services/reviews.service';


@Component({
  selector: 'review-page',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReviewFormComponent,
    ReviewCardComponent,
    ReviewFilterPipe,],
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit{
  reviews: Review[] = [];
  //onlyFriends = false;
  search = '';
  type="Videogame"

  types=[
    {value:"", label:"All"},
    {value:'Videogame',label:"Videogame"},
    {value:'Series',label:"Series"},
    {value:'Film',label:"Film"},
    {value:'Anime',label:"Anime"},
    {value: "Manga", label: "Manga"},
    {value: "Book", label: "Book"}];

  constructor(private readonly reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.getAll().subscribe(
      reviews => this.reviews = reviews
    );
  }

  deleteReview(rev: Review) {
    this.reviews = this.reviews.filter((r) => r !== rev);
  }
}
