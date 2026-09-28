import "../Styles/shoe-style.css";

export interface IShoeCardProps {
  name: string;
  brand: string;
  isLimitedEdition?: boolean;
  releaseYear: number;
  sports: string[];
}
export default function ShoeCard({
  name,
  brand,
  isLimitedEdition = false,
  releaseYear,
  sports,
}: IShoeCardProps) {
  return (
    <div
      className={isLimitedEdition ? "highlighted" : ""}
      id="shoe-card" // unique? wuzzat? is it tasty?
      style={
        isLimitedEdition
          ? { backgroundColor: "#FFD700", color: "#000" }
          : { backgroundColor: "#f2f2f2", color: "#333" }
      }
    >
      <div>
        <p>{name}</p>
        <p>{brand}</p>
        <p>{releaseYear}</p>
        <p>{sports.join(", ")}</p>
        <p>this is {isLimitedEdition ? "" : "not"} a limited model</p>
      </div>
    </div>
  );
}
