import Link from "next/link"

export default function PassiveIncomeContainer()
{
    return (
        <div className="flex flex-row bg-main items-center w-[100%] h-[314px] justify-between overflow-x-hidden">
            <img src="/images/circles-passive-1.png" alt="yes" className="absolute"></img>
            <img src="/images/circles-passive-2.png" alt="yes" className="absolute right-0"></img>

            <div className="w-[59%] h-[100%]">
                <div className="text-[46px] h-1/2 text-white pt-[30px] pl-[8.75%]">Looking for passive income using your skills ?</div>
                <div className="text-[20px] h-1/2 text-white pt-[20px] pl-[8.75%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et mattis dolor, ut egestas risus. Proin iaculis porta hendrerit. Aliquam facilisis tincidunt enim, et aliquam felis vestibulum quis. Nunc dapibus libero nec lacinia commodo. Nullam non ante sit amet</div>
            </div>

            <div className="flex w-[41%] h-[100%] items-center justify-center">
                <Link href="/" className="text-[18px] text-center text-main w-[34.6%] h-[71.89px] rounded-[12px] bg-white transition-all duration-500 font-bold py-5">Get Started</Link>
            </div>
        </div>
    )
}