import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <h2>This is an about page</h2>
      <Link href="/">Back home</Link>
    </section>
  )
}
