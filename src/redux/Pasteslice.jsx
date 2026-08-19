import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const pasteSlice = createSlice({
  name: "pastes",

  initialState: {
    pastes: localStorage.getItem("pastes")
      ? JSON.parse(localStorage.getItem("pastes"))
      : [],
  },

  reducers: {
    addtopaste: (state, action) => {
      const paste = action.payload;

      state.pastes.push(paste);

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );

      toast.success("Paste created successfully!");
    },

    updatetopaste: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (paste) => paste._id === updatedPaste._id
      );

      if (index !== -1) {
        state.pastes[index] = updatedPaste;
      }

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );

      toast.success("Paste updated successfully!");
    },

    resetallpaste: (state) => {
      state.pastes = [];

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );
    },

    removefrompaste: (state, action) => {
      const id = action.payload;

      state.pastes = state.pastes.filter(
        (paste) => paste._id !== id
      );

      localStorage.setItem(
        "pastes",
        JSON.stringify(state.pastes)
      );
    },
  },
});

export const {
  addtopaste,
  updatetopaste,
  resetallpaste,
  removefrompaste,
} = pasteSlice.actions;

export default pasteSlice.reducer;