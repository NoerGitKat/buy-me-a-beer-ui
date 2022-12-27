export type TStripeMetaData = {
  amount_total: number;
  metadata: {
    name: string;
    message: string;
  };
};

export type TDonationRecord = {
  name: string;
  message: string;
  amount: number;
};
