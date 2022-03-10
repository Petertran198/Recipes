import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
@Directive({
  selector: '[app-dropdown]',
})
export class DropDownDirective {
  // //Solution one using ELementRef and renderer
  // open: boolean = false;
  // constructor(private el: ElementRef, private renderer: Renderer2) {}
  // @HostListener('click', ['$event.target'])
  // onClick() {
  //   this.open = !this.open;
  //   if (this.open === true) {
  //     this.renderer.addClass(this.el.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.el.nativeElement, 'open');
  //   }
  // }

  //-------------------------------------------------------------------------------------
  // Solution2
  //HostBinding binds to properties
  //It is going to the class properties and adding a class of open depending of true or false
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
