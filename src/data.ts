import { HistoricalFigure, MoolData, TimelineEvent, ArchiveDocument, RegionData, CommunitySector } from './types';

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  {
    id: 'sahajanand-saraswati',
    name: 'Swami Sahajanand Saraswati',
    lifespan: '1889 - 1950',
    role: 'Peasant Leader, Academic, Nationalist',
    portraitUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    bioSnippet: 'A revolutionary ascetic, intellectual, and pioneer of the Kisan Sabha movement, Swami Sahajanand organized the peasantry of eastern India against feudal inequalities, becoming one of India\'s most influential agrarian leaders.',
    fullBio: 'Born in eastern Uttar Pradesh and later establishing his primary ashram at Bihta near Patna, Swami Sahajanand was a scholar of Sanskrit, Mimamsa, and philosophy before dedicating his life to social justice. Recognizing that religious asceticism was empty without tackling the material starvation of the peasantry, he founded the All India Kisan Sabha in 1936. His powerful writing and fiery speeches mobilized millions of farmers, fundamentally altering the agrarian political landscape during the final decennia of British colonial rule.',
    achievements: [
      'Founded the All India Kisan Sabha (AIKS) in Lucknow (1936)',
      'Published the influential revolutionary weekly journal "Hunkar"',
      'Authored key intellectual treatises including "Kranti aur Sanyas" and "Mera Jivan Sangharsh"',
      'Pioneered agrarian rights and debt-relief conventions leading to post-independence land reforms'
    ],
    timelineSnippet: 'Led the historic Bakasht peasant struggle of 1937–1939 in Bihar, securing tenancy protections.',
    moolConnection: 'Jetharia Purush',
    era: 'Colonial',
    citation: 'Saraswati, S. S. (1940). Mera Jivan Sangharsh (My Life Struggle). Bihta Ashram Press.',
    personalAnecdote: 'Despite his ascetic life, Swami Sahajanand was known for his warmth with farmers. Local accounts describe him sitting under the neem tree at Bihta ashram, listening for hours to the problems of tenants who walked miles to meet him. He reportedly refused any meals unless shared with visiting farmers.',
    familyStory: 'Born into a scholar family, he initially pursued traditional Vedic learning but turned away from abstract knowledge when he witnessed peasants dying of famine during a drought. His family was shaken, but his mother supported his decision to serve the poor.',
    interestingFact: 'Swami Sahajanand never learned to use English despite his education—a deliberate choice to remain closer to the common farmer. His speeches, always in vernacular, became legendary for their power.'
  },
  {
    id: 'sri-krishna-sinha',
    name: 'Dr. Sri Krishna Sinha',
    lifespan: '1887 - 1961',
    role: 'First Chief Minister of Bihar',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bioSnippet: 'Known as "Bihar Kesari" (Lion of Bihar), Dr. Sri Krishna Sinha was a core freedom fighter and statesman who laid the administrative and industrial foundation of modern post-independence Bihar.',
    fullBio: 'A close companion of Dr. Rajendra Prasad and Anugrah Narayan Sinha, Sri Babu led Bihar through the Civil Disobedience Movement, Salt Satyagraha, and the Quit India Campaign. As Premier and Chief Minister of Bihar from 1937 to 1961, he is credited as the first administrator in India to abolish the Zamindari system (hereditary feudal landholdings) and spearhead massive industrial projects including the Barauni Refinery, Bokaro Steel Plant, and the Damodar Valley Corporation.',
    achievements: [
      'Pioneered the abolition of the Zamindari estate system in India (1947–50)',
      'Led the historic entry of Dalits into the Baidyanath Temple in Deoghar (1927)',
      'Constructed the foundational heavy-industry ecosystem of Bihar',
      'Served continuously as Chief Minister of Bihar for over 14 years'
    ],
    timelineSnippet: 'Imprisoned repeatedly by British authorities for leading individual Satyagraha in 1940.',
    moolConnection: 'Eksaria Clan',
    era: 'Modern',
    citation: 'Chaudhary, P. (1988). Builders of Modern India: Dr. Sri Krishna Sinha. Publications Division, Ministry of I&B.',
    personalAnecdote: 'Sri Krishna Sinha was a chain-smoker and a tea lover, often conducting state meetings while sipping Darjeeling tea. Stories describe him reviewing industrial blueprints late into the night, with a cigarette permanently between his fingers.',
    familyStory: 'His wife, Rameshwari Devi, was a classical Odissi dancer who sacrificed her career for his political ambitions. After independence, she became known for her charitable work, running orphanages across Bihar.',
    interestingFact: 'Despite being Chief Minister, Sri Krishna Sinha lived modestly in a rented apartment, never owned a car, and walked to his office most days. His staff had to practically chase him down to provide him with an official vehicle.'
  },
  {
    id: 'ganesh-dutt',
    name: 'Sir Ganesh Dutt',
    lifespan: '1868 - 1943',
    role: 'Pioneering Minister, Philanthropist & Educationist',
    portraitUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    bioSnippet: 'The longest-serving minister in British India, Sir Ganesh Dutt was a monumental philanthropist who donated his personal estates, salaries, and wealth to establish hospitals, colleges, and enduring university scholarships in Bihar.',
    fullBio: 'Born in Patna district, Sir Ganesh Dutt served as the Minister of Local Self-Government of Bihar and Orissa from 1923 to 1937. Deeply committed to the upliftment of society, he donated almost his entire monthly salary to fund scholarships, establish schools, and expand Patna University. His visionary interventions laid the foundation for the Prince of Wales Medical College (now Patna Medical College Hospital - PMCH) and Radika Sinha Institute.',
    achievements: [
      'Donated his entire house and personal wealth worth millions to Patna University and public charities',
      'Longest-serving minister in any provincial government of British India (14 consecutive years)',
      'Established Patna Medical College Hospital (PMCH) and funded medical research scholarships',
      'Knighted by the British Crown in 1928 for his exceptional public service and philanthropy'
    ],
    timelineSnippet: 'Knighted in 1928, he systematically redirected all his ministerial salaries into public education trusts.',
    moolConnection: 'Jetharia Clan',
    era: 'Colonial',
    citation: 'Sinha, S. (1944). Sir Ganesh Dutt: A Memoir. Patna Law Journal Press.',
    personalAnecdote: 'Unlike most colonial-era ministers, Ganesh Dutt lived like a renunciate. His colleagues were stunned when they discovered he slept on a simple cot and ate the same rice and lentils as his office staff. A journalist once asked him why he wasn\'t enjoying his wealth—he replied, "I am enjoying it, through the eyes of students who study thanks to my scholarship."',
    familyStory: 'His son broke with tradition and refused to inherit wealth, instead becoming a teacher in a village school. Ganesh Dutt was reportedly proud of this decision, seeing it as true dharma.',
    interestingFact: 'At 75, Ganesh Dutt personally visited the first batch of medical students at PMCH and asked each one about their dreams. He kept a notebook with their names and later checked on their progress, funding promising ones further.'
  },
  {
    id: 'ramdhari-sinha-dinkar',
    name: 'Ramdhari Singh "Dinkar"',
    lifespan: '1908 - 1974',
    role: 'National Poet (Rashtrakavi) & Essayist',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bioSnippet: 'Regarded as one of the greatest Hindi poets of the 20th century, "Dinkar" wrote fiery, patriotic verse (Veer Rasa) that served as an anthem during the Indian Independence struggle and post-war years.',
    fullBio: 'Born in Simaria, Bengal Presidency (now Bihar), Dinkar\'s poetry synthesized cosmic humanist philosophy with nationalism. His masterpiece works like Rashmirathi (concerning Karna) and Urvashi earned national acclaim. He was awarded the Jnanpith Award (India\'s highest literary honor) and served three terms as a nominated member of the Rajya Sabha.',
    achievements: [
      'Awarded the Padma Bhushan (1959) and the prestigious Sahitya Akademi Award',
      'Honored with the Jnanpith Award in 1972 for his poetic masterpiece "Urvashi"',
      'Appointed Vice Chancellor of Bhagalpur University',
      'Widely designated as "Rashtrakavi" for his nationalist mobilizing epics'
    ],
    timelineSnippet: 'Published "Rashmirathi" (1952), translating Hindu epic theology into high moral humanist dialogue.',
    moolConnection: 'Bhriguvanshi Clan',
    era: 'Modern',
    citation: 'Dinkar, R. S. (1956). Sanskriti Ke Chaar Adhyaya. Rajpal & Sons Publishing.',
    personalAnecdote: 'Dinkar had a habit of walking through village markets with a notebook, listening to farmers\' songs and common folk wisdom. He famously said he learned more about "Veer Rasa" (valor) from a widow defending her land than from any ancient text.',
    familyStory: 'His wife, Smt. Uma Devi, was his fiercest critic. She would read his poems first and if she didn\'t find them moving, he\'d rewrite them. He credited her as his true "editor and conscience."',
    interestingFact: 'Dinkar wrote and rewrote Rashmirathi sixteen times over three years. His publisher once found him in tears, saying, "I\'ve failed to capture Karna\'s struggle. How do you sing dignity to the forgotten?" He finally succeeded on the seventeenth draft.'
  },
  {
    id: 'gopal-saran-tekari',
    name: 'Maharaja Gopal Saran Narain Singh',
    lifespan: '1883 - 1958',
    role: 'Maharaja of Tekari & Allied Patron',
    portraitUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    bioSnippet: 'The ruler of the South Bihar Tekari Raj, Maharaja Gopal Saran was an early visionary who flew historic missions in WWI, funded aviation development, and supported Banaras Hindu University.',
    fullBio: 'Ruling over the vast Tekari Raj of Gya, Maharaja Gopal Saran Narain Singh was a dynamic noble. He personally served in the British Royal Flying Corps during the Great War. Known for his eclectic patronage, he donated lands and substantial capital to Pandit Madan Mohan Malaviya for the creation of BHU and defended rural infrastructure projects throughout South Bihar.',
    achievements: [
      'Decorated combat aviator in World War I',
      'Co-founded Banaras Hindu University through massive estate grants',
      'Pioneered early modern industrial cooperatives in Magadh region'
    ],
    timelineSnippet: 'Donated 10,000 acres of arable estate land for Bihar welfare programs.',
    moolConnection: 'Dronwar (Donwar) Clan',
    era: 'Colonial',
    citation: 'Guptha, S. N. (1934). The Feudatories of Eastern India. Thacker, Spink & Co.',
    personalAnecdote: 'Maharaja Gopal Saran had a peculiar friendship with the farmers on his estate. Every monsoon, he\'d personally ride out to check on the crops, getting mud-splattered, much to his servants\' horror. He\'d sit with peasants and share food cooked in clay pots.',
    familyStory: 'His daughter was the first woman in the Tekari Raj to attend university in London. Against all tradition, he sent her to Oxford, earning the wrath of conservative cousins but the admiration of progressives.',
    interestingFact: 'During WWI, Maharaja Gopal Saran flew reconnaissance missions over hostile territory. A German bullet grazed his wing. He joked later that he\'d come closer to meeting God in the sky than in any temple!'
  }
];

