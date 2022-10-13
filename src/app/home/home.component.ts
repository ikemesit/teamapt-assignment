import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('#section2')
  // section2!: ElementRef<HTMLDivElement>;
  section2!: HTMLElement;

  observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.5,
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  onIntersection(
    e: IntersectionObserverEntry[],
    elem: any,
    animationClass: string
  ): void {
    if (e[0].isIntersecting) {
      console.log(e);
      this.renderer.addClass(elem, animationClass);
    }
  }
}
