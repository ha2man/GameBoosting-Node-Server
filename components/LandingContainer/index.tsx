export default function LandingContainer() {
  return (
   <div className="flex flex-col mt-48">
    <div className="md:w-[90%] md:mx-auto flex flex-wrap justify-center mb-12">
      <div className="flex flex-col mr-[94px]">
        <h1 className="text-main-gray text-4xl font-bold mb-6">
          What Makes Us The Best <br /> From Others
        </h1>
        <h1 className="text-gray-600 text-xl max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam
          facilisis tincidunt enim, et aliquam felis vestibulum quis.
        </h1>
      </div>
      <div className="flex flex-wrap md:max-w-[700px] ml-4">
        <div className="flex flex-col mr-[43px] w-[320px] h-[130px] mt-5 md:mt-0">
          <div className="flex items-center mb-3 h-[56px]">
            <img
              src="/icons/Group 1000001088.png"
              alt="icon"
              className="w-14 -translate-x-2"
            />
            <h1 className="text-2xl font-bold text-main-gray">1 Year of experience</h1>
          </div>
          <h1 className="max-w-[258px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus.</h1>
        </div>
        <div className="flex flex-col w-[320px] h-[130px] mt-5 md:mt-0">
          <div className="flex items-center mb-3 h-[56px ">
            <img
              src="/icons/like.png"
              alt="icon"
              className="w-7 mr-3"
            />
            <h1 className="text-2xl font-bold text-main-gray">100% Satisfaction</h1>
          </div>
          <h1 className="max-w-[258px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus.</h1>
        </div>
        <div className="flex flex-col mr-[43px] w-[320px] h-[130px] mt-5">
          <div className="flex items-center mb-3 h-[56px]">
            <img
              src="/icons/people.png"
              alt="icon"
              className="w-7 mr-3"
            />
            <h1 className="text-2xl font-bold text-main-gray">Expert Team Members</h1>
          </div>
          <h1 className="max-w-[258px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus.</h1>
        </div>
        <div className="flex flex-col w-[320px] h-[130px] mt-5">
          <div className="flex items-center mb-3 h-[56px]">
            <img
              src="/icons/ranking.png"
              alt="icon"
              className="w-7 mr-3"
            />
            <h1 className="text-2xl font-bold text-main-gray">Lorem Ipsum</h1>
          </div>
          <h1 className="max-w-[258px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus.</h1>
        </div>
      </div>
      <div className="flex flex-col">
      <div className="flex relative flex-wrap items-center">
       <div className="flex">
       <img src="/images/whyvanta.png" className="z-30 max-w-[600px] mr-20"/>
       </div>
       <div className="flex flex-col">
        <h1 className="text-main-gray font-bold text-4xl">Why Are People Choosing<br/> Vanta Fox?</h1>
        <div className="flex items-center mt-4">
         <img src="/icons/user-tick.png" alt="user" className="my-4 mr-4"/>
         <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-main-gray">Integrity</h1>
          <h1 className="text-gray-600 max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor</h1>
         </div>
        </div>
        <div className="flex items-center mt-4">
         <img src="/icons/medal-star.png" alt="medal-star" className="my-4 mr-4"/>
         <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-main-gray">Trust</h1>
          <h1 className="text-gray-600 max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor</h1>
         </div>
        </div>
        <div className="flex items-center mt-4">
         <img src="/icons/ranking2.png" alt="medal-star" className="my-4 mr-4"/>
         <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-main-gray">Excellence</h1>
          <h1 className="text-gray-600 max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor</h1>
         </div>
        </div>
       </div>

      </div>
      </div>
    </div>
    </div>
  );
}
