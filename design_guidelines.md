# SGS Locations Design Guidelines

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from Airbnb's property showcasing, Zillow's real estate professionalism, and Linear's clean typography. This platform serves dual audiences (film professionals and property owners) requiring both visual impact and functional clarity.

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary (Headings)**: Inter or Outfit - weights 600, 700, 800
- **Secondary (Body)**: Inter or System UI - weights 400, 500, 600
- **Accent (Numbers/Stats)**: Space Grotesk - weights 500, 700

**Type Scale**:
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headers: text-2xl md:text-3xl, font-semibold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body Default: text-base, font-normal
- Body Small: text-sm, font-medium
- Labels/Meta: text-xs uppercase tracking-wider, font-semibold

## Layout System

**Spacing Primitives**: Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-4 (mobile), p-6 md:p-8 (desktop)
- Section spacing: py-12 md:py-20 lg:py-32
- Card gaps: gap-6 md:gap-8
- Content max-width: max-w-7xl for full sections, max-w-6xl for content, max-w-prose for text-heavy

**Grid Systems**:
- Featured locations: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Category tiles: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Filter results: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Dashboard metrics: grid-cols-2 md:grid-cols-4
- Property specs: grid-cols-2 md:grid-cols-3

## Component Library

### Navigation
- **Header**: Sticky with backdrop-blur-lg, height h-20, logo max-h-8
- **Desktop Menu**: Horizontal with gap-8, text-base font-medium
- **Mobile Menu**: Full-screen overlay with stacked navigation, text-xl
- **User Menu**: Dropdown with shadcn/ui DropdownMenu, avatar with initials or profile image

### Hero Sections
- **Homepage Hero**: Full viewport (min-h-screen), video or high-quality image background with overlay gradient
- **Search Bar**: Prominent search input (h-14 md:h-16), rounded-full, with icon and button integrated
- **CTAs**: Two-button pattern - primary (solid) and secondary (outline), both h-12 md:h-14, px-8, rounded-lg
- **Quick Stats**: Inline below CTAs showing "65+ Locations • 20+ Years • 10+ Cities"

### Property Cards
- **Image Container**: aspect-[4/3], rounded-xl overflow-hidden with hover scale-105 transition
- **Card Body**: p-5, space-y-3
- **Badge System**: rounded-full px-3 py-1 text-xs font-semibold for property types
- **Save Button**: Absolute top-3 right-3, heart icon with backdrop-blur background
- **Hover State**: Shadow elevation and subtle border

### Category Tiles
- **Visual Tiles**: aspect-square or aspect-[3/2], background image with gradient overlay
- **Title Overlay**: Absolute positioning bottom-0, p-6, text-xl font-bold
- **Count Display**: text-sm opacity-90

### Filtering System
- **Filter Sidebar**: w-full md:w-80, sticky positioning on desktop
- **Filter Groups**: Collapsible sections with space-y-6
- **Checkboxes**: Custom styled with shadcn/ui Checkbox, gap-3 between items
- **Range Slider**: shadcn/ui Slider with dual handles
- **Apply Button**: Sticky bottom-0, w-full, h-12

### Image Galleries
- **Main Image**: aspect-[16/9] lg:aspect-[21/9], rounded-xl
- **Thumbnail Strip**: flex gap-3, h-20 thumbnails with rounded-lg
- **Lightbox**: Full-screen modal with navigation arrows (h-12 w-12 rounded-full), counter display
- **Grid View**: Masonry-style using grid-cols-2 md:grid-cols-3, gap-4

### Property Detail Layout
- **Two-Column**: Grid with 2fr 1fr on desktop for main content and sidebar
- **Specs Grid**: grid-cols-2 gap-6, each with icon (w-6 h-6), label, and value
- **Section Spacing**: space-y-12 between major sections
- **Sticky Sidebar**: Contact form and quick actions, top-24

### Dashboards
- **Metrics Cards**: Rounded-xl, p-6, with large number (text-4xl font-bold) and icon
- **Data Tables**: shadcn/ui Table with hover states, alternating row treatment
- **Action Buttons**: Grouped in button groups, consistent h-10, gap-2
- **Chart Containers**: p-6, min-h-80, rounded-xl borders

### Forms
- **Input Fields**: h-12, rounded-lg, border-2 focus state
- **Multi-Step Forms**: Progress indicator at top showing steps, each step in separate Card
- **Image Upload**: Drag-and-drop zone with dashed border, min-h-48, rounded-xl
- **Required Indicators**: Asterisk with proper ARIA labels

### Admin Panel
- **Sidebar Navigation**: w-64, fixed left-0, full-height with logo at top
- **Content Area**: ml-64 padding, max-w-7xl
- **Status Badges**: rounded-full px-3 py-1 for pending/approved/rejected states
- **Action Modals**: shadcn/ui Dialog, max-w-2xl, with clear primary/secondary actions

### Maps Integration
- **Map Container**: rounded-xl overflow-hidden, h-96 for detail pages, h-screen for full map view
- **Property Markers**: Custom styled with property image thumbnails
- **Info Windows**: Custom styled cards matching design system

## Page-Specific Layouts

### Homepage
7 sections: Hero (full viewport) → Featured Locations (py-20) → Category Tiles (py-20) → Client Showcase (py-16, bg subtle) → Services (py-20) → Stats Banner (py-12) → Dual CTA (py-24)

### Location Catalog
Fixed filter sidebar (left), main content area (right) with search header, view toggles, and results grid

### Property Detail
Hero gallery → Overview grid → Description → Production Info → Features list → Pricing table (logged in only) → Contact form → Similar properties

### About Page
Hero with team image → Company story (max-w-prose centered) → Team grid (3-4 columns) → LMGI membership section → Service area map

### Contact
Two-column: Contact form (left), Map + contact details (right)

## Images

**Homepage Hero**: Full-width, high-quality video or image of Dallas-Fort Worth skyline or premium property, subtle overlay gradient for text readability

**Featured Locations**: Professional property photography, 4:3 ratio, showcasing variety (modern homes, ranches, urban spaces, natural settings)

**Category Tiles**: Representative lifestyle images for each category (estate mansions, modern architecture, lakes/natural settings, urban lofts, historical buildings)

**Client Showcase**: Production company logos and show posters (Landman, Yellowstone, Madison, Lioness) on subtle background

**About Page Hero**: Professional team photo or location scouting action shot

**Property Detail**: High-resolution property galleries (8-20 images), professional photography showing various angles, rooms, and features

**Contact Page**: Embedded Google Map showing office location and service area

## Accessibility & Interaction

- All interactive elements min height h-11 for touch targets
- Focus states with visible outline (ring-2 ring-offset-2)
- Proper heading hierarchy (single h1 per page)
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support for all interactive components
- Loading states with skeleton screens matching content layout