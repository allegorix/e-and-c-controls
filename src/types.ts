export type AuroraTheme = 'emerald' | 'violet' | 'arctic' | 'solar';

export interface AuroraSettings {
  theme: AuroraTheme;
  speed: number;
  waveCount: number;
  sparkIntensity: number;
  interactiveGlow: boolean;
}

export interface ProjectItem {
  id: string;
  client: string;
  category: 'Media & Press' | 'Industrial Factory' | 'Healthcare' | 'Agriculture & Dairy' | 'Government & Strategic';
  location: string;
  scope: string;
  costInLakhs: number;
  voltageGrade: string;
  description: string;
  highlights: string[];
}

export interface ExpertiseCategory {
  id: string;
  title: string;
  voltageGrade: string;
  iconName: string;
  shortDesc: string;
  fullDetails: string;
  keyDeliverables: string[];
  applications: string[];
}

export interface InfrastructureItem {
  id: string;
  category: 'Cable Laying' | 'Transformer Handling' | 'Testing Instruments' | 'Safety Equipment';
  name: string;
  specifications: string;
  purpose: string;
  isComplianceRequired: boolean;
}

export interface QuoteEstimate {
  projectType: string;
  voltageGrade: string;
  capacityKva: number;
  estimatedRangeMinLakhs: number;
  estimatedRangeMaxLakhs: number;
  timelineWeeks: string;
}
