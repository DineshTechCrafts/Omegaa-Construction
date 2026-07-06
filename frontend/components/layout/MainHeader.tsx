import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import HeaderTagline from '@/components/layout/HeaderTagline';
import { siteConfig } from '@/lib/seo';
import { images } from '@/lib/images';

export default function MainHeader() {
  return (
    <header className="relative z-10 flex w-full flex-col items-start justify-between gap-4 bg-white px-4 py-4 shadow-sm md:flex-row md:items-center md:gap-0 md:px-8 border-b border-slate-200">
      <div className="flex flex-col gap-2 md:gap-4 shrink-0">
        <Link href="/" className="flex cursor-pointer flex-col gap-2 md:gap-4">
          <div className="inline-flex w-max items-center justify-center rounded-[10px] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
            <Image
              src={images.logo}
              alt={`${siteConfig.name} logo`}
              className="h-14 w-auto max-w-[280px] object-contain md:h-20 lg:h-[100px] lg:max-w-[440px]"
              width={440}
              height={100}
              priority
            />
          </div>
          <HeaderTagline />
        </Link>
      </div>
      <Navbar />
    </header>
  );
}
