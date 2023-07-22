import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Group1LibAModule {
  constructor() {
  }

  ha() {
    // this line adds to mains.js another 30kb
    const promise = import('@xx/group1/libB');
  }
}
