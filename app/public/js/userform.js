'use strict'

import UserFormContainer from '../../api/user/components/userformcontainer.js'

ReactDOM.render(<UserFormContainer isLoggedIn={false} showCreateAccount={false} />,
document.getElementById('userform-mount'))