export const MOOLS_DATA: MoolData[] = [
  {
    id: 'eksaria',
    moolName: 'Eksaria',
    purushName: 'Rishi Vishwamitra (lineage anchor)',
    originVillage: 'Ekshari (near ancient Buxar / Ganga bank)',
    region: 'Saran / Shahabad',
    description: 'One of the most geographically prominent and ancient lineages among the Babhan community. Historically anchored along the fertile banks of the Ganges and Sone rivers, members of this clan migrated to establish powerful landlordships in Champaran, Saran, and Muzaffarpur.',
    keyFamilies: [
      'Bettiah Raj Princely Estate',
      'Eksar Landlords of Muzaffarpur',
      'The Gya Tekari estate branches'
    ],
    historicalCitations: [
      'Ganganand, Pandit (1862). Babhanotpatti Darpan. Banaras Sanskrit Series.',
      'Saran District Gazetteer (1907), Imperial Record Service.'
    ]
  },
  {
    id: 'kinwar',
    moolName: 'Kinwar',
    purushName: 'Maharaja Kedar Singh',
    originVillage: 'Kini / Kinwar village (Varanasi / Buxar border)',
    region: 'Banaras / Magadh',
    description: 'A martial and scholar clan derived from the western border of Bihar and eastern UP. The Kinwars established the renowned princely house of Bhadawar and held principalities in Ghazipur, Benares, and Bhojpur. They are historically documented as highly skilled administrators and military commanders for regional empires.',
    keyFamilies: [
      'Mahal of Birpur (Ghazipur)',
      'Chautham Estates of Khagaria',
      'Karsand Zamindari lineage'
    ],
    historicalCitations: [
      'Crooke, William (1896). The Tribes and Castes of the North-Western Provinces and Oudh. Vol. I.',
      'Bhojpur Archives, Imperial Estate Record #221.'
    ]
  },
  {
    id: 'donwar',
    moolName: 'Donwar (Dronwar)',
    purushName: 'Pandit Dronacharya (as theoretical mythic anchor)',
    originVillage: 'Don Buzurg (Deoria / Gorakhpur border)',
    region: 'Gorakhpur / Saran',
    description: 'Renowned for their agrarian organization and historic fortified villages, the Donwars (also known as Dronwars) trace their physical center to the ancient village of Don in Deoria district. They expanded extensively into Saran and Champaran, founding prominent estates such as the Ramnagar Raj.',
    keyFamilies: [
      'Ramnagar Princely Estate',
      'Donwar House of Tamkuhi Raj',
      'Narhan Zamindari Estate (Samastipur)'
    ],
    historicalCitations: [
      'Nevill, H. R. (1909). Deoria District Gazetteers. Government Press.',
      'Saraswati, Swami S. (1938). Bhumihar Brahmin Parichay.'
    ]
  }
];

