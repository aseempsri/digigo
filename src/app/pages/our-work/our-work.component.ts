import { Component, signal, computed } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';

const projects = [
  {
    title: 'Brand Awareness Campaign',
    category: 'Digital Marketing',
    desc: '360° digital campaign driving 5M+ impressions for a leading FMCG brand.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
  },
  {
    title: 'National Tech Summit 2024',
    category: 'Experiential Marketing',
    desc: 'End-to-end event management for a 5000+ attendee technology conference.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
  },
  {
    title: 'B2B Lead Engine',
    category: 'Lead Generation',
    desc: 'Generated 10,000+ qualified leads in 6 months through targeted ABM.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'Social Media Transformation',
    category: 'Digital Marketing',
    desc: 'Complete social presence overhaul resulting in 300% engagement growth.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    title: 'Product Launch Experience',
    category: 'Experiential Marketing',
    desc: 'Multi-city immersive product launch across 5 metros in India.',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop',
  },
  {
    title: 'Content-Led Growth',
    category: 'Content Marketing',
    desc: 'Content strategy that drove 3x organic traffic for a SaaS startup.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    title: 'Performance Marketing',
    category: 'Digital Marketing',
    desc: 'PPC and programmatic campaign delivering 8x ROAS for an e-commerce brand.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    title: 'Corporate Gala Night',
    category: 'Experiential Marketing',
    desc: 'Premium corporate event with 1000+ CXO-level attendees.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
  },
  {
    title: 'Inside Sales Program',
    category: 'Lead Generation',
    desc: 'Built a 50-person inside sales team generating $2M pipeline monthly.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
  },
];

@Component({
  selector: 'app-our-work',
  standalone: true,
  imports: [LucideAngularModule, HeroBannerComponent],
  template: `
    <app-hero-banner
      title="Our Work"
      subtitle="Here's showcasing the best of Digigo"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          @for (cat of categories; track cat) {
            <button
              (click)="filter.set(cat)"
              [class]="'px-5 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-colors ' + (filter() === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground')"
            >
              {{ cat }}
            </button>
          }
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (item of filtered(); track item.title) {
            <div
              class="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all"
            >
              <div class="h-48 bg-gradient-to-br from-secondary to-background relative overflow-hidden">
                @if (item.image) {
                  <img
                    [src]="item.image"
                    [alt]="item.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                  />
                }
                <div
                  [class]="'absolute inset-0 flex items-center justify-center ' + (item.image ? 'hidden' : '')"
                  style="background: linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--background)));"
                >
                  <span class="text-foreground/5 font-heading font-black text-5xl uppercase">AM</span>
                </div>
              </div>
              <div class="p-5">
                <span class="text-primary text-xs font-heading font-bold uppercase tracking-wider">{{
                  item.category
                }}</span>
                <h3 class="font-heading font-bold text-lg mt-1">{{ item.title }}</h3>
                <p class="text-muted-foreground text-sm mt-1">{{ item.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class OurWorkComponent {
  filter = signal('All');
  projects = projects;
  categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  filtered = computed(() =>
    this.filter() === 'All' ? projects : projects.filter((p) => p.category === this.filter()),
  );
}
