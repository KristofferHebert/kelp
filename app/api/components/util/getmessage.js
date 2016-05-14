import React from 'react'

function getMessage () {
  let message = (
    <section className='message message-error'>
      {this.props.message}
    </section>
  )
  return this.props.message ? message : false
}

export default getMessage
