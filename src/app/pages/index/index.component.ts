import { Component, signal, OnInit, OnDestroy, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonDirective } from '@/app/components/ui/button/button.directive';

const heroSlides = [
  {
    title: 'DIGITAL MARKETING',
    subtitle:
      "Data-driven strategies that amplify your brand's digital presence and deliver measurable ROI.",
    gradient: 'from-amber-900/40 via-background to-background',
    image: 'https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?w=1920&q=80',
  },
  {
    title: 'EXPERIENTIAL MARKETING',
    subtitle: 'Creating unforgettable brand experiences that connect with audiences on a deeper level.',
    gradient: 'from-amber-800/40 via-background to-background',
    image: 'https://images.unsplash.com/photo-1553173937-53ab846b1365?w=1920&q=80',
  },
  {
    title: 'LEAD GENERATION',
    subtitle: 'Qualified leads through targeted B2B campaigns, inside sales, and account-based marketing.',
    gradient: 'from-amber-900/40 via-background to-background',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=1920&q=80',
  },
  {
    title: 'CONTENT MARKETING',
    subtitle: 'Compelling content strategies that tell your brand story and drive engagement across channels.',
    gradient: 'from-amber-800/40 via-background to-background',
    image: 'https://images.unsplash.com/photo-1525504393201-8f144ab81077?w=1920&q=80',
  },
];

const clientLogos = [
  '/images/girnar finserv.png',
  '/images/mitigata.png',
  '/images/Go digit General Insurance Logo.png',
  '/images/digit life insurance.jpg',
  '/images/acko insurance.jpg',
  '/images/kredit bee logo.png',
  '/images/Cleartrip-Logo.png',
  '/images/Jharkhand Government logo.jpg',
  '/images/insurance dekho.png',
];

