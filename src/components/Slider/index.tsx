import { forwardRef } from 'react'

import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const BaseSlider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SlickSlider {...settings} ref={ref}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export const Slider = forwardRef(BaseSlider)
