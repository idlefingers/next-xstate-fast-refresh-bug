import React from 'react'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

const testMachine = Machine({
  initial: 'foo',
  states: {
    foo: {
      on: {
        TOGGLE: 'bar'
      }
    },
    bar: {
      on: {
        TOGGLE: 'foo'
      }
    }
  }
})

const IndexPage = () => {
  const [state, send] = useMachine(testMachine)

  return (
    <div>
      <h1>State: {state.value}</h1>

      <button onClick={() => send('TOGGLE')}>
        Toggle
      </button>
    </div>
  )
}

export default IndexPage
