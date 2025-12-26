
import { Language } from './types';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      quote: 'Presupuesto'
    },
    hero: {
      badge: 'Expertos en DGT y Matriculaciones',
      title: 'Líderes en Gestión de Vehículos',
      subtitle: 'en la Costa del Sol',
      desc: 'Desde 1995 simplificamos la importación, matriculación y transferencia de su vehículo. Agilidad profesional con sello de Marbella.',
      cta: 'Trámites DGT al Instante',
      ctaSecondary: 'Consulta Rápida',
      stats: {
        vehicles: 'Vehículos Matriculados',
        guarantee: 'Garantía Jurídica'
      }
    },
    vehicleFocus: {
      badge: 'Hub de Tráfico',
      title: 'Soluciones',
      highlight: 'DGT',
      titleSuffix: 'para Vehículos de Alta Gama',
      desc: 'Especializados en el parque automovilístico de Marbella. Gestionamos desde deportivos hasta embarcaciones y motos.',
      priority: 'Servicio Prioritario',
      steps: [
        {
          title: "Importación",
          desc: "Gestión integral de aduanas, impuestos y matriculación para vehículos procedentes del extranjero."
        },
        {
          title: "Matriculación",
          desc: "Obtención de placas definitivas, inspecciones técnicas y gestión de distintivos ambientales."
        },
        {
          title: "Cambio de Titular",
          desc: "Transferencias de propiedad inmediatas a través de nuestra conexión directa con DGT."
        }
      ]
    },
    video: {
      badge: 'Video Presentación',
      title: 'Compromiso en Acción',
      quote: '"En Tramisur transformamos la burocracia en una experiencia sencilla y eficaz, garantizando su tranquilidad en cada paso del camino."'
    },
    about: {
      badge: 'Tradición y Excelencia',
      title: 'Líderes en Gestión Administrativa en',
      highlight: 'la Costa del Sol',
      desc1: 'Desde 1995, Tramisur se ha consolidado como la gestoría de referencia en Marbella, ofreciendo un servicio boutique donde la agilidad y el rigor jurídico son nuestras señas de identidad.',
      desc2: 'Nuestro equipo multidisciplinar garantiza que cada expediente se gestione con la máxima precisión, adaptándonos a la normativa vigente y proporcionando soluciones a medida.',
      features: [
        'Atención multilingüe experta',
        'Trámites DGT de alta prioridad',
        'Asesoría fiscal avanzada',
        'Gestión de patrimonio internacional'
      ],
      experience: 'Años de experiencia',
      mission: 'Nuestra misión es aportar seguridad jurídica y tranquilidad a quienes confían en nosotros.'
    },
    team: {
      badge: 'Nuestro Equipo',
      title: 'El Valor Humano de',
      highlight: 'Tramisur',
      desc: 'Detrás de nuestra reputación hay personas comprometidas con la ética profesional y la atención personalizada. Combinamos veteranía administrativa con una visión moderna y digitalizada.',
      quote: '"Un equipo altamente cualificado que entiende las necesidades de Marbella y sus ciudadanos internacionales."',
      features: [
        { title: 'Compromiso Total', desc: 'Gestión proactiva de sus expedientes para evitar retrasos y complicaciones innecesarias.' },
        { title: 'Cercanía Exclusiva', desc: 'Trato directo y transparente. Usted siempre sabrá en qué estado se encuentra su trámite.' }
      ]
    },
    services: {
      badge: 'Portafolio Completo',
      title: 'Otros Servicios de',
      highlight: 'Gestoría',
      cta: 'Solicitar Presupuesto',
      list: [
        {
          id: "conductores",
          title: "Permisos y Conductores",
          description: "Gestión completa de su documentación para conducir en España.",
          items: ["Canjes de permisos extranjeros", "Renovación de carnet", "Duplicados", "Permiso internacional", "Gestión de multas"]
        },
        {
          id: "inmobiliario",
          title: "Gestión Inmobiliaria",
          description: "Seguridad jurídica total en sus operaciones de compraventa.",
          items: ["Obtención de NIE", "Poderes notariales", "Revisión de cargas", "Impuestos ITP", "Cambios de suministros"]
        },
        {
          id: "fiscal-juridico",
          title: "Asesoría Fiscal y Jurídica",
          description: "Optimización tributaria para residentes y no residentes.",
          items: ["Impuesto de Sucesiones", "Declaración Renta", "No Residentes (Mod 210)", "Planificación herencias", "Asistencia Notaría"]
        }
      ]
    },
    contact: {
      title: 'Hablemos de',
      highlight: 'su Consulta',
      desc: 'Nuestro equipo de expertos está listo para asesorarle. Elija el canal que prefiera para contactar con nosotros.',
      form: {
        name: 'Nombre Completo',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        message: 'Detalles de su Consulta',
        placeholderName: 'Su nombre',
        placeholderMessage: '¿En qué podemos ayudarle?',
        submit: 'Enviar Solicitud',
        footer: 'Privacidad 100% Garantizada · Sin Compromiso'
      },
      labels: {
        address: 'Nuestra Sede',
        direct: 'Directo',
        whatsapp: 'WhatsApp',
        email: 'Email Corporativo'
      }
    },
    footer: {
      desc: 'Su socio estratégico para trámites administrativos, legales y fiscales en Marbella desde hace tres décadas.',
      menu: 'Menú',
      specialties: 'Especialidades',
      attention: 'Atención',
      rights: 'Todos los derechos reservados',
      privacy: 'Pol. Privacidad',
      cookies: 'Cookies',
      legal: 'Aviso Legal',
      maps: 'Ver en Google Maps',
      specialtyList: ['DGT Marbella', 'Inmobiliaria', 'Herencias', 'Asesoría Fiscal'],
      madeBy: 'Web hecha por'
    },
    ui: {
      cookies: {
        text: 'Utilizamos cookies propias y de terceros para mejorar su experiencia y analizar nuestros servicios. Al continuar navegando, consideramos que acepta su uso.',
        accept: 'Aceptar',
        close: 'Cerrar'
      },
      whatsapp: '¿Cómo podemos ayudarle?'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      quote: 'Get a Quote'
    },
    hero: {
      badge: 'Experts in DGT & Registrations',
      title: 'Leaders in Vehicle Management',
      subtitle: 'on the Costa del Sol',
      desc: 'Since 1995, we simplify the import, registration, and transfer of your vehicle. Professional agility with the Marbella seal.',
      cta: 'Instant DGT Procedures',
      ctaSecondary: 'Quick Consultation',
      stats: {
        vehicles: 'Registered Vehicles',
        guarantee: 'Legal Guarantee'
      }
    },
    vehicleFocus: {
      badge: 'Traffic Hub',
      title: 'DGT',
      highlight: 'Solutions',
      titleSuffix: 'for Luxury Vehicles',
      desc: 'Specialized in Marbella\'s luxury car market. We manage everything from sports cars to boats and motorcycles.',
      priority: 'Priority Service',
      steps: [
        {
          title: "Importation",
          desc: "Full management of customs, taxes, and registration for vehicles coming from abroad."
        },
        {
          title: "Registration",
          desc: "Obtaining permanent plates, technical inspections, and environmental badges management."
        },
        {
          title: "Transfer of Ownership",
          desc: "Immediate ownership transfers through our direct connection with the DGT."
        }
      ]
    },
    video: {
      badge: 'Video Presentation',
      title: 'Commitment in Action',
      quote: '"At Tramisur, we transform bureaucracy into a simple and effective experience, guaranteeing your peace of mind at every step."'
    },
    about: {
      badge: 'Tradition & Excellence',
      title: 'Leaders in Administrative Management in',
      highlight: 'the Costa del Sol',
      desc1: 'Since 1995, Tramisur has established itself as the leading consultancy in Marbella, offering a boutique service where agility and legal rigor are our hallmarks.',
      desc2: 'Our multidisciplinary team ensures that every file is managed with maximum precision, adapting to current regulations and providing tailored solutions.',
      features: [
        'Expert multilingual support',
        'High-priority DGT procedures',
        'Advanced tax advisory',
        'International wealth management'
      ],
      experience: 'Years of experience',
      mission: 'Our mission is to provide legal security and peace of mind to those who trust us.'
    },
    team: {
      badge: 'Our Team',
      title: 'The Human Value of',
      highlight: 'Tramisur',
      desc: 'Behind our reputation are people committed to professional ethics and personalized attention. We combine administrative seniority with a modern, digital vision.',
      quote: '"A highly qualified team that understands the needs of Marbella and its international citizens."',
      features: [
        { title: 'Total Commitment', desc: 'Proactive management of your files to avoid delays and unnecessary complications.' },
        { title: 'Exclusive Proximity', desc: 'Direct and transparent treatment. You will always know the status of your procedure.' }
      ]
    },
    services: {
      badge: 'Full Portfolio',
      title: 'Other Professional',
      highlight: 'Services',
      cta: 'Request a Quote',
      list: [
        {
          id: "drivers",
          title: "Licenses & Drivers",
          description: "Complete management of your documentation to drive in Spain.",
          items: ["Exchange of foreign licenses", "License renewal", "Duplicates", "International permit", "Traffic fine management"]
        },
        {
          id: "realestate",
          title: "Real Estate Management",
          description: "Total legal security in your buying and selling operations.",
          items: ["NIE obtaining", "Powers of attorney", "Lien searches", "Transfer taxes", "Utility changes"]
        },
        {
          id: "tax-legal",
          title: "Tax & Legal Advisory",
          description: "Tax optimization for residents and non-residents.",
          items: ["Inheritance Tax", "Income Tax (IRPF)", "Non-Residents (Mod 210)", "Estate planning", "Notary assistance"]
        }
      ]
    },
    contact: {
      title: 'Let\'s Talk About',
      highlight: 'Your Inquiry',
      desc: 'Our team of experts is ready to advise you. Choose your preferred channel to contact us.',
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        message: 'Inquiry Details',
        placeholderName: 'Your name',
        placeholderMessage: 'How can we help you?',
        submit: 'Send Request',
        footer: '100% Privacy Guaranteed · No Commitment'
      },
      labels: {
        address: 'Our Headquarters',
        direct: 'Direct Line',
        whatsapp: 'WhatsApp',
        email: 'Corporate Email'
      }
    },
    footer: {
      desc: 'Your strategic partner for administrative, legal, and tax procedures in Marbella for three decades.',
      menu: 'Menu',
      specialties: 'Specialties',
      attention: 'Support',
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      cookies: 'Cookies',
      legal: 'Legal Notice',
      maps: 'View on Google Maps',
      specialtyList: ['DGT Marbella', 'Real Estate', 'Inheritance', 'Tax Advisory'],
      madeBy: 'Web by'
    },
    ui: {
      cookies: {
        text: 'We use our own and third-party cookies to improve your experience and analyze our services. By continuing to browse, we consider that you accept their use.',
        accept: 'Accept',
        close: 'Close'
      },
      whatsapp: 'How can we help you?'
    }
  }
};
