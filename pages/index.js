import Head from "next/head";
import Image from "next/image"
import normada from "../public/normagc.png"
import data3 from "../public/data3.svg"
import data4 from "../public/data4.jpg"
import data5 from "../public/data3.svg"
import data6 from "../public/data4.jpg"
import data7 from "../public/data3.svg"

import  {BsFillMoonStarsFill}  from 'react-icons/bs'
import {AiFillLinkedin, AiFillFacebook, AiFillGithub} from 'react-icons/ai'

function App() {
    return (
        <div className="App">
            <div>
                <Head>
                    <title>Patricia Granados Portfolio </title>
                    <meta name="description" content="Data Analyst/Industrial Engineer" key="desc"></meta>
                    <link rel="icon" href="/favicon.ico"/> 
                </Head>
                <main className="bg-white px-10 md:px-20 lg:px-40" >
                    <section className=" min-h-screen">
<nav className="py-10 mb-12 flex justify-between">
    <h1 className="text-xl " >Norma Granados</h1>
<ul className="flex items-center">
    <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
</ul>
</nav>
<div className="text-center p-10">
    <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl" >Norma Granados</h2>
    <h3 className="text-2xl py-2 md:text-3xl">Data Analyst</h3>
    <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto"> I'm a mexican data analyst with a background in Industrial Engineering</p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
    <AiFillLinkedin/>
    <AiFillFacebook/>
    <AiFillGithub/>
</div>
<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
    <Image src={normada} alt="" layout="fill" objectFit="cover"/>
</div>

                    </section>

                    <section>
                        <div>
                            <h3 className="text-3xl py-1">Services</h3>
                            <p className="text-md py-2 leading-8 text-gray-800">
                                lorem ipsum
                               <span className="text-teal-500">loremipsum</span>
                            </p>
                        </div>
                        <div className="lg:flex gap-10">
                            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                                <Image/>
                                <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
                                <p className="py-2">loremipsum</p>
                                <h4 className="py-4 text-teal-600">Data visualization tools I use</h4>
                                <p className="text-gray-800 py-1">python</p>
                                <p className="text-gray-800 py-1">tableau
                            </p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                                <Image/>
                                <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
                                <p className="py-2">loremipsum</p>
                                <h4 className="py-4 text-teal-600">Data visualization tools I use</h4>
                                <p className="text-gray-800 py-1">python</p>
                                <p className="text-gray-800 py-1">tableau
                            </p>
                            </div>
                            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                                <Image/>
                                <h3 className="text-lg font-medium pt-8 pb-2">Data Analysis</h3>
                                <p className="py-2">loremipsum</p>
                                <h4 className="py-4 text-teal-600">Data visualization tools I use</h4>
                                <p className="text-gray-800 py-1">python</p>
                                <p className="text-gray-800 py-1">tableau
                            </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h3 className="text-3xl py-1">Portfolio</h3>
                            <div>
                            <p className="text-md py-2 leading-8 text-gray-800">
                                lorem ipsum
                               <span className="text-teal-500">loremipsum</span>
                            </p>
                            </div>
                            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                            <div className="basis-1/3 flex-1">
                                <Image src= {data3} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover"/>
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src= {data4} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover"/>
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src= {data3} width={'100%'} height={'100%'} layout="responsive" className="rounded-lg object-cover"/>
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src= {data4} width={'100%'} height={'100%'}  layout="responsive" className="rounded-lg object-cover"/>
                            </div>
                            <div className="basis-1/3 flex-1">
                                <Image src= {data3} width={'100%'} height={'100%'}  layout="responsive" className="rounded-lg object-cover"/>
                            </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
  
export default App;