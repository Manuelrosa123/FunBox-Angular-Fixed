import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { User } from 'src/app/auth/interfaces/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Chart from 'chart.js/auto';
import { ReviewsService } from 'src/app/reviews/services/reviews.service';
import { Review } from 'src/app/reviews/interfaces/review';
import { TypeCounts } from 'src/app/reviews/interfaces/typeCounts';


@Component({
  selector: 'fs-user-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user!: User;
  me:boolean=false;
  @ViewChild('myChartCanvas') myChartCanvas!: ElementRef;
  reviews!:Review[];
  typeCounts!:TypeCounts;

  data = {
      labels: ['Videogame', 'Anime', 'Books', 'Series', 'Film', 'Manga'],
      values: [0, 0, 0, 0, 0, 0]
    };

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private location: Location,
    private readonly reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    const id=(this.route.snapshot.paramMap.get('id'));
    const currentUrl = this.location.path();

    this.reviewsService.getAll().subscribe(
      reviews => {
        const myReviews = reviews.filter((r)=>r.creator===id) //reviews of the current user
        this.reviews = myReviews;
        if ((currentUrl=="/users/me"))
        this.reviews=reviews.filter((r)=>r.creator===JSON.parse(localStorage.getItem("user")!)._id) //this is in case we are accessing by /me instead of an ID

        this.typeCounts = this.reviews.reduce((counts:TypeCounts, review) => {
          const type = review.type;
          counts[type] = counts[type] ? counts[type] + 1 : 1; // increment the count for this type
          return counts;
          }, {});
        console.log(this.typeCounts);

        this.reviews.forEach(review => {
          switch (review.type) {
            case 'Videogame':
              this.data.values[0]++;
              break;
            case 'Anime':
              this.data.values[1]++;
              break;
            case 'Book':
              this.data.values[2]++;
              break;
            case 'Series':
              this.data.values[3]++;
              break;
            case 'Film':
              this.data.values[4]++;
              break;
            case 'Manga':
              this.data.values[5]++;
              break;
            default:
              break;
          }
        });

        setTimeout(() => { //this needs a timeout to charge properly
          const chart: Chart<"pie", number[], string> = new Chart(this.myChartCanvas.nativeElement, {
            type: 'pie',
            data: {
              labels: this.data.labels,
              datasets: [{
                label: 'Reviews by type',
                data: this.data.values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', "yellow", "red", "blue"]
              }]
            },
            options: {
              responsive: true
            }
          });

          chart.update();
        }, 500);
      }
    );

    if (currentUrl!="/users/me"){
      this.userService.getUserId(String(id)).subscribe(
        u => this.user = u
      );
      if((String(id))===JSON.parse(localStorage.getItem("user")!)._id) this.me=true; //just in case it's you but you didnt access by the button of /me
    }
    else{
      this.me=true
      this.userService.getUserId(JSON.parse(localStorage.getItem("user")!)._id).subscribe(
        u => this.user = u
      );
    }
  }
}

