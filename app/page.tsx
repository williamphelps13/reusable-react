import Link from 'next/link'
import Button from '@/components/Button/Button'

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
      </div>
    </main>
  )
}
