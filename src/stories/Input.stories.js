import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, color, number, select } from "@storybook/addon-knobs/react"

import Input from '../components/Input'

export default {
    component: Input,
    title: "Input"
}

const stories = storiesOf("Input", module);
stories.addDecorator(withKnobs)

const borderRadiusOptions = {
    range: true,
    min: 0,
    max: 50,
    step: 1
}

const paddingOptions = {
    range: true,
    min: 0,
    max: 50,
    step: 1
}

const fontSizeOptions = {
    range: true,
    min: 10,
    max: 100,
    step: 1
}

const fontFamilyOptions = [
    "Arial",
    "Helvatica",
    "Times New Roman",
    "Georgia",
    "Verdana",
    "Courier New",
    "Lucida Console"
]

const inputType = [
    "text",
    "number",
    "password"
]

const actions = {
    onKeyUp: action('onKeyUp')
}

stories.add("Themable Input", () => (
    <input 
        type={select("Input Type", inputType, "text")}
        placeHolder={text("Placeholder Text", "Enter the value")}
        maxLength={number("Maximun input size", 100)}
        {...actions}
        style={{
            color: color("Placeholder Color", "#000"),
            backgroundColor: color("Background Color", "#fff"),
            fontFamily: select("Font Style", fontFamilyOptions, "Arial"),
            fontSize: number("Font Size", 15, fontSizeOptions),
            padding: number("Padding", 10, paddingOptions),
            borderColor: color("Border Color", "#000"),
            borderRadius: number("Border Radius", 20, borderRadiusOptions)
        }}
        disabled={(boolean("Disable Button", false) ? true : false)}>
    </input>
));