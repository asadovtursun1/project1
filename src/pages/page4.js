import './page4.css';
import icon from './Images/icon.png'
import image from './Images/page4img (1).png';
import image2 from './Images/page4img (2).png';




function Page4() {
  return (
    <>
      <div className="page__4">
        <div className="container">
          <div className="info1">
            <h3>
              <img src={icon} alt="" />
              FUTURE OF eSPORTS
            </h3>
            <h1>The new era of cloud gaming here</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>

            <div className="buttons">
              <a href="#home" className="button">Explore More</a>
            </div>
          </div>
          <div className="video">
            <img src={image} alt="" className="head" />
            <img src={image2} alt="" className="child" />
          </div>

        </div>

      </div>
    </>
  );
}

export default Page4;
