import {
  AfterViewInit,
  Component,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-principal-interface',
  templateUrl: './principal-interface.component.html',
  styleUrls: ['./principal-interface.component.css']
})
export class PrincipalInterfaceComponent implements AfterViewInit {

  beeElement: HTMLElement | null = null;

  ngAfterViewInit() {
    // Localizamos la abeja después de que se renderiza el DOM
    this.beeElement = document.getElementById('beeParallax');

    // Observadores de animaciones ya existentes
    const elements = document.querySelectorAll('.animate-right, .animate-left, .experience-section');
    const words = document.querySelectorAll('.word');
    const animatedElements = document.querySelectorAll('[class*="animate-"]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('experience-section')) {
            entry.target.classList.add('fade-in');
          } else if (entry.target.classList.contains('word')) {
            const index = Array.from(words).indexOf(entry.target as Element);
            (entry.target as HTMLElement).style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add('animate-visible');
          } else {
            entry.target.classList.add('animate-visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
    words.forEach(word => observer.observe(word));
    animatedElements.forEach(el => observer.observe(el));
  }

  // 💡 Efecto parallax en movimiento del mouse
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.beeElement) return;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (event.clientX - centerX) / 25; // sensibilidad horizontal
    const offsetY = (event.clientY - centerY) / 25; // sensibilidad vertical

    const rotation = Math.sin(event.clientX / 50) * 4;

    this.beeElement.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`;
  }
}
