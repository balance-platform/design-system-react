import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

function Button(props) {
  const {
    block,
    children,
    className,
    disabled,
    processing,
    ...otherProps
  } = props

  const componentClass = cn(
    'Button',
    {
      Button_block: block,
      Button_disabled: disabled,
      Button_processing: processing,
    },
    className
  )

  return (
    <button {...otherProps} className={componentClass} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
}
Button.defaultProps = {
  block: false,
  children: null,
  className: null,
  disabled: false,
  processing: false,
}

export default Button
