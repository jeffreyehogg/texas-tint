import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'

// Authentic commercial assets
import CommercialBuilding from '@/images/commercial/commercial-building.webp'
import CorporateBuilding from '@/images/commercial/corporate-building.jpg'
import ModernGlassTower from '@/images/commercial/modern-glass-tower.jpg'
import SolarFilm from '@/images/commercial/solar-film.webp'
import SecurityFilm from '@/images/commercial/security-film.jpg'
import DecorativeFilm from '@/images/commercial/decorative-film.jpg'
import PrivacyBuilding from '@/images/building.jpg'
import AntiGraffitiFilm from '@/images/commercial/anti-graffiti.jpg'
import WallGraphics from '@/images/commercial/wall-graphics.jpg'

import {
  SunIcon,
  ShieldCheckIcon,
  SparklesIcon,
  EyeSlashIcon,
  DocumentCheckIcon,
  PaintBrushIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HeartIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  PhoneIcon,
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CheckIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Commercial Window Film Solutions | Texas Tint',
  description:
    'Houston commercial window tinting contractor. High-performance solar control films, 3M security glazing, frosted decorative glass, anti-graffiti shields, and architectural wall graphics.',
}

// 6-Product Commercial Catalog Data
const commercialProducts = [
  {
    title: 'Solar Control Window Film',
    badge: 'Energy Efficiency & Climate Control',
    image: SolarFilm,
    alt: 'Commercial solar control window film rejecting heat and glare on building glass',
    specs: [
      { label: 'Heat Rejection', value: 'Up to 75%' },
      { label: 'Glare Reduction', value: 'Up to 62%' },
      { label: 'UV Rejection', value: '99%' },
      { label: 'HVAC Savings', value: 'Up to 30%' },
    ],
    description:
      'Engineered spectrally selective and ceramic window films designed to block intense Texas infrared radiation without sacrificing natural light or altering exterior aesthetics.',
    bullets: [
      'Up to 75% total solar heat rejection to eliminate building hot spots',
      'Cuts HVAC peak load and reduces annual cooling electricity bills by up to 30%',
      '62% glare block optimizes computer monitor visibility and tenant focus',
      'Blocks 99% of damaging UV rays to protect flooring, carpets, and merchandise',
    ],
  },
  {
    title: '3M Safety & Security Film',
    badge: 'Forced Entry & Blast Mitigation',
    image: SecurityFilm,
    alt: 'Certified technician installing heavy-duty 3M safety and security window film',
    specs: [
      { label: 'Gauges Available', value: '7, 8 & 14 mil' },
      { label: 'Tensile Strength', value: '25,000+ PSI' },
      { label: 'Blast Mitigation', value: 'GSA Level 2 / 3B' },
      { label: 'Anchoring System', value: 'Dow 995 Wet-Glaze' },
    ],
    description:
      'High-tensile polyester security films and 3M Ultra multi-layer technology engineered to bond with glass and keep shattered fragments intact during forced entry, severe weather, or blast events.',
    bullets: [
      'Available in 7 mil, 8 mil, and 14 mil heavy-duty thicknesses',
      'Micro-layered tear-resistant construction delays smash-and-grab entry by minutes',
      'Mitigates bomb blast shockwaves and holds hazardous flying glass fragments together',
      'Hurricane windstorm glass retention certified for Houston coastal building codes',
    ],
  },
  {
    title: 'Frosted & Decorative Film',
    badge: 'Privacy & Architectural Design',
    image: DecorativeFilm,
    alt: 'Custom frosted architectural decorative window film on conference room glass',
    specs: [
      { label: 'Applications', value: 'Conference & Offices' },
      { label: 'Design Styles', value: 'Frosted, Etched, Bands' },
      { label: 'Light Transmission', value: 'Diffused Daylight' },
      { label: 'Branding', value: 'Custom CNC Cut Logos' },
    ],
    description:
      'Architectural frosted, patterned, and specialty privacy films that define professional workspaces, provide visual separation for meeting rooms, and enhance corporate branding.',
    bullets: [
      'Executive conference rooms, boardrooms, and private office glass partitions',
      'Visual distraction bands compliant with safety codes for glass corridors and doors',
      'Custom plotter-cut corporate logos, manifestation designs, and directional graphics',
      'Cost-effective alternative to costly sandblasted or acid-etched glass replacement',
    ],
  },
  {
    title: 'One-Way Daytime Privacy Film',
    badge: 'Exterior Reflection & Sun Shield',
    image: PrivacyBuilding,
    alt: 'Commercial storefront facade with reflective one-way daytime privacy film',
    specs: [
      { label: 'Daytime Privacy', value: 'Total Exterior Mirror' },
      { label: 'Glare Reduction', value: 'Up to 93%' },
      { label: 'Total Solar Heat', value: 'Up to 82% Rejected' },
      { label: 'Outbound View', value: 'Crystal-Clear Vision' },
    ],
    description:
      'Reflective and dual-reflective solar films creating complete one-way daytime privacy from the outside while preserving panoramic, crystal-clear outbound visibility for occupants inside.',
    bullets: [
      'Exterior mirror reflection conceals interior operations, equipment, and staff',
      'Glare reduction up to 93% provides optimal screen viewing near large perimeter glass',
      'Delivers massive solar heat rejection to cool south- and west-facing building elevations',
      'Ideal for street-level retail, financial institutions, healthcare suites, and secure labs',
    ],
  },
  {
    title: 'Anti-Graffiti Film',
    badge: 'Sacrificial Surface Defense',
    image: AntiGraffitiFilm,
    alt: 'Sacrificial anti-graffiti surface protection film being peeled away leaving pristine glass',
    specs: [
      { label: 'Caliper Thickness', value: '4 mil & 6 mil' },
      { label: 'Surface Defense', value: 'Paint, Scratches, Acid' },
      { label: 'Maintenance', value: 'Rapid Clean Peel' },
      { label: 'Optical Quality', value: '100% Crystal Clear' },
    ],
    description:
      'Optically clear sacrificial surface protection film designed to absorb vandalism, tagging, acid etching, and intentional scratches, preserving the underlying glass intact.',
    bullets: [
      'Sacrificial surface shield for storefront glass, transit shelters, and elevator cabs',
      'Absorbs spray paint, gouges, key scratches, and corrosive chemical etching',
      'Easy peel-and-replace maintenance without costly glass replacement or business downtime',
      'Repels permanent graffiti markers and withstands routine heavy-duty cleaning',
    ],
  },
  {
    title: 'Architectural Murals & Wall Graphics',
    badge: 'Branded Office Environments',
    image: WallGraphics,
    alt: 'Custom architectural wall mural and environmental vinyl graphics in an executive lounge',
    specs: [
      { label: 'Substrate Media', value: 'Commercial Cast Vinyl' },
      { label: 'Print Resolution', value: 'High-Definition Latex' },
      { label: 'Safety Standard', value: 'Class A Fire Rated' },
      { label: 'Overlaminate', value: 'Matte & Textured Scuff-Proof' },
    ],
    description:
      'High-impact architectural wall graphics, environmental vinyl murals, and branded wall wraps custom fabricated to transform corporate lobbies and office spaces into inspiring environments.',
    bullets: [
      'Custom vinyl graphics, branded office spaces, and executive feature wall wraps',
      'High-resolution architectural printing using durable, odorless commercial inks',
      'Class A fire-rated commercial substrates with scuff-resistant protective laminates',
      'Turnkey visual coordination with frosted glass partitions and window film packages',
    ],
  },
]

