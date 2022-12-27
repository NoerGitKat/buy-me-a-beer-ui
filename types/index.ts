export type TStripeMetaData = {
  amount_total: number;
  metadata: {
    name: string;
    message: string;
  };
};

export type TDonationResponse = {
  records: TDonationRecord[];
  offset: string;
};

export type TDonationRecord = {
  id: string;
  createdTime: Date;
  fields: TDonationFields;
};

export type TDonationFields = {
  name: string;
  message: string;
  amount: number;
};
