import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import stories from "../../../../public/mockStories.json";

const initialState = {
  story: stories.at(0) as { title: string; blanks: string[]; story: string[] },
  filledWords: [] as string[],
  storyId: 0,
};

export const story = createSlice({
  name: "story",
  initialState,
  reducers: {
    setBlanksReducer(state, action: PayloadAction<string>) {
      state.filledWords.push(action.payload);
    },
    storyIdReducer(state, action: PayloadAction<number>) {
      state.filledWords = [];
      state.storyId = action.payload;
      console.log(action.payload);
      console.log("Story id is,", state.storyId);
      console.log("Story is,", stories[state.storyId].title);
      state.story = stories[state.storyId];
    },
  },
});

export const { setBlanksReducer, storyIdReducer } = story.actions;
export default story.reducer;
