import './page7.css';
import icon from "./Images/icon.png";
import image from './Images/page7 (1).png'
import image2 from './Images/page7 (2).png'
import image3 from './Images/page7 (3).png'
import image4 from './Images/page7 (4).png'
import image5 from './Images/page7 (5).png'



function Page7() {
  return (
    <>
      <div className="page__7">
        <div className="container">
          <div className="top">
            <div className="top__text">
              <h3>
                <img src={icon} alt="" />
                FUTURE OF eSPORTS
              </h3>
              <h1>Latest News & Articles
              </h1>
            </div>
            <a href="#home" className="button">Read More</a>
          </div>
          <div className="middle">
            <div className="block-1">
              <img src={image} alt="" />
              <h3>April 2, 2021</h3>
              <h1>Esports Group teams up with the Indianapolis Colts</h1>
            </div>
            <div className="block-2">
              <div className="block-2-2">
                <div className="block">
                  <img src={image5} alt="" />
                  <h3>April 2, 2021</h3>
                  <h1>NAVI reveals s1mple fifth anniversary</h1>
                </div>
                <div className="block">
                  <img src={image4} alt="" />
                  <h3>April 2, 2021</h3>
                  <h1>A1esports Shares new picture</h1>
                </div>
              </div>
              <div className="block-2-2">
                <div className="block">
                  <img src={image3} alt="" />
                  <h3>April 2, 2021</h3>
                  <h1>T1 unveil partnership with Razer</h1>
                </div>
                <div className="block">
                  <img src={image2} alt="" />
                  <h3>April 2, 2021</h3>
                  <h1>RX secures content partnership with</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Page7;
