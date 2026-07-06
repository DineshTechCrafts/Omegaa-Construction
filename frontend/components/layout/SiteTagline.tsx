import { siteConfig } from '@/lib/seo';

type SiteTaglineProps = {
  variant: 'header' | 'footer';
};

const taglineStyles = {
  header:
    'text-sm font-medium tracking-wider text-slate-900 md:text-base lg:text-lg',
  footer: 'mt-2 text-sm font-light text-white',
} as const;

export default function SiteTagline({ variant }: SiteTaglineProps) {
  return <p className={taglineStyles[variant]}>{siteConfig.tagline}</p>;
}
