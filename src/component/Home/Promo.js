
import { FiUser } from 'react-icons/fi'
const Promos=()=>{
    return(
      <div className="my-20 py-10 md:px-20 px-8 bg-dry ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 item-center">
            <div className="flex lg:gap-10 gap-6 flex-col mt-5">
                <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
                    Download Your Movies & Watch Offline <br/> Enjoy on Your Mobile 
                </h1>
                <p className="text-text text-sm xl:text-base leading-6 xl:leading-8"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
                <div className="flex gap-4 md:text-lg text-sm">
                    <div className="flex-colo  bg-black text-subMain px-4 py-3 rounded font-bold">
                        HD 4K
                    </div>
                    <div className="flex-rows gap-4 bg-black text-subMain px-4 py-3 rounded font-bold">
                      <FiUser /> 2K
                    </div>
                </div>
            </div>
            <div className='' >
                <img src="/images/mobile.webp" alt="Mobile App"  className='w-full object-contain'/>
            </div>
        </div>
      </div>
    )
}
export default Promos