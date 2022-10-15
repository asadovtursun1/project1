import './page8.css';
import line from "./Images/Vector2.png";



function Page8() {
  return (
    <>
      <div className="page__8">

        <div className="container">
          <h1>Join the largest gaming community</h1>
          <img src={line} alt="" />
          <p className='text2'>
            Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus
            lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo
          </p>
          <form action="">
            <input type="email" name="" id="" placeholder=' Your Email Address'/>
            <a href="#home" className="button" type="submit">Subscribe Now</a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page8;
