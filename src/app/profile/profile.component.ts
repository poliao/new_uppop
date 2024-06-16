import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logouts = false;
  logins = false;
  coverimg: string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  imagesrc: string = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';
  firstname: any;
  lastname: any;
  username: any;
  position: any;
  major: any;
  email: any;
  typeuser: any;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.patchValue();
  }

  logout(): void {
    // Perform logout logic
    console.log('User logged out');
    localStorage.removeItem('usertoken');
    this.firstname = null;
    this.lastname = null;
    this.username = null;
    this.major = null;
    this.email = null;
    this.typeuser = null;
    window.location.reload();
    
  }

  patchValue(): void {
    const usertoken = localStorage.getItem('usertoken');
    if (usertoken) {
      this.logouts = true;
      const tokenPayload = JSON.parse(atob(usertoken.split('.')[1]));
      this.firstname = tokenPayload.firstname;
      this.lastname = tokenPayload.lastname;
      this.username = tokenPayload.username;
      this.major = tokenPayload.faculty;
      this.email = tokenPayload.email;
      this.typeuser = tokenPayload.tyuser;
     
    } else {this.logins = true;
      // Handle the case where the token is not available
    }
  }

}
