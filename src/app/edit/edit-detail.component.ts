import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from './edit.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  form: FormGroup;

  constructor(
    private router: Router,
    private editService: EditService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      nameActivity: [null],
      detail: [null],
      location: [null],
      category: ['ม.พะเยา'],
      date_Start: [null],
      date_end: [null],
      time_Start: [null],
      time_end: [null],
      urlimg: [null]
    });
  }

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
          this.urlimg = response.files[0].fileUrl;
          this.form.patchValue({ urlimg: this.urlimg });
          this.editService.save(this.form.value).subscribe(
            () => {
              this.router.navigate(['/']);
            },
            error => {
              console.error('Upload error:', error);
            }
          );
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
