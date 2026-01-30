import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "cardNumber";

export const AccountTitle = (record: TAccount): string => {
  return record.cardNumber?.toString() || String(record.id);
};