// 4-Step Commercial Process Timeline
const commercialProcess = [
  {
    step: '01',
    icon: ClipboardDocumentCheckIcon,
    title: 'Free On-Site Consultation & Glass Assessment',
    description:
      'Our commercial film specialists visit your facility to inspect existing glass types (annealed, tempered, or double-pane IGUs), calculate solar orientation, evaluate thermal stress risks, and take precise laser measurements.',
  },
  {
    step: '02',
    icon: SwatchIcon,
    title: 'Custom Film Specification & Sample Demonstration',
    description:
      'We provide energy savings projections, specification data sheets, and install physical film mock-ups on your actual windows so building stakeholders can review clarity, privacy, and color temperature in real light.',
  },
  {
    step: '03',
    icon: WrenchScrewdriverIcon,
    title: 'Certified Clean Installation (Minimal Disruption)',
    description:
      'Our manufacturer-certified crews execute the installation with meticulous dust containment. We accommodate flexible schedules—including after-hours, overnight, and weekend work—ensuring zero disruption to your daily operations.',
  },
  {
    step: '04',
    icon: DocumentTextIcon,
    title: 'Warranty Delivery & Long-Term Performance',
    description:
      'Following a comprehensive punch-list walkthrough and facility manager sign-off, we register your official 10–15 year commercial manufacturer warranty and provide ongoing care and cleaning guidelines.',
  },
]

// Industries We Serve
const industries = [
  {
    name: 'Office Buildings & Corporate Campuses',
    icon: BuildingOffice2Icon,
    description:
      'Curtain walls, perimeter solar heat reduction, conference room frosted glass, and tenant energy management.',
  },
  {
    name: 'Retail & Storefronts',
    icon: BuildingStorefrontIcon,
    description:
      'UV fade protection for display merchandise, sacrificial anti-graffiti shields, and daytime security.',
  },
  {
    name: 'Healthcare Facilities & Clinics',
    icon: HeartIcon,
    description:
      'HIPAA-compliant frosted privacy glass, thermal stabilization in patient wards, and anti-glare window films.',
  },
  {
    name: 'Educational Institutions & Schools',
    icon: AcademicCapIcon,
    description:
      '3M security & forced-entry mitigation films on exterior glass and classroom doors for campus safety.',
  },
  {
    name: 'Government & Municipal Buildings',
    icon: BuildingLibraryIcon,
    description:
      'GSA blast mitigation compliance, confidential one-way daytime vision films, and utility cost reduction.',
  },
  {
    name: 'Restaurants & Hospitality',
    icon: SparklesIcon,
    description:
      'Guest comfort against harsh afternoon sun, patio enclosure climate control, and branded architectural graphics.',
  },
]

