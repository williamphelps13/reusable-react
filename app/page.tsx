import Link from 'next/link'
import { Button, Radio } from '@/components'

const options = [
  { label: 'Radio 1', value: 'radio-1' },
  { label: 'Radio 2', value: 'radio-2' },
  { label: 'Radio 3', value: 'radio-3' },
]

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black flex flex-col justify-center items-center text-white">
      <div className="p-40">
        <h1 className="text-6xl mb-4">Pocket Somm</h1>
        <p className="text-2xl text-gray-50 mb-8">
          Wine recommendations right in your pocket.
        </p>
        <Link href="/somm">
          <Button>Get started</Button>
        </Link>
        <Radio cId="test" options={options} />
      </div>
    </main>
  )
}
