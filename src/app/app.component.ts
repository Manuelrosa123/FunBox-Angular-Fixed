import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

@Component({
  selector: 'fb-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard]
})
export class AppComponent {
  title = 'FunBox';
}
