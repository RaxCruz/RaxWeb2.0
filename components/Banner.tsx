import * as React from 'react'
import Image from 'next/image'

export function Banner(){
    return(
        <div className="diff aspect-[16/9]">
            <div className="diff-item-1 ">
                <Image src='/banner-bottom.gif' width={20} height={10} alt={'banner-bottom'} />
            </div>
            <div className="diff-item-2">
                <Image src='/banner-top.gif' width={20} height={10} alt={'banner-bottom'} />
            </div>
            <div className="diff-resizer"></div>
        </div>
    )
}