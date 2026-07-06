export const designStudioMedia = {
  designOverview: '/design-studio/01-design-overview.png',
  sketchupVideo: '/design-studio/02-sketchup-video.mp4',
  sketchupImage: '/design-studio/03-sketchup-image.jpeg',
  renderedImage: '/design-studio/04-rendered-image.jpeg',
} as const;

export const omegaaVisualizationImages = [
  {
    src: '/design-studio/omegaa/hall-sketch.png',
    alt: 'Hall SketchUp model drawing',
    caption: 'Hall — 3D SketchUp Image',
  },
  {
    src: '/design-studio/omegaa/hall-render.png',
    alt: 'Hall interior rendered visualization',
    caption: 'Hall — 3D Rendered Image',
  },
  {
    src: '/design-studio/omegaa/02-bedroom-before-rendering.png',
    alt: 'Bedroom before rendering',
    caption: 'Bedroom — Before Rendering',
  },
  {
    src: '/design-studio/omegaa/03-bedroom-after-rendering.png',
    alt: 'Bedroom after rendering',
    caption: 'Bedroom — After Rendering',
  },
  {
    src: '/design-studio/omegaa/04-kitchen-dining-before-rendering.png',
    alt: 'Kitchen and dining before rendering',
    caption: 'Kitchen & Dining — Before Rendering',
  },
  {
    src: '/design-studio/omegaa/06-kitchen-dining-rendering-view.png',
    alt: 'Kitchen and dining rendering view',
    caption: 'Kitchen & Dining — Rendering View',
  },
  {
    src: '/design-studio/omegaa/05-kitchen-top-view-before-rendering.png',
    alt: 'Kitchen top view before rendering',
    caption: 'Kitchen — Top View Before Rendering',
  },
  {
    src: '/design-studio/omegaa/07-kitchen-dining-after-rendering.png',
    alt: 'Kitchen and dining after rendering',
    caption: 'Kitchen & Dining — After Rendering',
  },
] as const;

export const visualizationPairs = [
  {
    title: 'Hall',
    left: omegaaVisualizationImages[0],
    right: omegaaVisualizationImages[1],
  },
  {
    title: 'Bedroom',
    left: omegaaVisualizationImages[2],
    right: omegaaVisualizationImages[3],
  },
  {
    title: 'Kitchen View One',
    left: omegaaVisualizationImages[4],
    right: omegaaVisualizationImages[5],
  },
  {
    title: 'Kitchen View Two',
    left: omegaaVisualizationImages[6],
    right: omegaaVisualizationImages[7],
  },
] as const;

type DesignStudioImageSection = {
  id: string;
  heading: string;
  type: 'image';
  src: string;
  alt: string;
  aspectClass: string;
};

type DesignStudioVideoSection = {
  id: string;
  heading: string;
  type: 'video';
  src: string;
};

type DesignStudioGallerySection = {
  id: string;
  heading: string;
  type: 'gallery';
  pairs: typeof visualizationPairs;
};

export type DesignStudioSection =
  | DesignStudioImageSection
  | DesignStudioVideoSection
  | DesignStudioGallerySection;

export const designStudioSections: DesignStudioSection[] = [
  {
    id: 'design-overview',
    heading: 'Design Overview',
    type: 'image',
    src: designStudioMedia.designOverview,
    alt: 'Design studio overview from project PDF',
    aspectClass: 'aspect-[3/1]',
  },
  {
    id: 'sketchup-video',
    heading: '3D Model Video',
    type: 'video',
    src: designStudioMedia.sketchupVideo,
  },
  {
    id: 'omegaa-visualizations',
    heading: 'Design Visualizations',
    type: 'gallery',
    pairs: visualizationPairs,
  },
];
