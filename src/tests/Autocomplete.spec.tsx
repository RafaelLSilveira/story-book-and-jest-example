import { cleanup, fireEvent, render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Autocomplete from '../components/Autocomplete/index'

const propsDefault = {
    label: 'Minha Lista',
    value:  null,
    multiple: false,
    disableClearable: false,
    options: [
        { label: 'Não', value: '0' },
        { label: 'Sim', value: '1' }
    ],
    disabled: false,
    onChange: () => null
}

afterEach(cleanup)

describe('Autocomplete', () => {    
    it('should be able to render autocomplete component on screen',  () => {
        const { getByText } = render(<Autocomplete {...propsDefault} />)

        expect(getByText('Minha Lista')).toBeInTheDocument()
    })

    it('should be able to render autocomplete with default value',  () => {
        const { getByDisplayValue } = render(<Autocomplete {...propsDefault} value={  { label: 'Sim', value: '1' } }  />)

        expect(getByDisplayValue('Sim')).toBeValid()
    })

    it('should be able to render autocomplete with default another value',  () => {
        const { getByDisplayValue } = render(<Autocomplete {...propsDefault} value={ { label: 'Não', value: '0' } } />)

        expect(getByDisplayValue('Não')).toBeValid()
    })

    it('should be able to select value on autocomplete',  () => {
        const handleChange = jest.fn()
        const { getByRole, getByDisplayValue, queryByDisplayValue } = render(<Autocomplete {...propsDefault} onChange={handleChange}/>)

        expect(queryByDisplayValue('Não')).toBeNull()

        const autoComplete = getByRole('textbox')
        autoComplete.focus()

        fireEvent.change(autoComplete, { target: { value: 'Não' } })
        fireEvent.keyDown(autoComplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autoComplete, { key: 'Enter' })
        
        expect(getByDisplayValue('Não')).toBeValid()
        expect(getByDisplayValue('Não').getAttribute('class')?.localeCompare('MuiInputBase-input')).toEqual(1)
        expect(handleChange).toHaveBeenCalledTimes(1)

        fireEvent.change(autoComplete, { target: { value: 'Sim' } })
        fireEvent.keyDown(autoComplete, { key: 'ArrowDown' })
        fireEvent.keyDown(autoComplete, { key: 'Enter' })

        expect(getByDisplayValue('Sim')).toBeValid()
        expect(getByDisplayValue('Sim').getAttribute('class')?.localeCompare('MuiInputBase-input')).toEqual(1)
        expect(handleChange).toHaveBeenCalledTimes(2)
    })

    it('should be able to disable autocomplete',  () => {
        const { getByRole } = render(<Autocomplete {...propsDefault} disabled={true} />)

        expect(getByRole('textbox')).toBeDisabled()
    })
})