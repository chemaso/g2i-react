import LayoutCard from 'components/common/LayoutCard'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { LayoutCardDefaults } from 'props/components/common/LayoutCard'
import { create } from 'react-test-renderer'

configure({ adapter: new Adapter() })

describe('LayoutCard component', () => {
  it('The LayoutCard should render the correct children', () => {
    const renderChild = () => 'test'
    const component = create(<LayoutCard {...LayoutCardDefaults} render={renderChild} />)
    const instance = component.root
    const layoutCard = instance.findByType('div')
    expect(layoutCard.props.children.props.children).toBe('test')
  })
})
