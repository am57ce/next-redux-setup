import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import stories from "../../../../public/mockStories.json";

const initialState = {
  story: [] as string[],
  filledWords: [] as string[],
  storyId: 0,
  completeStory: "",
};

export const story = createSlice({
  name: "story",
  initialState,
  reducers: {
    setBlanksReducer(state, action: PayloadAction<string>) {
      state.filledWords.push(action.payload);
    },
    storyIdReducer(state, action: PayloadAction<number>) {
      state.storyId = action.payload;
      state.story.concat(stories[state.storyId].story);
    },
  },
});

export const { setBlanksReducer, storyIdReducer } = story.actions;
export default story.reducer;
