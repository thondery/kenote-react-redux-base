// ------------------------------------
// Screen -- Home
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Home extends PureComponent {
  
  constructor (props) {
    super(props)
  }
  
  render() {
    const { location } = this.props
    return (
      <div>
        <span>::pathname:: => '{location.pathname}'</span>
      </div>
    )
  }
}