export interface HistoricalFigure {
  id: string;
  name: string;
  lifespan: string;
  role: string;
  portraitUrl: string;
  bioSnippet: string;
  fullBio: string;
  achievements: string[];
  timelineSnippet: string;
  moolConnection?: string;
  era: 'Ancient' | 'Medieval' | 'Colonial' | 'Modern';
  citation: string;
  personalAnecdote?: string; // A human story/detail about the person
  familyStory?: string; // Family background or legacy
  interestingFact?: string; // Fun or surprising detail
}

export interface MoolData {
  id: string;
  moolName: string; // Primay Clan / Lineage name
  purushName: string; // Founding Ancestor if known
  originVillage: string; // Original administrative or village root
  region: string; // e.g., Magadh, Mithila, Saran
  description: string;
  keyFamilies: string[];
  historicalCitations: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  era: 'Ancient' | 'Medieval' | 'Colonial' | 'Modern';
  title: string;
  shortDescription: string;
  detailedDescription: string;
  significance: string;
  citation: string;
}

export interface ArchiveDocument {
  id: string;
  title: string;
  author: string;
  year: number;
  type: 'Research Paper' | 'Book' | 'Manuscript' | 'Historical Record';
  source: string;
  description: string;
  snippet: string;
  citation: string;
  tags: string[];
}

export interface RegionData {
  id: string;
  name: string;
  historicalName: string;
  moolCount: number;
  description: string;
  coordinates?: { lat: number; lng: number };
  keySites: string[];
}

export interface CommunitySector {
  id: string;
  title: string; // "Education", "Military", "Politics", "Culture"
  iconName: string;
  percentageMetric: string;
  metricLabel: string;
  description: string;
  keyLeaders: string[];
  historicalMilestones: string[];
}
