import { SwapOutlined } from "@ant-design/icons";
import { useResponsive } from "../../hooks";
import { DropDown } from "../../types";
import { PriceDropDown } from "../dropdown/priceDropDown";
import "./breadcrumb.css";

export const BreadCrumb = ({
    resetSort,
    sortRangeOne,
    sortRangeTwo
}: DropDown) => {
 const [isTabletOrMobileDevice, isBigScreen, isDesktopOrLap] = useResponsive();

    return (
        <div className="breadcrumb-wrapper">

            <nav className="bg-grey-light rounded ">
                <ol className="list-reset flex text-grey-dark">
                    <li><a href="/" className="font-bold">Photographs</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li><a href="/" className="font-bold text-gray-400">Premium photos</a></li>
                </ol>
            </nav>
            <div>
            {!isBigScreen ? 
            
                <nav className="bg-grey-light rounded ">
                    <ol className="list-reset flex text-grey-dark">
                        <li >
                            <button
                                onClick={resetSort}
                                className="text-gray-500 flex flex-row ">
                                <div className="transform rotate-90 ">
                                    <SwapOutlined className="hover:text-black focus:outline-none  focus:text-black "
                                        style={{ fontSize: '15px' }}
                                    />
                                </div>
                                Sort by
                            </button>
                        </li>
                        <li><span className="mx-2">/</span></li>
                        <li>
                            <PriceDropDown
                                sortRangeOne={sortRangeOne}
                                sortRangeTwo={sortRangeTwo}
                            />
                        </li>
                    </ol>
                </nav>
                : ''
        }
            </div>
        </div>
    )
}