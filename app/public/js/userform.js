'use strict'

import UserFormContainer from '../../api/user/components/userformcontainer.js'

let ufc = React.createFactory(UserFormContainer)
ReactDOM.render(<UserFormContainer isLoggedIn={false} loginHeader={false} />,
document.getElementById('userform-mount'))
