import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const Projects = () => {
  return (
    <section id="projects" className='py-24'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Projects</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <ActionAreaCard
          title="Project Elementia"
          description="*Finalizing Project* A Turn-based fan web game of genshin impact about skills and elemental reactions against Ai's"
          imageSrc="/Images/project1.png"
        />
          <ActionAreaCard
          title="TiraHunt"
          description="*Collaboration Project* An app that provides your lodging to your desire area and preference."
          imageSrc="/Images/project2.png"
        />
        <ActionAreaCard
          title="Weekon"
          description="A prototype project for our TECHO 100. Its an web/app providing services of cheap foods from your area in accordance to your budget."
          imageSrc="/Images/project3.png"
        />
        <ActionAreaCard
          title="Lettre"
          description="*On Going Project* A typing web game tackeling the horrors of wars and the beauty of letters sent to the frontlines giving hope and love."
          imageSrc="/Images/project4.png"
        />
      </div>
    </section>
  )
}

export default Projects
