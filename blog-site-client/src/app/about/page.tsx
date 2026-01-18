import React from 'react'

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div>This is AboutPage</div>
  )
}
