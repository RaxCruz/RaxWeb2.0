import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavigationMenuGroup } from './NavigationMenuGroup'
import { ThemeChanger } from './ThemeChanger'
import Image from 'next/image'
export function NavBar(){
    return (
        <div className="navbar shadow-xl bg-stripe animate-stripe-slower bg-[length:6px_6px] rounded-full bg-white -mb-[1.5rem] border-2 border-black border-r-4 border-b-4 mt-[1rem]">
        <div className="navbar-start">
        <button className="btn btn-ghost btn-circle pointer-events-none">
            <div className="indicator">
              <Image className="z-3" src={'/Short 1.svg'} width={32} height={32} alt={'ig'}/>
              <span className="absolute right-0  rounded-full shadow-lg h-2 w-2 badge-warning indicator-top indicator-end animate-pulse"></span>
            </div>
          </button>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl font-['LolTitleItalic']">raxcruz</a>
        </div>
        <div className="navbar-end">
        <a href="https://www.instagram.com/peter030910/">
          <button className="btn btn-ghost btn-circle">
            
            <div className="indicator">
              <Image className="z-3" src={'/ig.svg'} width={24} height={24} alt={'ig'}/>
              <span className="absolute right-0  rounded-full shadow-lg h-2 w-2 badge-accent indicator-top indicator-end animate-pulse"></span>
            </div>
          </button>
          </a>
        </div>
    
      </div>
    )
}