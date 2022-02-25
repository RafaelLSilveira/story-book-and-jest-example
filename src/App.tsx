import { useState } from 'react'
import Autocomplete from './components/Autocomplete'
import { OptionsProps } from './types'
import { RiCarLine } from 'react-icons/ri'

export default function App() {
  const carList = [
    { label: 'Fusca', value: '0' },
    { label: 'Kadete', value: '1' },
    { label: 'Monza', value: '2' },
    { label: 'Belina', value: '3' }
  ]

  const [value, setValue] = useState<OptionsProps | OptionsProps[] | null>(null)

  return (
    <div style={{
      background: '#dadadac7',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      maxWidth: 400,
      margin: '0 auto',
      padding: 40,
      marginTop: '15%'
    }}>
      <header style={{ display: 'flex', alignSelf: 'center' }}>
        <h1>CARTOP</h1>
        <RiCarLine size={ 50 } style={{  marginLeft: 10, marginTop: 10 }}/>
      </header>
      <main>
        <Autocomplete
          label="Carros"
          options={carList}
          value={ value }
          onChange={ setValue }
          multiple={false}
          disableClearable={false}
          disabled={false}
        />
      </main>
    </div>
  )
}