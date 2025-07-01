"use client"

import { useEffect, useState } from "react"

// components
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

// types
import { PhotoCard } from "@/types/PhotoCard";

type Props = {
  photos: PhotoCard[],
  currentIndex: number,
  onCloseAction: (index: number) => void,
}

type Slide = {
  src: string,
  alt: string,
  id: number,
}

export function AppLightbox(
  {
    photos,
    currentIndex,
    onCloseAction,
  }: Props
) {
  const [index, setIndex] = useState(currentIndex);
  const slides: Slide[] = []

  photos.forEach(photo => {
    slides.push({
      src: photo.url,
      alt: photo.title,
      id: photo.id
    });
  })

  useEffect(() => setIndex(currentIndex-1), [currentIndex])

  return (
    <Lightbox
      slides={slides}
      open={index >= 0}
      index={index}
      close={() => {
        setIndex(-1)
        onCloseAction(-1)
      }}
      plugins={[Slideshow]}
    />
  )
}
