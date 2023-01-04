import feature1 from './feature1.png';
import feature2 from './feature2.png';
import feature3 from './feature3.png';
import feature4 from './feature4.png';
import ratings from './ratings.png';

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="profile" height={90} src={feature1} alt="Customer Photo" />
            <h2>Mark G.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>"My mom loves it when I bring over their bruschetta."</p>
          </div>

          <div className="review">
            <img id="profile" height={90} src={feature2} alt="Customer Photo" />
            <h2>Jennifer H.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>"The lemon cake is to die for!"</p>
          </div>

          <div className="review">
            <img id="profile" height={90} src={feature3} alt="Customer Photo" />
            <h2>Garret R.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>"The staff is very attentive."</p>
          </div>

          <div className="review">
            <img id="profile" height={90} src={feature4} alt="Customer Photo" />
            <h2>Ashley K.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>"I make it a priority to stop in every time I'm in town!"</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
