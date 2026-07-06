import Image from 'next/image';
import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import ConstructionBg from '@/components/home/ConstructionBg';
import SketchupVideoPlayer from '@/components/design-studio/SketchupVideoPlayer';
import { designStudioSections } from '@/lib/design-studio';

export default function DesignStudioContent() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1 bg-[#f8fafc]">
        <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16 lg:px-16">
          <ConstructionBg />
          <div
            className="bg-blueprint pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-10 text-center md:mb-14">
                <h1 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                  Design Studio
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-600 md:text-lg">
                  Explore our design overview, 3D model walkthroughs, SketchUp
                  previews, and rendered visualizations — bringing your project to
                  life before construction begins.
                </p>
                <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gold" />
              </div>
            </FadeIn>

            <div className="space-y-10 md:space-y-12">
              {designStudioSections.map((section) => (
                <FadeIn key={section.id}>
                  <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                    <div className="border-b border-slate-100 px-5 py-4 md:px-8 md:py-5">
                      <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                      {section.type === 'video' ? (
                        <SketchupVideoPlayer src={section.src} />
                      ) : section.type === 'gallery' ? (
                        <div className="grid gap-6 sm:grid-cols-2">
                          {section.images.map((image) => (
                            <figure
                              key={image.src}
                              className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)]"
                            >
                              <div className="relative aspect-[4/3]">
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 640px) 100vw, 432px"
                                />
                              </div>
                              <figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800">
                                {image.caption}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      ) : (
                        <div
                          className={`relative ${section.aspectClass} overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)]`}
                        >
                          <Image
                            src={section.src}
                            alt={section.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 896px"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
