import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  
})
export class NavMenuComponent {

  constructor(private data: AppService) { }


  message!: boolean;
  subscription!: Subscription;
  
  isExpanded = false;
   public navMenu=true;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  // menuicon(){
  //   this.navMenu = !this.navMenu;
  //   console.log("working" + this.navMenu)
    
  // }

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  newMessage() {
    // this.data.changeMessage("Hello from Sibling")
    this.message = !this.message;
    console.log("working" + this.message)
    
  }

  // public isExpand:boolean=false;
  // title = 'AngLearnApp';

  // public slidebarExpand(){
  //   this.isExpand = !this.isExpand;
  // }
}
