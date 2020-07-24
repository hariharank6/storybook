import React from 'react';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions'
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, color, number, select } from "@storybook/addon-knobs/react"

export default {
    title: 'Select',
    component: Button,
};

const stories = storiesOf("Select", module);
stories.addDecorator(withKnobs)

const addOption = () => {
    selectOptions.push(toString(document.getElementById("ADD_OPTION").value))
}

const selectOptions = [
    "Ford",
    "Maruthi",
    "Honda",
    "Chevorlet",
    "Renault",
    "Volovo"
]

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

stories.add("Select Customization", () => (
    <select
    style={{
        color: color("Option Color", "#000"),
        backgroundColor: color("Background Color", "#E2DADA"),
        fontFamily: select("Font Style", fontFamilyOptions, "Times New Roman"),
        fontSize: number("Font Size", 18, fontSizeOptions),
        padding: number("Padding", 10, paddingOptions),
        borderColor: color("Border Color", "#000"),
        borderRadius: number("Border Radius", 5, borderRadiusOptions)
    }}
    disabled={(boolean("Disable", false) ? true : false)}>>
         {selectOptions.map((option) => (
            <option value={toString(option)}>{option}</option>
        ))}
    </select>
    // <input onInput={addOption()} id="ADD_OPTION">{text("Add Option")}</input>
))
