import { IState, mutations } from './store'

describe('mutations', () => {
  it('increment', () => {
    const state: IState = {
      count: 0,
    }

    mutations.increment(state)
    expect(state.count).toBe(1)
  })
})
