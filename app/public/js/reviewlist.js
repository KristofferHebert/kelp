'use strict'

import __ReviewList__ from '../../api/review/components/reviewlist.js'

// global __data
const ReviewList = React.createFactory(__ReviewList__)
ReactDOM.render(ReviewList(__data),
document.getElementById('reviews-mount'))
