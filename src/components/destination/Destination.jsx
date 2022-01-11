import { destinationData } from "../../dummyData";
import Heading from "../Heading";
import "./destination.css";

const Destination = () => {
  return (
    <section className="destination" id="destination">
      <Heading title="Our Destination" subTitle="Make Your Destination" />
      <div className="box-container">
        {destinationData.map((item) => (
          <div key={item.id} className="box">
            <div>
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <h3>Tours & Travels</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <a href="#">
                Read More <i className="fas fa-angle-right"></i>{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
