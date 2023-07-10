import Head from "next/head";

import  {BsFillMoonStarsFill}  from 'react-icons/bs'

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
    <h1 className="text-xl font-burtons" >Norma Granados</h1>
<ul className="flex items-center">
    <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
    <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
</ul>
</nav>
<div>
    <h2></h2>
</div>

                    </section>
                </main>
            </div>
        </div>
    );
}
  
export default App;