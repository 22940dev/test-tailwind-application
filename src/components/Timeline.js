import React from 'react'

const events = [
  { date: '2012', title: 'Started university', description: 'I had no idea what I wanted to do, but i liked computers, so I studied computing' },
  { date: '2015', title: 'First job', description: 'After months of searching, I got my first job: an intern WordPress developer' },
  {
    date: '2015',
    title: 'HTML & CSS finally made sense',
    description: "I'd learned them at university but they finally made sense after working on real projects",
  },
  {
    date: '2017',
    title: 'Web developer',
    description: 'A new role away from WordPress, with more control over how sites were built and more freedom to customise them how we wanted.',
  },
  {
    date: '2017',
    title: 'Really understood JavaScript',
    description:
      'Of course, does anybody ever really know JavaScript? Probably not, but I now knew a lot more than a few basic jQuery selectors after studying a lot of vanilla JS courses and playing with real apps with modern JS',
  },
  {
    date: '2018',
    title: 'Learned Vue.js',
    description:
      "I'd spent time really getting to grips with vanilla JS so I wanted to learn more tools to make my life easier. Vue.js was suggested by my mentor and was an excellent way to learn the basics of frameworks.",
  },
  {
    date: '2019',
    title: 'Frontend developer',
    description: "I'd outgrown my current position and it was time to move on. I found a new opportunity with more specialisation in frontend",
  },
  {
    date: '2019',
    title: 'Learned React',
    description:
      'Another framework in relatively short succession. I was on a roll and wanted to keep up the learning streak by expanding my knowledge across frameworks to understand similarities & differences.',
  },
  {
    date: '2020',
    title: 'Software engineer',
    description:
      "I needed a change. I'd been in agency a long time and wanted to try a different approach (one without impossible deadlines), so I started working with nativescript apps while collaborating with an american team.",
  },
  {
    date: '',
    title: 'And more to come!',
    description:
      "I've probably missed some stuff. I'm always learning, trying out new technologies and pushing to help others in the community. Great things are on the horizon!",
  },
]

// const TimelineEnd = () => {
//   return (
//     <div className="relative flex justify-start mt-2">
//       <div className="absolute bg-teal-400" style={{ left: '50%', transform: 'translate(-50%, -50%)', width: 4, minHeight: 90 }}>
//         <span className="absolute bottom-0 bg-teal-400" style={{ left: '50%', width: 4, minHeight: 20, transform: 'rotate(45deg) translate(5px,-1px)' }} />
//         <span className="absolute bottom-0 bg-teal-400" style={{ left: '50%', width: 4, minHeight: 20, transform: 'rotate(-45deg) translate(-8px, -3px)' }} />
//       </div>
//     </div>
//   )
// }

const TimelinePoint = ({ index, date, title, description }) => (
  <div className={`relative flex justify-end ${index % 2 && 'md:justify-start'}`}>
    <div className="absolute min-h-full bg-teal-400" style={{ left: '50%', transform: 'translate(-50%, 0)', width: 4 }}>
      <span className="absolute rounded-full bg-teal-400" style={{ width: 16, height: 16, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <span className="absolute rounded-full bg-white" style={{ width: 8, height: 8, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      </span>
    </div>
    <div className="w-2/3 md:w-5/12">
      <p className={`block text-teal-400 uppercase ${index % 2 && 'md:text-right'}`}>{date}</p>
      <div className="p-6 mt-2 mb-6 rounded-md border border-gray-200 shadow-md -ml-2">
        <p className="text-xl mb-1">{title}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
)

const Timeline = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-6xl m-auto">
        {events.map(({ date, title, description }, index) => (
          <TimelinePoint index={index} date={date} title={title} description={description} />
        ))}
        {/* <TimelineEnd /> */}
      </div>
    </section>
  )
}

export default Timeline
