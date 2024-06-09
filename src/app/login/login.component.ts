import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor(
    private loginService: LoginService,
    private router: Router,
    


  ) { }

  ngOnInit(): void {
    this.checklogin()
  }
  checklogin(): void {
    const usertoken = localStorage.getItem('usertoken');
    if (usertoken) {
      this.router.navigate(['/profile']);
    }
  }
  onsubmit(): void {
    const email = document.getElementById('floatingInput') as HTMLInputElement;
    const password = document.getElementById('floatingPassword') as HTMLInputElement;
    
    this.loginService.login(email.value, password.value).subscribe(
      response => {

        try {
          localStorage.setItem('usertoken', JSON.stringify(response));
          this.router.navigate(['/profile']);
        } catch (error) {
          this.handleStorageError(error);
        }
      },
      error => {
        console.error('Login failed', error);
        alert('Login failed! Please check your credentials and try again.');
      }
    );
  }

  handleStorageError(error: any): void {
    console.error('Storage error', error);
    alert('An error occurred while saving your session. You have been logged out.');
  }

}
