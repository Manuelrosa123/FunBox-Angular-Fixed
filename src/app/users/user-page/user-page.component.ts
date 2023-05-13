import { Component, OnInit } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { User } from 'src/app/auth/interfaces/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
//import { ArcgisMapComponent } from 'src/app/reviews/maps/arcgis-map/arcgis-map.component';
//import { ArcgisMarkerDirective } from 'src/app/reviews/maps/arcgis-marker/arcgis-marker.directive';


@Component({
  selector: 'fs-user-page',
  standalone: true,
  imports: [CommonModule, RouterLink/*, ArcgisMapComponent, ArcgisMarkerDirective*/],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user!: User;
  me:boolean=false;
  //latitude=0;
  //longitude=0;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    const id=(this.route.snapshot.paramMap.get('id'));
    const currentUrl = this.location.path();

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

/*
  const userId = JSON.parse(localStorage.getItem('user'))._id; // get the user ID from localStorage
  const userReviews = reviews.filter((review) => review.creator === userId); // filter the reviews array to only include the user's reviews

  const typeCounts = userReviews.reduce((counts, review) => {
  const type = review.type;
  counts[type] = counts[type] ? counts[type] + 1 : 1; // increment the count for this type
  return counts;
}, {});

const chartConfig = {
  type: 'bar',
  data: {
    labels: Object.keys(typeCounts),
    datasets: [{
      label: 'Number of reviews',
      data: Object.values(typeCounts),
      backgroundColor: ['red', 'blue', 'green'] // set the color for each type
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

new Chart('myChart', chartConfig);


// esto es para el html
//<canvas id="myChart"></canvas>

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  @ViewChild('myChartCanvas') myChartCanvas!: ElementRef;

  reviews: Review[] = []; // assuming you have an array of reviews

  ngOnInit(): void {
    // code to get the data for the chart
    const data = this.getDataForChart();

    // create the chart
    const chart = new Chart(this.myChartCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Reviews by type',
          data: data.values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] // add more colors as needed
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  getDataForChart() {
    // code to get the data for the chart
    const data = {
      labels: ['Movies', 'Video Games', 'Books'],
      values: [0, 0, 0]
    };

    this.reviews.forEach(review => {
      switch (review.type) {
        case 'movies':
          data.values[0]++;
          break;
        case 'video games':
          data.values[1]++;
          break;
        case 'books':
          data.values[2]++;
          break;
        default:
          break;
      }
    });

    return data;
  }
}

//html
<canvas #myChartCanvas></canvas>
*/
