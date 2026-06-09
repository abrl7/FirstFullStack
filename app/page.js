

export default function Home() {
  return (
    <>
      {/* mathiko */}
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 ">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me A Chai
          <span><img className="bg-blue-900" src="./tea.webp" alt="./tea.webp" width={50} /></span>
        </div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
        <div className="flex gap-5">
          <button type="button" className="text-white  bg-linear-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Start Here</button>

          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5">Read More</button>
        </div>

      </div>

      {/* division line */}
      <div className="bg-white h-1 opacity-10 ">
      </div>


      <div className="text-white container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center my-2">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around c">

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="rounded-full p-2 text-black" width={88} src="./man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="rounded-full p-2 text-black" width={88} src="./coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="rounded-full p-2 text-black" width={88} src="./group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      {/* division line */}
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto py-10 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold text-center my-2">Support this team...</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qtT_qOkB630?si=Ebpf_loOtCqvaiHc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  );
}
