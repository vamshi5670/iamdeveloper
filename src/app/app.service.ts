import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private messageSource = new BehaviorSubject<boolean>(true);
  currentMessage = this.messageSource.asObservable();

  constructor() { }


  // changeMessage(message: boolean) {
  //   // this.messageSource.next(message)
  // }
}
