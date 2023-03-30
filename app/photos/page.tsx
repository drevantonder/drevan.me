import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '@/components/BrandLogos'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import Link from 'next/link'

export default function Photos() {
  return (
    <>
      <article className="max-w-4xl">
        <h1 className="text-xl sm:text-2xl text-purple-600">@photosbydrevan</h1>
        <h2
          className="text-5xl sm:text-6xl text-neutral-700 sm:leading-[1.1em] font-semibold"
        >
          Capturing this <span className="text-cyan-600 font-semibold"
            >beautiful universe</span
          > one photo at a time
        </h2>

        <h2 className="text-sm mt-8 text-purple-600 uppercase">Follow me on</h2>
        <div className="flex mt-1 space-x-5">
          <a
            href="https://www.facebook.com/photosbydrevan"
            target="_blank"
            rel="noopener"
          >
            <FacebookLogo className="h-10 w-auto" />
          </a>
          <a
            href="https://www.instagram.com/photosbydrevan/"
            target="_blank"
            rel="noopener"
          >
            <InstagramLogo className="h-10 w-auto" />
          </a>
          <a
            href="https://twitter.com/photosbydrevan"
            target="_blank"
            rel="noopener"
          >
            <TwitterLogo className="h-10 w-auto" />
          </a>
          <a
            href="https://www.youtube.com/@photosbydrevan"
            target="_blank"
            rel="noopener"
          >
            <YoutubeLogo className="h-10 w-auto" />
          </a>
        </div>
    </article>
    </>
  )
}