export default function CommercialPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* 1. HERO SECTION */}
      <section className="relative isolate min-h-[640px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
        {/* Background Image with optimized Next.js priority */}
        <Image
          src={CorporateBuilding}
          alt="Modern commercial facility with architectural window film"
          fill
          sizes="100vw"
          priority
          className="absolute inset-0 -z-10 object-cover object-center brightness-[0.80] contrast-[1.05]"
        />
        {/* Cinematic gradient overlays for maximum text legibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/20 lg:to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-400 ring-1 ring-inset ring-brand-500/20 mb-6 backdrop-blur-sm">
              <BuildingOffice2Icon className="h-4 w-4" aria-hidden="true" />
              <span>Houston Commercial Window Film & Surface Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineered Commercial Window Film Solutions
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-300">
              Cut peak cooling costs by up to 30%, fortify building glass against forced entry, ensure tenant privacy, and elevate architectural aesthetics. Texas Tint delivers turnkey B2B glass solutions for facilities across Greater Houston.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Request Your Commercial Bid</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:8323635100"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <PhoneIcon className="h-4 w-4 text-brand-400" aria-hidden="true" />
                <span>(832) 363-5100</span>
              </a>
            </div>

            {/* Hero Quick Stat Badges */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-800/80 pt-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-400">Up to 30%</div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium">HVAC Energy Savings</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-400">Up to 75%</div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium">Solar Heat Rejection</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-400">99%</div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium">UV Radiation Blocked</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-brand-400">10–15 Yr</div>
                <div className="text-xs sm:text-sm text-zinc-400 font-medium">Commercial Warranty</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. KEY BENEFITS SECTION */}
      <section className="py-20 sm:py-24 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
              Measurable ROI & Environmental Performance
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Why Upgrade Your Building&apos;s Glass?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Commercial window films deliver one of the fastest capital improvement paybacks available, driving immediate operational savings while elevating workplace safety and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col rounded-2xl bg-white dark:bg-zinc-800/80 p-6 sm:p-7 shadow-sm border border-zinc-200 dark:border-zinc-700/60 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-5">
                <SunIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                Up to 75% Heat Blocked
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                Up to 75% Heat Rejection
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Curtails intense solar infrared heat gain through curtain walls and storefronts. Lowers peak air conditioning demand and cuts annual HVAC costs by up to 30%.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col rounded-2xl bg-white dark:bg-zinc-800/80 p-6 sm:p-7 shadow-sm border border-zinc-200 dark:border-zinc-700/60 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-5">
                <ShieldCheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                99% Solar Defense
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                99% UV Ray Block
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Shields office furnishings, carpets, expensive display merchandise, and tenant artwork from solar fading while protecting occupants against skin cancer risks.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col rounded-2xl bg-white dark:bg-zinc-800/80 p-6 sm:p-7 shadow-sm border border-zinc-200 dark:border-zinc-700/60 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-5">
                <CheckBadgeIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                Factory Guaranteed
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                10–15 Year Commercial Warranty
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Backed by comprehensive manufacturer warranties against bubbling, peeling, cracking, or delamination, guaranteed by certified commercial installers.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col rounded-2xl bg-white dark:bg-zinc-800/80 p-6 sm:p-7 shadow-sm border border-zinc-200 dark:border-zinc-700/60 hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 mb-5">
                <DocumentCheckIcon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 mb-1">
                Green Building Points
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                LEED Eligibility & Credits
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Commercial films contribute directly toward LEED certification credits in Energy & Atmosphere, Daylight & Views, and Indoor Environmental Quality categories.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. COMPREHENSIVE 6-PRODUCT COMMERCIAL FILM CATALOG GRID */}
      <section className="py-20 sm:py-28 bg-white dark:bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
              Architectural & Security Solutions
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Commercial Film & Surface Protection Catalog
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Explore our full line of commercial glass films, security laminates, anti-graffiti shields, and architectural wall graphics—tailored to meet the demands of Houston commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProducts.map((product) => (
              <article
                key={product.title}
                className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block rounded-md bg-brand-600/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-white">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {product.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="mb-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 p-4 border border-zinc-200/80 dark:border-zinc-700/50">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                      Technical Specifications
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex flex-col">
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">{spec.label}</span>
                          <span className="text-sm font-semibold text-zinc-900 dark:text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-auto">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5">
                      Key Highlights
                    </div>
                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      {product.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-4 w-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Card CTA */}
                    <Link
                      href="/quote"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 dark:hover:text-white transition-colors"
                    >
                      <span>Request Bid for this Solution</span>
                      <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. MANUFACTURER WARRANTY & TRUST SECTION */}
      <section className="py-20 sm:py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-400">
              Institutional Reliability & Compliance
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manufacturer Warranty & Trust Credentials
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400">
              Every commercial project is backed by comprehensive manufacturer coverage and executed by certified technicians with full commercial liability insurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust Item 1 */}
            <div className="flex flex-col rounded-2xl bg-zinc-800/80 p-8 border border-zinc-700/80 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 ring-1 ring-brand-500/20">
                  <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-400">Interior Films</div>
                  <h3 className="text-xl font-bold text-white">10–15 Year Warranty</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Direct manufacturer commercial warranty guaranteeing interior solar, security, and decorative films against bubbling, peeling, cracking, crazing, and delamination.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-700/60 flex items-center gap-2 text-xs text-brand-300 font-medium">
                <CheckIcon className="h-4 w-4 text-brand-400" />
                <span>100% Materials & Labor Replacement Coverage</span>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col rounded-2xl bg-zinc-800/80 p-8 border border-zinc-700/80 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 ring-1 ring-brand-500/20">
                  <SunIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-400">Exterior Applications</div>
                  <h3 className="text-xl font-bold text-white">5–7 Year Warranty</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Heavy-duty exterior-rated films engineered for extreme Texas solar exposure and humidity, protected by robust multi-year commercial exterior warranties.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-700/60 flex items-center gap-2 text-xs text-brand-300 font-medium">
                <CheckIcon className="h-4 w-4 text-brand-400" />
                <span>Weather-Tested & UV Stabilized</span>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col rounded-2xl bg-zinc-800/80 p-8 border border-zinc-700/80 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 ring-1 ring-brand-500/20">
                  <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-400">Compliance & Safety</div>
                  <h3 className="text-xl font-bold text-white">Licensed & Fully Insured</h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Comprehensive commercial general liability insurance and workers&apos; compensation. Customized Certificates of Insurance (COI) issued on request within 24 hours.
              </p>
              <div className="mt-6 pt-4 border-t border-zinc-700/60 flex items-center gap-2 text-xs text-brand-300 font-medium">
                <CheckIcon className="h-4 w-4 text-brand-400" />
                <span>COI Provided Upon Request for General Contractors</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. HOW OUR COMMERCIAL PROCESS WORKS (4-STEP TIMELINE) */}
      <section className="py-20 sm:py-28 bg-white dark:bg-zinc-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
              Turnkey Project Execution
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              How Our Commercial Process Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              From initial laser measurements to certified warranty delivery, we manage your commercial window film project with seamless professional oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commercialProcess.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.step}
                  className="relative flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-brand-600 dark:text-brand-400 font-mono">
                      {step.step}
                    </span>
                    <div className="h-10 w-10 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shadow-sm border border-zinc-200 dark:border-zinc-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-20 sm:py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400">
              Sector Expertise
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Industries We Serve Across Greater Houston
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
              Whether retrofitting an existing corporate campus or bidding on new commercial construction, we deliver customized glazing film solutions for every sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.name}
                  className="flex items-start gap-4 rounded-xl bg-white dark:bg-zinc-800/90 p-6 border border-zinc-200 dark:border-zinc-700/60 shadow-sm"
                >
                  <div className="h-12 w-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
                      {ind.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* 7. FINAL HIGH-CONVERTING CTA SECTION */}
      <section className="relative overflow-hidden bg-brand-700 dark:bg-brand-900 py-20 sm:py-24 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Upgrade Your Commercial Facility?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-100">
              Contact our commercial estimating team today for an on-site consultation, product performance samples, and a detailed B2B proposal for your property.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-xl hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Request Your Commercial Bid</span>
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:8323635100"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-800/80 px-7 py-4 text-base font-bold text-white ring-1 ring-white/30 hover:bg-brand-800 transition-all duration-200"
              >
                <PhoneIcon className="h-5 w-5 text-brand-300" aria-hidden="true" />
                <span>Call (832) 363-5100</span>
              </a>
            </div>

            {/* RFP / Architectural Submittal Note */}
            <div className="mt-12 rounded-xl bg-brand-800/60 p-4 border border-brand-600/40 text-xs sm:text-sm text-brand-100">
              <span className="font-semibold text-white">Architectural Submittals & RFP Assistance:</span> Our commercial estimating team provides CSI 3-part specifications, solar heat gain coefficient (SHGC) documentation, and certified mock-up glass samples.
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
