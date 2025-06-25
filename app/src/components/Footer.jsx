import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-background'>
            <div className='contact-header'>Contact Us</div>
            <div className='contact-text address-line'>501 Danville Blvd</div>
            <div className='contact-text city'>Danville, CA 94526</div>
            <div className='contact-text summary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
            <div className='contact-text phone'>(925) 552-3000</div>
            <div className='contact-text email'>sanramonvalleyrobotics@gmail.com</div>
        </div>
    )
}

export default Footer;