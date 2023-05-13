import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Review } from '../interfaces/review';
import { ReviewsService } from '../services/reviews.service';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { UserService } from 'src/app/users/services/user.service';
import { User } from 'src/app/auth/interfaces/user';

@Component({
  selector: 'review-detail',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent, RouterLink],
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {

  review!:Review;
  reviewCreator!:User

  /*review: any; ??
  address="";
  longitude=0;
  latitude=28;*/

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly reviewsService: ReviewsService,
    private readonly userService: UserService
  ) {}


  ngOnInit(): void {
    const id=(this.route.snapshot.paramMap.get('id')) ;
    this.reviewsService.getById(String(id)).subscribe(
      r => {
        this.review = r
        this.userService.getUserId(String(this.review.creator)).subscribe(
          u => this.reviewCreator = u
        );
      }
    );
  }

  navigateUserProfile()
  {
    this.router.navigate(['/users/'+this.reviewCreator._id]);
  }

  goBack() {
    this.router.navigate(['/reviews']);
  }
}
