interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Square One Market',
    description:
      'square1market offers US stock market information and analysis. Built with React, it showcases comprehensive front-end technologies through interactive investment games.',
    imgSrc: '/static/images/square1market.png',
    href: 'https://www.square1market.com/',
  },
  {
    title: 'Culture Time',
    description:
      'Cultime is the official website of an arts and humanities company, designed by professional web designers. It features an elegant interface and vivid animations. The site is built using WordPress.',
    imgSrc: '/static/images/cultime.png',
    href: 'https://cultime.co/',
  },
]

export default projectsData
