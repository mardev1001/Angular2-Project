import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn())
    {
      this.isLoggedIn = true;
    }
  }

}
