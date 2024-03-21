
import data from "../jsonData/data.json"

const songs = data.songs

export const getSong = (songName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(songName in songs)
        resolve({songName , ...songs[songName]})
      else
        reject(new Error("song not found"))
    }, 500);
  })
}