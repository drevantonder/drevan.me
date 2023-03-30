"use client"

import { usePathname } from 'next/navigation';
import Link from "next/link"
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-8">
      <ul className="flex space-x-8">
        <li><Link className={clsx('font-medium text-gray-600', pathname == '/' && 'underline underline-offset-4 decoration-wavy decoration-purple-600')} href="/" >home</Link></li>
        <li><Link className={clsx('font-medium text-gray-600', pathname.startsWith('/photos') && 'underline underline-offset-4 decoration-wavy decoration-purple-600')} href="/photos">@photosbydrevan</Link></li>
        <li><Link className={clsx('font-medium text-gray-600', pathname.startsWith('/blog') && 'underline underline-offset-4 decoration-wavy decoration-purple-600')} href="/blog">blog</Link></li>
      </ul>
    </nav>
  )
}