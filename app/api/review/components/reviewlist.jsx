import React from 'react'

let ReviewsList = React.createClass({
  render () {
    let Reviews = this.props.reviews.map(function (review, index) {
      let stars = []
      let max = 5 - review.stars
      let i = -1
      let ii = -1

      while (++i < review.stars) {
        stars.push((<span className='review-star'></span>))
      }

      while (++ii < max) {
        stars.push((<span className='review-star review-star-gray'></span>))
      }

      return (
          <article className='review-container' key={index}>
            <h3 className='review-title'>{review.title} <div className='reviewstar-container'>{stars}</div></h3>
            <span className='review-owner-name'>{review.owner_name}</span>
            <p>{review.body}</p>
          </article>
         )
    })

    return (
        <section>
           {Reviews}
        </section>
     )
  }
})

export default ReviewsList