export const REGIONS_DATA: RegionData[] = [
  {
    id: 'region-saran',
    name: 'Saran Region',
    historicalName: 'Saran Khanda (ancient)',
    moolCount: 8,
    description: 'Historic heartland of Bhumihar settlement along the Ganges plains. Major zamindaris and ashrams established here.',
    keySites: ['Chapra', 'Bihta', 'Eksar', 'Sonpur']
  },
  {
    id: 'region-champaran',
    name: 'Champaran Region',
    historicalName: 'Tirahut (ancient)',
    moolCount: 6,
    description: 'Fertile plains between Gandak and eastern borders. Known for agricultural leadership and freedom struggles.',
    keySites: ['Motihari', 'Bettiah', 'Raxaul']
  },
  {
    id: 'region-magadh',
    name: 'Magadha Region',
    historicalName: 'Magadha Mahajanapada (ancient)',
    moolCount: 7,
    description: 'Ancient seat of power. Linked to Buddhist centers and medieval sultanates.',
    keySites: ['Patna', 'Gaya', 'Nalanda', 'Rajgir']
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'timeline-1',
    year: '1936',
    era: 'Modern',
    title: 'Founding of All India Kisan Sabha',
    shortDescription: 'Swami Sahajanand founds AIKS in Lucknow, beginning systematic peasant mobilization.',
    detailedDescription: 'A watershed moment in agrarian history. The All India Kisan Sabha became the first organized platform uniting farmers across regions against feudal oppression.',
    significance: 'Reshaped Indian agricultural politics and laid groundwork for post-independence land reforms.',
    citation: 'Saraswati, S. S. (1938). Kisan Sabha Our Future.'
  },
  {
    id: 'timeline-2',
    year: '1952',
    era: 'Modern',
    title: 'Rashmirathi Published',
    shortDescription: 'Dinkar\'s masterwork on Karna\'s moral struggle released to national acclaim.',
    detailedDescription: 'After years of rewriting, Dinkar completes his epic poem that would inspire generations.',
    significance: 'Established Dinkar as "Rashtrakavi" and demonstrated literature\'s power in moral awakening.',
    citation: 'Dinkar, R. S. (1956). Sanskriti Ke Chaar Adhyaya.'
  }
];

