import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private homeService: HomeService, ) { }
  cards = [
    {
      urlimg: '',
      detail: '',
    },
  ];
  ngOnInit() {
    this.test();
  }

  test() {
    this.homeService.getActivities().subscribe(Response => {
      console.log(Response);
      this.cards = Response;
    });
  }
}
