import { TDonationRecord } from "../../types";

const PrevDonations = ({ donations }: { donations: TDonationRecord[] }) => {
  return (
    <section>
      <h1 className="text-2xl font-semibold text-black">Previous donations</h1>
      {donations && (
        <ul className="mt-4">
          {donations.map((donation) => (
            <li key={donation.id} className="p-4 shadow mb-2">
              {donation.fields.name} donated{" "}
              <strong>${donation.fields.amount}</strong>!
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PrevDonations;
