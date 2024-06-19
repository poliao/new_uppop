import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { PlaceholderModule, GridModule, UtilitiesModule } from '@coreui/angular';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlaceholderModule,
    GridModule,
    UtilitiesModule
  ],
  providers: [
    HomeService,
    HomeComponent
  ],
})
export class HomeModule { }
