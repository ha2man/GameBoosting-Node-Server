import Link from "next/link";

export default function Landing_lady() {
 return(
    <div className="flex items-center max-h-[667px] justify-between bg-landing-lady-bg overflow-x-hidden">
        <div className="flex flex-col items-center pl-[8.75%] w-[50%] h-[100%]">
           <div className="flex flex-col">
            <h1 className="text-[68px] pt-[10%] pb-[3.5%]">Work More <span className="text-main">Pay Less</span></h1>
            <div className="text-[20px] pb-[7.1%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit amet </div> 
            <Link href="/" className="text-[18px] text-center text-white w-[28.8%] rounded-[12px] bg-main transition-all duration-500 mx-5 font-bold py-4">Get Started</Link>
            </div>
        </div>

        <div className="md:flex hidden relative flex-col overflow-hidden">
         
        <img src="/images/trans-stripes.png" alt="stripes.png" className="absolute" />
        <img src="/images/woman.png" alt="woman working.png" className="relative  left-0 top-0" />
        <img src="/images/freelancers-pfp.png" alt="freelancers.png" className="absolute bottom-10 right-4" />

        </div>
        </div>
        )
}