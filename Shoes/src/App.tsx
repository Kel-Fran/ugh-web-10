import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ShoeCard from "./Components/ShoeCard";

export default function App() {
  return (
    <main style={{ margin: "0px" }}>
      <Header />
      <ShoeCard
        name="air jordan 1"
        brand="nike"
        isLimitedEdition
        releaseYear={1895}
        sports={["kosárlabda"]}
      />
      <ShoeCard
        name="stan smith"
        brand="adidas"
        releaseYear={1971}
        sports={["tenisz"]}
      />
      <ShoeCard
        name="chuck taylor all star"
        brand="converse"
        releaseYear={1917}
        sports={["kosárlabda", "divat"]}
      />
      <ShoeCard
        name="yeezi boost 350"
        brand="adidas"
        isLimitedEdition
        releaseYear={2015}
        sports={["lifestyle"]}
      />
      <ShoeCard
        name="air max 1"
        brand="nike"
        releaseYear={1987}
        sports={["futás", "streetwear"]}
      />
      <ShoeCard
        name="puma suede"
        brand="puma"
        releaseYear={1968}
        sports={["breaktánc", "divat"]}
      />
      <ShoeCard
        name="rebook pump"
        brand="rebook"
        isLimitedEdition
        releaseYear={1989}
        sports={["kosárlabda"]}
      />
      <Footer />
    </main>
  );
}
