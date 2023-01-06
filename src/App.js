import { useState } from "react";
import FormCard from "./components/FormCard";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  const [rating, setRating] = useState(0);
  const [star, setStar] = useState(1);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    if (rating) {
      setIsSubmitted(true);
    }
  };

  const handleClick = (value) => {
    setRating(value);
    setStar(value);
  };

  return (
    <>
      {/* {console.log(star)} */}
      <main className="p-5 min-h-screen grid place-content-center">
        {isSubmitted ? (
          <ThankYou rating={rating} />
        ) : (
          <FormCard
            submitForm={submitForm}
            handleClick={handleClick}
            star={star}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
