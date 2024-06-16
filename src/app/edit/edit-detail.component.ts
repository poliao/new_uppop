import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css'] // เปลี่ยนจาก styleUrl เป็น styleUrls
})
export class EditDetailComponent {

  selectedFile: File | null = null;
  urlimg: any;
  showimg: boolean = false;
  closeimg: boolean = true;

  constructor(
    private router: Router,
    private editService: EditService
  ) { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.previewImage(file);
      this.showimg = true;
      this.closeimg = false;
    }
  }
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.urlimg = e.target.result;
      console.log(this.urlimg);
    };
    reader.readAsDataURL(file);
  }
  onUpload(): void {
    if (this.selectedFile) {
      this.editService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log('Upload successful:', response);
          this.urlimg = response.files[0].fileUrl;
          console.log(this.urlimg);
          
        },
        error => {
          console.error('Upload error:', error);
        }
      );
    } else {
      console.error('No file selected');
    }
  }
}
