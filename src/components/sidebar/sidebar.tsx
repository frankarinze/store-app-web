import bgHeader from "../../assets/images/header-bg.jpeg"
import "./sidebar.css"
export const SideBar = () => {
    return (
        <div className="sidebar-wrapper">
        <p className="sidebar-title">People also buy</p>

        <div className="grid grid-cols-3 gap-3 py-4">
            <img src={bgHeader} className=" " alt="bg" />
            <img src={bgHeader} className=" " alt="bg" />
            <img src={bgHeader} className=" " alt="bg" />
        </div>
        <div className="text-black lg:text-right md:text-left sm:text-left">
        <p className="meta-title">Detail</p>
        <p className="meta-details">Size: 1020 x 1020 pixel</p>
        <p className="meta-details">Size: 15 mb</p>
        </div>

        </div>

    )
}