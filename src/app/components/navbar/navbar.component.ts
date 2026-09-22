import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Contact Us', path: '/contact-us' },
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <nav
      [class]="cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-visible', scrolled() ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent')"
    >
      <div class="container mx-auto px-6 md:px-6 pl-4 md:pl-6 py-4 flex items-center justify-between overflow-visible">
        <a routerLink="/" class="flex items-center gap-2 md:gap-3 min-w-0 flex-shrink-0">
          <div class="logo-flow-container logo-flow-container-mobile">
            <img [src]="getAssetPath('logo-icon.png')" alt="Digigo" class="h-[44px] md:h-[56px] w-auto object-contain relative z-10" />
          </div>
          <div class="flex flex-col min-w-0 text-left">
            <span class="text-base sm:text-xl font-heading font-bold tracking-tight text-foreground leading-tight logo-text-outline">
              Digigo
            </span>
            <span class="text-[10px] sm:text-xs font-heading text-muted-foreground tracking-wide leading-tight">
              shaping the idea into brand
            </span>
          </div>
        </a>

        <div class="hidden md:flex items-center gap-8">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="text-primary"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              [class]="cn('text-sm font-heading font-semibold uppercase tracking-wider transition-colors hover:text-primary', router.url === link.path ? '' : 'text-foreground/80')"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <button
          class="md:hidden text-foreground"
          (click)="isOpen.set(!isOpen())"
          aria-label="Toggle menu"
        >
          @if (isOpen()) {
            <lucide-icon name="x" [size]="28" />
          } @else {
            <lucide-icon name="menu" [size]="28" />
          }
        </button>
      </div>

      @if (isOpen()) {
        <div class="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div class="container mx-auto px-6 py-6 flex flex-col gap-4">
            @for (link of navLinks; track link.path) {
              <a
                [routerLink]="link.path"
                (click)="isOpen.set(false)"
                [class]="cn('text-lg font-heading font-semibold uppercase tracking-wider py-2 transition-colors hover:text-primary', router.url === link.path ? 'text-primary' : 'text-foreground/80')"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent implements OnInit {
  router = inject(Router);
  isOpen = signal(false);
  scrolled = signal(false);
  navLinks = navLinks;
  cn = cn;

  getAssetPath(path: string): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    return base + path;
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => this.scrolled.set(window.scrollY > 50));
    }
  }
}
