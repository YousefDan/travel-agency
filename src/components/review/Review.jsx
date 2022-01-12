import { reviewData } from "../../dummyData";
import "./review.css";

const Review = () => {
  return (
    <section className="review">
      <div className="review-content">
        <span>Testimonials</span>
        <h3>Good News From Our Clients</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
          minus? Quo expedita, itaque hic provident aliquid vel natus delectus
          mollitia incidunt vero dolorum sit ad fuga earum. Molestiae, quasi
          esse?
        </p>
      </div>
      <div className="review-box-container">
        {reviewData.map((item) => (
          <div key={item.id} className="review-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              vel!
            </p>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="user-info">
                <h3>John Doe</h3>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
