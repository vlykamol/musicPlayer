import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pause, play } from "../store/Reducers/player"


export default function Footer() {

  const currentSong = useSelector(store => store.player.currentSong)
  const dispatch = useDispatch()
  const [song, setSong] = useState()

  useEffect(() => {
    setSong(() => currentSong)
  }, [currentSong])

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
      {song ? <SmallCard artist={song.artist} imgSrc={song.thumbnail} songName={song.songName} /> : null}
      </div>
      <div className="col-span-8">
        <FooterPlayer />
      </div>
    </div>
  )
}

function SmallCard({imgSrc, songName, artist}) {
  return (
    <div className="flex text-white gap-2">
      <img className="w-full h-full object-cover max-w-12 rounded-sm" src={imgSrc} alt={`${songName} by ${artist}`} />
      <div className="flex flex-col">
        <div>{songName}</div>
        <span className="opacity-70">{artist}</span>
      </div>
    </div>
  )
}


function FooterPlayer(){
  const [song, setSong] = useState(null)
  const audioRef = useRef()
  const player = useSelector(store => store.player)
  useEffect(() => {
    if(!player.currentSong)
      return
    setSong(player.currentSong)
  }, [player])

  useEffect(() => {
    if(!audioRef.current)
      return
    if(player.status)
      audioRef.current.play()
    else
      audioRef.current.pause()
  }, [player])

  return (
    <div className="flex items-center justify-between  gap-2">
      <div className="max-w-48">
        {song ? <audio src={song.url} ref={audioRef}></audio> : null}
        <PlayerButtons audioRef={audioRef} />
      </div>
      <div className="w-full">
        <ProgressBar />
      </div>
    </div>
  )
}

function ProgressBar() {
  return (
    <div className="w-full relative">
      <div className="w-full h-2 bg-gray-600"></div>
    </div>
  )
}

function PlayerButtons({audioRef}) {

  const [isPlaying, setIsPlaying] = useState(false)
  const dispatch = useDispatch()

  function handlePlay() {
    dispatch(play())
    setIsPlaying(p => !p)
  }

  function handlePause() {
    dispatch(pause())
    setIsPlaying(p => !p)
  }
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="w-20">
      <LeftButton />
      </div>
      {isPlaying ? 
        <div className="w-20" onClick={handlePause}>
          <PauseButton />
        </div> : 
        <div className="w-20" onClick={handlePlay}>
          <PlayButton />
        </div> }
      <div className="w-20">
        <RightButton />
      </div>
      <div className="w-20">
        <LikeButton />
      </div>
    </div>
  )
}

function LikeButton () {
  return (
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
  )
}

function LeftButton() {
  return (
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/></svg>
  )
}

function RightButton() {
  return (
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"/></svg>
  )
}

function PlayButton () {
  return (
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
  )
}

function PauseButton() {
  return(
    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
  )
}