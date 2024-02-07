import Image from 'next/image'
import { SideNav } from '@/components/SideNav'
import { ThemeChanger } from '@/components/ThemeChanger'
import { The_Girl_Next_Door } from 'next/font/google'
import { Skeleton } from '@/components/ui/skeleton'
import { NavigationMenuGroup } from '@/components/NavigationMenuGroup'
import { NavBar } from '@/components/NavBar'
import { Hero } from '@/components/Hero'
import { Banner } from '@/components/Banner'
import { Feature } from '@/components/Feature'
import { Detail } from '@/components/Detail'
import { About } from '@/components/About'
import { Price } from '@/components/Price'

export default function Home() {
  return (
    <main className='overflow-hidden'>
     
      <section className='navbar md:w-[60vw] mx-auto '>
        <NavBar />
      </section>
      <section className='hero bg-topography bg-blend-lighten xl:w-[80vw] mx-auto'>
        <Hero />
      </section>
      <section className='storyline'>
      <ul className="timeline timeline-vertical">
  <li>
   
    <div className="timeline-middle !h-[4rem]">
    </div>
    <hr className='!h-[2rem]'/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
    <Image src={'/balldog.svg'} height={250} width={250} alt={'manwithlaptop'}></Image>
    </div>
   
    <hr />
  </li>
  <li>
    <hr className='!h-[4rem]'/>
   
    <div className="timeline-middle">
      
    </div>
  </li>
 
</ul>
      </section>

      <section className='relative about xl:w-[80vw] md:w-[90vw] w-[95vw] mx-auto rounded-lg border border-black border-2 -mt-[4rem] gridpaper'>
        <About />
        <div className='absolute right-[-30px] bottom-[-50px]'>
                    <Image src={'/welcomeboard.svg'} height={200} width={200} alt={'manwithlaptop'}></Image>
                    </div>
                   
      </section>
      <section className='storyline'>
      <ul className="timeline timeline-vertical">
        <li>
        
          <div className="timeline-middle">
          </div>
          <hr className='!h-[2rem]'/>
        </li>
      <li>
          <hr className='!h-[2rem]'/>
          <div className="timeline-middle">
            <Image src={'/manwithlaptop.svg'} height={200} width={200} alt={'manwithlaptop'}></Image>
          </div>
        
          <hr className='!h-[2rem]'/>
        </li>
        <li>
          <hr className='!h-[4rem]'/>
        
          <div className="timeline-middle">
            
          </div>
        </li>
      
      </ul>
      </section>
  
      {/* <section className='banner'>
        <Banner />
      </section> */}
      
      <section className='feature -mt-[2rem] xl:w-[80vw] md:w-[90vw] w-[95vw] mx-auto border-2 border-black rounded-lg bg-graphPaper'>
        <Feature />
      </section>

      <section className='storyline'>
        <ul className="timeline timeline-vertical">
          <li>
          
            <div className="timeline-middle">
            </div>
            <hr className='!h-[2rem]'/>
          </li>
        <li>
            <hr className='!h-[2rem]'/>
            <div className="timeline-middle">
              <Image src={'/lazycat.svg'} height={300} width={300} alt={'manwithlaptop'}></Image>
            </div>
          
            <hr className='!h-[2rem]'/>
          </li>
          <li>
            <hr className='!h-[4rem]'/>
          
            <div className="timeline-middle">
              
            </div>
          </li>
        
        </ul>
      </section>
      <section className='mt-[-3rem] detail xl:w-[80vw] md:w-[90vw] w-[95vw] mx-auto rounded-lg'>
        <Detail />
      </section>
      <section className='storyline'>
        <ul className="timeline timeline-vertical">
          <li>
          
            <div className="timeline-middle">
            </div>
            <hr className='!h-[4rem]'/>
          </li>
        <li>
            <hr className='!h-[2rem]'/>
            <div className="timeline-middle">
              <Image src={'/glassdrink.svg'} height={300} width={300} alt={'manwithlaptop'}></Image>
            </div>
          
            <hr className='!h-[2rem]'/>
          </li>
          <li>
            <hr className='!h-[4rem]'/>
          
            <div className="timeline-middle">
              
            </div>
          </li>
        
        </ul>
      </section>
  
      
      <section
        className="xl:w-[80vw] md:w-[100vw] w-[95vw] mt-[-2rem] mx-auto relative z-10 overflow-hidden  dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
        >
       <Price />
      </section>
      <section className='storyline'>
        <ul className="timeline timeline-vertical">
          <li>
          
            <div className="timeline-middle">
            </div>
            <hr className='!h-[2rem]'/>
          </li>
        <li>
            <hr className='!h-[2rem]'/>
            <div className="timeline-middle">
              <Image src={'/sleepcat.svg'} height={300} width={300} alt={'manwithlaptop'}></Image>
            </div>
          
            <hr className='!h-[2rem]'/>
          </li>
          <li>
            <hr className='!h-[4rem]'/>
          
            <div className="timeline-middle">
              
            </div>
          </li>
        
        </ul>
      </section>

      <section
        className=" w-[80vw] mx-auto relative z-10 overflow-hidden  dark:bg-dark  pb-12 lg:pt-[0px] lg:pb-[30px]"
        >
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                  <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                    <span className="mb-2 block text-lg font-semibold text-primary font-['LolTitleItalic']">
                    RaxCruz
                    </span>
                    <h2
                        className="mb-3 text-3xl leading-[1.208] font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]"
                        >
                        你的程式好朋友
                    </h2>
                    <p className="text-base text-body-color dark:text-dark-6">
                    &quot;Experience is the name everyone gives to their mistakes.&quot; <br/>– Oscar Wilde
                    </p>
                  </div>
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}
