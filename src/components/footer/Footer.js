import {  FooterContainer, FooterLeft, FooterRight, FooterLinks} from './FooterElements'
import config from "../../website-config"
import {useState, useEffect} from 'react'

const Footer = ()=> {
    // To make Github and Twitter disappear on mobile view
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      function handleResize(){
        setWidth(window.innerWidth)
      }
    
    window.addEventListener('resize', handleResize)
    })
  
    return(

        <FooterContainer>
          <FooterLeft>
            {width < 600 ? `${config.lastName}` : `${config.firstName+" " +config.lastName}`}  &copy; {new Date().getFullYear()}  
          </FooterLeft>
          <FooterRight>
            {/* filtering the links first and mapping it to styled components */}
            {width < 600 ? "NYUAD Hackathon 2022" : "NYUAD Internation Hackathon for Social Good"}
          </FooterRight>
        </FooterContainer>

    )
  }
  
  export default Footer;