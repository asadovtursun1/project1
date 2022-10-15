import './page3.css';
import icon from './Images/icon.png'
import icon2 from './Images/icon2.png'




function Page3() {
  return (
    <>
      <div className="page__3">
        <div className="textbox">
          <h3><img src={icon} alt="" />FUTURE OF eSPORTS</h3>
          <h1>Your one stop shop gaming needs!</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
        </div>
        <div className="cards">
          <div className="cards__1">
            <div className="card">

              <img src={icon2} alt="" />

              <div className="card__text">
                <h1>All New Gameplay</h1>
                <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
              </div>
            </div>
            <div className="card">
              <img src={icon2} alt="" />

              <div className="card__text">
                <h1>Generation Graphics</h1>
                <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
              </div>
            </div>
          </div>
          <div className="cards__2">
            <div className="card">
              <img src={icon2} alt="" />

              <div className="card__text">
                <h1>Lastest Game Engine</h1>
                <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
              </div>
            </div>
            <div className="card">
              <img src={icon2} alt="" />

              <div className="card__text">
                <h1>Multiplayer on the go</h1>
                <p>Vivamus magna justo, lacinia eget coecetur sed, convallis at tellus. Curabitur non nulla sit Vestibum ante ipsum primis in faucibus orci</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page3;