export const COMMUNITY_SECTORS: CommunitySector[] = [
  {
    id: 'education',
    title: 'Education & Institutional Patronage',
    iconName: 'GraduationCap',
    percentageMetric: '85',
    metricLabel: 'Academic Institutions Funded',
    description: 'Extensive contributions to school, college, and university funding in Bihar, notably Patna University, PMCH, and Banaras Hindu University through massive land and financial endowments.',
    keyLeaders: ['Sir Ganesh Dutt', 'Maharaja Gopal Saran Narain Singh'],
    historicalMilestones: [
      'Foundational land grant for Banaras Hindu University (BHU)',
      'Establishment and endowment of Patna Medical College (PMCH)',
      'Funding of the Radika Sinha Institute'
    ]
  },
  {
    id: 'politics',
    title: 'Modern Statecraft & Administration',
    iconName: 'Building2',
    percentageMetric: '92',
    metricLabel: 'Public Governance Index',
    description: 'Pioneered early administrative reforms in independent India, including the historic abolition of the agrarian Zamindari system under Dr. Sri Krishna Sinha.',
    keyLeaders: ['Dr. Sri Krishna Sinha', 'Anugrah Narayan Sinha'],
    historicalMilestones: [
      'Abolition of the landlord Zamindari system (1950)',
      'Establishment of massive heavy industrial hubs in Bihar',
      'Long-term stable governance and legislative leadership'
    ]
  },
  {
    id: 'military',
    title: 'Martial Tradition & Leadership',
    iconName: 'Shield',
    percentageMetric: '78',
    metricLabel: 'Historical Regiments & Command',
    description: 'Historically documented administrative and defensive leadership in regional kingdoms, stretching from Magadh rulers to active combat pilots in the World Wars.',
    keyLeaders: ['Maharaja Gopal Saran Narain Singh', 'Pratapaditya (historical legends)'],
    historicalMilestones: [
      'Active reconnaissance flying in World War I',
      'Leadership of local fortresses and regional militias',
      'Defensive alliance during the transitional state periods'
    ]
  },
  {
    id: 'culture',
    title: 'Literature, Poetry & Scholarship',
    iconName: 'PenTool',
    percentageMetric: '90',
    metricLabel: 'Literary Contribution Index',
    description: 'A rich legacy of classical and nationalist literature, with figures like Rashtrakavi Ramdhari Singh "Dinkar" shaping national consciousness through Hindi literature.',
    keyLeaders: ['Ramdhari Singh "Dinkar"', 'Pandit Ganganand'],
    historicalMilestones: [
      'Award of Jnanpith Award in 1972 for "Urvashi"',
      'Creation of the historic nationalist masterpiece "Rashmirathi"',
      'Literary leadership and academic research essays'
    ]
  }
];

