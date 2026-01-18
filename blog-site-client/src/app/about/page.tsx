import React from 'react'

export default async function AboutPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Something error in AboutPage");

  return (
    <div>This is AboutPage</div>
  )
}
