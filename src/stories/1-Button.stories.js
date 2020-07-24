import React from 'react';
import { Button } from '@storybook/react/demo';
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, color, number, select } from "@storybook/addon-knobs/react"

export default {
  title: 'Button',
  component: Button,
};

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs)

const borderRadiusOptions = {
  range: true,
   min: 0,
   max: 100,
   step: 2
}
const paddingOptions = {
  range: true,
   min: 0,
   max: 50,
   step: 1
}
const fontSizeOptions = {
  range: true,
   min: 0,
   max: 100,
   step: 2
}
const fontFamilyOptions = [
  "Arial",
  "Helvatica",
  "Times New Roman",
  "Georgia",
  "Verdana",
  "Courier New",
  "Lucida Console"]

stories.add("Button Customization", () => (
  <button disabled={boolean("Disable Button", false)}
  style={{color:color("Text Color", "white"),
  backgroundColor:color("Background Color", "blue"),
  borderRadius: number("Border Radius", 20, borderRadiusOptions),
  padding:number("Padding", 10, paddingOptions),
  fontSize:number("Font Size", 15, fontSizeOptions),
  fontFamily:select("Font Style", fontFamilyOptions, "Arial"),
  opacity:(boolean("Disable Button", false)?0.3:1.0)}}> {text("Button Label", "Submit")} </button>
));
