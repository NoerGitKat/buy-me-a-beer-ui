import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { DONATION_IN_CENTS, MAX_DONATION_IN_CENTS } from "../constants";
import { donationPresets } from "../data";
import { handleCheckout } from "../handlers";
import { useError, useNewDonation } from "../hooks";
import Alert from "./Alert";

const DonationForm = () => {
  const router = useRouter();
  const { name, setName, message, setMessage, quantity, setQuantity } =
    useNewDonation();
  const { error, setError } = useError();

  return (
    <section className="max-w-md">
      <h1 className="text-2xl font-semibold text-black">Buy me a beer!</h1>
      {error && (
        <Alert
          bgColor="#FFF0F0"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#BC1C21"></circle>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0002 5.54922C7.54253 5.54922 5.5502 7.54155 5.5502 9.99922C5.5502 12.4569 7.54253 14.4492 10.0002 14.4492C12.4579 14.4492 14.4502 12.4569 14.4502 9.99922C14.4502 7.54155 12.4579 5.54922 10.0002 5.54922ZM4.4502 9.99922C4.4502 6.93404 6.93502 4.44922 10.0002 4.44922C13.0654 4.44922 15.5502 6.93404 15.5502 9.99922C15.5502 13.0644 13.0654 15.5492 10.0002 15.5492C6.93502 15.5492 4.4502 13.0644 4.4502 9.99922Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0002 7.44922C10.304 7.44922 10.5502 7.69546 10.5502 7.99922V9.99922C10.5502 10.303 10.304 10.5492 10.0002 10.5492C9.69644 10.5492 9.4502 10.303 9.4502 9.99922V7.99922C9.4502 7.69546 9.69644 7.44922 10.0002 7.44922Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.4502 11.9992C9.4502 11.6955 9.69644 11.4492 10.0002 11.4492H10.0052C10.309 11.4492 10.5552 11.6955 10.5552 11.9992C10.5552 12.303 10.309 12.5492 10.0052 12.5492H10.0002C9.69644 12.5492 9.4502 12.303 9.4502 11.9992Z"
                fill="white"
              ></path>
            </svg>
          }
          text={error}
        />
      )}

      <form
        onSubmit={(event) =>
          handleCheckout(event, quantity, name, message, setError, router)
        }
      >
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

        <aside className="flex items-center justify-between">
          <button
            role="submit"
            className="bg-blue-500 rounded shadow px-4 py-2 text-white"
          >
            Donate ${quantity * (DONATION_IN_CENTS / 100)}
          </button>
          <p>
            {quantity === MAX_DONATION_IN_CENTS / DONATION_IN_CENTS
              ? "Wow! Am I already drunk? 😵‍💫"
              : "Thank you!"}
          </p>
        </aside>
      </form>
    </section>
  );
};

export default DonationForm;
