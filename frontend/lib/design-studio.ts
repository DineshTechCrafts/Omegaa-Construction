export const designStudioMedia = {
  designOverview: '/design-studio/01-design-overview.png',
  sketchupVideo: '/design-studio/02-sketchup-video.mp4',
  sketchupImage: '/design-studio/03-sketchup-image.jpeg',
  renderedImage: '/design-studio/04-rendered-image.jpeg',
} as const;

export const omegaaVisualizationImages = [
  {
    src: designStudioMedia.sketchupImage,
    alt: '3D SketchUp model preview',
    caption: '3D SketchUp Image',
  },
  {
    src: designStudioMedia.renderedImage,
    alt: '3D rendered architectural visualization',
    caption: '3D Rendered Image',
  },
  {
    src: '/design-studio/omegaa/01-hall.png',
    alt: 'Hall interior visualization',
    caption: 'Hall',
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
    src: '/design-studio/omegaa/05-kitchen-top-view-before-rendering.png',
    alt: 'Kitchen top view before rendering',
    caption: 'Kitchen — Top View Before Rendering',
  },
  {
    src: '/design-studio/omegaa/06-kitchen-dining-rendering-view.png',
    alt: 'Kitchen and dining rendering view',
    caption: 'Kitchen & Dining — Rendering View',
  },
  {
    src: '/design-studio/omegaa/07-kitchen-dining-after-rendering.png',
    alt: 'Kitchen and dining after rendering',
    caption: 'Kitchen & Dining — After Rendering',
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
  images: readonly {
    src: string;
    alt: string;
    caption: string;
  }[];
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
    aspectClass: 'aspect-[3/2]',
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
    images: omegaaVisualizationImages,
  },
];
