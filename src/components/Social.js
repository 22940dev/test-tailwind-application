import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socials {
            twitter
            github
            instagram
          }
        }
      }
    }
  `)

  return (
    <div className="flex items-center justify-center py-10 text-xl text-gray-700">
      <a
        href={data.site.siteMetadata.socials.twitter}
        title="Twitter profile"
        className="px-4 hover:text-teal-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={data.site.siteMetadata.socials.github}
        title="Github profile"
        className="px-4 hover:text-teal-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={data.site.siteMetadata.socials.instagram}
        title="Instagram account"
        className="px-4 hover:text-teal-400 cursor-pointer transition duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  )
}

export default Social
