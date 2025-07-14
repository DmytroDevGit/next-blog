import Link from "next/link";
import Image from "next/image";

// components
import Container from "@/app/components/Container";
import Overlay from "@/app/components/UI/Overlay";

export default function HomeGallery() {
  return (
    <section className={'relative aspect-[4/3] md:aspect-[5/2] flex items-stretch'}>
      <Container className={'flex items-center justify-center w-full relative z-10'}>
        <h2 className={'font-bold text-3xl mb-4 text-white text-shadow'}>
          <Link className={'hover:underline'} href="/gallery">Gallery</Link>
        </h2>
      </Container>
      <Image
        fill={true}
        src={'/gallery.jpg'}
        alt={''}
      />
      <Overlay bgColor={'blue'} opacity={50} />
    </section>
  )
}
