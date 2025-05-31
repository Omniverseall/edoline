export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeatureGroup {
  id: string;
  title: string;
  description: string;
  features: Feature[];
}

export interface TestimonialType {
  id: string;
  quote: string;
  author: string;
  role: string;
}