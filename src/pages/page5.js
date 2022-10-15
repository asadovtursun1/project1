import './page4.css';
import icon from './Images/icon.png'
import image from './Images/page5img.png';
import image2 from './Images/page5images (1).png'
import image3 from './Images/page5images (2).png'
import image4 from './Images/page5images (3).png'




function Page5() {
  return (
    <>
      <div className="page__5 page__4">
        <div className="container">

          <img src={image} alt="" className="image" />

          <div className="info1">
            <h3>
              <img src={icon} alt="" />
              FUTURE OF eSPORTS
            </h3>
            <h1>Customize your
              Own Character
            </h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>

            <div className="images">
              <div className="rectangle"></div>
              <img src={image2} alt="" className="img1"/>
              <img src={image3} alt="" className="img2"/>
              <img src={image4} alt="" className="img2"/>
              <div className="rectangle2"></div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Page5;
