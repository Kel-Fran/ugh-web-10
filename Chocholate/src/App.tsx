import ChocholateCard from "./components/ChocholateCard";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      {/* <ChocholateCard
        name="Étcsoki 70%"
        brand="Lindt"
        isDark
        cocoaPercentage={70}
        ingredients={["film nézés", "kavé"]}
      /> */}
      <ChocholateCard
        name="étcsoki 70%"
        brand="lindt"
        isDark
        cocoaPercentage={70}
        ingredients={["kakaómassza", "cukor", "kakaóvaj"]}
      />
      <ChocholateCard
        name="tejcsoki mogyoróval"
        brand="milka"
        cocoaPercentage={30}
        ingredients={["cukor", "tejpor", "kakaóvaj", "mogyoró"]}
      />
      <ChocholateCard
        name="fehércsoki epres"
        brand="nestlé"
        cocoaPercentage={25}
        ingredients={["cukor", "tejpor", "kakaóvaj", "eperdarabok"]}
      />
      <Footer />
    </>
  );
}
