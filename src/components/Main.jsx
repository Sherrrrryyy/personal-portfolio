import React from 'react'
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <div className='min-h-screen bg-background'>
                <main className="container px-8 pt-40">
                    <section>
                        <div className="max-w-3xl space-y-6">
                            <div className='flex items-center justify-start'>
                                <h1 className="border border-white p-2 rounded-full border-r-4 font-bold tracking-tight">Available for hire</h1>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight pt-5">
                                Hi, I'm <span className="text-primary">Shaheer</span>
                                <br />
                                Full Stack Developer
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                                I build exceptional and accessible digital experiences for the web.
                            </p>

                            <div className="flex gap-4 pt-5">
                           <Link href={'#projects'}>
                                <div className='p-2 px-5 rounded-md border border-primary bg-white text-black font-bold flex gap-4'>
                                    <button className="btn-primary cursor-pointer">
                                        View Projects
                                    </button>
                                </div>
                           </Link>
                                <div className=' cursor-pointer p-2 px-5 rounded-md border border-white bg-black text-white font-bold flex gap-4'>
                                    <a href='/cv.pdf' download className="btn-secondary">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </section>

                    <section className="container">
                        <div className="flex gap-12 pt-16">
                            <Link href="https://github.com/Sherrrrryyy" target="_blank" rel="noopener noreferrer">
                                <button className="icon-button cursor-pointer">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587v-2.17c-3.338.725-4.033-1.613-4.033-1.613-.547-1.387-1.338-1.753-1.338-1.753-1.093-.75.088-.725.088-.725 1.207.088 1.838 1.238 1.838 1.238 1.073 1.837 2.813 1.305 3.5.988.113-.775.42-1.305.763-1.605-2.665-.3-5.467-1.337-5.467-5.93 0-1.313.468-2.387 1.238-3.225-.113-.3-.538-1.513.113-3.15 0 0 1.007-.325 3.3 1.237.957-.263 1.987-.4 3.007-.4 1.02 0 2.05.137 3.007.4 2.293-1.562 3.3-1.237 3.3-1.237.65 1.637.225 2.85.113 3.15.775.838 1.238 1.912 1.238 3.225 0 4.6-2.813 5.625-5.487 5.925.432.375.813 1.125.813 2.275v3.375c0 .325.188.7.8.587C20.563 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <button className="icon-button cursor-pointer">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                                </button>
                            </Link>
                           
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Main
