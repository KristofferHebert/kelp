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

      var time = new Date(Date.parse(review.createdAt)).toDateString()

      return (
          <article className='review-container' key={index}>
            <div className='row'>
              <div className='col-md-8'>
                <h3 className='review-title'>{review.title}</h3>
                <p>{review.body}</p>
              </div>
              <aside className='col-md-4 reviewstar-container'>
                {stars}
                <span className='review-owner-name'>{'By ' + review.owner_name}<br />on {time}</span>
              </aside>
            </div>
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