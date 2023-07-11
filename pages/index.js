import Head from "next/head";

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
                <main className="bg-white px-10" >
                    <section className=" min-h-screen">
<nav className="py-10 mb-12 flex justify-between">
    <h1 className="text-xl " >Norma Granados</h1>
<ul className="flex items-center">
    <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
</ul>
</nav>
<div className="text-center p-10">
    <h2 className="text-5xl py-2 text-teal-600 font-medium" >Norma Granados</h2>
    <h3 className="text-2xl py-2">Data Analyst</h3>
    <p className="text-md py-5 leading-8 text-gray-800"> I'm a mexican data analyst with a background in Industrial Engineering</p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
    <AiFillLinkedin/>
    <AiFillFacebook/>
    <AiFillGithub/>
</div>

                    </section>
                </main>
            </div>
        </div>
    );
}
  
export default App;