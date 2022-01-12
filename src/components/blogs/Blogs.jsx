import { blogsData } from "../../dummyData";
import Heading from "../Heading";
import "./blogs.css";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <Heading title="Blogs & Posts" subTitle="We Untold Stories" />
      <div className="blogs-container">
        {blogsData.map((item) => (
          <div key={item.id} className="blog-box">
            <div className="blog-img">
              <img src={item.img} alt="" />
            </div>
            <div className="blog-content">
              <a href="#" className="blog-link">
                Life is a journey, not a destination
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, veniam.
              </p>
              <div className="icons">
                <a href="#">
                  <i className="fas fa-clock"></i>21st may, 2021
                </a>
                <a href="#">
                  <i className="fas fa-user"></i>by admin
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
