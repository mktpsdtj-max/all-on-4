// ============================================================
// TODO EL COPY DE LA LANDING ALL-ON-4, EN LOS 2 IDIOMAS.
// Para cambiar cualquier texto, edítalo aquí — no en los componentes.
// ============================================================

import type { Lang } from '../i18n/ui';
import type { HeroCenteredData } from '../components/heroes/HeroCentered.astro';
import type { WhyData } from '../components/WhyTijuana.astro';
import type { SystemData } from '../components/SystemSection.astro';
import type { BenefitsData } from '../components/BenefitsGrid.astro';
import type { ProcessData } from '../components/ProcessSteps.astro';
import type { StoriesData } from '../components/StoriesGallery.astro';
import type { CtaData } from '../components/CtaFinal.astro';

export interface NavLink { href: string; label: string; }

export interface PageContent {
  seo: { title: string; description: string };
  nav: NavLink[];
  hero: HeroCenteredData;
  why: WhyData;
  system: SystemData;
  benefits: BenefitsData;
  process: ProcessData;
  stories: StoriesData;
  cta: CtaData;
}

// ---------- Imágenes (reemplaza estas URLs por las definitivas) ----------
const IMG = {
  hero:
    'https://joseantonioh56.sg-host.com/wp-content/uploads/2026/07/c7875c_0bc119fed459425e88fa15c415d10172mv2.avif',
  clinic:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDkSlZy19tCvBPFuU1gaXbNBUnaUwKr4YlKqcQRgGgi_k1wdOuK2B7FPOrrpzNWXAeZ9ZbVmT0fIoDdSFbA3pqlFHv8jak00_MEKJHmsNA1eIpdRlYcZpUktqcBr-pUKAEkHQiDmz-mmD4j8ed8tOmThIHRqnbVE6IW8wIzd2pJp4npL7X1thjqe25AgrcVTLz4CA91f6N1cF3OtZeKPTpDkddLeSV9sc-iYxB7NHa732k52BO6Nbs',
  patient:
    'https://lh3.googleusercontent.com/aida/AP1WRLvdrWkVu1-4lWV98BrAXN_Uj3FjMlozPGqHWtyWKOBRg1mRQuE0h2VPT_imiJ-Lvtxma7EZtxJIwKV2aOkY72HyqlwEMedu71E0HDJguXMduDOgyQgWvKzmOR6wYtcNnvdFk_EW4JNxuFvMBW0V0OTlWHg19oJS7VRIpnICu6TPs7tohHGAsXxc8EVrEGpLNo7cIXme_pI9KCKgDwTkv387w5zJ8mKMHQNOREzBm_5tIuwuw8_gebWuTA',
};

