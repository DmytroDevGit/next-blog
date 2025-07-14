// components
import PostCard from "@/app/components/PostCard";
import { PostCardProps } from "@/types/PostCard";

// utils
import { fetchData } from "@/utils/fetchData";

// types
import Container from "@/app/components/Container";

export default async function Page() {
  const blogs: PostCardProps[] = (await fetchData(`blog-posts`)).blogs;
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
