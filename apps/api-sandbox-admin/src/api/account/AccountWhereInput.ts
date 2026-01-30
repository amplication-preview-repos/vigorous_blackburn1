import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  cardNumber?: StringNullableFilter;
  id?: StringFilter;
};
