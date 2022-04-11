import * as React from "react"
import BannerPic from '../images/Climber.jpg'
import Layout from "../components/layout"
import Seo from "../components/seo"
import _404 from '../images/error_404.svg'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="page-banner">
        <img alt="Mountain Climber" src="http://backend.climbthatcher.org/wp-content/uploads/2017/10/cropped-Screen-Shot-2017-10-13-at-1.04.48-PM.png"/>
        <div className="page-banner-title"></div>
    </div>
     <div className="page-404-wrapper">
       <img src={_404} alt="" />
       <a href='/'>
         <div class="button-default button-slanted">
            <span class="button-slanted-content">Go Back To Home Page</span>
          </div>
        </a>
     </div>
  </Layout>
)

export default NotFoundPage
