import React from 'react'

function generateStars (reviews) {
  const results = reviews.map(function (review, index) {
    let stars = []
    let max = 5 - review.stars
    let i = -1
    let ii = -1
    while (++i < review.stars) {
      stars.push((<span className='review-star' key={'b' + i}></span>))
    }

    while (++ii < max) {
      stars.push((<span className='review-star review-star-gray' key={'a' + ii}></span>))
    }
    return stars
  })

  return results
}

export default generateStars
