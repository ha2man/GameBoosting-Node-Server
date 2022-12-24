export default function Landing_Think_About_US() {
  return (
    <div className="container mt-32  px-4">
      <p className="text-center font-bold text-6xl">
        What People Think About Us
      </p>

      <div className="grid justify-items-center">
        <div className="static mt-28">
          <img src="/images/Mask Group.jpg" alt="Mask" />
        </div>
        <div className="absolute rounded-full border-2 border-grey-500 w-[58rem] h-[58rem] "></div>
        <div className="absolute rounded-full border-2 border-grey-500 w-[44rem] h-[44rem] mt-28"></div>
        <div className="absolute rounded-full border-4 border-blue-500 w-[30rem] h-[30rem] mt-56"></div>

        <div className="absolute w-1/3 mt-96 grid justify-items-center">
          <img src="/images/person.png" alt="person" />
          <div className="grid justify-items-center static mt-4">
            <div className="w-14 h-14 rotate-45 bg-white"></div>
            <div className="box-border h-auto w-auto p2  rounded-xl bg-white absolute mt-4 p-4">
              <p className="text-lg">
                Build your financial literacy within a transparent community.
                Follow other investors, share insights with people from
                different professional backgrounds, and never be alone.
              </p>
              <p className=" text-center font-bold text-2xl ">Jony Scotty</p>
              <p className="text-center text-lg">UI designer</p>
            </div>
          </div>
        </div>

        <div className="absolute w-1/6 h-72 mt-56 left-1/4">
          <div className="absolute top-0 right-0">
            <img src="/images/person1.png" />
          </div>
          <div className="absolute bottom-0 left-0">
            <img src="/images/person2.png" />
          </div>
        </div>
        <div className="absolute w-1/6 h-96 mt-72 left-2/3">
          <div className="absolute top-0 left-0">
            <img src="/images/person3.png" />
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/images/person4.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
