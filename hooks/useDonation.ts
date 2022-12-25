import { useState } from "react";

const useDonation = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [quantity, setQuantity] = useState(0);

  return { setQuantity, quantity };
};

export default useDonation;
