import { serviceData } from "../../dummyData";
import Heading from "../Heading";
import "./services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <Heading title="Our Services" subTitle="Counless Experiences" />
      <div className="services-container">
        {serviceData.map((item) => (
          <div key={item.id} className="service">
            <i className={item.icon}></i>
            <h3>{item.title}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
