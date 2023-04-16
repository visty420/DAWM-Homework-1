import { Component } from '@angular/core';

@Component({
  selector: 'app-services-panel',
  templateUrl: './services-panel.component.html',
  styleUrls: ['./services-panel.component.scss']
})
export class ServicesPanelComponent {
  services = [
    { title: 'TRAVEL', description: 'Discover new destinations and create unforgettable memories with our travel packages.' },
    { title: 'TRAVEL ARRANGEMENTS', description: 'Leave the details to us. We will take care of your travel arrangements.' },
    { title: 'OUR PROFFESIONAL GUIDE', description: 'Explore with confidence, knowing our professional guide will lead the way.' },
    { title: 'ACTIVITIES', description: 'Experience the thrill of adventure with our wide range of exciting activities.' }
  ];
}
