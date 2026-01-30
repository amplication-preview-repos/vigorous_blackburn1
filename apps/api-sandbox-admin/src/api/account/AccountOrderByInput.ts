import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  cardNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
