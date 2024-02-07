
import Image from "next/image"

export function Price(){
    return(
        <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary font-['LolTitleItalic']">
                    Price
                </span>
                <h2
                            className="mb-4 text-[5rem]  sm:text-[7rem] md:text-[5rem]  md:leading-[1.5]"
                            >
                    透明價格
                </h2>
                <p className="text-base text-body-color dark:text-dark-6 font-['LolTitleItalic']">
                    目前以實體教學為主，主要地區為大高雄市區
                </p>
              </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] hover:border-dashed border-2 shadow-lg border-background-[20px] border-black   py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                >
                <span className="mb-3 block text-lg font-semibold text-primary">
                C/C++<br />
                程式編譯
                </span>
                
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                    <span>NT 700</span>
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                    / 小時
                    </span>
                </h2>
                <p
                    className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color dark:text-dark-6"
                    >
                    此課程對於程式初學者友善，由淺入深培養程式軟實力
    
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      1 對 1
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      每日練習題
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      TimeTree 追蹤學習進度
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      免費額外學習資源
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      仿真競賽測驗
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      專題開發
                    </p>
                </div>
                <a
                    href="javascript:void(0)"
                    className="pointer-event-none block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition"
                    >
                C/C++程式編譯
                </a>
                <div className='absolute right-0 top-0 h-full'>
                  <Image src={'/balldog2.svg'} width={200} height={200} alt={'laptop'}/>
                </div>
              </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] hover:border-dashed border-2 border-2 shadow-lg border-background-[20px] border-black py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                >
                <span className="mb-3 block text-lg font-semibold text-primary">
                Nextjs<br/>
                前端網頁開發
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                    <span>NT 800</span>
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                    / 小時
                    </span>
                </h2>
                <p
                    className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color dark:text-dark-6"
                    >
                    此課程涵蓋內容較廣，培養獨立解決，開發網頁的各種問題
                </p>
                <div className="mb-9 flex flex-col gap-[14px]">
                    <p className="text-base text-body-color dark:text-dark-6">
                      1 對 1
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      git 版本控制
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      免費額外學習資源
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                        企業級專案管理
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                        免費架站空間
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      中大型專題開發
                    </p>
                </div>
                <a
                    href="javascript:void(0)"
                    className="pointer-event-none block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition"
                    >
                Next.js 前端開發
                </a>
                <div className='absolute right-0 top-0 h-full'>
                  <Image src={'/catcircle.svg'} width={200} height={200} alt={'laptop'}/>
                </div>
              </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="relative z-10 mb-10 overflow-hidden rounded-[10px] hover:border-dashed border-2 border-2 shadow-lg border-background-[20px] border-black dark:border-dark-3   py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-[50px]"
                >
                <span className="mb-3 block text-lg font-semibold text-primary">
                Tailwind<br/>
                CSS 開發
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark dark:text-white">
                    <span>NT 700</span>
                    <span className="text-base font-medium text-body-color dark:text-dark-6">
                    / 小時
                    </span>
                </h2>
                <p
                    className="mb-8 border-b border-stroke dark:border-dark-3 pb-8 text-base text-body-color dark:text-dark-6"
                    >
                    此課程為CSS獨立教學，透過大量的練習提升CSS直覺
                </p>
                <div className="mb-9 flex flex-col gap-[14px] ">
                    <p className="text-base text-body-color dark:text-dark-6 ">
                      1 對 1
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      免費 UI 庫
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                        每日挑戰題
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                    免費額外學習資源
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      RWD 快速排版
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Clone 企業級網頁
                    </p>
                </div>
                <a
                    href="javascript:void(0)"
                    className="pointer-event-none block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition"
                    >
                TailwindCSS 開發
                </a>
                <div className='absolute right-0 top-0 h-full'>
                  <Image src={'/balldog3.svg'} width={200} height={200} alt={'laptop'}/>
                </div>
              </div>
          </div>
        </div>
    </div>
    )
}