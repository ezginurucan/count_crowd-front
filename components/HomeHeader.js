/* This example requires Tailwind CSS v2.0+ */
export default function HomeHeader() {
    return (
      <div className=" min-h-screen bg-transparent">
        <div className=" container mx-auto my-2 ">
        <div className="max-w sm:py-24 flex  items-center justify-center">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-gray-700 uppercase">Anasayfa</h2>
          </div>
        </div>
        <div className="max-w sm:py-24 flex  items-center justify-center">
          <div className="text-center inline-flex items-center justify-center px-12 py-2 text-sm font-bold text-gray-900 border-2 border-orange-700 rounded-md shadow-lg hover:border-gray-700 hover:text-orange-700">
          <a href="/crowd">
            Yoğunluk 
                </a></div>
        </div>
        
        
       
      </div>
      </div>
    )
  }
  