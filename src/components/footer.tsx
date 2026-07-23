import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-surface-border dark:border-surface-border-dark">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
              <Image src="/logo-icon.png" alt="" width={300} height={340} className="h-8 w-auto" />
              <span className="font-bold text-lg tracking-tight text-ink dark:text-ink-dark">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted dark:text-ink-muted-dark max-w-xs">
              {SITE.tagline} Modern accounting software built for Indian businesses.
            </p>
          </div>
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted dark:text-ink-muted-dark mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-surface-border dark:border-surface-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
            {SITE.supportEmail}
          </p>
        </div>
      </div>
    </footer>
  );
}
