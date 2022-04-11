// src/templates/BlogPost.js
import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import BannerPic from '../images/Climber.jpg'

const BlogPostTemplate = (props)  => (
    <Layout>
      <SEO title={props.pageContext.title}
          description={props.pageContext.excerpt} />
      <div className="page-banner">
        <img alt="Mountain Climber" src="http://backend.climbthatcher.org/wp-content/uploads/2017/10/cropped-Screen-Shot-2017-10-13-at-1.04.48-PM.png"/>
        <div className="page-banner-title-post">{props.pageContext.title}</div>
      </div>
      <div
        style={{margin: '40px'}}
        dangerouslySetInnerHTML={{__html: props.pageContext.content}}
      />
    </Layout>
);

export default BlogPostTemplate;