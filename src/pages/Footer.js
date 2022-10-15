import './footer.css';
import logo from "./Images/IMAGE.png";



function Footer() {
  return (
    <>
      <div className="footer">

        <div className="container">
          <div className="block-1">
            <img src={logo} alt="" />
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
          </div>
          <ul className="block-2 block">
            <li>Menu Items</li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Blog</a></li>
            <li><a href="#home">Shop</a></li>
            <li><a href="#home">Contact Us</a></li>
          </ul>
          <ul className="block-3 block">
            <li>Other Pages</li>
            <li><a href="#home">Styleguide</a></li>
            <li><a href="#home">Changelog</a></li>
            <li><a href="#home">Licenses</a></li>
            <li><a href="#home">Team</a></li>
          </ul>
          <ul className="block-4 block">
            <li>Social Icons</li>
            <li>
              <a href="https://facebook.com"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="https://instagram.com"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="https://twitter.com"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="https://google.com"><ion-icon name="logo-google"></ion-icon></a>
            </li>
          </ul>
        </div>
        <hr />

        <div className="copy">
          <p>Copyright by 2021 Flowzai</p>
        </div>
      </div>
    </>
  );
}

export default Footer;