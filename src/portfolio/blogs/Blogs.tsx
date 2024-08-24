import { useState, useEffect } from 'react'

import { fetchMediumPosts } from './blogs-service'
import './blogs.css'

type MediumPost = {
  title: string
  link: string
  pubDate: string
  categories: string[]
  description: string
  author: string
}

function Blogs() {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    fetchMediumPosts().then((data) => {
      setPosts(data)
    })
  }, [])

  console.log({ posts })

  return (
    <div className="blogs">
      {posts.map((post, index) => {
        return (
          <div
            className="post"
            key={index}
            onClick={() => window.open(post.link)}
            onKeyDown={() => ''}
            role="button"
            tabIndex={0}
          >
            <div className="title">
              <h3>{post.title}</h3>
            </div>
            <div className="tags">
              {post.categories.map((category, index) => {
                return (
                  <div className="tag" key={index}>
                    {category}
                  </div>
                )
              })}
            </div>
            <div className="date">
              <p>Published on: {new Date(post.pubDate).toLocaleDateString()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs
