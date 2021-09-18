import { Fragment, useState } from "react";
// import { Menu, Transition } from '@headlessui/react';
import { Menu, Dropdown } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const DropDownMenu = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        {({open}) => (
          <Fragment>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        
        <ShoppingCartOutlined style={{
                        color:"black",
                        fontSize:'30px'
                    }}  />
          
        </Menu.Button>

      <Transition
       show={open}
        // as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`group flex items-center px-4  py-2 text-sm
                   ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`
                  }
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            </div>
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
               <a
               href="#"
               className={`group flex items-center px-4  py-2 text-sm
                ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`
               }
             >
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
        </Fragment>
        )}
      </Menu>


    </>
  )
}
export default DropDownMenu;