const workItems = [
  {
    title: 'Brand Awareness Campaign',
    category: 'Digital Marketing',
    desc: '360° digital campaign for a leading FMCG brand',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
  },
  {
    title: 'Tech Summit 2024',
    category: 'Experiential Marketing',
    desc: 'End-to-end event management for 5000+ attendees',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
  },
  {
    title: 'B2B Lead Engine',
    category: 'Lead Generation',
    desc: 'Generated 10,000+ qualified leads in 6 months',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'Social Media Revamp',
    category: 'Digital Marketing',
    desc: 'Complete social presence overhaul for a fintech startup',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    title: 'Product Launch Event',
    category: 'Experiential Marketing',
    desc: 'Immersive product launch experience across 5 cities',
    image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop',
  },
  {
    title: 'Content Strategy',
    category: 'Content Marketing',
    desc: 'Content-led growth strategy driving 3x organic traffic',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
];

const awards = [
  {
    category: 'Agency Excellence',
    recognition: 'Best Digital Agency',
    event: '2024',
  },
  {
    category: 'Industry Recognition',
    recognition: 'Top 50 Agencies India',
    event: '2024',
  },
  {
    category: 'Marketing Excellence',
    recognition: 'Marketing Excellence Award',
    event: '2024',
  },
  {
    category: 'Content Innovation',
    recognition: 'Content Innovation Award',
    event: '2024',
  },
];

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, LucideAngularModule, ButtonDirective],
  template: `
    <section class="relative h-screen flex items-center overflow-hidden">
        <!-- Full-screen background images -->
        @for (slide of heroSlides; track $index) {
          <div
            class="absolute inset-0 transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            [class]="$index === currentSlide() ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-[2px] pointer-events-none'"
          >
            <img
              [src]="slide.image"
              [alt]="slide.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        }
        <!-- Gradient overlays for text readability (kept light so images show through) -->
        <div
          class="absolute inset-0 transition-[background] duration-700 ease-out"
          [style.background]="'linear-gradient(to bottom right, ' + gradientColors[currentSlide()] + ', transparent 60%, hsl(var(--background)/0.3) 100%)'"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-r from-background/75 via-background/40 to-transparent"></div>
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(var(--primary)/0.05)_0%,_transparent_55%)]"></div>

        <div class="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div class="max-w-4xl w-full text-center">
            <div class="relative min-h-[360px] md:min-h-[420px] lg:min-h-[480px] flex flex-col items-center justify-center">
              @for (slide of heroSlides; track $index) {
                <div
                  class="absolute inset-0 flex flex-col items-center justify-center text-center transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  [class]="$index === currentSlide() ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm pointer-events-none'"
                >
                  <h1
                    class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase tracking-tight leading-tight w-full text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-2 md:px-4"
                    style="word-break: normal; overflow-wrap: normal; hyphens: none;"
                  >
                    {{ slide.title }}
                  </h1>
                  <p class="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary max-w-2xl mx-auto px-2 md:px-4 break-words drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] text-center">
                    {{ slide.subtitle }}
                  </p>
                </div>
              }
            </div>
            <div class="mt-10 flex gap-4 justify-center">
              <a routerLink="/services" appButton size="lg" class="font-heading font-bold uppercase tracking-wider">
                Explore <lucide-icon name="arrow-right" [size]="18" />
              </a>
              <a
                routerLink="/our-work"
                appButton
                variant="outline"
                size="lg"
                class="font-heading font-bold uppercase tracking-wider border-foreground/20 hover:bg-foreground/5"
              >
                Our Work
              </a>
            </div>
          </div>

          <div class="absolute bottom-10 left-6 flex gap-2">
            @for (slide of heroSlides; track $index) {
              <button
                (click)="currentSlide.set($index)"
                [class]="'h-1 rounded-full transition-all duration-300 ' + ($index === currentSlide() ? 'w-10 bg-primary' : 'w-4 bg-foreground/20')"
              ></button>
            }
          </div>

          <div class="absolute bottom-10 right-6 flex gap-2">
            <button
              (click)="currentSlide.set((currentSlide() - 1 + heroSlides.length) % heroSlides.length)"
              class="w-10 h-10 border border-foreground/20 rounded-full flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
            >
              <lucide-icon name="chevron-left" [size]="20" />
            </button>
            <button
              (click)="currentSlide.set((currentSlide() + 1) % heroSlides.length)"
              class="w-10 h-10 border border-foreground/20 rounded-full flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors"
            >
              <lucide-icon name="chevron-right" [size]="20" />
            </button>
          </div>
        </div>
      </section>

      <section class="py-20 bg-card">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
                Who We Are
              </p>
              <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
                Integrated Marketing Solutions That Drive Growth
              </h2>
              <p class="mt-4 text-muted-foreground leading-relaxed">
                Digigo is a full-service marketing agency based in India, specializing in digital
                marketing, experiential events, lead generation, and content strategy. We combine creativity
                with data to deliver campaigns that move the needle.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              @for (card of aboutCards; track card.title) {
                <div
                  class="bg-secondary/50 border border-border rounded-lg p-5 hover:border-primary/30 transition-colors"
                >
                  <lucide-icon [name]="card.icon" class="text-primary mb-3" [size]="28" />
                  <h3 class="font-heading font-bold text-sm uppercase tracking-wider">{{ card.title }}</h3>
                  <p class="text-muted-foreground text-xs mt-1 leading-relaxed">{{ card.desc }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 border-y border-border overflow-hidden">
        <div class="text-center mb-6">
          <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm">Brands We Work With</p>
        </div>
        <div class="relative overflow-hidden">
          <div class="flex animate-marquee-infinite whitespace-nowrap items-center w-max">
            @for (logo of clientLogos; track $index) {
              <div [class]="(logo.includes('mitigata') ? 'mx-4 md:mx-10 flex items-center justify-center h-[144px] md:h-[208px] shrink-0' : 'mx-4 md:mx-10 flex items-center justify-center h-[72px] md:h-[104px] shrink-0') + (isDarkLogo(logo, $index) ? ' rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-2 ring-1 ring-white/10' : '')">
                <img [src]="getAssetPath(logo)" [alt]="'Brand partner ' + ($index + 1)" [class]="(logo.includes('mitigata') ? 'h-[112px] md:h-[166px] max-w-[280px] md:max-w-[474px]' : 'h-[56px] md:h-[83px] max-w-[140px] md:max-w-[237px]') + ' w-auto object-contain transition-all duration-300 ' + (isDarkLogo(logo, $index) ? 'invert brightness-110 contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'drop-shadow-[0_0_20px_rgba(255,255,255,0.65)] hover:drop-shadow-[0_0_30px_rgba(245,158,11,0.7)] brightness-150 contrast-150')" />
              </div>
            }
            @for (logo of clientLogos; track $index) {
              <div [class]="(logo.includes('mitigata') ? 'mx-4 md:mx-10 flex items-center justify-center h-[144px] md:h-[208px] shrink-0' : 'mx-4 md:mx-10 flex items-center justify-center h-[72px] md:h-[104px] shrink-0') + (isDarkLogo(logo, $index) ? ' rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-2 ring-1 ring-white/10' : '')">
                <img [src]="getAssetPath(logo)" [alt]="'Brand partner ' + ($index + 1)" [class]="(logo.includes('mitigata') ? 'h-[112px] md:h-[166px] max-w-[280px] md:max-w-[474px]' : 'h-[56px] md:h-[83px] max-w-[140px] md:max-w-[237px]') + ' w-auto object-contain transition-all duration-300 ' + (isDarkLogo(logo, $index) ? 'invert brightness-110 contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'drop-shadow-[0_0_20px_rgba(255,255,255,0.65)] hover:drop-shadow-[0_0_30px_rgba(245,158,11,0.7)] brightness-150 contrast-150')" />
              </div>
            }
            @for (logo of clientLogos; track $index) {
              <div [class]="(logo.includes('mitigata') ? 'mx-4 md:mx-10 flex items-center justify-center h-[144px] md:h-[208px] shrink-0' : 'mx-4 md:mx-10 flex items-center justify-center h-[72px] md:h-[104px] shrink-0') + (isDarkLogo(logo, $index) ? ' rounded-2xl bg-white/15 backdrop-blur-sm px-4 py-2 ring-1 ring-white/10' : '')">
                <img [src]="getAssetPath(logo)" [alt]="'Brand partner ' + ($index + 1)" [class]="(logo.includes('mitigata') ? 'h-[112px] md:h-[166px] max-w-[280px] md:max-w-[474px]' : 'h-[56px] md:h-[83px] max-w-[140px] md:max-w-[237px]') + ' w-auto object-contain transition-all duration-300 ' + (isDarkLogo(logo, $index) ? 'invert brightness-110 contrast-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]' : 'drop-shadow-[0_0_20px_rgba(255,255,255,0.65)] hover:drop-shadow-[0_0_30px_rgba(245,158,11,0.7)] brightness-150 contrast-150')" />
              </div>
            }
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
              Portfolio
            </p>
            <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight">
              Featured Work
            </h2>
          </div>

          <div class="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 mb-10 w-full max-w-md md:max-w-none mx-auto md:mx-0">
            @for (cat of categories; track cat) {
              <button
                (click)="filter.set(cat)"
                [class]="'w-full md:w-auto px-5 py-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors text-center ' + (filter() === cat ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground')"
              >
                {{ cat }}
              </button>
            }
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (item of filteredWork(); track item.title; let i = $index) {
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
                    <span class="text-muted-foreground/30 font-heading font-bold text-4xl uppercase">AM</span>
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

      <section class="py-20 relative overflow-hidden">
        <div class="absolute inset-0 parallax-bg" style="background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop'); background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
        <div class="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div class="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-2">
            Clientele
          </p>
          <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight mb-8">
            Trusted by Leading Brands
          </h2>
          <blockquote class="text-xl md:text-2xl italic text-foreground/80 leading-relaxed">
            "Digigo transformed our digital presence entirely. Their strategic approach and creative
            execution delivered results that exceeded all expectations."
          </blockquote>
          <p class="mt-4 text-primary font-heading font-semibold uppercase tracking-wider text-sm">
            — Marketing Director, Digit Insurance
          </p>
        </div>
      </section>

      <section class="py-20 border-y border-border bg-secondary/20">
        <div class="container mx-auto px-6">
          <p class="text-primary font-heading font-semibold uppercase tracking-widest text-sm mb-12 text-center">
            Awards & Recognition
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            @for (award of awards; track award.recognition) {
              <div class="flex flex-col items-center text-center">
                <!-- Award Icon (Feather & Cup) -->
                <div class="mb-4 relative">
                  <img [src]="getAssetPath('images/award.png')" alt="Award" class="w-16 h-16 object-contain" />
                </div>
                <!-- Award Category (Small, Light Gray) -->
                <p class="text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">
                  {{ award.category }}
                </p>
                <!-- Main Award Name (Large, Bold, Dark) -->
                <p class="text-base font-heading font-bold uppercase tracking-tight text-foreground mb-2 leading-tight">
                  {{ award.recognition }}
                </p>
                <!-- Event/Year (Small, Light Gray) -->
                <p class="text-xs font-heading uppercase tracking-wider text-muted-foreground">
                  {{ award.event }}
                </p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 parallax-bg" style="background-image: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&h=1080&fit=crop'); background-attachment: fixed; background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
        <div class="absolute inset-0 bg-background/85 backdrop-blur-sm"></div>
        <div class="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 class="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-tight">
            We Are Big Enough To Manage Scale,<br />
            <span class="text-primary">Small Enough To Care</span>
          </h2>
          <p class="mt-6 mb-10 text-muted-foreground text-lg">
            Ready to transform your brand's marketing? Let's create something extraordinary together.
          </p>
          <a
            routerLink="/contact-us"
            appButton
            size="lg"
            class="font-heading font-bold uppercase tracking-wider"
          >
            Get In Touch <lucide-icon name="arrow-right" [size]="18" />
          </a>
        </div>
      </section>
  `,
})
export class IndexComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  filter = signal('ALL');
  heroSlides = heroSlides;
  clientLogos = clientLogos;
  workItems = workItems;
  awards = awards;
  categories = ['ALL', ...Array.from(new Set(workItems.map((w) => w.category)))];
  aboutCards = [
    { icon: 'target', title: 'Our Purpose', desc: 'To empower brands with marketing that creates real impact and lasting connections.' },
    { icon: 'zap', title: 'Our Strength', desc: 'A team of 100+ specialists across digital, creative, and experiential domains.' },
    { icon: 'users', title: 'Our Reach', desc: 'Partnered with 500+ brands across India and growing internationally.' },
    { icon: 'bar-chart-3', title: 'Our Results', desc: 'Data-first approach delivering measurable ROI on every campaign.' },
  ];

  gradientColors = [
    'rgb(245 158 11 / 0.4)',
    'rgb(217 119 6 / 0.4)',
    'rgb(180 83 9 / 0.4)',
    'rgb(146 64 14 / 0.4)',
  ];

  filteredWork = computed(() =>
    this.filter() === 'ALL' ? workItems : workItems.filter((w) => w.category === this.filter()),
  );

  private intervalId: ReturnType<typeof setInterval> | null = null;

  getAssetPath(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    const base = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return base + cleanPath;
  }

  /** Indices of client logos that are dark/black. Add the index if needed. */
  darkLogoIndices = new Set<number>([10]);

  /** Logos that are dark/black and need a light background or invert to be visible */
  isDarkLogo(logo: string, index: number): boolean {
    return logo.toLowerCase().includes('home4data') || this.darkLogoIndices.has(index);
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentSlide.set((this.currentSlide() + 1) % heroSlides.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
