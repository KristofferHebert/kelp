import React from 'react'

return {
    title: "",
    owner_id: "",
    restaurant_id: "",
    body: "",
    stars: ""
}

return {
    title: "",
    owner_id: "",
    restaurant_id: "",
    body: "",
    stars: ""
}


const ReviewItem = React.createClass({
    render(){
        return (
            <li className={this.props.className}>
                <h3>{this.props.title}</h3>
                <i className={"stars stars-" + this.props.stars}>{this.props.stars}</i>
                <p>{this.props.body}</p>
            </li>
        )
    }
})

export default ReviewItem
