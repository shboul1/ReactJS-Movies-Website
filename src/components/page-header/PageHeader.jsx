import React from 'react'
import footerbg from '../../assets/footer-bg.jpg'
import "./PageHeader.scss"
const PageHeader = props => {
    return (
        <div className='page-header' style={{backgroundImage: `url(${footerbg})`, height: "200px", margin: "0 0 100px 0"}}>
            {props.children}
        </div>
    )
}

export default PageHeader
