import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state; ///if use object value change inside , no need return but in this case must need return
    },
  },
});

export const PrivacyActions = privacySlice.actions;
export default privacySlice;