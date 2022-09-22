import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const cards = [
    {
      headline: "אתר",
      addLabel: "הוספת אתר",
      image: "../Images/picture_logo.png",
    },
    {
      headline: "חניכים",
      addLabel: "הוספת חניך",
      image: "../Images/picture_logo.png",
    },
    {
      headline: "מסלולים",
      addLabel: "הוספת מסלול",
      image: "../Images/picture_logo.png",
    },
    {
      headline: "מקצועות",
      addLabel: "הוספת מקצוע",
      image: "../Images/picture_logo.png",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="left">Dashboards</div>
        <div className="right">
          <div className="cardsLine">
            <Card cards={cards[0]} />
            <Card cards={cards[1]} />
          </div>
          <div className="cardsLine">
            <Card cards={cards[2]} />
            <Card cards={cards[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
