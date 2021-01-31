import * as types from 'actionTypes/answers'
import reducer, { initialState } from 'reducers/answer'

describe('question reducers', () => {
  it('set answers', () => {
    const testList = { v: 'test' }
    const state = reducer(initialState, { type: types.SET_ANSWER, answer: testList })
    expect(state.list).toEqual([testList])
  })
  it('set ;ist of answers', () => {
    const testList = { v: 'test' }
    const state = reducer(initialState, { type: types.SET_ANSWERS, answer: [testList] })
    expect(state.list).toEqual([testList])
  })
})
