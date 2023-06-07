import { Link } from 'react-router-dom'
import Logo from '../icons_assets/logo.svg'

const Footer = (props)=> {
    return (
            <section id='footer'>
                <view className="footer-info">
                    <img src={Logo} alt='Logo' />
                    <div className='doormat-navigation'>
                        <h4>Doormat Navigation</h4>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/bookings'>Reservations</Link></li>
                            <li><Link to='/order-online'>Order Online</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <div className='doormat-navigation'>
                        <h4>Contact</h4>
                        <p style={{color: "white"}} >Little Lemon</p>
                        <p style={{color: "white"}} >+99 999 999 9999</p>
                        <p style={{color: "white"}} >littlelemon@restaurant.com</p>
                    </div>
                    <div className='doormat-navigation'>
                        <h4>Social Media Links</h4>
                        <ul>
                            <li><a href='https://www.instagram.com'>Instagram</a></li>
                            <li><a href='https://www.twitter.com'>Twitter</a></li>
                            <li><a href='https://www.facebook.com'>Facebook</a></li>
                        </ul>
                    </div>
                </view>
                <view className="copyright">
                    Copyright ©️ 2023 Javier Guerrero Gallo
                    <a href='https://www.github.com/Bongani001' target='_blank' rel="noreferrer"><img src={require('../icons_assets/github-logo.png')} alt='Github logo' style={{width: 20, borderRadius: 5}} /></a>
                </view>
            </section>
    )
}

export default Footer