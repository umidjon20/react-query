import React from 'react'
import companyLogo from "../../assets/Company_logo.png"
import './HeadingSection.scss'

const navLinks = [
    {
        id:1,
        title:'Use Cases'
    },
    {
        id:2,
        title:'About'
    },
    {
        id:3,
        title:'Pricing'
    },
    {
        id:4,
        title:'Blog'
    },

]
function HeadingSection() {
    const links = navLinks.map((item)=>{
        const{title,id}= item
        console.log(title);
        return <ul>
            <li key={id}>{title}</li>
            </ul>
    })
  return (
    <>
    <header>
        <div className="header">
            <div className="container">
                <div className="header-navlinks">
                    <div className="company-logo">
                        <img src={companyLogo} alt="" />
                    </div>
                    <div className="navlinks">{links}</div>
                    <div className="logIn-btn">
                        <button className='btn-cl'>Login</button>
                        <button className='sign btn '>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div className="main-heading container">
        <div className="main-heading-text">
            <h1 className='audience'>Own your audience.</h1>
            <div className="gradient-text">So you don't lose them.</div>

        </div>
        <div className="main-heading-info">
            <p className='heading-text'>Turn your audience into email and text message subscribers.</p>
            <div className="info-btn">
                <button className='btn-same btn'>Get Started Now</button>
                <button className='btn-same btn btn-cl btn-br'>View A Demo</button>  
            </div> 
            <div className='participants'>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.24" fill-rule="evenodd" clip-rule="evenodd" d="M14.3 0.000244141C22.1977 0.000244141 28.6 6.40259 28.6 14.3002C28.6 22.1979 22.1977 28.6002 14.3 28.6002C6.40234 28.6002 0 22.1979 0 14.3002C0 6.40259 6.40234 0.000244141 14.3 0.000244141Z" fill="#0FC65C" />
                </svg>
                <span>1000+</span> creators have already started
            </div>       
        </div>
    </div>
    </>
  )
}

export default HeadingSection