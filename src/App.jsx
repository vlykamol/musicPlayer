import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import LeftSidebar from "./components/leftSidebar";
import RightSidebar from "./components/rightSidebar";
import { getSong } from "./apis/player";
import { useDispatch, useSelector } from "react-redux";
import { setSong } from "./store/Reducers/player";

export default function App() {

  const player = useSelector(store => store.player)
  const dispatch = useDispatch()

  useEffect(() => {
    getSong("song1").then(data => {
      dispatch(setSong(data))
    }).catch(err => {
      console.log("error", err);
    })
  }, [])
  return (
    <div className="h-screen w-screen bg-rich-black px-2">
      <div className="flex flex-col h-full">
        <div className="w-full grow-0 text-white py-4 text-center">
          <Header />
        </div>

        <div className="grid grid-cols-12 grow gap-1 rounded my-2">
          <div className="col-span-2 bg-gunmetal/80">
            <LeftSidebar />
          </div>

          <div className="col-span-8 bg-onyx/80 ">
            main
          </div>

          <div className="col-span-2 bg-gunmetal/80 ">
            <RightSidebar />
          </div>
        </div>

        <div className="col-span-full bg-raisin-black/40 py-4">
          <Footer />
        </div>

      </div>
    </div>
  )
}