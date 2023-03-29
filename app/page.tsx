import { Container } from '@/components/Container'
import Intro from './intro.mdx'

export default function Home() {
  return (
    <Container>
      <div className="prose prose-lg lg:prose-xl">
        <Intro />
      </div>
    </Container>
  )
}
