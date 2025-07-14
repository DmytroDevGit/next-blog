import React from "react";
import Image from "next/image";
import Link from "next/link";

// types
import { PostCardProps } from "@/types/PostCard";

export default function PostCard({...props}: PostCardProps): React.ReactNode {
  return (
    <article className="blog-post-card bg-white h-full shadow">
      <Link
        className={'group'}
        href={`/blog/${props.id}`}
      >
        <div className={'relative aspect-4/3]'}>
          <Image
            className="object-cover w-full h-full mb-2 group-hover:opacity-80 transition duration-300"
            src={props.photo_url}
            alt={props.title}
            width={800}
            height={600}
          />
        </div>
        <div className="p-2">
          <h3 className={'text-sm font-bold uppercase mb-2 group-hover:underline'}>{props.title}</h3>
          <p className={'text-sm m-0'}>{props.description}</p>
        </div>
      </Link>
    </article>
  )
}
