import { useState } from 'react'
import { Autocomplete as AutocompleteMaterial }  from '@material-ui/lab'
import TextField  from '@material-ui/core/TextField'
import { isString, get } from 'lodash'
import { AutocompleteComponent, OptionsProps } from '../../types'

import './styles.css'

function Autocomplete(props: AutocompleteComponent) {
  const {
    value,
    label,
    multiple,
    options,
    disableClearable,
    disabled,
    size,
    onChange
  } = props

  const [valueInput, setValueInput] = useState(value)

  function handleChange(_:unknown, newValue: OptionsProps | OptionsProps[] | null) {
    setValueInput(newValue)
    onChange(newValue)
  }

  return (
    <AutocompleteMaterial
      className={['autocomplete', `autocomplete--${size}`].join(' ')}
      value={ valueInput }
      onChange={ handleChange }
      options={ options }
      multiple={ multiple }
      disableClearable={ !disableClearable }
      getOptionLabel={ (option) =>{
        const val = get(option, 'label', undefined)
        return isString(val) ? val : ""
      }}
      getOptionSelected={(option, val) => option.value === val.value }
      renderOption={ option => get(option, 'label', option) }
      renderInput={(params) => <TextField {...params} label={label} variant="standard" fullWidth />}
      size={ size }
      disabled={ disabled	}
    />
  )
}

Autocomplete.displayName = 'Autocomplete'
export default (Autocomplete)
