import { galleryData } from "../../dummyData";
import Heading from "../Heading";
import "./gallery.css";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <Heading title="Our Gallery" subTitle="We Record Memories" />
      <div className="gallery-container">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-box">
            <img src={item.img} alt="" />
            <span>Travel Spot</span>
            <h3>{item.place}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
