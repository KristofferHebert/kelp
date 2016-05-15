import React from 'react'

function getMessage (message) {
  let messageState = message

  let MessageContainer = (
    <section className='padding text-center text-warning bg-danger'>
      {message}
    </section>
  )
  return message ? MessageContainer : false
}

export default getMessage
