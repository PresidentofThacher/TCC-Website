import React from "react"
import { graphql } from "gatsby"
import PageLayout from "../components/layout"
import SEO from "../components/seo"

import Slider from "../components/slider"
import Shirt from '../images/TCCtshirt.png'

import { BiWorld, BiGroup, BiCar } from "react-icons/bi";
import { GrGroup, GrCar } from "react-icons/gr";
import BannerPic from '../images/Climber.jpg'



export default function Posts({ data }) {
  return (
    <PageLayout>
      <SEO title="posts" />
      <div className="page-banner">
        <img alt="Mountain Climber" src="http://backend.climbthatcher.org/wp-content/uploads/2017/10/cropped-Screen-Shot-2017-10-13-at-1.04.48-PM.png"/>
        <div className="page-banner-title">TCC Posts</div>
      </div>
       
      <div className="slider-header-wrapper"><h3>All Of Our Posts</h3></div>
      <div className="banner-divider align-center"  />
      <div className="two-col-grid-wrap">
      {data.allWpPost.edges.map(({ node }) => {
           try{
            return <div className="mini-post-wrapper">
                      <img src={node.featuredImage.node.mediaItemUrl}/>
                      <h3><a href={'/post/' + node.slug}>{node.title }</a></h3>
                      <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>  
            } catch(e){
            return <div className="mini-post-wrapper">
                    <h3><a href={'/post/' + node.slug}>{node.title}</a></h3>
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>  
            }
        })}
      </div>
    </PageLayout>
  
  ) 
}

export const pageQuery = graphql`
{
    allWpPost(sort: {fields: [date], order: DESC}) {
        edges {
        node {
          title
          excerpt
          content
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
      }
  }
  
`
