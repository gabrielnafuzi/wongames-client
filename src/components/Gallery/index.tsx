/* eslint-disable @next/next/no-img-element */

import { useRef } from 'react'

import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close,
} from '@styled-icons/material-outlined'
import SlickSlider from 'react-slick'

import { Slider, SliderSettings } from '@/components/Slider'
import { useDisclosure, useSimpleHotkey } from '@/hooks'

import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

export const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, { open, close }] = useDisclosure(false)
  const sliderRef = useRef<SlickSlider>(null)

  useSimpleHotkey('Escape', close)

  const handleOpenModal = (imgIndex: number) => {
    open()

    sliderRef.current?.slickGoTo(imgIndex, true)
  }

  return (
    <S.Wrapper>
      <Slider ref={sliderRef} settings={thumbSettings}>
        {items?.map((item, index) => (
          <img
            key={`thumb-${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => handleOpenModal(index)}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close role="button" aria-label="close modal" onClick={close}>
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items?.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
}

const thumbSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
}
