export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  priceLevel: number;
  image?: string;
  tags?: string[];
  metrics?: {
    durability: number;
    efficiency: number;
    care: number;
  };
}

export interface ConfigStep {
  id: number;
  title: string;
  question: string;
  description: string;
  options: ConfigOption[];
  slug: "category" | "material" | "size" | "design" | "color" | "hardware" | "extras";
}

export const CONFIG_STEPS: ConfigStep[] = [
  {
    id: 1,
    title: "Category",
    slug: "category",
    question: "What type of door are you looking for?",
    description: "Choose a category to begin customizing your perfect door.",
    options: [
      { id: "front", name: "Front door / Entrance", description: "Premium entrance solutions", priceLevel: 3, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFLCvCRBKYTSc_79oEJN1WmKb66kDDQe-mLdQl14iER4l3TZlJvCl885nu5-amEPOB-pnVIGIJYMnpqKnMsgOcWdG81a-FlnK7Sb0K4pK2wdmpNbIHvRp2wGYdHWreTP8vEYDw54YiGeVnyptwaUfDDQzA6twFmaqunOTvirKmYVXkx3ZSmxJZQ0ka58tdQb74PuCwIT9GKeoVpWrySpZ4-EdfF89vNPcu6ML5zImp_HT_GZcWvHNn3erA9XeY6NRvT5I7ZqoQ5Ap" },
      { id: "interior", name: "Interior door", description: "Stylish indoor division", priceLevel: 1, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAIEqP7HwnKuaCEMi4L67MZs348H6GN0gT1lzQMhi3byWOI30KKY5g9VGRfrHX8hg4wG2uW7RCeemL4UO29tEBzN-jjlDtrf-a2ppLXlnIWJUb-1cwJfLOeOunxcmna6uxTxGsUemvYpxOwLLsyAH90oR02q4S1cgT4XF23PMsmiuarrAL-c-vFGpItpDvsvHnYsZyRtG6D3TI8O8_81dTpi2qxlJcyhf-gQqUxHfVV9mmMQaIzAQteXseQ7qZzhNS9eUqTUxI9DEi" },
      { id: "sliding", name: "Sliding door", description: "Seamless transition to outdoors", priceLevel: 2, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC12oGiadKSXzplZeNPizcNatzI-ukV4ln13KgVc7yq8sCNIv4so4Jhd32TLbZcKPeuWe1uotUVahvGnstBqrh1j0GsGzowUZz2zQ_Y2pdT1mlT9LjhLaS0hIxiIfqbeNPmzRBah2fKHhy0OWfXGxTD7VPbb4DNs8IdOrCh1dYQVsRNV9fx-gWFbYblB3iu7Fjf5ozc_QIDUxDBdpomEClgnOT8C1wzXZYMf4rua14PKNa5ETEMa_qyiuKfZgy9SakgsET2WnSufdRe" },
    ]
  },
  {
    id: 2,
    title: "Material",
    slug: "material",
    question: "Select Material",
    description: "Choose the core construction and surface finish of your door.",
    options: [
      { 
        id: "timber", 
        name: "Solid Timber", 
        description: "Premium Natural Finish", 
        priceLevel: 3, 
        image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=200",
        metrics: { durability: 2, efficiency: 3, care: 1 }
      },
      { 
        id: "aluminium", 
        name: "Aluminium", 
        description: "Modern & Slimline", 
        priceLevel: 2, 
        image: "https://images.unsplash.com/photo-1544253303-317135061453?auto=format&fit=crop&q=80&w=200",
        metrics: { durability: 3, efficiency: 2, care: 3 }
      },
    ]
  },
  {
    id: 3,
    title: "Size",
    slug: "size",
    question: "Dimensions & Fit",
    description: "Provide the required measurements for your custom door.",
    options: [
      { id: "standard", name: "Standard (90x210cm)", description: "Most common residential size", priceLevel: 1 },
      { id: "oversized", name: "Oversized (110x240cm)", description: "For grand entrances", priceLevel: 2 },
    ]
  },
  {
    id: 4,
    title: "Design",
    slug: "design",
    question: "Style & Aesthetics",
    description: "Select the architectural style and panel layout.",
    options: [
      { id: "modern", name: "Modern Minimalist", description: "Clean lines and smooth surface", priceLevel: 2 },
      { id: "classic", name: "Classic Panel", description: "Traditional recessed decorative panels", priceLevel: 3 },
    ]
  },
  {
    id: 5,
    title: "Color",
    slug: "color",
    question: "Finish & Color",
    description: "Choose from our curated RAL palette or textured finishes.",
    options: [
      { id: "anthracite", name: "Anthracite Gray", description: "The architectural standard", priceLevel: 1 },
      { id: "oak", name: "Natural Oak", description: "Warm and inviting texture", priceLevel: 2 },
    ]
  },
  {
    id: 6,
    title: "Hardware",
    slug: "hardware",
    question: "Handles & Security",
    description: "Select your hardware suite and locking system.",
    options: [
      { id: "secure-x", name: "Professional Secure-X", description: "Our most secure multi-point lock", priceLevel: 3 },
      { id: "standard-h", name: "Standard Elegant", description: "Slim and functional design", priceLevel: 1 },
    ]
  },
  {
    id: 7,
    title: "Extras",
    slug: "extras",
    question: "Additional Features",
    description: "Enhance your door with smart technology or installation services.",
    options: [
      { id: "smart", name: "Smart Access Pro", description: "Fingerprint and App control", priceLevel: 3 },
      { id: "install", name: "Premium Installation", description: "Professional measurement and fitting", priceLevel: 2 },
    ]
  }
];

export const MOCK_SUMMARY = {
  currentPrice: 2840,
  currency: "USD",
  basePrice: 1500,
};
