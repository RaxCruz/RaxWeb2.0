import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Banner } from "./Banner"
import Image from "next/image"
  export function ResizableCard() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-xl rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="relative flex h-[200px] items-center justify-center">
            <Image src='/AvatarFront.png' layout='fill' objectFit='cover' alt={'avatar'} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
              <div className="flex h-full items-center justify-center">
                <Banner />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={40}>
              <div className="relative flex h-full items-center justify-center">
                <Image src='/me.gif' objectFit="cover" fill alt={'banner-bottom'} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  