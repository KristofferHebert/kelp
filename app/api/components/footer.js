import React from 'react'

const Footer = React.createClass({
  render () {
    var copywrite = 'Kelp ' + new Date().getFullYear()
    return (
      <footer>
        {copywrite}
      </footer>
    )
  }
})

export default Footer
