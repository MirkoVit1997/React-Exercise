import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <div>
    <h3>My List Colors</h3>
    <ul>
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
    </div>
  );
}
