import * as React from 'react'
import Image from 'next/image'

export function LeftBanner(){
    return(
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1 ">
            <Image src='/AvatarFront.png' layout='fill' objectFit='cover' alt={'avatar'} />
            </div>
            <div className="diff-item-2">
            <Image src='/AvatarBack.png' layout='fill' objectFit='cover' alt={'avatar'} />
            </div>
            <div className="diff-resizer"></div>
        </div>
    )
}