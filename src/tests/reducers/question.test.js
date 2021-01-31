import * as types from 'actionTypes/question'
import reducer, { initialState } from 'reducers/question'

describe('question reducers', () => {
  it('set list of questions', () => {
    const testList = ['test']
    const state = reducer(initialState, { type: types.SET_QUESTIONS, list: testList })
    expect(state.list).toEqual(testList)
  })
  it('set current question', () => {
    const state = reducer(initialState, { type: types.SET_CURRENT_QUESTIONS, current: 1 })
    expect(state.current).toEqual(1)
  })
})
