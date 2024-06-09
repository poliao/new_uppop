import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() home: string = 'https://img5.pic.in.th/file/secure-sv1/homepng.png';
  @Input() calendar: string = 'https://img2.pic.in.th/pic/calenderpng.png';
  @Input() following: string = 'https://img5.pic.in.th/file/secure-sv1/starpng.png';

  imagesrc: string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  profileimg: string = 'profile-img';
  fontcolor: string = 'font-color';
  storeUserId: string = '123'; // Replace with the actual user ID
  storeTypeUser: string = 'null'; // Replace with actual user type logic
  isAdmin: boolean = false;
  typeUser: any;
  ngOnInit(): void {
    this.checkType();
  }

  checkType(): void {
    const usertoken = localStorage.getItem('usertoken');
    if (usertoken) {
      const tokenPayload = JSON.parse(atob(usertoken.split('.')[1]));
      this.typeUser = tokenPayload.tyuser;
      if (this.typeUser === 'admin') {
        this.isAdmin = true;
      }
    }
  }
}