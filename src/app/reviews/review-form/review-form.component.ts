import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Route} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CanDeactivateComponent } from 'src/app/guards/leave-page.guard';
import { Review } from '../interfaces/review';
import { ReviewsService } from '../services/reviews.service';
import { StarRatingComponent } from 'src/app/reviews/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'review-form',
  standalone: true,
  imports: [CommonModule, FormsModule, StarRatingComponent,HttpClientModule],
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit{
  newReview!: Review;
  saved = false;
  @ViewChild('reviewForm') reviewForm!: NgForm;

  types=[
    {value:'Videogame',label:"Videogame"},
    {value:'Series',label:"Series"},
    {value:'Film',label:"Film"},
    {value:'Anime',label:"Anime"},
    {value: "Manga", label: "Manga"},
    {value: "Book", label: "Book"}];


  constructor(
    private readonly route: ActivatedRoute,
    private readonly reviewsService: ReviewsService,
    private readonly router: Router
  ) {/*this.newReview = this.resetReview();*/}

  ngOnInit(): void {

    this.newReview = this.resetReview();
    /*this.route.data.subscribe((data) => (this.newReview = data['review']));

    this.newReview.title = this.newReview.title;
    this.newReview.image = this.newReview.image;// The image is info that could come from external API
    this.newReview.likes = this.newReview.likes;
    this.newReview.launchDate = this.newReview.launchDate;//launchDate is info that could come from external API
    this.newReview.reviewDate = this.newReview.reviewDate;
    this.newReview.description = this.newReview.description;
    if(this.newReview.duration != ''){//Duration is/can be info that could come from external API
      this.newReview.duration = this.newReview.duration;
    }
    if(this.newReview.pages != 0){ //Duration is/can info that could come from external API
      this.newReview.pages = this.newReview.pages;
    }*/
  }

  canDeactivate() {
    return this.saved || this.reviewForm.pristine || confirm("Do you really want to leave?. Changes will be lost");
  }

  setRating(newRating: number) {
    this.newReview.stars = newRating;
  }

  resetReview():Review{
    return {
      title: '',
      image: '',
      description: '',
      type:'Videogame', //prueba (que ya va bien)
      launchDate: new Date("2023-05-05"),
      reviewDate: new Date("2023-05-05"),
      likes: 0,
      stars: 0,
      duration:0,
      creator:"645e7444b2f9a5c184f50e3b",
      //address: ''  //???
      pages:0,
      mine:true,
      chapters:0
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    console.log(this.newReview);
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', () => {
      this.newReview.image = reader.result as string;
    });
  }


  addReview() {
    this.reviewsService.create(this.newReview).subscribe({
      next: () => {
        this.saved = true;
    },
      error: (error) => console.error(error),
    });
    this.router.navigate(['/reviews']);
  }


  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
      [validClass]: ngModel.touched && ngModel.valid,
      [errorClass]: ngModel.touched && ngModel.invalid,
    };
  }
}
