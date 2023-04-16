import { Injectable } from '@angular/core';
import { City } from '../models/cities';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  constructor() {}

  cities: City[]=[
    { name: 'New York', image: '/assets/images/ny.jpg', description: 'Iconic city with diverse culture and skyscrapers.' },
    { name: 'Paris', image: '/assets/images/paris.jpg', description: 'Romantic city with art, fashion, and culinary delights.'},
    { name: 'Tokyo', image: '/assets/images/tokyo.jpg', description: 'Vibrant city with high-tech innovations and rich traditions.'},
    { name: 'Brasov', image: '/assets/images/bv.jpg', description: 'Quaint Transylvanian city with medieval charm and stunning nature.' },
    { name: 'London', image: '/assets/images/lon.jpg', description: 'Cosmopolitan city with history, culture, and royal attractions.'},
    { name: 'Verona', image: '/assets/images/ver.jpg', description: 'Charming city of love with Shakespearean heritage and stunning architecture.'}
  ];

  getCities(){
    return this.cities
  };

}
