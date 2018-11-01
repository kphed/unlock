import React from 'react'
import styled from 'styled-components'
import UnlockPropTypes from '../../../propTypes'
import { expirationAsDate } from '../../../utils/durations'

// TODO add pagination
export function KeyList ({ keys, lock }) {
  let keyList = {}
  if (keys) Object.values(keys).filter((key) => key.lockAddress === lock.address).forEach((item) => keyList[item.id] = item)
  return (
    <Table>
      <Header>
        <Cell>
          Keys
        </Cell>
        <Cell>
          Expiration
        </Cell>
        <Cell>
          Data
        </Cell>
      </Header>
      {Object.values(keyList).map((key) => {
        return (
          <Row key={key.id}>
            <Data>
              {key.transaction}
            </Data>
            <Cell>
              {expirationAsDate(key.expiration)}
            </Cell>
            <Data>
              {key.data}
            </Data>
          </Row>
        )
      })}
    </Table>
  )
}

KeyList.propTypes = {
  keys: UnlockPropTypes.keys,
  lock: UnlockPropTypes.lock,
}

export default KeyList

const Table = styled.div`
`

const Row = styled.div`
  display: grid;
  margin-top: 20px;
  margin-left: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  grid-gap: 36px;
  margin-bottom: 10px;
`

const Header = styled(Row)`
  font-family: 'IBM Plex Sans';
  font-size: 10px;
  text-transform: uppercase;
`

const Cell = styled.div`
`

const Data = styled(Cell)`
  overflow: hidden;
  text-overflow: ellipsis;
`
