import React, { useState } from 'react'
import "./App.css"
import logo from"./assets/codeant.png"
import { BiHome } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { IoIosCloudOutline,IoMdAdd,IoIosSearch,IoIosMenu } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FiPhone,FiLogOut } from "react-icons/fi";
import Repo from './components/Repo';
import data from "./data/rempdata.json"
export const App = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div className='grid md:grid-cols-[1fr_5fr] lg:grid-cols-[1fr_5fr] w-screen h-screen'>

        <div className='flex justify-between px-5 md:hidden lg:hidden'>
          <div className='flex  items-center  py-3 left-0'>
            <img src={logo} alt="" className='w-8 h-8'/>
            <h2 className='text-2xl'>CodeAnt AI</h2>
          </div>
          <button className='' onClick={()=>{setToggle(!toggle)}}>{toggle ?<IoIosMenu className='text-xl' />:<RxCross2  className='text-xl'/>}</button>
        </div>

        <div className={`sidebar-navigation  md:grid p-4 ${!toggle?"fixed bg-gray-200 w-screen top-16":"hidden"} `}>
          <div className='navigaton'>
            <div className='head mb-2'>
              <div className='md:flex justify-between hidden'>
                <div className='flex  items-center  py-3 left-0 '>
                  <img src={logo} alt="" className='w-8 h-8'/>
                  <h2 className='text-2xl'>CodeAnt AI</h2>
                </div>
              </div>
              <div className=' my-2 '>
                <label htmlFor="optinos" ></label>
                <select name="options" id="options" className='w-full py-2 rounded-md border border-gray-200'>
                  <option value="option1">sangam-verma9</option>
                  <option value="option2">azuradragan</option>
                  <option value="option3">icyliaat</option>
                </select>
              </div>
            </div>
            <div className='navig '>
              <ul>
                <li className='p-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-md my-1'><div className='flex items-center'><BiHome className='mx-1 text-xl'/>Repositories</div></li>
                <li className='p-2 hover:bg-blue-600 hover:text-white cursor-pointer rounded-md my-1'><div className='flex items-center'><FaCode className='mx-1 text-xl'/>AI Code Review</div></li>
                <li className='p-2 hover:bg-blue-600 hover:text-white cursor-pointer  rounded-md my-1'><div className='flex items-center'><IoIosCloudOutline className='mx-1 text-xl'/>Cloud Security</div></li>
                <li className='p-2 hover:bg-blue-600 hover:text-white cursor-pointer  rounded-md my-1'><div className='flex items-center'><FaBook className='mx-1 text-xl'/>How To Use</div></li>
                <li className='p-2 hover:bg-blue-600 hover:text-white cursor-pointer  rounded-md my-1'><div className='flex items-center'><IoSettingsOutline className='mx-1 text-xl'/>Settings</div></li>
              </ul>
            </div>

          </div>
          <div className='footer '>
            <div className='p-2'><button className='flex items-center'><FiPhone className='mx-1 text-xl'/>Support</button></div>
            <div className='p-2'><button className='flex items-center'><FiLogOut className='mx-1 text-xl'/>Logout</button></div>
          </div>
        </div>

        <div className='main-frame bg-gray-100 md:p-4 lg:p-4'>
          <div className='md:border bg-white md:rounded-lg h-full'>
            <div className='header mx-5 md:my-5 lg:my-5'>
              <div className=' flex justify-between mb-3 md:flex-row flex-col'>
                <div>
                  <h2 className=' text-2xl font-bold'>Repositories</h2>
                  <p>{data.length} Total repositories</p>
                </div>
                <div className='flex'>
                  <div className='mr-2'>
                    <button className='flex items-center p-2 border border-gray-100 rounded-md hover:bg-blue-500 hover:text-white '><LuRefreshCw  className='mx-1'/>Refresh All</button>
                  </div>
                  <div>
                    <button className='flex items-center p-2 border border-gray-100 rounded-md bg-blue-500 text-white hover:bg-blue-600'><IoMdAdd className='mx-1'/> Add Repositories</button>
                  </div>  
                </div>
              </div>
              <div className=''>
                <div className='flex items-center p-2 border border-gray-200 md:w-1/3 lg:w-1/3 rounded-md'>
                  <IoIosSearch className='mr-2 text-xl'/>
                  <input type="text" name="" id=""  placeholder='Search Repositories' className=' w-full'/>
                </div>
              </div>
            </div>
            <hr />
            <div className='main '>
              <div className='overflow-y-auto h-screen'>
                {
                data.map((repo, index) => (
                  <>
                    <Repo repo={repo} key={index}/>
                    <hr/>
                  </>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;