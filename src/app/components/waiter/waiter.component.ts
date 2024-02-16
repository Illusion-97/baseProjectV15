import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationSkipped, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {

  navigating: boolean = false

  constructor(router: Router) {
    // Surveillance de evenements de routage dans l'application
    router.events.subscribe({
      next: event => {
        switch (true) {
          case event instanceof NavigationStart: this.navigating = true
            break;
          case event instanceof NavigationEnd :
          case event instanceof NavigationCancel :
          case event instanceof NavigationError :
          case event instanceof NavigationSkipped : this.navigating = false
            break;
        }
      }
    })
  }
}
