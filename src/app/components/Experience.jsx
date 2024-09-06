import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const Experience = () => {
  return (
    <section id="experience" className='py-24'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Experience</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      <ActionAreaCard
        title="HTML/CSS"
        description="HTML and CSS are the foundational languages for creating web pages. HTML structures the content, while CSS styles and layouts the visual presentation."
        imageSrc="/Images/htmlcss.jpg"
      />
      <ActionAreaCard
        title="Tailwind"
        description="Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It provides low-level utility classes to build complex user interfaces without custom CSS."
        imageSrc="/Images/tail.png"
      />
      <ActionAreaCard
        title="JavaScript"
        description="JavaScript is a versatile programming language used for web development to create interactive and dynamic content on websites. It is essential for front-end development and also widely used in back-end with Node.js."
        imageSrc="/Images/javascript.png"
      />
      <ActionAreaCard
        title="React"
        description="React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It enables developers to create reusable UI components and manage the application's state efficiently."
        imageSrc="/Images/react.png"
      />
      <ActionAreaCard
        title="React Native"
        description="React Native is a framework for building mobile applications using React. It allows developers to create native apps for both iOS and Android using a single codebase written in JavaScript and React."
        imageSrc="/Images/react-native.png"
      />
      <ActionAreaCard
        title="Next.js"
        description="Next.js is a React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications. It simplifies the development process with features like automatic code splitting and API routes."
        imageSrc="/Images/next.png"
      />
      <ActionAreaCard
        title="Python"
        description="Python is a high-level programming language known for its readability and versatility. It is widely used in web development, data science, automation, and artificial intelligence."
        imageSrc="/Images/python.jpg"
      />
      <ActionAreaCard
        title="Java"
        description="Java is a widely-used programming language and platform known for its portability across platforms. It is commonly used in web development, enterprise applications, and Android app development."
        imageSrc="/Images/java-logo.jpg"
      />
      <ActionAreaCard
        title="C#"
        description="C# (C-sharp) is a modern, object-oriented programming language developed by Microsoft. It is primarily used for developing Windows applications and games using the Unity engine."
        imageSrc="/Images/c-sharp-open-source.png"
      />
      </div>
    </section>
  )
}

export default Experience
