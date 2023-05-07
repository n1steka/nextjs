

const ListItem = () => {
    return (
        <div className=" mt-28  flex   flex-col  items-center flex-wrap">
            <div className="   h-36    w-1/2   shadow-2xl  p-4" >

                <div>
                    <div>
                        <img src={"https://source.unsplash.com/user/erondu/150x150"}

                            className="w-12 h-12  border-2 rounded-3xl float-left mr-4 "
                        />
                        <div className="">
                            <b className="">Цогбаатар Мөнх-Эрдэнэ</b>
                            <p className="text-xs">2023 оны 05 сарын 07 өдөр</p>
                        </div>
                        <hr className=" mt-5"></hr>

                        <div>
                            <b className=" text-3lx" >Next js ийг tailwind css </b>
                            <p>ашиглан бүтээх</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ListItem;