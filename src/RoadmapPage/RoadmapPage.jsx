import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Header from '../UI/Header'

const RoadmapPage = () => {
    const title = "Roadmap"
    const description = "Follow the roadmap to start your development journey"
    const image = ""
  return (
    <div className='min-h-screen w-full bg-body'>
        <Navbar />
        <main className='min-h-screen px-[10%]'>
            <Header title={title} description={description} image={image} />
        </main>
        <Footer />
    </div>
  )
}

export default RoadmapPage
