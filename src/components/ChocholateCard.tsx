import "../styles/chocholate-style.css";

export interface IChocholateCardProps {
  name: string;
  brand: string;
  isDark?: boolean;
  cocoaPercentage: number;
  ingredients: string[];
}

export default function ChocholateCard({
  name,
  brand,
  cocoaPercentage,
  ingredients,
  isDark = false,
}: IChocholateCardProps) {
  return (
    <div
      className="chocho-card"
      style={
        isDark
          ? { backgroundColor: "#333", color: "#fff" }
          : { backgroundColor: "#f2f2f2", color: "#000" }
      }
    >
      <div className="chocho-card-container">
        <p className="chocho-card-name">{name}</p>
        <p className="chocho-card-brand">{brand}</p>
        <p className="chocho-card-percentage">{cocoaPercentage}%</p>
        <p className="chocho-card-ingredients">{ingredients.join(", ")}</p>
      </div>
    </div>
  );
}
