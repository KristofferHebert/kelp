'use strict'

import __ReviewForm__ from '../../api/review/components/reviewform.js'

// global __data
const ReviewForm = React.createFactory(__ReviewForm__)
ReactDOM.render(ReviewForm(__data),
document.getElementById('reviews-mount'))
