import { Directive, Output, Input, HostListener, EventEmitter } from "@angular/core";

@Directive({
  selector: "[windowScrollOffset]",
})
export class WindowScrollOffsetDirective {
  @Output() windowScrollOffset = new EventEmitter<number>();
  @Input() emitWhenAbove?: number;
  @Input() emitWhenUnder?: number;

  @HostListener("window:scroll", ["$event"])
  onWindowScrollChange(): void {
    const scrollTop = document.documentElement.scrollTop;;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const percent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    if (this.emitWhenAbove && this.emitWhenAbove <= percent ) {
      this.windowScrollOffset.emit(percent);
    } else if (this.emitWhenUnder && this.emitWhenUnder >= percent ) {
      this.windowScrollOffset.emit(percent);
    } else if(!this.emitWhenAbove && !this.emitWhenUnder) {
      this.windowScrollOffset.emit(percent);
    }
  }
}
