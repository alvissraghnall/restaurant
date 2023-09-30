import { meal } from "@constants/index";
import { useRef, useState } from "react";
import {
    BsFillPlayFill, BsPauseFill
} from "react-icons/bs";

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [play, setPlay] = useState(false);

  const controlVideo = () => {
    setPlay(prev => prev = !prev);

    play ? videoRef.current?.pause() : videoRef.current?.play();

    console.log(play, videoRef.current?.paused );
  }

  return (
    <section className="h-screen relative">
        <video 
            src={meal}
            ref={videoRef}
            loop
            muted
            controls={false}
            typeof="video/mp4"
            className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
            <button type="button" className="rounded-full w-24 h-24 cursor-pointer outline-none border border-solid border-golden flex justify-center items-center " onClick={controlVideo}>
                {
                    play ? <BsPauseFill className="text-white text-3xl" />
                    : <BsFillPlayFill className="text-white text-3xl" />
                }
            </button>
        </div>
    </section>
  )
}

export default Video;