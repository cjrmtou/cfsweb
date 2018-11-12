import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  @ViewChild('InvPH') InvPH: ElementRef;
  @ViewChild('AcctPH') AcctPH: ElementRef;
  @ViewChild('InvPTA') invPTA: ElementRef;
  @ViewChild('AcctPTA') acctPTA: ElementRef;
  @ViewChild('InvIcon') invIcon: ElementRef;
  @ViewChild('AcctIcon') acctIcon: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeBgColor(div: any) {
    //debugger;
    if (div.innerText == 'Invoice Inquiries & Reports') {
      this.InvPH.nativeElement.BgColor = '#202020';
      this.invPTA.nativeElement.FontColor = 'white';
      this.invIcon.nativeElement.Color = 'white';
      this.AcctPH.nativeElement.BgColor = "";
      this.acctPTA.nativeElement.FontColor = 'black';
      this.acctIcon.nativeElement.Color = 'black';
    } else if (div.innerText == 'Account Maintenance') {      
      this.AcctPH.nativeElement.BgColor = "#202020";
      this.acctPTA.nativeElement.FontColor = 'white';
      this.acctIcon.nativeElement.Color = 'white';
      this.InvPH.nativeElement.BgColor = "";
      this.invPTA.nativeElement.FontColor = 'black';
      this.invIcon.nativeElement.Color = 'black';
    }
    
  }

}
