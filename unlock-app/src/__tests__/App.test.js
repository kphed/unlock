import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

jest.mock('../services/web3Service', () => {
  return {
    initWeb3Service: () => {

    },
  }
})

it('renders without crashing', () => {
  shallow(<App />)
})