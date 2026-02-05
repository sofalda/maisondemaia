export interface Project {
    id: string;
    title: string;
    category: 'events' | 'floral' | 'interior';
    description?: {
        en: string;
        fr: string;
        es: string;
    };
    images: string[];
}

export const projects: Project[] = [
    // Dummy Event Projects
    {
        id: 'event-1',
        title: 'Summer Soirée',
        category: 'events',
        images: ['/events_highlight.png', '/hero.png', '/hero.png']
    },
    {
        id: 'event-2',
        title: 'Winter Wedding',
        category: 'events',
        images: ['/events_highlight.png', '/hero.png', '/hero.png']
    },
    // Dummy Floral Projects
    {
        id: 'floral-1',
        title: 'Spring Bloom Collection',
        category: 'floral',
        images: ['/floral_highlight.png', '/hero.png']
    },
    // Dummy Interior Projects
    {
        id: 'interior-1',
        title: 'Barcelona Modern Loft',
        category: 'interior',
        images: ['/interior_highlight.png', '/hero.png', '/hero.png', '/hero.png']
    }
];

export const serviceCategories = [
    {
        id: 'events',
        slug: 'event-design',
        image: '/events_highlight.png'
    },
    {
        id: 'floral',
        slug: 'floral-design',
        image: '/floral_highlight.png'
    },
    {
        id: 'interior',
        slug: 'interior-styling',
        image: '/interior_highlight.png'
    }
];
