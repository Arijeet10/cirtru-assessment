import Cars from "@/components/Cars";
import Filters from "@/components/Filters";


const Home=()=>{

    return(
        <>
            <div className="p-[0.3rem] bg-slate-100 ">
                <div>
                    <Filters />
                </div>
                <div>
                    <Cars />
                </div>
            </div>
        </>
    )
}

export default Home;