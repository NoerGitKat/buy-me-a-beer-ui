import { useEffect, useState } from "react";
import { TDonationRecord } from "../../types";
import { fetchDonations } from "../handlers";

const useDonations = () => {
  const [donations, setDonations] = useState<TDonationRecord[]>([]);

  useEffect(() => {
    const getDonations = async () => {
      const response = await fetchDonations();
      setDonations(response?.records || []);
    };
    getDonations();
  }, []);

  return { donations };
};

export default useDonations;
