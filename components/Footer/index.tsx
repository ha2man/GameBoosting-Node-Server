export default function Footer() {
  return (
    <div>
      <div className="mx-24 mt-32 flex space-x-4 border-b-2 border-grey-500 pb-24">
        <div className="w-1/2 pr-32">
          <div className="flex items-center">
            <img src="/logo.svg" className="w-12 " />
            <p className="text-2xl leading-6 font-semibold ml-6">Vanta Fox</p>
          </div>
          <div className="mt-4">
            <p className="text-xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              mattis dolor, ut egestas risus. Proin iaculis porta hendrerit.
              Aliquam facilisis tincidunt enim
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-8 w-1/4 pr-32">
          <p className="text-2xl leading-6 font-semibold">Contact info</p>

          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            mattis dolor,
          </p>
          <p className="text-xl font-medium">+923154431105</p>
          <p className="text-xl font-medium">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex flex-col space-y-8 w-1/4">
          <p className="text-2xl leading-6 font-semibold">Quick Links</p>

          <p className="text-xl font-medium">Lorem ipsum</p>
          <p className="text-xl font-medium">Lorem ipsum</p>
          <p className="text-xl font-medium">Lorem ipsum</p>
          <p className="text-xl font-medium">Lorem ipsum</p>
        </div>
      </div>
      <p className="my-4 text-center text-sm font-normal leading-5">
        Copyright 2022, All Right Reserved
      </p>
    </div>
  )
}
