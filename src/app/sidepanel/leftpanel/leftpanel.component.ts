import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css'],
  
})
export class LeftpanelComponent implements OnInit {

  message!: boolean;
  subscription!: Subscription;

  constructor(private data: AppService) { }
   



  

  ngOnInit(): void {


    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

 
  
  }


