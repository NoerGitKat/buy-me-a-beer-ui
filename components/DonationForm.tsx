import { ChangeEvent } from "react";
import { DONATION_IN_CENTS, MAX_DONATION_IN_CENTS } from "../constants";
import { donationPresets } from "../data";
import { useDonation } from "../hooks";

const DonationForm = () => {
  const { name, setName, message, setMessage, quantity, setQuantity } =
    useDonation();

  return (
    <section className="max-w-md">
      <h1>Buy me a beer!</h1>
      <aside className="flex items-center my-2">
        <span className="mx-2 transform scale-150">🍺</span>
        <span className="mx-2">X</span>

        {donationPresets.map((preset) => {
          return (
            <button
              className="bg-blue-500 text-white ml-1 px-4 py-2 rounded mr-2"
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
          min={1}
          max={MAX_DONATION_IN_CENTS / DONATION_IN_CENTS}
          className="shadow rounded w-full border border-blue-500"
        />
      </aside>

      <aside className="grid grid-cols-1 my-2">
        <label htmlFor="name">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            placeholder="Your name"
            className="shadow rounded w-full border border-blue-500"
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </label>
      </aside>

      <aside className="grid grid-cols-1 my-2">
        <label htmlFor="message">
          <span className="text-gray-700">Message (Optional)</span>
          <textarea
            placeholder="Thanks for the work you do!"
            className="shadow rounded w-full border border-blue-500"
            name="message"
            id="message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </label>
      </aside>

      <button
        role="submit"
        className="bg-blue-500 rounded shadow px-4 py-2 text-white"
      >
        Donate ${quantity * (DONATION_IN_CENTS / 100)}
      </button>

      <p>
        {quantity === MAX_DONATION_IN_CENTS / DONATION_IN_CENTS
          ? "I can't believe it! Am I already drunk? 😵‍💫"
          : "Thank you!"}
      </p>
    </section>
  );
};

export default DonationForm;
