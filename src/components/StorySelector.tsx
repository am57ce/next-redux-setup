'use client'
import React, { useState } from 'react'
import stories from "../../public/mockStories.json";
import { useAppDispatch } from '@/libs/hooks';
import { storyIdReducer } from '@/libs/features/story/story';

const StorySelector = () => {
    const dispatch = useAppDispatch();

    const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(storyIdReducer(Number(e.target.value)));
    }

  return (
    <div className='flex gap-2 items-center justify-center'>
          <label htmlFor="storySelector textxl
           font-semibold">Select a Story:</label>
          <select name="storySelector" id="storySelector" onChange={(event)=>handleSelection(event)}>
            {stories.map((story,index)=>(
              <option key={index} value={index}>{story.title}</option>
            ))}
          </select>
        </div>
  )
}

export default StorySelector