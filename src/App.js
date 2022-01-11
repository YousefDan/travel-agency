import About from "./components/about/About";
import BookForm from "./components/booking-form/BookForm";
import Destination from "./components/destination/Destination";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
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
    </div>
  );
};

export default App;
