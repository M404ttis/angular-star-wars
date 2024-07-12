import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

//plan is to use this to conditionally add or remove a CSS class
//to film-card elemnets when
//the user input matches the films episode_id
export class HighlightDirective implements OnInit{
  @Input() appHighlight: boolean = false; // provide default value so the "no initializer Error is solved "

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if(this.appHighlight){
      // .highlight is set in styles.css
      // basically just turns bg to yellow
      this.el.nativeElement.classList.add('highlight');
    } else {
      this.el.nativeElement.classList.remove('highlight');
    }
  }

}
