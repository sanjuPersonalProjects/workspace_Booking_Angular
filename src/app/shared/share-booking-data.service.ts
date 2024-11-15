import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareBookingDataService {

  private messageSubject = new BehaviorSubject<any>(null); // Initialize with a default value, such as null

  messageObservable = this.messageSubject.asObservable();

  constructor() { }

  sendMessage(message: any) {
    this.messageSubject.next(message);
  }
}
