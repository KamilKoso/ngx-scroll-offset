import { Directive, Output, Input, HostListener, EventEmitter } from "@angular/core";

@Directive({
  selector: "[scrollOffset]",
})
export class ScrollOffsetDirective {
  @Output() scrollOffset = new EventEmitter<number>();
  @Input() emitWhenAbove?: number;
  @Input() emitWhenUnder?: number;

  @HostListener("scroll", ["$event"])
  onElementScrollChange(event: any): void {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    const percent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);

    if (this.emitWhenAbove && this.emitWhenAbove <= percent ||
        this.emitWhenUnder && this.emitWhenUnder >= percent ||
        !this.emitWhenAbove && !this.emitWhenUnder) {
      this.scrollOffset.emit(percent);
    }
  }
}
