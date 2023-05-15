import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../interfaces/review';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { ReviewFilterPipe } from '../pipes/review-filter.pipe';
import { ReviewsService } from '../services/reviews.service';
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/app/auth/interfaces/user';


@Component({
  selector: 'review-page',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReviewFormComponent,
    ReviewCardComponent,
    ReviewFilterPipe,
    RouterLink],
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

  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly userService: UserService) {}

  ngOnInit(): void {
    this.reviewsService.getAll().subscribe(
      reviews => {
        this.reviews = reviews.filter((r) => r.public).map((review) => {
          const creatorId = String(review.creator);
          this.userService.getUserId(creatorId).subscribe((user) => {
            review.user! = user;
          });
          return review;
        });
      }
    );
  }

  deleteReview(rev: Review) {
    this.reviews = this.reviews.filter((r) => r !== rev);
  }
}
