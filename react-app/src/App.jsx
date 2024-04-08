import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./card";
import Button from "./Button";
import Student from "./Student";
function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      {/* Boolean */}
      <Student name="Dng" age={25} isStudent={false} />
      <Student name="Nguyen" age={26} isStudent={true} />
      <Student name="Kit" age={22} isStudent={true} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <Footer />
    </>
  );
}

export default App;
