export type PropertyType = "For Sale" | "To Let";
export type PropertyCategory = "Houses" | "Apartments" | "Commercial" | "Land";

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  price: string;
  currency: string;
  type: PropertyType;
  category: PropertyCategory;
  beds?: number;
  baths?: number;
  size?: string;
  plotSize?: string;
  yearBuilt?: number;
  description: string;
  features: string[];
  images: string[];
  agentNote?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "contemporary-highland-residence",
    title: "Contemporary Highland Residence",
    location: "Ezulwini Valley",
    price: "4,850,000",
    currency: "SZL",
    type: "For Sale",
    category: "Houses",
    beds: 4,
    baths: 3,
    size: "420 m²",
    plotSize: "2,100 m²",
    yearBuilt: 2019,
    description:
      "Set against the dramatic backdrop of the Ezulwini Valley, this contemporary highland residence offers refined living with sweeping mountain views. Floor-to-ceiling glazing, refined finishes, and a seamless indoor-outdoor flow define the home. Ideal for those seeking a private family sanctuary with proximity to the capital.",
    features: [
      "Open-plan living and dining",
      "Chef’s kitchen with island",
      "Master suite with private balcony",
      "Covered outdoor entertainment area",
      "Double garage with storage",
      "Secure perimeter and automated access",
      "Landscaped gardens",
      "Borehole water supply",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
    agentNote: "Quiet cul-de-sac location with strong long-term value.",
  },
  {
    id: "2",
    slug: "executive-apartment-mountain-views",
    title: "Executive Apartment with Mountain Views",
    location: "Mbabane",
    price: "18,500",
    currency: "SZL",
    type: "To Let",
    category: "Apartments",
    beds: 2,
    baths: 2,
    size: "145 m²",
    yearBuilt: 2021,
    description:
      "A sophisticated executive apartment in a well-managed complex in Mbabane. Large windows frame mountain views, while the open layout and quality finishes create a calm, modern living environment. Secure parking and on-site amenities complete the offering.",
    features: [
      "Two double bedrooms with built-in wardrobes",
      "Open-plan living and kitchen",
      "Private balcony with mountain views",
      "Secure underground parking",
      "24-hour security",
      "Backup power",
      "Communal pool and gym access",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3be42?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: "3",
    slug: "prime-commercial-corner-site",
    title: "Prime Commercial Corner Site",
    location: "Manzini",
    price: "6,200,000",
    currency: "SZL",
    type: "For Sale",
    category: "Commercial",
    size: "1,200 m²",
    plotSize: "1,200 m²",
    description:
      "A high-visibility corner commercial site in a growing node of Manzini. Excellent frontage, strong traffic flow, and flexible zoning make this an attractive opportunity for retail, mixed-use, or investment development.",
    features: [
      "Corner position with dual road frontage",
      "High visibility and foot traffic",
      "Flexible commercial zoning",
      "Existing services connection points",
      "Suitable for retail or mixed-use",
      "Strong investment fundamentals",
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    ],
    agentNote: "Rare corner opportunity in an established commercial corridor.",
  },
  {
    id: "4",
    slug: "spacious-family-home-acreage",
    title: "Spacious Family Home on Acreage",
    location: "Malkerns",
    price: "3,950,000",
    currency: "SZL",
    type: "For Sale",
    category: "Houses",
    beds: 5,
    baths: 4,
    size: "380 m²",
    plotSize: "1.2 ha",
    yearBuilt: 2012,
    description:
      "A generous family home set on over a hectare in the fertile Malkerns valley. Mature gardens, multiple living areas, and space for expansion make this ideal for a growing family or those seeking a lifestyle property with room to breathe.",
    features: [
      "Five bedrooms including large master suite",
      "Formal and informal living areas",
      "Country-style kitchen",
      "Covered patio and braai area",
      "Staff quarters",
      "Borehole and irrigation",
      "Established fruit trees",
      "Secure boundary fencing",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop",
    ],
  },
  {
    id: "5",
    slug: "serviced-development-land",
    title: "Serviced Development Land",
    location: "Matsapha",
    price: "1,850,000",
    currency: "SZL",
    type: "For Sale",
    category: "Land",
    size: "2,500 m²",
    plotSize: "2,500 m²",
    description:
      "Fully serviced residential development land in Matsapha, ready for construction. Ideal for a developer or private buyer seeking a well-located plot with services already in place.",
    features: [
      "Fully serviced stand",
      "Electricity, water, and sewer connections",
      "Clear title and approved survey",
      "Quiet residential pocket",
      "Easy access to main routes",
      "Suitable for single or dual dwelling",
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: "6",
    slug: "luxury-penthouse-suite",
    title: "Luxury Penthouse Suite",
    location: "Mbabane Central",
    price: "28,000",
    currency: "SZL",
    type: "To Let",
    category: "Apartments",
    beds: 3,
    baths: 2,
    size: "210 m²",
    yearBuilt: 2020,
    description:
      "An elevated penthouse residence in the heart of Mbabane. Generous proportions, high-end finishes, and panoramic city and mountain views create a rare offering for executives or discerning tenants seeking privacy and prestige.",
    features: [
      "Three bedrooms with en-suite options",
      "Expansive open-plan living",
      "Private rooftop terrace",
      "Premium kitchen appliances",
      "Secure allocated parking",
      "Backup generator",
      "Concierge and security",
      "Air conditioning throughout",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3be42?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    ],
    agentNote: "Limited availability in this complex — early viewing recommended.",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getAllPropertyIds(): string[] {
  return properties.map((p) => p.id);
}

export function getAllPropertySlugs(): string[] {
  return properties.map((p) => p.slug);
}
