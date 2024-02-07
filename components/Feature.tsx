import * as React from 'react'
import Image from 'next/image'
import { DrawerRax } from './DrawerRax'
import { DrawerNext } from './DrawerNext'
import { DrawerCss } from './DrawerCss'
import { DrawerCpp } from './DrawerCpp'
export function Feature(){
    return(
        <section className="pt-10 pb-10 lg:pt-[80px] lg:pb-20 md:w-[80vw] mx-auto">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center -mx-4">
                <div className="w-full px-4 ">
                    <div className="mx-auto mb-[60px] max-w-[550px] text-center lg:mb-20 ">
                        <span className="block mb-2 text-lg font-['LolTitleItalic'] text-primary">
                        Courses
                        </span>
                        <div className=''>
                        <h2
                            className="mb-4 text-[6rem]  sm:text-[8rem] md:text-[10rem]  md:leading-none"
                            >
                            課程
                        </h2>
                        
                        </div>
                        <p className="font-['LolTitleItalic']">
                            <span className="rounded-full font-['ChenYu'] text-[2rem]">1.</span>程式編譯&nbsp;&nbsp;&nbsp;<span className="rounded-full font-['ChenYu'] text-[2rem]">2.</span>前端網頁開發&nbsp;&nbsp;&nbsp;<span className="rounded-full font-['ChenYu'] text-[2rem]">   3.</span>CSS 設計
                        </p>
                    </div>
                </div>
                </div>
                <div className="flex flex-wrap -mx-4 -my-4">
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="w-full mb-10 ">
                        <div className="relative hover:scale-105 hover:shadow-lg mb-8 rounded after:content-[''] after:border  after:border-slate-300 after:absolute after:w-[90%] after:-top-[5%] after:h-[110%] after:left-[5%] after:rounded-tr-lg">
                            {/* <img
                            src="/courseA.png"
                            alt="image"
                            className="w-full"
                            /> */}
                            <Image
                                src={'/courseA.png'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt={'/courseA.png'}
                                />
                                  <div className='absolute h-full w-full top-0 left-0 z-30 bg-transparent'>
                            <DrawerCpp/>
                        </div>
                        </div>
                        <div>
                            <span
                            className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                            程式編譯
                            </span>
                            <h3>
                            <a
                                href="javascript:void(0)"
                                className="inline-block mb-4 text-3xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                            學習各種開發，測試，除錯，比賽常用技巧
                            </a>
                            </h3>
                            <p className="text-gray-400  font-['LolTitleItalic']">
                            透過編程解決現實生活中的各種問題，打下演算法，邏輯思考，程式技巧的天下。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                    <div className="w-full mb-10 ">
                    <div className="relative hover:scale-105 hover:shadow-lg mb-8 rounded after:content-[''] after:border  after:border-slate-300 after:absolute after:w-[90%] after:-top-[5%] after:h-[110%] after:left-[5%] after:rounded-tr-lg">
                        <Image
                                src={'/courseB.png'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt={'/courseB.png'}
                                />
                        <div className='absolute h-full w-full top-0 left-0 z-30 bg-transparent'>
                            <DrawerNext />
                        </div>
                        
                        </div>
                        <div>
                            
                            <span
                            className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                            前端網頁開發
                            </span>
                            <h3>
                            <a
                                href="javascript:void(0)"
                                className="inline-block mb-4 text-3xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                            了解架設網站各種淺規則
                            </a>
                            </h3>
                            <p className="text-base text-gray-400  font-['LolTitleItalic']">
                            學習當代前端框架，讓網頁完全在你的掌控之中。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="w-full mb-10">
                    <div className="relative hover:scale-105 hover:shadow-lg mb-8 rounded after:content-[''] after:border  after:border-slate-300 after:absolute after:w-[90%] after:-top-[5%] after:h-[110%] after:left-[5%] after:rounded-tr-lg">
                        <Image
                                src={'/courseC.png'}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt={'/courseC.png'}
                                />
                                 <div className='absolute h-full w-full top-0 left-0 z-30 bg-transparent'>
                            <DrawerCss />
                        </div>
                        </div>
                       
                        <div>
                            <span
                            className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                            >
                            CSS 設計
                            </span>
                            <h3>
                            <a
                                href="javascript:void(0)"
                                className="inline-block mb-4 text-3xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                >
                            學習時下最流行的CSS開發技巧
                            </a>
                            </h3>
                            <p className="text-base text-gray-400  font-['LolTitleItalic']">
                            還在為排版苦惱嗎？實用技巧讓你一杯咖啡的時間完成網頁佈局
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}