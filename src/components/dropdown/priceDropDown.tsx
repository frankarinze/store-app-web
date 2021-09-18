import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { DropDown } from "../../types";


export const PriceDropDown = ({
    resetSort,
    sortRangeOne,
    sortRangeTwo,
}: DropDown): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleNav = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    };
    return (
        <div>
            <div>

                <div className="dropdown inline-block relative">
                    <div>
                        <button onClick={toggleNav} className=" px-2 flex flex-row ">
                            <span>
                                price
                            </span>
                            <DownOutlined  className="m-1.5 "
                                style={{ fontSize: '12px' }}
                            />
                        </button>
                    </div>
                    <ul className={`origin-top-right absolute right-0 mt-2 mb-4 z-40 w-52 p-5 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? 'hidden' : ''} text-gray-700 pt-1`}>
                        <li className='CartItem__item'>
                            <div className="cart-item-meta">
                                <button className="cart-item-price" onClick={sortRangeOne}>
                                    <h1>$0 - $50</h1>
                                </button>
                            </div>
                            <div className="border-b my-3 border-gray-300"></div>
                        </li>
                        <li className='CartItem__item'>
                            <div className="cart-item-meta">
                                <button className="cart-item-price" onClick={sortRangeTwo}>
                                    <h1>$51 - $1000</h1>
                                </button>
                            </div>
                            <div className="border-b my-1 border-gray-300"></div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}