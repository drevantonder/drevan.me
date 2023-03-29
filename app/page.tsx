import { Container } from '@/components/Container'
import Link from 'next/link'
import Intro from './intro.mdx'

export default function Home() {
  return (
      <Container>
        <nav className="mt-8">
          <ul className="flex space-x-8">
            <li><Link href="/photos/">@photosbydrevan</Link></li>
            <li><Link href="/blog">blog</Link></li>
          </ul>
        </nav>
        <div className="mt-32 prose prose-lg lg:prose-xl">
          <Intro />
        </div>
      </Container>
  )
}
