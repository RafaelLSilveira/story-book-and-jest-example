import { Meta, Story } from '@storybook/react'

import AutocompleteInput from '../../components/Autocomplete'
import { AutocompleteComponent } from '../../types'

export default {
  title: 'Components/AutocompleteInput',
  component: AutocompleteInput,
  argTypes: {},
} as Meta

const Template: Story<AutocompleteComponent> = (args) => <AutocompleteInput {...args} />;

export const EmptyList = Template.bind({});
EmptyList.args = {
  label: 'Lista Vazia',
  options: [],
  multiple: false,
  value: null,
  disabled: false
};

EmptyList.parameters = {
  jest: ['../../tests/Autocomplete.spec.tsx'],
}

export const NormalList = Template.bind({});
NormalList.args = {
  label: 'Lista Teste',
  options: [
    { label: 'Não', value: '0' },
    { label: 'Sim', value: '1' }
  ],
  value: null,
  multiple: false,
  disabled: false
};

export const DisabledList = Template.bind({});
DisabledList.args = {
  label: 'Lista Teste',
  options: [
    { label: 'Não', value: '0' },
    { label: 'Sim', value: '1' }
  ],
  value: { label: 'Não' },
  multiple: false,
  disabled: true
};

export const multipleList = Template.bind({});
multipleList.args = {
  label: 'Lista Teste',
  options: [
    { label: 'Não', value: '0' },
    { label: 'Sim', value: '1' }
  ],
  value: null,
  multiple: true,
  disabled: false
};

export const defaultView = () => <div>Jest results in storybook</div>;
defaultView.parameters = {
  jest: ['Autocomplete.spec.tsx'],
}
