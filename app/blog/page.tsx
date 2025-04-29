import PostCard from "@/app/components/PostCard";
import { PostCardProps } from "@/types/PostCard";
import Container from "@/app/components/Container";

export default async function Page() {
  const data = await fetch(`${process.env.API_ENDPOINT}/blog-posts`)
  const blogsObj = await data.json()
  const blogs: PostCardProps[] = blogsObj.blogs
  return (
    <Container>
      <ul className={'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'}>
        {blogs.map((post: PostCardProps) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </Container>
  )
}
