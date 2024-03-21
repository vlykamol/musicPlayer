

export default function Header() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">logo</div>
      <div className="col-span-10">
        <div className="flex justify-between">
        <div className="">
          searchbar
        </div>
        <div>
          profile
        </div>
        </div>
      </div>
    </div>
  )
}
