import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App.js'

configure({ adapter: new Adapter() })

test('App should be defined', () => {
  const container = shallow(<App />)
  expect(container).toBeDefined()
})
