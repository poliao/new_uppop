import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  typeUser: any;
 


  constructor(
    private router: Router,

  ) { }


  ngOnInit(): void {
    this.checktypeuser()
  }



  checktypeuser(){
    const usertoken = localStorage.getItem('usertoken');
    if (usertoken) {
      const tokenPayload = JSON.parse(atob(usertoken.split('.')[1]));
      this.typeUser = tokenPayload.tyuser;
      if (this.typeUser === 'admin') {
        
      }else{
        alert('คุณไม่มีสิทธิ์ใช้งานหน้านี้')
        this.router.navigate(['/'])
      }
    }else{
      alert('คุณไม่มีสิทธิ์ใช้งานหน้านี้')
      this.router.navigate(['/'])
    }
  }
}
