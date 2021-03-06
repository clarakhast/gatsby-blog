import * as React from "react"
import {useState} from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const [search, setSearch] = useState({
    query: ``,
    filteredPosts: posts
  })

  const handleSearch = (event) => {

    const queryStr = event.target.value    // input field value
    const postsAr = posts.filter(post => 
      post.frontmatter.title.toUpperCase().includes(queryStr.toUpperCase())
    )

    setSearch({
      query: queryStr,
      filteredPosts: postsAr
    })

  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} className="featured-article">
      <Seo title="All posts" />
      {/* <Bio /> */}
      <input type="search" name="find" placeholder="Search..." className="search" onChange={handleSearch} value={search.query}/>
      <ol style={{ listStyle: `none` }} className="featured-article-list-container">
        {search.filteredPosts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const articleImg = post.frontmatter.articleImg

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <section>
                  <img src={articleImg} alt={title} className="article-preview" />
                  <div className="featured-title-wrapper">
                    <h3>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h3>
                    <small>{post.frontmatter.date}</small>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  <small><span className="material-icons">share</span> Share</small>
                  <small><span className="material-icons">chat</span> 25</small>
                  <small><span className="material-icons">visibility</span> 54</small>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          articleImg
        }
      }
    }
  }
`
