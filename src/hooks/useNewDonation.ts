import { useState } from "react";

const useNewDonation = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  return { setQuantity, quantity, name, setName, message, setMessage };
};

export default useNewDonation;
