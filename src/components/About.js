import React from 'react'
import { faPencilRuler, faCode, faBook, faUsers, faCodeBranch, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const content = [
  {
    icon: faCode,
    title: 'UI developer',
    description:
      "Years of experience creating UIs for a variety of companies in different styles. I've dabbled in lots of different build styles, from themes and templates to frameworks.",
  },
  {
    icon: faPencilRuler,
    title: 'Website designer',
    description:
      "After years of developing websites, it's no surprise I've picked up a little design ability. I'm a perfectionist and always to out of my way to make something look great.",
  },
  {
    icon: faBook,
    title: 'Consistent learner',
    description:
      "Always picking up new techniques and expanding my knowledge. Tech changes fast, and there's always ways to improve so I'm always looking for ways to improve.",
  },
  {
    icon: faUsers,
    title: 'Team player',
    description: 'Always getting stuck in, helping out the team, learning from feedback and suggesting improvements where possible.',
  },
  {
    icon: faCodeBranch,
    title: 'Contributor',
    description:
      'I love the developer community and how we push eachother forward. I give back where I can through blog posts, tutorials, open source or answering community questions, and would love to be able to give back even more.',
  },
  {
    icon: faSeedling,
    title: 'Self improver',
    description: "Lots of things are learned through others experiences. I don't know what I don't know, so I'm always trying to put myself in other's shoes.",
  },
]

const Heading = ({ icon, title, description }) => {
  return (
    <div className="p-4 md:my-8">
      <FontAwesomeIcon icon={icon} className="text-3xl text-gray-800 mb-2" />
      <h3 className="text-3xl text-gray-800 font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}

const About = () => {
  return (
    <div id="about" className="relative min-h-screen min-w-screen">
      <div className="mx-8 md:mx-24 mb-24 px-8 md:px-24 py-6 md:py-12 rounded-lg bg-teal-300 bg-opacity-25">
        <div className="flex flex-wrap justify-between w-full md:-mx-6">
          {content.map(item => (
            <div className="w-full md:w-1/3 px-2 md:px-6 py-6">
              <Heading {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
