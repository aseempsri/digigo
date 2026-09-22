import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'our-work', component: OurWorkComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
