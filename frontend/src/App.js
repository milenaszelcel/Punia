import React from 'react'
import { DateTime } from 'luxon'
import { Home } from './components/Home'
import Button from './components/Button/Button'
import InfoBox from './components/InfoBox/InfoBox'
import { NumberInput } from './components/NumberInput/NumberInput'

function App() {
  return (
    <div>
      <Home />
      <Button>Dodaj</Button>
      <InfoBox
        text="Waga"
        value={3.5}
        unit="kg"
        change={200}
        changeUnit="g"
        date={DateTime.now()}
        color="red"
      />
      <InfoBox
        text="Waga"
        value={10}
        unit="kg"
        change={200}
        changeUnit="g"
        date={DateTime.now()}
        color="green"
      />
      <NumberInput label="Lubie punie" placeholder="Lubie Punie" />
    </div>
  )
}

export default App
