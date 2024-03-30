//import ReactSlider from 'react-slider'
import getPosts, { PostType } from '@/util/getPosts'
import PostIndex from '@/components/PostIndex'
import getDateBuckets, { DateBucketType } from '@/util/getDateBuckets'
import { useState } from 'react'

export const getStaticProps = async () => {
  const posts = await getPosts('blog')
  const buckets = getDateBuckets(posts, 20)

  return {
    props: {
      posts,
      buckets,
    },
  }
}

interface IndexProps {
  posts: PostType[]
  buckets: DateBucketType
}

const Index: React.FC<IndexProps> = ({ posts, buckets }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  return (
    <>
      <PostIndex className='md:mt-4' posts={filteredPosts} />
    </>
  )
}
export default Index
