import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Blogs from "./components/blogs/Blogs";
import BookForm from "./components/booking-form/BookForm";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Review from "./components/review/Review";
import Services from "./components/services/Services";

const App = () => {

  return (
    <div>
      <Header />
      <Intro />
      <BookForm />
      <About />
      <Destination />
      <Services />
      <Gallery />
      <Review />
      <Blogs />
      <Banner />
      <Footer />
      <div
        style={{
          textAlign: "center",
          padding: "17px",
          background: "#222831",
          color: "white",
          fontSize: "21px",
        }}
      >
        Copyright &copy; 2022
      </div>
    </div>
  );
};

export default App;
