import '../App.css';
import logo from './Images/IMAGE.png'
import image2 from './Images/IMAGE2.png'
import icon from './Images/icon.png'

function Header() {
  return (
    <>
      <div className="page__1">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#Pages">Pages</a></li>
          </ul>

          <div className="right">
            <ion-icon name="cart-outline"></ion-icon>
            <a href="#contactus" className="button">Contact Us</a>
          </div>
        </div>
        <div className="main">
          <div className="info">
            <h3>
              <img src={icon} alt="" />
              FUTURE OF eSPORTS
            </h3>
            <h1>Unleash the Next Generation of Gaming</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>

            <div className="buttons">
              <a href="#home" className="button">Explore More</a>
              <a href="#home" className="button button2">View our team</a>
            </div>
          </div>
          <img src={image2} alt="" />
        </div>

        <ul className="social">
          <li><a href="https://facebook.com">FACEBOOK</a></li>
          <li><a href="https://www.instagram.com/">INSTAGRAM</a></li>
          <li><a href="https://www.twitch.tv/">TWITCH</a></li>
        </ul>


      </div>
    </>
  );
}

export default Header;