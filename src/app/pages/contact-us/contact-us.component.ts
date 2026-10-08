import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [LucideAngularModule, HeroBannerComponent],
  template: `
    <app-hero-banner
      title="Contact Us"
      subtitle="Let's get in touch and start something great together"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-xl mx-auto">
          <h2 class="text-2xl font-heading font-bold uppercase tracking-tight mb-6">
            Get In Touch
          </h2>
          <div class="space-y-6">
            @for (item of contactItems; track item.title) {
              <div class="flex gap-4 p-5 bg-card border border-border rounded-lg">
                <lucide-icon [name]="item.icon" class="text-primary shrink-0 mt-1" [size]="24" />
                <div>
                  <h3 class="font-heading font-bold uppercase tracking-wider text-sm">{{ item.title }}</h3>
                  @for (line of item.lines; track line) {
                    <p class="text-muted-foreground text-sm">{{ line }}</p>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactUsComponent {
  contactItems = [
    {
      icon: 'map-pin',
      title: 'Visit Us',
      lines: ['Kamal Kunj, House No. 493/7, Gunnu Ghat Nahan', 'Dist. Sirmaur, Himachal Pradesh, 173001', 'India'],
    },
    {
      icon: 'mail',
      title: 'Email Us',
      lines: ['digigouniverse@gmail.com'],
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: ['+91-9106060363', '+91-9815461615'],
    },
  ];
}
