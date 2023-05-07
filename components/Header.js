import Link from "next/link";

const Header = () => {
    return (
        <div className=" flex   flex-col  items-center flex-wrap  ">
            <div className="h-24    w-1/2" >
                <div className="flex justify-between" >
                    <h4 className="m-4 text-2xl  text-cyan-600 font-bold" > First web  next js </h4>
                    <h1 className="m-4 " >Нүүр</h1>
                </div>
                <div className="" >
                    <img src="/sharingun.png" className="w-12 h-12 ml-4 float-left " />
                    <p className="ml-24" > <b>Lorem  Ipsum is simply dummy</b>   text of the printing <br /> and typesetting industry.
                        Lorem Ipsum has been the industry's standard <br /> dummy text ever since t </p>
                </div>

                <hr className="mt-12 bg-black "></hr>
            </div>
        </div>

    )
}

export default Header; 