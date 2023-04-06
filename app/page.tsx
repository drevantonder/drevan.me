import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import Link from 'next/link'
import Intro from './intro.mdx'

export default function Home() {
  return (
    <>
      <div className="prose prose-lg lg:prose-xl prose-a:decoration-wavy prose-a:decoration-purple-600 prose-a:underline-offset-4 prose-a:[text-decoration-skip-ink:none]">
        <Intro />
      </div>
      <div className="mt-6 flex space-x-2">
        <Link className="group -m-1 p-1" href="https://twitter.com/DrevanTonder" aria-label="Follow on Twitter">
          <TwitterIcon className="h-6 w-6 fill-gray-500 group-hover:fill-gray-600" />
        </Link>
        <Link className="group -m-1 p-1" href="https://github.com/DrevanTonder" aria-label="Find me on GitHub">
          <GitHubIcon className="h-6 w-6 fill-gray-500 group-hover:fill-gray-600" />
        </Link>
        <Link className="group -m-1 p-1" href="https://www.linkedin.com/in/andre-van-tonder/" aria-label="Follow on LinkedIn">
          <LinkedInIcon className="h-6 w-6 fill-gray-500 group-hover:fill-gray-600" />
        </Link>
      </div>
    </>
  )
}
