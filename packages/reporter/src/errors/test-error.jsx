import cs from 'classnames'
import React from 'react'
import FlashOnClick from '../lib/flash-on-click'

function TestError (props) {
  const { model, events, isTestError, displayMessage } = props

  function _onErrorClick (e) {
    e.stopPropagation()
    events.emit('show:error', model.testId, model.id)
  }

  return (
    <FlashOnClick
      message='Printed output to your console'
      onClick={_onErrorClick}
    >
      <pre className={cs('attempt-error', { 'test-error': isTestError })}>{displayMessage}</pre>
    </FlashOnClick>
  )
}

export default TestError