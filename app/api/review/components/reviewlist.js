import React from 'react'

const ReviewList = react.createClass({
    render(){
        return (
            <ul {...this.props.className}>
                {reviews}
            </ul>
        )
    }
})

export default ReviewList
