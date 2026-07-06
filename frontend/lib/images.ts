import { designStudioMedia, omegaaVisualizationImages } from './design-studio';

export const images = {
  logo: '/images/logo.png',
  hero: '/images/hero.jpg',
  heroSlides: [
    '/images/hero.jpg',
    '/images/hero-2.jpg',
    '/images/hero-revathi-nagar.jpg',
    '/images/hero-vaiyavoor.png',
    '/images/hero-vedachalam-nagar.jpg',
  ] as const,
  map: '/images/map.png',
  completedProjectsHero: '/images/completed/hero/slide-1.jpg',
  completedProjectsHeroSlides: [
    '/images/completed/hero/slide-1.jpg',
    '/images/completed/hero/slide-2.jpg',
    '/images/completed/hero/slide-3.jpg',
  ],
  gallery: {
    one: '/images/gallery-1.jpg',
    two: '/images/gallery-2.jpg',
  },
  associations: {
    bai: '/images/associations/bai.png',
    kancea: '/images/associations/kancea.jpg',
  },
  designStudio: {
    designOverview: designStudioMedia.designOverview,
    sketchupVideo: designStudioMedia.sketchupVideo,
    sketchupImage: designStudioMedia.sketchupImage,
    renderedImage: designStudioMedia.renderedImage,
    omegaaVisualizations: omegaaVisualizationImages,
  },
} as const;
