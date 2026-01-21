import { useState } from "react";
type Color =
  | "red"
  | "blue"
  | "green"
  | "orange"
  | "gray"
  | "lavender"
  | "white"
  | "olive"
  | "black";
function BgChanger() {
  const [bgColor, setBgColor] = useState<Color>("olive");
  const isWhiteBg: boolean = bgColor === "white" || bgColor === "lavender";
  const bgColors: Color[] = [
    "red",
    "blue",
    "green",
    "orange",
    "gray",
    "lavender",
    "white",
    "black",
  ];

  return (
    <div
      className="w-full h-screen duration-200 p-1 m-0"
      style={{ backgroundColor: bgColor }}
    >
      <h1
        className="text-3xl font-bold underline text-center text-white"
        style={{ marginTop: 30, color: isWhiteBg ? "black" : "white" }}
      >
        Background Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-30 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-4 rounded-lg shadow-lg px-3 py-2">
          {bgColors.map((color: Color) => {
            const isColorWhite: boolean =
              color === "white" || color === "lavender";
            return (
              <button
                key={color}
                className={`px-4 py-1 rounded-full text-amber-50  shadow-lg font-semibold cursor-pointer`}
                style={{
                  backgroundColor: color,
                  color: isColorWhite ? "black" : "white",
                }}
                onClick={() => setBgColor(color)}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BgChanger;
