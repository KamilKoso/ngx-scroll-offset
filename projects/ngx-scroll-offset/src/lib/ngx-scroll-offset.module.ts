import { NgModule } from '@angular/core';
import { ScrollOffsetDirective } from './scroll-offset.directive';
import { WindowScrollOffsetDirective } from './window-scroll-offset.directive';



@NgModule({
  declarations: [
    ScrollOffsetDirective,
    WindowScrollOffsetDirective
  ],
  imports: [
  ],
  exports: [
    ScrollOffsetDirective,
    WindowScrollOffsetDirective
  ]
})
export class NgxScrollOffsetModule { }
