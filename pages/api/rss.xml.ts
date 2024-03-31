import type { NextApiRequest, NextApiResponse } from 'next'
import { Feed } from 'feed'
import getPosts from '@/util/getPosts'

type ResponseData = string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const posts = await getPosts('blog')
  const site_url = 'https://ships.steinkamp.us/'

  //console.log('GENERATE RSS')

  const feedOptions = {
    title: 'The Ships Framework',
    description: "Ships Framework blog posts.",
    id: site_url,
    link: site_url,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/api/rss.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  posts.slice(0, 50).forEach((post) => {
    let image = post.thumbnail
    if (post.thumbnail && !post.thumbnail.match(/^https?:\/\//)) {
      image = 'https://ships.steinkamp.us' + post.thumbnail
    }
    feed.addItem({
      title: post.title,
      id: `${site_url}/blog/${post.slug}`,
      link: `${site_url}/blog/${post.slug}`,
      description: post.excerpt,
      date: new Date(post.date),
      image: image ? image.replaceAll('&', '&amp;') : undefined,
    })
  })

  res.status(200).send(feed.rss2())
}
