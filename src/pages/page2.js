import './page2.css';
import line from './Images/Vector.png';
import brand from './Images/brand (1).png';
import brand2 from './Images/brand (2).png';
import brand3 from './Images/brand (3).png';
import brand4 from './Images/brand (4).png';
import brand5 from './Images/brand (5).png';
import brand6 from './Images/brand (6).png';



function Page2() {
  return (
    <>
      <div className="page__2">
        <h1>Our Sponsors</h1>
        <img src={line} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
        <div className="brands">
          <div className="brand"><img src={brand} alt="" /></div>
          <div className="brand"><img src={brand2} alt="" /></div>
          <div className="brand"><img src={brand3} alt="" /></div>
          <div className="brand"><img src={brand4} alt="" /></div>
          <div className="brand"><img src={brand5} alt="" /></div>
          <div className="brand"><img src={brand6} alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Page2;
