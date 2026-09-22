import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';

const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Clients Served' },
  { value: '100+', label: 'Team Members' },
];

const values = [
  {
    icon: 'eye',
    title: 'Vision',
    desc: "To be India's most trusted full-service marketing partner, known for innovation, integrity, and impact.",
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    desc: 'We stay ahead of the curve, embracing emerging trends and technologies to keep our clients at the forefront.',
  },
  {
    icon: 'heart',
    title: 'Passion',
    desc: "Marketing is more than a job for us — it's our craft. We pour creativity and energy into every campaign.",
  },
  {
    icon: 'trending-up',
    title: 'Results',
    desc: 'Every strategy, every execution is measured by the results it delivers. We are obsessed with ROI.',
  },
];

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [LucideAngularModule, HeroBannerComponent],
  template: `
    <app-hero-banner
      title="About Us"
      subtitle="The story behind Digigo and our commitment to excellence"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
              Our Story
            </p>
            <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Building Brands Since 2012
            </h2>
            <p class="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2012, Digigo began as a small team of passionate marketers with a big vision — to
              bridge the gap between brands and their audiences through integrated, data-driven marketing solutions.
            </p>
            <p class="mt-4 text-muted-foreground leading-relaxed">
              Over the years, we've grown into a full-service agency with expertise spanning digital marketing,
              experiential events, lead generation, content strategy, and branding. Our journey has been defined by
              relentless innovation, deep client partnerships, and a commitment to delivering measurable results.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <img [src]="getAssetPath('logo.png')" alt="Digigo" class="w-[67%] h-auto object-contain drop-shadow-[0_0_40px_rgba(245,158,11,0.6)]" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-card">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
          Our Mission
        </p>
        <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
          Empowering Brands Through Strategic Marketing
        </h2>
        <p class="mt-6 text-muted-foreground leading-relaxed text-lg">
          To deliver integrated marketing solutions that combine creativity with data, helping brands connect with their
          audiences, drive growth, and build lasting impact in an ever-evolving digital landscape.
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
            What Drives Us
          </p>
          <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">Our Values</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (v of values; track v.title) {
            <div
              class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors text-center"
            >
              <lucide-icon [name]="v.icon" class="text-primary mx-auto mb-4" [size]="36" />
              <h3 class="font-heading font-bold uppercase tracking-wider">{{ v.title }}</h3>
              <p class="text-muted-foreground text-sm mt-2 leading-relaxed">{{ v.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="py-20 bg-card">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          @for (s of stats; track s.label) {
            <div class="text-center py-8">
              <div class="text-4xl md:text-5xl font-heading font-black text-primary">{{ s.value }}</div>
              <div class="text-sm font-heading font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                {{ s.label }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutUsComponent {
  getAssetPath(path: string): string {
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    return base + path;
  }
  stats = stats;
  values = values;
}
