import { Component} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;

  constructor(
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
    this.testAuthentication();
  }

  toggleLeftMenu() {
    console.log('test');

    if (this.isActive == false) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }


  testAuthentication(): void {
    //this.authSvc.getUser()
    //  .subscribe(
    //  r => {
    //    this.userName = JSON.parse(r);
    //    this.dataSvc.setUserName(this.userName);
    //    let names = this.userName.split("\\");
    //    //debugger;
    //    this.dataSvc.getUserPermissions(names[1])
    //      .subscribe(
    //      r1 => {
    //        let permissions: Array<Permission> = JSON.parse(r1);
    //        let bAuthorized = false;
            
    //        permissions = permissions.filter(p => p.AppName == 'DTNInvImport');
    //        console.log(permissions);
    //        //debugger;
    //        for (var i = 0; i < permissions.length; i++) {
    //          if (permissions[i].PermName == 'read' || permissions[i].PermName=='write') {
    //            bAuthorized = true;
    //          }
    //        }
    //        console.log(bAuthorized);
    //        if (!bAuthorized) {
    //          this.router.navigate(['/unauthorized']);
    //        }            
    //      })
    //  },
    //  e => {
    //    console.log(e);
    //  }
    //  );

  }

}
