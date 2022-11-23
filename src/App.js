import React, { useState } from 'react'
import Expanses from './components/Expanses/Expanses'
import NewExapanses from './components/NewExpanses/NewExpanses'

const DUMMY_EXPANSES = [
  {
    id: 'e1',
    date: new Date(2021, 5, 12),
    title: 'car insurence',
    amount: 296
  },
  {
    id: 'e2',
    date: new Date(2020, 5, 12),
    title: 'tv',
    amount: 598
  },
  {
    id: 'e3',
    date: new Date(2019, 5, 12),
    title: 'bike insurence',
    amount: 26
  },
  {
    id: 'e4',
    date: new Date(2020, 1, 6),
    title: 'car',
    amount: 29600
  }
]

const App = () => {
  const [expanses, addExpanses] = useState(DUMMY_EXPANSES)
  const expansesData = (expanse) => {
    addExpanses((prevExpenses) => {
      // console.log(expanse)
      return [expanse, ...prevExpenses]
    })
  }
  return (
    <div>
      <NewExapanses onExpanseData={expansesData} />
      <Expanses expanses={expanses} />
    </div>
  );
}

export default App;
