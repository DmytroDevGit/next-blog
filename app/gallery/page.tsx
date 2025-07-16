"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// components
import { AppLightbox } from "@/app/components/Lightbox";
import Button from "@/app/components/UI/Button/Button";
import Container from "@/app/components/Container";
import Loader from "@/app/components/UI/Loader/Loader";
import Transition from "@/app/components/Transition";

// utils
import { fetchData } from "@/utils/fetchData";

// types
import { PhotoCard } from "@/types/PhotoCard";

const limit = 8;

export default function Page(){
  const [index, setIndex] = useState<number>(-1);
  const [offset, setOffset] = useState<number>(0);
  const [photos, setPhotos] = useState<PhotoCard[]>([]);

  const loadPhotos = useCallback(
    async (offset: number, limit: number) => {
      const newPhotos: PhotoCard[] = (await fetchData(`photos?limit=${limit}&offset=${offset}`)).photos;
      setPhotos([...photos, ...newPhotos])
    },
  [photos])

  useEffect(() => {
    loadPhotos(offset, limit)
      .then(() => setOffset(offset + limit))
  }, [loadPhotos, offset]);

  const onCloseHandler = (index: number) => setIndex(index);

  const loadMoreClickHandler = () => {
    let scrollTimer: NodeJS.Timeout | number | null = null;

    setOffset(offset + limit);
    loadPhotos(offset, limit)
      .then(() => {
        if (scrollTimer) clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout((): void => {
          scrollTo({
            top: window.scrollY + 200,
            behavior: "smooth",
          })
        }, 500);
      })
  }

  return (
    (photos.length ?
      <Transition>
        <ul className={'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'}>
          {photos.map((photo) => (
            <li key={photo.id}>
              <button
                className={'group block relative overflow-hidden'}
                onClick={() => setIndex(photo.id)}
              >
                <Image
                  className={'group-hover:scale-110 transition duration-300'}
                  src={photo.url}
                  alt={photo.title}
                  width={800}
                  height={600}
                />
                <span className={'flex items-center justify-center absolute left-0 top-0 right-0 bottom-0 opacity-0 text-white text-2xl transition duration-300 group-hover:opacity-100 group-hover:bg-black/50'}>
                  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z" fill="currentColor"/>
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className={'flex justify-center pt-10'}>
          <Button
            className={'inline-flex px-4 py-2 text-sm'}
            type={'button'}
            variant={'secondary'}
            onClick={loadMoreClickHandler}
          >
            Show more
          </Button>
        </div>
        <AppLightbox photos={photos} currentIndex={index} onCloseAction={onCloseHandler} />
      </Transition>
      :
      <Container className={`flex justify-center items-center p-10`}>
        <Loader color={'#000'} />
      </Container>
    )
  )
}
