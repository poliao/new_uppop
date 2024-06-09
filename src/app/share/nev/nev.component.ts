import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nev',
  templateUrl: './nev.component.html',
  styleUrl: './nev.component.css'
})
export class NevComponent {
  @Input() home: string = 'assets/navbar/home.svg';
  @Input() calendar: string = 'assets/navbar/calendar.svg';
  @Input() following: string = 'assets/navbar/star.svg';

  imagesrc: string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  profileimg: string = 'profile-img';
  fontcolor: string = 'font-color';
  storeUserId: string = '123'; // Replace with the actual user ID
  storeTypeUser: string = 'Admin'; // Replace with actual user type logic
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.checkType(this.storeTypeUser);
  }

  checkType(typeUser: string): void {
    this.isAdmin = typeUser === 'Admin';
  }
}
