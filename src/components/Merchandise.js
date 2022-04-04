import * as React from "react"

const Merchandise = (props) => (
    <div className="merch-box">
        <img src={props.Img}/>
        <a href='/'>
         <div class="button-default button-slanted">
            <span class="button-slanted-content">{props.Name  + " " +  `$${props.Cost}`}</span>
          </div>
        </a>
    </div>

)

export default Merchandise