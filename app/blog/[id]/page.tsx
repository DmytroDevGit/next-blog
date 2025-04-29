import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";

// components
import Container from "@/app/components/Container";

// utils
import { getReadingTime } from "@/utils/getReadingTime";
import { dateConvertor } from "@/utils/dateConvertor";

// styles
import '../../rich-text.css'
export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const data = await fetch(`${process.env.API_ENDPOINT}/blog-posts/${id}`)
  const postObj = await data.json()
  const post = postObj.blog

  return (
    <Container>
      <div className="blog-post bg-white">
        {post.photo_url && (
          <Image
            className={'w-full aspect-[16/9] object-center object-cover block'}
            src={post.photo_url}
            alt={post.title}
            width={800}
            height={600}
          />
        )}
        <div className=" p-8">
          <div className={'mb-8'}>
            <span className="inline-flex rounded-xl bg-gray-500 text-white py-0.5 px-2">{post.category}</span>
            <h1>{post.title}</h1>
            <div className={'flex justify-between'}>
                <time
                  dateTime={post.updated_at}
                  className={'text-gray-500 font-bold'}
                >
                  {dateConvertor(post.updated_at)}
                </time>
                <span className={'text-gray-500 font-bold'}>
                {getReadingTime(post.content_text)} min read
              </span>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content_html)}} />
        </div>
      </div>
    </Container>
  )
}
