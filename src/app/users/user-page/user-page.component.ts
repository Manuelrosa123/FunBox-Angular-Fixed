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
  //latitude=0;
  //longitude=0;

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id=(this.route.snapshot.paramMap.get('id'));
    const currentUrl = this.location.path();
    if (currentUrl!="/users/me")
    {
      this.userService.getUserId(String(id)).subscribe(
        u => this.user = u
      );
    }
  }
}
