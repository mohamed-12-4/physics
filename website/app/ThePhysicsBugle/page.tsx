import Hero from '@/components/physicsBugleUI/Hero'
import Navbar from '@/components/physicsBugleUI/Navbar'
import React from 'react'

function page() {
  return (
    <main className="h-full w-full">
      <Navbar />
      
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
      </div>
    </main>
  )
}

export default page