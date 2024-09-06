import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const skills = () => {
  return (
    <section id='skills' className='py-20'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Skills</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      <ActionAreaCard
        title="Front-End Development"
        description="Front-end development involves creating the visual and interactive aspects of a website using HTML, CSS, and JavaScript. It focuses on the user interface and user experience."
        imageSrc="/Images/Front-end-Development.jpeg"
      />
      <ActionAreaCard
        title="Back-End Development"
        description="Back-end development focuses on server-side logic, databases, and application architecture. It involves working with server technologies, databases, and APIs to manage data and ensure seamless communication between the server and the user interface."
        imageSrc="/Images/backend.jpg"
      />
      <ActionAreaCard
        title="Web Development"
        description="Web development encompasses both front-end and back-end development, creating complete web applications. It involves designing, building, and maintaining websites to ensure functionality, user experience, and performance."
        imageSrc="/Images/web.png"
      />
      <ActionAreaCard
        title="Communication"
        description="Communication skills are essential for effectively conveying ideas and information. This involves verbal, non-verbal, and written communication, as well as active listening and interpersonal skills."
        imageSrc="/Images/communication-skill.jpg"
      />
      <ActionAreaCard
        title="Research"
        description="Research skills involve the ability to gather, analyze, and interpret information from various sources. These skills are crucial for problem-solving, decision-making, and staying informed about industry trends and best practices."
        imageSrc="/Images/research.png"
      />
      <ActionAreaCard
        title="Adaptability"
        description="Adaptability refers to the ability to adjust to new conditions and environments. It involves being open to change, learning new skills, and maintaining productivity in a dynamic work environment."
        imageSrc="/Images/adapt.png"
      />
      <ActionAreaCard
        title="Critical Thinking"
        description="Critical thinking involves analyzing facts to form a judgment. It includes logical reasoning, problem-solving, and the ability to evaluate complex situations to make informed decisions."
        imageSrc="/Images/critical.png"
      />
      <ActionAreaCard
        title="Computer Skills"
        description="Computer skills include proficiency with various software applications, operating systems, and basic programming. These skills are essential for efficiently performing tasks in a technology-driven environment."
        imageSrc="/Images/computer.jpg"
      />
      <ActionAreaCard
        title="Problem Solving"
        description="Problem-solving skills involve identifying issues, analyzing possible solutions, and implementing effective strategies to overcome challenges. It requires creativity, analytical thinking, and perseverance."
        imageSrc="/Images/problem.jpg"
      />
      </div>
    </section>
  )
}

export default skills
