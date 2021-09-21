import { Story, Meta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import { Slider } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

const makeChildrens = () =>
  [...Array(5)].map((_, i) => <Slide key={i}>{i + 1}</Slide>)

export const Horizontal: Story = () => (
  <Slider settings={settings}>{makeChildrens()}</Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>{makeChildrens()}</Slider>
)
