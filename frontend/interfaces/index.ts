export interface iInatorsPage {
    params: {
        inators: string;
    };
}

export interface iLidPage {
    params: {
        lid: number;
    };
}

export interface iPreviewComponent {
    children: React.ReactNode;
    code: string;
    installation: string;
}

export interface iHero {
    id: number;
    title: string;
    highlight_term: string;
    img: string;
    text: string;
    node_command: string;
}

export interface iSiteData {
    id: number;
    name: string;
    main_color: string;
    active: boolean;
    hero: iHero
    stats: iStat[]
    features: iFeature[]
    banner: iBanner
    faq: iFaq
}

export interface iStat {
    id: number;
    title: string;
    subtitle: string;
    icon: string
}

export interface iFeature {
    id: number;
    title: string;
    subtitle: string;
    text: string;
    img: string
}

export interface iBanner {
    id: number;
    title: string;
    subtitle: string;
    cta_text: string;
    cta_link: string
}

export interface iFaq {
    id: number;
    title: string;
    subtitle: string;
    faq_items: iFaqItem[]
}

export interface iFaqItem {
    id: number;
    question: string;
    answer: string;
    faq_section: number
}