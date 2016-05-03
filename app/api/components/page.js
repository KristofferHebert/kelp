import React from 'React'

import Header from './header'
import Footer from './footer'

const Page = React.createClass({
  render () {
    return (
      <body>
        <Header currentPage={this.props.currentPage} />
          {this.props.children}
        <Footer />
      </body>
    )
  }
})

export default Page
