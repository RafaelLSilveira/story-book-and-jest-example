export interface OptionsProps
{
    label: string,
    value?:string
}

export interface AutocompleteComponent {
    value: OptionsProps | OptionsProps[] | null
    multiple: boolean
    disableClearable: boolean
    freeSolo?: boolean
    label: string
    options: (OptionsProps)[]
    disabled: boolean
    size?: "small" | "medium" | undefined
    onChange: (newValue:OptionsProps | OptionsProps[] | null) => void
}