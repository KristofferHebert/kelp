'use strict'

import __UserFormContainer__ from '../../api/user/components/userformcontainer.js'

// global __data
const UserFormContainer = React.createFactory(__UserFormContainer__)
ReactDOM.render(UserFormContainer(__data),
document.getElementById('userform-mount'))
