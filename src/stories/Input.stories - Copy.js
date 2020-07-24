import React from 'react'
import {action} from '@storybook/addon-actions'

import Input from '../components/Input'


export default {
    component: Input,
    title: "Standalone-Input"
}

const config = {
    type: "text",
    minLength: 4,   
    maxLength: 9,
    theme: "white"
}

const actionsData = {
    onKeyUp: action('onKeyUp'),
    onButtonClick: action('onButtonClick123')
}

export const White = () => <Input config={{...config}} {...actionsData}></Input>

export const Red = () => <Input config={{...config, theme: "red"}} {...actionsData}></Input>
