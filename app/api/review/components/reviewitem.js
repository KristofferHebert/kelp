import React from 'react'

const ReviewItem = React.createClass({
  render () {
    const className = 'stars stars-' + this.props.stars

    return (
      <li className={this.props.className}>
        <h3>{this.props.title}</h3>
        <p><i className={className}>{this.props.stars}</i> <span>By {this.props.owner_name}</span></p>
        <p>{this.props.body}</p>
      </li>
    )
  }
})

export default ReviewItem
