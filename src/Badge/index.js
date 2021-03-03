import React from 'react'
import classNames from 'classnames'
import Text from '../Typography/Text'

const Badge = ({ style, children, minimal, className }) => {
  let badgeStyle = [
    {
      'bg-green-100 text-green-800': style === 'positive',
      'bg-yellow-100 text-yellow-800': style === 'warning',
      'bg-blue-100 text-blue-800': style === 'attention',
      'bg-red-100 text-red-800': style === 'danger',
      'bg-gray-100 text-gray-800': style === 'neutral',
    },
  ]

  return (
    <div
      className={classNames(
        'inline-flex items-center px-2.5 rounded-md text-sm font-medium h-6 leading-6',
        badgeStyle,
        className
      )}>
      {!minimal && (
        <svg
          className={classNames('-ml-0.5 mr-1.5 h-2 w-2', badgeStyle)}
          fill="currentColor"
          viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}
      {children}
    </div>
  )
}

export default Badge
