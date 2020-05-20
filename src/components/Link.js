import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

/**
 * Styled 'primary' link. We want to use gatsby link functionality for internal links
 * @param {Object} props
 * @param {string} props.to - the link
 * @param {string} props.children - the link text
 */
const Link = ({ to, secondary, children }) => {
  const classes = [...defaultStyles, ...(secondary ? secondaryStyles : primaryStyles)]
  if (typeof window !== 'undefined' && to.includes(window.location.hostname)) {
    return (
      <InternalLink className={classes.join(' ')} link={to} secondary={secondary}>
        {children}
      </InternalLink>
    )
  }

  return (
    <ExternalLink className={classes.join(' ')} link={to}>
      {children}
    </ExternalLink>
  )
}

//External links ar the default
const ExternalLink = ({ className, link, children }) => {
  return (
    <a href={link} className={className}>
      {children}
    </a>
  )
}

//Gatsby cleverly prefetches internal links. We want to keep that functionality
const InternalLink = ({ className, link, children }) => {
  return (
    <GatsbyLink to={link} className={className}>
      {children}
    </GatsbyLink>
  )
}

const primaryStyles = ['bg-gray-200', 'text-gray-700', 'shadow-button']
const secondaryStyles = ['bg-gray-800', 'text-gray-300', 'shadow-button-secondary']
const defaultStyles = [
  'relative',
  'inline-block',
  'w-auto',
  'h-auto',
  'px-8',
  'py-3',
  'hover:mt-1',
  'focus:mt-1',
  'mb-1',
  'hover:mb-0',
  'focus:mb-0',
  'text-lg',
  'uppercase',
  'font-bold',
  'rounded-md',
  'hover:shadow-none',
  'focus:shadow-none',
  'transition-margin',
  'duration-200',
]

export default Link