// ============================================================
const es: PageContent = {
  seo: {
    title: 'Implantes Dentales All-on-4 en Tijuana | Perfect Smile Dental',
    description:
      'Transforma tu sonrisa en un solo día con implantes All-on-4 en Tijuana. Sin dolor, ahorra hasta 70% y a 5 minutos de la frontera con San Diego.',
  },
  nav: [
    { href: '#por-que-tijuana', label: 'Por qué Tijuana' },
    { href: '#sistema', label: 'El Sistema' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#historias', label: 'Historias' },
  ],
  hero: {
    variant: 'centered',
    bg: IMG.hero,
    badge: 'A solo 5 minutos de la frontera de San Diego',
    titleBefore: 'Transforma tu Sonrisa en',
    titleAccent: 'un Solo Día',
    titleAfter: 'con All-on-4',
    subtitle:
      'Implantes de arcada completa, sin dolor, a una fracción del costo de EE. UU. — con especialistas de clase mundial en Tijuana.',
    primaryCta: 'Agenda tu Evaluación Gratuita Hoy',
    secondaryCta: 'Ver Opciones de Precios y Ahorros',
    trust: [
      { icon: 'verified', label: 'Cero Dolor' },
      { icon: 'savings', label: 'Ahorra hasta 70%' },
      { icon: 'location_on', label: 'A 5 min de la frontera' },
    ],
  },
  why: {
    id: 'por-que-tijuana',
    eyebrow: 'Turismo dental sin fricción',
    heading: 'Odontología de Clase Mundial a una Fracción del Costo',
    cards: [
      {
        icon: 'savings',
        tone: 'savings',
        wide: true,
        title: 'Ahorros Inteligentes',
        text: 'Disfruta de un ahorro de hasta el <span class="feature-card__highlight">70%</span> en comparación con los precios en Estados Unidos, sin comprometer jamás la calidad de los materiales (titanio premium) ni la tecnología médica.',
      },
      {
        icon: 'location_on',
        title: 'Ubicación Privilegiada',
        text: 'Instalaciones de vanguardia ubicadas a escasos 5 minutos del puerto de entrada de San Ysidro.',
      },
      {
        icon: 'support_agent',
        title: 'Servicio Concierge',
        text: 'Asistencia integral para pacientes internacionales, desde que cruzas la frontera hasta que sales con tu nueva sonrisa.',
      },
    ],
  },
  system: {
    id: 'sistema',
    eyebrow: 'Claridad técnica, sin jerga',
    heading: 'Máxima Estabilidad con Solo 4 Implantes',
    body: 'El sistema All-on-4 es una técnica innovadora que sostiene toda una arcada de dientes de reemplazo utilizando únicamente cuatro puntos de anclaje. Al colocar los implantes en ángulos estratégicos, maximizamos el uso de tu hueso maxilar existente, brindando una base sólida de por vida.',
    video: {
      src: '',
      type: 'mp4',
      poster: IMG.clinic,
      alt: 'Video explicativo del sistema All-on-4',
      eyebrow: 'Video explicativo',
      title: 'Así funciona el sistema All-on-4',
    },
    tabs: [
      {
        label: 'Implantes de Titanio',
        title: '4 Implantes de Titanio Premium',
        text: 'Raíces artificiales de alta resistencia integradas a tu mandíbula, diseñadas para durar toda la vida.',
      },
      {
        label: 'Pilares Multi-Unidad',
        title: '4 Pilares Multi-Unidad',
        text: 'Los conectores que garantizan la máxima seguridad entre el implante y tu nueva prótesis.',
      },
      {
        label: 'Prótesis de Arco Completo',
        title: 'Prótesis Dental de Arco Completo',
        text: 'Tu nueva sonrisa, diseñada con alta funcionalidad y estética premium desde el primer día.',
      },
    ],
  },
  benefits: {
    id: 'beneficios',
    eyebrow: 'Persuasión y deseo',
    heading: 'Más que una Sonrisa: Los Beneficios de Elegir All-on-4',
    items: [
      {
        icon: 'bolt',
        title: 'Resultados Inmediatos (Same-Day)',
        text: 'Olvídate de los tratamientos que tardan meses. Viaja a Perfect Smile Dental y regresa a casa con tu nueva sonrisa ese mismo día.',
      },
      {
        icon: 'restaurant',
        title: 'Funcionalidad Total Restaurada',
        text: 'Recupera tu fuerza de mordida original. Vuelve a disfrutar de tus comidas favoritas sin miedo a que tu dentadura resbale.',
      },
      {
        icon: 'face_retouching_natural',
        title: 'Rejuvenecimiento Facial',
        text: 'Restaura la altura de tus dientes originales previniendo el deterioro de la mandíbula, devolviendo un contorno juvenil a tu rostro.',
      },
      {
        icon: 'brush',
        title: 'Comodidad de Diente Natural',
        text: 'No hay necesidad de removerlos para limpiarlos. Se cepillan y cuidan igual que los dientes naturales.',
      },
      {
        icon: 'verified_user',
        title: 'Durabilidad de por Vida',
        text: 'Una inversión inteligente a largo plazo en tu salud y autoestima.',
      },
    ],
  },
  process: {
    id: 'proceso',
    eyebrow: 'Reducción de fricción',
    heading: 'Tu Procedimiento Cómodo y Seguro de Principio a Fin',
    connector: 'arrows',
    steps: [
      {
        icon: 'radiology',
        eyebrow: 'PASO 1',
        title: 'Análisis Preoperatorio Avanzado',
        text: 'Utilizamos Rayos X y tomografías computarizadas (CT Scans) para una precisión absoluta en nuestras instalaciones de Tijuana.',
      },
      {
        icon: 'view_in_ar',
        eyebrow: 'PASO 2',
        title: 'Diagnóstico y Planificación 3D',
        text: 'Diseñamos una estrategia a medida para tu estructura ósea, antes de que pises el quirófano.',
      },
      {
        icon: 'task_alt',
        eyebrow: 'PASO 3',
        title: 'Colocación Same-Day',
        text: 'En una sola visita transfronteriza, realizamos el procedimiento y colocamos tu prótesis para que vuelvas a sonreír de inmediato.',
      },
    ],
  },
  stories: {
    id: 'historias',
    eyebrow: 'Autoridad',
    heading: 'Historias Reales. Vidas Transformadas.',
    intro:
      'Descubre cómo el tratamiento All-on-4 en Tijuana ha cambiado la vida de cientos de pacientes, devolviéndoles la confianza para sonreír y ahorrándoles miles de dólares.',
    groups: [
      [
        { src: IMG.clinic, alt: 'Paciente sonriendo tras su tratamiento All-on-4' },
        { src: IMG.patient, alt: 'Paciente internacional feliz con su nueva sonrisa' },
        { src: IMG.clinic, alt: 'Clínica y equipo especializado' },
      ],
      [
        { src: IMG.patient, alt: 'Sonrisa transformada tras el tratamiento' },
        { src: IMG.clinic, alt: 'Consulta especializada en la clínica' },
        { src: IMG.patient, alt: 'Paciente feliz con el resultado final' },
      ],
    ],
  },
  cta: {
    title: '¿Listo para dejar atrás las molestias de los dientes perdidos y ahorrar en tu tratamiento?',
    subtitle:
      'Da el primer paso hacia la sonrisa natural que mereces hoy mismo. Planifica tu viaje dental a Tijuana con nosotros.',
    primary: 'Solicitar Cita Presencial y Plan de Viaje',
    secondary: 'Agendar una Videoconsulta Gratuita',
  },
};

// ============================================================
const en: PageContent = {
  seo: {
    title: 'All-on-4 Dental Implants in Tijuana | Perfect Smile Dental',
    description:
      'Transform your smile in a single day with All-on-4 implants in Tijuana. Pain-free, save up to 70% and just 5 minutes from the San Diego border.',
  },
  nav: [
    { href: '#por-que-tijuana', label: 'Why Tijuana' },
    { href: '#sistema', label: 'The System' },
    { href: '#beneficios', label: 'Benefits' },
    { href: '#proceso', label: 'Process' },
    { href: '#historias', label: 'Stories' },
  ],
  hero: {
    variant: 'centered',
    bg: IMG.hero,
    badge: 'Just 5 minutes from the San Diego border',
    titleBefore: 'Transform Your Smile in',
    titleAccent: 'Just One Day',
    titleAfter: 'with All-on-4',
    subtitle:
      'Full-arch implants, pain-free, at a fraction of the US cost — with world-class specialists in Tijuana.',
    primaryCta: 'Book Your Free Evaluation Today',
    secondaryCta: 'View Pricing and Savings Options',
    trust: [
      { icon: 'verified', label: 'Zero Pain' },
      { icon: 'savings', label: 'Save up to 70%' },
      { icon: 'location_on', label: '5 min from the border' },
    ],
  },
  why: {
    id: 'por-que-tijuana',
    eyebrow: 'Frictionless dental tourism',
    heading: 'World-Class Dentistry at a Fraction of the Cost',
    cards: [
      {
        icon: 'savings',
        tone: 'savings',
        wide: true,
        title: 'Smart Savings',
        text: 'Enjoy savings of up to <span class="feature-card__highlight">70%</span> compared to US prices, without ever compromising on material quality (premium titanium) or medical technology.',
      },
      {
        icon: 'location_on',
        title: 'Prime Location',
        text: 'State-of-the-art facilities located just 5 minutes from the San Ysidro port of entry.',
      },
      {
        icon: 'support_agent',
        title: 'Concierge Service',
        text: 'Comprehensive assistance for international patients, from the moment you cross the border until you leave with your new smile.',
      },
    ],
  },
  system: {
    id: 'sistema',
    eyebrow: 'Technical clarity, no jargon',
    heading: 'Maximum Stability with Just 4 Implants',
    body: 'The All-on-4 system is an innovative technique that supports an entire arch of replacement teeth using only four anchor points. By placing the implants at strategic angles, we maximize the use of your existing jawbone, providing a solid foundation for life.',
    video: {
      src: '',
      type: 'mp4',
      poster: IMG.clinic,
      alt: 'Explainer video for the All-on-4 system',
      eyebrow: 'Explainer video',
      title: 'How the All-on-4 system works',
    },
    tabs: [
      {
        label: 'Titanium Implants',
        title: '4 Premium Titanium Implants',
        text: 'High-strength artificial roots integrated into your jawbone, designed to last a lifetime.',
      },
      {
        label: 'Multi-Unit Abutments',
        title: '4 Multi-Unit Abutments',
        text: 'The connectors that guarantee maximum security between the implant and your new prosthesis.',
      },
      {
        label: 'Full-Arch Prosthesis',
        title: 'Full-Arch Dental Prosthesis',
        text: 'Your new smile, designed with high functionality and premium aesthetics from day one.',
      },
    ],
  },
  benefits: {
    id: 'beneficios',
    eyebrow: 'Persuasion and desire',
    heading: 'More Than a Smile: The Benefits of Choosing All-on-4',
    items: [
      {
        icon: 'bolt',
        title: 'Immediate Results (Same-Day)',
        text: 'Forget treatments that take months. Travel to Perfect Smile Dental and go home with your new smile that very same day.',
      },
      {
        icon: 'restaurant',
        title: 'Full Functionality Restored',
        text: 'Regain your original bite force. Enjoy your favorite foods again without fear of your dentures slipping.',
      },
      {
        icon: 'face_retouching_natural',
        title: 'Facial Rejuvenation',
        text: 'Restores the height of your original teeth, preventing jawbone deterioration and giving your face a more youthful contour.',
      },
      {
        icon: 'brush',
        title: 'Natural-Tooth Comfort',
        text: 'No need to remove them to clean them. Brush and care for them exactly like natural teeth.',
      },
      {
        icon: 'verified_user',
        title: 'Lifetime Durability',
        text: 'A smart, long-term investment in your health and self-esteem.',
      },
    ],
  },
  process: {
    id: 'proceso',
    eyebrow: 'Reducing friction',
    heading: 'Your Comfortable, Safe Procedure from Start to Finish',
    connector: 'arrows',
    steps: [
      {
        icon: 'radiology',
        eyebrow: 'STEP 1',
        title: 'Advanced Preoperative Analysis',
        text: 'We use X-rays and CT scans for absolute precision at our Tijuana facility.',
      },
      {
        icon: 'view_in_ar',
        eyebrow: 'STEP 2',
        title: '3D Diagnosis and Planning',
        text: 'We design a custom strategy for your bone structure before you ever step into the operating room.',
      },
      {
        icon: 'task_alt',
        eyebrow: 'STEP 3',
        title: 'Same-Day Placement',
        text: 'In a single cross-border visit, we perform the procedure and place your prosthesis so you can start smiling again right away.',
      },
    ],
  },
  stories: {
    id: 'historias',
    eyebrow: 'Authority',
    heading: 'Real Stories. Transformed Lives.',
    intro:
      'Discover how All-on-4 treatment in Tijuana has changed the lives of hundreds of patients, giving them back the confidence to smile and saving them thousands of dollars.',
    groups: [
      [
        { src: IMG.clinic, alt: 'Patient smiling after All-on-4 treatment' },
        { src: IMG.patient, alt: 'International patient happy with their new smile' },
        { src: IMG.clinic, alt: 'Clinic and specialized team' },
      ],
      [
        { src: IMG.patient, alt: 'Transformed smile after treatment' },
        { src: IMG.clinic, alt: 'Specialized consultation at the clinic' },
        { src: IMG.patient, alt: 'Happy patient with the final result' },
      ],
    ],
  },
  cta: {
    title: 'Ready to leave the discomfort of missing teeth behind and save on your treatment?',
    subtitle:
      'Take the first step toward the natural smile you deserve today. Plan your dental trip to Tijuana with us.',
    primary: 'Request an In-Person Appointment and Travel Plan',
    secondary: 'Schedule a Free Video Consultation',
  },
};

const content: Record<Lang, PageContent> = { es, en };

export function getContent(lang: Lang): PageContent {
  return content[lang];
}

export default content;
