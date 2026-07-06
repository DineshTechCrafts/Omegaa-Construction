import Link from 'next/link';
import { navItems } from '@/lib/constants';

export default function Navbar() {
  return (
    <nav
      className="flex flex-grow flex-wrap items-center justify-end gap-2 px-0 py-2 md:gap-3 lg:gap-4"
      aria-label="Main navigation"
    >
      {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            prefetch={true}
            className="text-[22px] font-normal px-2 py-2 rounded-lg text-slate-900 hover:text-slate-600 transition-all duration-300 hover:-translate-y-0.5 md:px-3"
          >
            {label}
          </Link>
      ))}
    </nav>
  );
}
