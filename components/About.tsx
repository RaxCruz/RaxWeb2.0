import * as React from 'react'
import { ResizableCard } from './ResizableCard'
import Image from 'next/image'
export function About(){
    return(
        <section
        className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  md:w-[80vw] mx-auto "
        >
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4 ">
                <div className="w-full px-4 lg:w-6/12">
                    <ResizableCard />
                </div>
                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div className="mt-10 lg:mt-0">
                    <span className="block mb-4 text-lg font-['LolTitleItalic'] text-['#ccc']">
                    Why Choose Me
                    </span>
                    <h2
                        className="mb-5 text-[2.5rem] font-bold md:text-[3rem]"
                        >
                        朋友般的程式夥伴
                    </h2>
                    <p className="mb-5 font-bold italic">
                        想踏入程式領域，卻不知如何下手嗎？或是您是家長想培養小孩的程式興趣。完全可以相信在我的陪伴下從零基礎到實戰業界軟體開發，且在過程中開發屬於你的專屬網頁/軟體/APP。
                    </p>
                    <p className="mb-8 font-bold italic">
                        Say Goodbye 傳統的教學方式，隨時動態更新的教材，快速地加深程式邏輯思考。
                        並且與我一起協同式開發專案，手把手參與合作軟體開發！
                        具備業界經驗的教學，值得你100%的信賴！
                    </p>
                    <div
                        className="inline-flex items-center justify-center py-3 text-base font-['LolTitleItalic'] font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                        >
                    RaxCruz
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}