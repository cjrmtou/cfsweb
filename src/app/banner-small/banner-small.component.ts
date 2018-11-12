import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-small',
  templateUrl: './banner-small.component.html',
  styleUrls: ['./banner-small.component.css']
})
export class BannerSmallComponent implements OnInit {

  @Output() childToggle = new EventEmitter<string>();

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  childToggleLeftMenu() {
    this.childToggle.emit('toggle');
  }
}
