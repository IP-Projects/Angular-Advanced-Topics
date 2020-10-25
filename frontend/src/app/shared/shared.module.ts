import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [FontAwesomeModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    // library.addIcons(faCoffee);
    library.addIconPacks(fas, far);
  }
}
