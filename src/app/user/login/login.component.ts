import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authSvc: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(formValues) {
    this.authSvc.loginUser(formValues.email, formValues.password);
    this.router.navigate(['vehiclecard']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
