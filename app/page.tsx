import Link from 'next/link'
import { Button, Radio } from '@/components'

const options = [
  { label: 'Radio 1', value: 'radio-1' },
  { label: 'Radio 2', value: 'radio-2' },
  { label: 'Radio 3', value: 'radio-3' },
]

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-most-contrast text-least-contrast">
      <div className="p-40">
        <h1 className="mb-4 text-6xl">Pocket Somm</h1>
        <p className="mb-8 text-2xl text-neutral-50">
          Wine recommendations right in your pocket.
        </p>
        <Link href="/somm">
          <Button cId="get-started">Get started</Button>
        </Link>
        <Radio cId="test" options={options} />
      </div>
    </main>
  )
}
