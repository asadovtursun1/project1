import './page6.css';
import image2 from './Images/page6icon (1).png'
import image3 from './Images/page6icon (2).png'
import image4 from './Images/page6icon (3).png'




function Page6() {
  return (
    <>
      <div className="page__6">
        <div className="container">
          <div className="block block1">
            <img src={image4} alt="" />
            <h1>Smooth FPS</h1>
          </div>
          <div className="block block2">
          <img src={image3} alt="" />
            <h1>Multiplayer</h1>
          </div>
          <div className="block block3">
          <img src={image2} alt="" />
            <h1>Multiplayer</h1>
          </div>
        </div>

      </div>
    </>
  );
}

export default Page6;
