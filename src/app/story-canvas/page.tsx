'use client'
import React, { useState } from 'react'
import stories from "../../../public/mockStories.json";
import StorySelector from '@/components/StorySelector';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import { setBlanksReducer } from '@/libs/features/story/story';

const Page = () => {
  const values = useAppSelector((state)=> state.story.filledWords)
  values.map((value)=>console.log(value))
  const dispatch = useAppDispatch();
  const [blankIndex,setBlankIndex] = useState(0);
  const [blankValue,setBlankValue] = useState("");
  const [showStory,setShowStory] = useState(false);
  const storyId = useAppSelector((state)=> state.story.storyId)
  const selectedStory = stories[Number(storyId)]
  const storyBlanks = stories[Number(storyId)]?.blanks

  const manageInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setBlankValue(e.target.value)
  }

  const manageSubmit = () => {
    dispatch(setBlanksReducer(blankValue))
    setBlankValue("");
    setBlankIndex(blankIndex+1)

  }

  return (
    <div className='flex flex-col gap-6 my-3 items-center justify-center'>
    <StorySelector/>
    <h1 className='text-4xl font-black'>{selectedStory?.title}</h1>
    {storyBlanks[blankIndex] && <p>Name a <input value={blankValue} onChange={(event)=>manageInput(event)} type="text" placeholder={storyBlanks[blankIndex]} aria-label={storyBlanks[blankIndex]} className={`border bg-transparent underline focus:outline-none`}/></p>}
    {storyBlanks[blankIndex+1] &&<button onClick={manageSubmit} className='bg-green-500 rounded-lg text-lg font-semibold px-4 py-2'>Next</button>}
    {!storyBlanks[blankIndex+1] &&<button onClick={()=>setShowStory(true)} className='bg-green-500 rounded-lg text-lg font-semibold px-4 py-2'>Show My Story</button>}
      {showStory && <div className='flex flex-wrap'>
        {selectedStory?.story.map((story,index)=>{
          return <p key={index}>{" "}{story}{" "}{index+1 && <span aria-label={values[index]} className="underline">{values[index]}</span>}</p>
        })}
      </div>}
     </div>
  )
}

export default Page