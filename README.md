# Digigo - Angular

Full-service digital marketing agency site built with Angular 19.

## Tech Stack

- **Angular 19** (latest)
- **Tailwind CSS 3** with same configuration as original
- **Lucide Angular** for icons
- **Angular Router** for navigation
- **Angular Animations** for page transitions

## Development

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

## Project Structure

- `src/app/components/` - Layout (Navbar, Footer, HeroBanner), UI components
- `src/app/pages/` - Index, About Us, Services, Our Work, Contact Us, NotFound
- `src/app/services/` - Toast service
- `src/lib/` - Utility functions (cn)
- `src/styles.css` - Global styles, Tailwind, CSS variables (Montserrat, Open Sans fonts)

## Routes

- `/` - Home
- `/about-us` - About Us
- `/services` - Services
- `/our-work` - Our Work
- `/contact-us` - Contact Us
- `*` - 404 Not Found
