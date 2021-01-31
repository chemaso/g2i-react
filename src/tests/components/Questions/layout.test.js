import QuestionsLayout from 'components/Questions/layout'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { QuestionLayoutDefaults } from 'props/components/Questions/layout'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('QuestionsLayout component', () => {
  it('The QuestionsLayout Indicator should receive / show current question and difficulty', () => {
    const props = {
      difficulty: 'test',
      current: 'test'
    }
    const component = create(<QuestionsLayout {...QuestionLayoutDefaults} {...props} />)
    const instance = component.root
    const indicators = instance.findByType('div').props.children[0].props.children.props.children
    expect(indicators[2]).toBe('test')
    expect(indicators[10]).toBe('test')
  })
})
