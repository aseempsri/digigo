import { Component, inject, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HeroBannerComponent } from '@/app/components/hero-banner/hero-banner.component';
import { ButtonDirective } from '@/app/components/ui/button/button.directive';
import { InputComponent } from '@/app/components/ui/input/input.component';
import { TextareaComponent } from '@/app/components/ui/textarea/textarea.component';
import { ToastService } from '@/app/services/toast.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    LucideAngularModule,
    HeroBannerComponent,
    ButtonDirective,
    InputComponent,
    TextareaComponent,
  ],
  template: `
    <app-hero-banner
      title="Contact Us"
      subtitle="Let's get in touch and start something great together"
    />

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-2xl font-heading font-bold uppercase tracking-tight mb-6">
              Send Us a Message
            </h2>
            <form (ngSubmit)="handleSubmit($event)" novalidate>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <app-input
                  placeholder="Your Name *"
                  [required]="true"
                  [(value)]="formData.name"
                />
                <app-input
                  placeholder="Email Address *"
                  [type]="'email'"
                  [required]="true"
                  [(value)]="formData.email"
                />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <app-input placeholder="Phone Number" [(value)]="formData.phone" />
                <app-input placeholder="Company Name" [(value)]="formData.company" />
              </div>
              <div class="mb-4">
                <app-textarea
                  placeholder="Your Message *"
                  [required]="true"
                  [rows]="5"
                  [(value)]="formData.message"
                />
              </div>
              <button type="submit" appButton size="lg" class="font-heading font-bold uppercase tracking-wider">
                Send Message <lucide-icon name="send" [size]="16" />
              </button>
            </form>
          </div>

          <div>
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
      </div>
    </section>

    <!-- Thank You Modal -->
    @if (showModal()) {
      <div class="fixed inset-0 z-[9999] flex items-center justify-center p-4 modal-overlay" (click)="closeModal()">
        <div class="modal-content relative bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl" (click)="$event.stopPropagation()">
          <!-- Close Button -->
          <button
            (click)="closeModal()"
            class="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <lucide-icon name="x" [size]="24" />
          </button>

          <!-- Animated Checkmark Icon -->
          <div class="flex justify-center mb-6">
            <div class="checkmark-container">
              <div class="checkmark-circle">
                <lucide-icon name="check" [size]="48" class="text-primary checkmark-icon" />
              </div>
            </div>
          </div>

          <!-- Thank You Message -->
          <h2 class="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-center mb-4 text-foreground">
            Thank You!
          </h2>
          <p class="text-center text-muted-foreground mb-8 leading-relaxed">
            Thank you for reaching out to us. Please call us for immediate response.
          </p>

          <!-- Phone Numbers -->
          <div class="space-y-4 mb-6">
            @for (phone of phoneNumbers; track phone; let i = $index) {
              <a
                [href]="getPhoneLink(phone)"
                class="phone-number-card flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 rounded-lg hover:border-primary/60 hover:from-primary/20 transition-all duration-300 group"
                [style.animation-delay]="(i * 0.1) + 's'"
              >
                <div class="phone-icon-container">
                  <lucide-icon name="phone" [size]="24" class="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span class="flex-1 font-heading font-bold text-lg text-primary group-hover:scale-105 transition-transform duration-300">
                  {{ phone }}
                </span>
                <lucide-icon name="arrow-right" [size]="20" class="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            }
          </div>

          <!-- Call to Action -->
          <p class="text-center text-sm text-muted-foreground">
            We're here to help you 24/7
          </p>
        </div>
      </div>
    }
  `,
})
export class ContactUsComponent {
  private toast = inject(ToastService);
  showModal = signal(false);

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  };

  phoneNumbers = ['+91-9106060363', '+91-9815461615'];

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

  handleSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    
    // Show modal if message is provided
    const hasMessage = this.formData.message && this.formData.message.trim().length > 0;
    
    console.log('Form submitted, hasMessage:', hasMessage, 'message:', this.formData.message);
    
    if (hasMessage) {
      console.log('Showing modal');
      this.showModal.set(true);
      // Reset form after showing modal
      setTimeout(() => {
        this.formData = { name: '', email: '', phone: '', company: '', message: '' };
      }, 100);
    } else {
      console.log('No message provided, modal not shown');
    }
  }

  closeModal() {
    this.showModal.set(false);
  }

  getPhoneLink(phone: string): string {
    return 'tel:' + phone.replace(/-/g, '');
  }
}
