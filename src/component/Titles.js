const Titles=({title , Icon})=>{
    return(
       <div className="w-full flex sm-gap-8 gap-4 item-center ">
        <Icon className="sm:w-6 sm:h-6 w-4 h-4 text-subMain" />
        <h2 className="text-xl font-bold text-lg">{title}</h2>
       </div>
    )
}
export default Titles