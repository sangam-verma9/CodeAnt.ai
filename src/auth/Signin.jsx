import React, { useState } from 'react'
import "./signin.css"
import logo from "../assets/codeant.png"
import { FaGithub,FaBitbucket,FaGitlab,FaKey,FaArrowUp } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
const Signin = () => {
  const [changefn, setChangefn] = useState(true);
  const signin =()=>{
    setChangefn(true);
  }
  const signup =()=>{
    setChangefn(false);
  }

  return (
    <>
    <div className='grid grid-cols-1 h-screen w-screen md:grid-cols-2 lg:grid-cols-2'>
        <div className='md:flex lg:flex justify-center items-center hidden'>
            <div>
                <img src={logo} alt=""  className=' absolute left-0 bottom-0 w-1/5 filter grayscale opacity-20'/>
                <div className='p-2 rounded left-box-container'>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt="" className=' w-8 my-4' />
                        <p className='p-1 flex items-center font-bold'>AI to Detect & Autofix Bad Code</p>
                    </div>
                    <hr />
                    <div className='grid grid-cols-3 p-1 my-3'>
                        <div className='flex flex-col justify-center items-center'> 
                            <h3 className='font-bold'>30+</h3>
                            <p>Language support</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'> 
                            <h3 className='font-bold'>10K+</h3>
                            <p>Developer</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'> 
                            <h3 className='font-bold'>100+</h3>
                            <p>Hour saved</p>
                        </div>
                    </div>
                </div>
                <div className='float-end p-5 rounded left-box-container'>
                    <div className='grid grid-cols-2'>
                        <div className='mx-4'>
                            <div className='bg-slate-100 rounded-full w-14 h-14 items-center justify-center flex'><RiPieChart2Fill className=' text-3xl text-purple-400' /></div>
                        </div>
                        <div className='flex flex-col justify-center mx-3'>
                            <div className=' text-blue-500 flex  font-bold'>
                                <FaArrowUp />
                                <p>14%</p>
                            </div>
                            <div>This week</div>
                        </div>
                    </div>
                    <div className='mx-4 my-2'>
                        <h3 className='font-bold'>Issue fixed</h3>
                        <p className='font-bold text-2xl'>500K+</p>
                    </div>
                </div>
            </div>

        </div>

        <div className='grid justify-center items-center bg-gray-100'>
            <div className='bg-white w-full rounded right-box-container md:px-10 px-2 py-2'>
                <div className='flex justify-center items-center flex-col  p-5'>
                    <h1 className='p-2 text-xl flex items-center'> <img src={logo} alt="" className=' w-10' />CodeAnt AI</h1>
                    <h2 className='p-2 text-xl md:text-3xl font-bold'>Welcome to CodeAnt AI </h2>
                    <div className='bg-gray-100 w-full rounded my-1 border border-gray-200'>
                        <button className={`p-2  rounded w-1/2 ${changefn ?"bg-blue-500 text-white":""}`} onClick={signin}>Login</button>
                        <button className={`p-2 rounded w-1/2 ${!changefn ?"bg-blue-500 text-white":""}`} onClick={signup}>Signup</button>
                    </div>
                </div>
                <hr />
                <div className=''>
                    <div className='flex justify-center items-center bg-gray-100 p-2 rounded m-3 border border-gray-200'>
                        <FaGithub className='mx-2 text-xl'/>
                        <button>Sign in with Github</button>
                    </div>
                    {
                        changefn
                        ?
                        <>
                        <div className='flex justify-center items-center bg-gray-100 p-2 rounded m-3 border border-gray-200'>
                            <FaKey className='mx-2 text-xl text-green-600'/>
                            <button>Sign in with SSO</button>
                        </div>
                        </>
                        :
                        <>
                        <div className='flex justify-center items-center bg-gray-100 p-2 rounded m-3 border border-gray-200'>
                            <FaBitbucket className='mx-2 text-xl text-blue-500' />
                            <button>Sign in with Bitbucket</button>
                        </div>
                        <div className='flex justify-center items-center bg-gray-100 p-2 rounded m-3 border border-gray-200'>
                            <VscAzureDevops className='mx-2 text-xl text-blue-700'/>
                            <button>Sign in with Azure Devops</button>
                        </div>
                        <div className='flex justify-center items-center bg-gray-100 p-2 rounded m-3 border border-gray-200'>
                            <FaGitlab className='mx-2 text-xl text-orange-500'/>
                            <button>Sign in with Gitlab</button>
                        </div>
                        </>
                    }
                    
                </div>
            </div>
            <div className='items-center justify-center flex'>
                By signing up you agree to the &nbsp;<span className=' font-bold'>Privacy Policy</span>.
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin