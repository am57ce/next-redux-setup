import Link from "next/link";
import NextSvg from "../../public/next-js.svg"
import ReduxSvg from "../../public/redux.svg"
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-4 items-center">
          <Image src={ReduxSvg} alt="redux" className="w-16 h-16" />
          <span className="text-4xl font-bold">X</span>
          <Image src={NextSvg} alt="nextsvg" className="w-16 h-16" />
        </div>
        <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Redux-Next Project</h1>
        <p className="text-lg">Welcome to <span className="underline decoration-wavy decoration-green-500">Fill in the Story</span></p>
        </div>
        <p className="text-lg text-center">If you don&apos;t write stories, who will tell your grandchildren that you once had a life that wasn&apos;t just about complaining about your knees?</p>
        <button className="flex justify-center items-center px-4 py-2 rounded-full bg-green-500">
        <Link href="/story-canvas" className="text-lg font-semibold">Write a Story</Link>
        </button>
      </div>
  );
}
