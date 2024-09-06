"use client";
import React, { useEffect, useState } from "react";
import StorySelector from "@/components/StorySelector";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import { setBlanksReducer } from "@/libs/features/story/story";

const Page = () => {
  const fillerWords = useAppSelector((state) => state.story.filledWords);
  const selectedStory = useAppSelector((state) => state.story.story);
  fillerWords.map((value) => console.log(value));
  const dispatch = useAppDispatch();

  const [blankIndex, setBlankIndex] = useState(0);
  const [blankValue, setBlankValue] = useState("");
  const [showStory, setShowStory] = useState(false);

  const manageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlankValue(e.target.value);
  };

  const manageSubmit = () => {
    dispatch(setBlanksReducer(blankValue));
    setBlankValue("");
    setBlankIndex(blankIndex + 1);
  };

  const manageKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(setBlanksReducer(blankValue));
      setBlankValue("");
      setBlankIndex(blankIndex + 1);
    }
  };

  useEffect(() => {
    setBlankIndex(0);
    setBlankValue("");
    setShowStory(false);
  }, [selectedStory]);

  return (
    <div className="flex flex-col gap-6 my-3 items-center justify-center">
      <StorySelector />
      <h1 className="text-4xl font-black">{selectedStory?.title}</h1>
      <input
        className="w-80"
        type="range"
        min={0}
        max={selectedStory.blanks.length}
        value={blankIndex}
      />
      {selectedStory.blanks[blankIndex] && (
        <p>
          Name a{" "}
          <input
            value={blankValue}
            onChange={(event) => manageInput(event)}
            onKeyDown={(event) => manageKeyDown(event)}
            type="text"
            placeholder={selectedStory.blanks[blankIndex]}
            aria-label={selectedStory.blanks[blankIndex]}
            className={`border bg-transparent underline focus:outline-none`}
          />
        </p>
      )}
      {selectedStory.blanks.length >= blankIndex + 1 ? (
        <button
          onClick={manageSubmit}
          className="bg-green-500 rounded-lg text-lg font-semibold px-4 py-2"
        >
          Next
        </button>
      ) : (
        <button
          onClick={() => setShowStory(true)}
          className="bg-green-500 rounded-lg text-lg font-semibold px-4 py-2"
        >
          Show My Story
        </button>
      )}
      {showStory && (
        <div className="flex flex-wrap max-w-prose">
          {selectedStory?.story.map((story, index) => (
            <p key={index}>
              {story}
              {index + 1 && (
                <>
                  <span className="spacer">&#8194;</span>
                  <span className="underline" aria-label={fillerWords[index]}>
                    {fillerWords[index]}
                  </span>
                  {selectedStory.story.at(index + 1)?.at(0) !== "." && (
                    <span className="spacer">&#8194;</span>
                  )}
                </>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
