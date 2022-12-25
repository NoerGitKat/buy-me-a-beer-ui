import { ChangeEvent } from "react";
import { useDonation } from "../hooks";

const Presets = () => {
  const { quantity, setQuantity } = useDonation();

  const donationPresets = [1, 5, 20];

  console.log("quantity");

  return (
    <>
      {donationPresets.map((preset) => {
        return (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            key={preset}
            onClick={() => setQuantity(preset)}
          >
            {preset}
          </button>
        );
      })}
      <input
        type="number"
        value={quantity.toString()}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setQuantity(parseFloat(event.target.value))
        }
      />
    </>
  );
};

export default Presets;
