import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {assign} from 'lodash';

@NgModule({
  imports: [CommonModule],
})
export class Group1LibBModule {
  constructor() {
    console.log(assign)
  }

}
