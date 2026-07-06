import { designStudioMedia, omegaaVisualizationImages } from './design-studio';

export const images = {
  logo: '/images/logo.png',
  hero: '/images/hero.jpg',
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
  designStudio: {
    designOverview: designStudioMedia.designOverview,
    sketchupVideo: designStudioMedia.sketchupVideo,
    sketchupImage: designStudioMedia.sketchupImage,
    renderedImage: designStudioMedia.renderedImage,
    omegaaVisualizations: omegaaVisualizationImages,
  },
} as const;
