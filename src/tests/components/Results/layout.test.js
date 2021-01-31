import ResultsLayout from 'components/Results/layout'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ResultsLayoutDefaults } from 'props/components/Results/layout'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('ResultsLayout component', () => {
  it('The ResultsLayout Indicator should show the correct difficulty', () => {
    const props = {
      level: 'test'
    }
    const component = create(<ResultsLayout {...ResultsLayoutDefaults} {...props} />)
    const instance = component.root
    const indicators = instance.findByType('div').props.children[0].props.children.props.children
    expect(indicators[2]).toBe('test')
  })
  it('The ResultsLayout Indicator should show the correct answers', () => {
    const props = {
      level: 'test',
      answers: [{
        answer: false,
        correctAnswer: false,
        question: 'test'
      }]
    }
    const component = create(<ResultsLayout {...ResultsLayoutDefaults} {...props} />)
    const instance = component.root
    const answers = instance.findByType('div').props.children[4].props.children
    expect(answers.length).toBe(1)
    expect(answers[0].props.result.question).toBe('test')
    expect(answers[0].props.result.answer).toBe(false)
    expect(answers[0].props.result.correctAnswer).toBe(false)
  })
})