export const ARCHIVE_DOCUMENTS: ArchiveDocument[] = [
  {
    id: 'doc-mera-jivan',
    title: 'Mera Jivan Sangharsh (My Life Struggle)',
    author: 'Swami Sahajanand Saraswati',
    year: 1940,
    type: 'Book',
    source: 'Bihta Ashram Press Archive',
    description: 'The autobiographical account of Swami Sahajanand Saraswati, documenting his early spiritual journey, theological study, and eventual mobilization of peasant movements across eastern India.',
    snippet: 'Asceticism is empty if we fail to tackle the starvation of the peasantry. Dedicating one\'s life to abstract philosophy while the hands that till the soil have no grain is a hollow virtue. The true temple of God is the field of the peasant.',
    citation: 'Saraswati, S. S. (1940). Mera Jivan Sangharsh. Bihta Ashram Press.',
    tags: ['Peasant Movement', 'Autobiography', 'Agrarian Reform', 'Nationalist']
  },
  {
    id: 'doc-sanskriti',
    title: 'Sanskriti Ke Chaar Adhyaya (Four Chapters of Culture)',
    author: 'Ramdhari Singh "Dinkar"',
    year: 1956,
    type: 'Book',
    source: 'Rajpal & Sons Publishing',
    description: 'An authoritative study on the cultural history of India, tracing the syntheses and transitions through four distinct periods of civilization, foreign influence, and moral revolution.',
    snippet: 'Culture is not a stagnant pool; it is a flowing river that cleanses itself through assimilation. The strength of Indian culture lies in its ability to reconcile conflicting systems and discover a higher ethical harmony.',
    citation: 'Dinkar, R. S. (1956). Sanskriti Ke Chaar Adhyaya. Rajpal & Sons.',
    tags: ['Indian History', 'Culture', 'Philosophy', 'Literature']
  },
  {
    id: 'doc-people-of-india',
    title: 'The People of India (Ethnological Survey)',
    author: 'Sir Herbert Risley',
    year: 1908,
    type: 'Historical Record',
    source: 'Imperial Records Office, Calcutta',
    description: 'A comprehensive anthropometric and ethnological study of various castes and tribes of India, highlighting the historical socio-political divisions, clans, and regional lineages of Eastern India.',
    snippet: 'The Babhans or Bhumihar Brahmins of Behar represent a highly structured, land-owning intellectual class. Their physical measurements and socio-religious codes demonstrate a high degree of integration within classical Aryan lineages.',
    citation: 'Risley, H. H. (1908). The People of India. Calcutta: Government Printing Office.',
    tags: ['Ethnology', 'Socio-Cultural', 'Imperial Survey', 'East India']
  },
  {
    id: 'doc-bakasht-movement',
    title: 'The Bakasht Peasant Alliance of 1937–39',
    author: 'Dr. Girija Nandan Prasad',
    year: 1978,
    type: 'Research Paper',
    source: 'Journal of Historical Studies, Vol. 14',
    description: 'An academic analysis of the historic Bakasht peasant movements in Bihar led by the Kisan Sabha, detailing the coordination of landless tenants and the legal challenges to landlord tenancy systems.',
    snippet: 'The Bakasht struggle was unique in its non-violent coordination. By refusing to pay rents and physically defending tenancy borders, the peasants under Swami Sahajanand forced the Congress ministry to enact the tenancy amendment acts of 1938.',
    citation: 'Prasad, G. N. (1978). The Bakasht Peasant Alliance. Journal of Historical Studies, 14(2), 112-134.',
    tags: ['Kisan Sabha', 'Agrarian Revolt', 'Academic Research', 'Tenant Rights']
  },
  {
    id: 'doc-babhanotpatti',
    title: 'Babhanotpatti Darpan (Mirror of Clan Lineages)',
    author: 'Pandit Ganganand',
    year: 1862,
    type: 'Manuscript',
    source: 'Tekari Raj Library Collection',
    description: 'A rare localized Sanskrit manuscript analyzing genealogical records, copper plates, and agrahara charters outlining the origins (mools) and gotras of Bhumihar Brahmins.',
    snippet: 'From the early Agrahara grants of ancient kings, our lineages were entrusted with the dual duties of preservation of learning and the protection of arable valleys. Let this genealogy serve as a mirror of our ancient dharma.',
    citation: 'Ganganand, P. (1862). Babhanotpatti Darpan (Genealogical Records). Banaras Sanskrit Press.',
    tags: ['Genealogy', 'Sanskrit Text', 'Mools', 'Ancient Charters']
  }
];


