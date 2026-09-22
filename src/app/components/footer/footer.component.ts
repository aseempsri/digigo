import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-card border-t border-border">
      <div class="container mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="logo-flow-container">
                <img [src]="getAssetPath('logo.png')" alt="Digigo" class="h-[72px] w-auto object-contain relative z-10" />
              </div>
            </div>
            <p class="text-muted-foreground text-sm leading-relaxed">
              A full-service digital marketing agency delivering integrated solutions that drive growth, engagement, and measurable results for brands across India and beyond.
            </p>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Quick Links</h4>
            <ul class="space-y-2">
              @for (link of quickLinks; track link.path) {
                <li>
                  <a [routerLink]="link.path" class="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Services</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li>Digital Marketing</li>
              <li>Experiential Marketing</li>
              <li>Lead Generation</li>
              <li>Content Marketing</li>
              <li>Branding & Design</li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-primary">Contact</h4>
            <ul class="space-y-3 text-sm text-muted-foreground">
              <li class="flex items-start gap-2">
                <lucide-icon name="map-pin" [size]="16" class="mt-0.5 shrink-0 text-primary" />
                <span>597, Airhe Road, Chandmari, Post- Lamhi, Varanasi, Uttar Pradesh - 221007, India</span>
              </li>
              <li class="flex items-center gap-2">
                <lucide-icon name="phone" [size]="16" class="shrink-0 text-primary" />
                <div class="flex flex-col">
                  <span>+91-9106060363</span>
                  <span>+91-9815461615</span>
                </div>
              </li>
              <li class="flex items-center gap-2">
                <lucide-icon name="mail" [size]="16" class="shrink-0 text-primary" />
                <span>info&#64;digigo.co.in</span>
              </li>
            </ul>
            <div class="flex gap-3 mt-4">
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="facebook" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="twitter" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="linkedin" [size]="16" />
              </a>
              <a href="#" class="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <lucide-icon name="instagram" [size]="16" />
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {{ currentYear }} Digigo. All rights reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  getAssetPath(path: string): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    return base + path;
  }

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Our Work', path: '/our-work' },
    { label: 'Contact Us', path: '/contact-us' },
  ];
  currentYear = new Date().getFullYear();
}
