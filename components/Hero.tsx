import * as React from "react"
import Image from "next/image"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DrawerRax } from "./DrawerRax";
export function  Hero() {
  
    return (
      <div className="hero min-h-screen md:w-[80vw]">
        <div className="hero-content flex-col lg:flex-row gap-x-[2rem]">
          <div className="leading-[4rem]">
            <h1 className="lg:text-[5rem] md:text-[5rem] text-[5rem] font-bold ">Learning</h1>
            <h1 className="lg:text-[5rem] md:text-[5rem] text-[5rem] font-bold">Code</h1>
            <h1 className="lg:text-[5rem] md:text-[5rem] text-[5rem] font-bold">EveryDay</h1>
            <div className="inline-flex items-center justify-center py-3 text-base font-['LolTitleItalic'] font-medium text-center text-white border-2 border-r-4 border-b-4 border-black rounded-md px-7 text-black hover:bg-opacity-90 ">RaxCruz</div>
         
          </div>
        <div className="hidden px-4 lg:block lg:w-1/12"></div>
         <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto">
               <div className="relative z-10 inline-block pt-11 lg:pt-0">
               <div className="stack">
            <div className="shadow-md card">
              <div className="mockup-code">
              <pre data-prefix="1" className="animate-pulse" ><code>#include &lt;bits/stdc++.h&gt;</code></pre> 
              <pre data-prefix="2" className=""><code></code></pre> 
              <pre data-prefix="3" className="text-success"><code>using namespace std;</code></pre>
              <pre data-prefix="4"><code></code></pre> 
              <pre data-prefix="5" className="text-warning"><code>int main() &#123;</code></pre> 
              <pre data-prefix="6" className=""><code></code></pre> 
              <pre data-prefix="7" className="text-secondary animate-pulse"><code>  cin &gt;&gt; &quot;Learning Code&quot;;</code></pre>
              <pre data-prefix="8" className="text-secondary animate-pulse"><code>  cout &lt;&lt; &quot;Everyday&quot;</code></pre> 
              <pre data-prefix="9" className=""><code></code></pre>  
              <pre data-prefix="10" className="text-red-400"><code>  return 0;</code></pre> 
              <pre data-prefix="11" className=""><code></code></pre> 
              <pre data-prefix="12" className="text-warning"><code>&#125;</code></pre>
            </div>
          </div>
          <div className=" shadow card !translate-x-4 !-translate-y-8">
            <div className="mockup-code translate-x-6">
              <pre data-prefix="1"><code>#include &lt;bits/stdc++.h&gt;</code></pre> 
              <pre data-prefix="2" className=""><code></code></pre> 
              <pre data-prefix="3" className="text-success"><code>using namespace std;</code></pre>
              <pre data-prefix="4"><code></code></pre> 
              <pre data-prefix="5" className="text-warning"><code>int main() &#123;</code></pre> 
              <pre data-prefix="6" className=""><code></code></pre> 
              <pre data-prefix="7" className="text-secondary animate-pulse"><code>  cin&gt;&gt;&quot;Learning Code&quot;;</code></pre>
              <pre data-prefix="8" className="text-secondary animate-pulse"><code>  cout&lt;&lt;&quot;Everyday&quot;</code></pre> 
              <pre data-prefix="9" className=""><code></code></pre> 
              <pre data-prefix="10" className="text-red-400"><code>  return 0;</code></pre> 
              <pre data-prefix="11" className=""><code></code></pre> 
              <pre data-prefix="12" className="text-warning"><code>&#125;</code></pre>
            </div>
          </div>
          <div className=" shadow-sm card">
            <div className="mockup-code">
              <pre data-prefix="1"><code>#include &lt;bits/stdc++.h&gt;</code></pre> 
              <pre data-prefix="2" className=""><code></code></pre> 
              <pre data-prefix="3" className="text-success"><code>using namespace std;</code></pre>
              <pre data-prefix="4"><code></code></pre> 
              <pre data-prefix="5" className="text-warning"><code>int main() &#123;</code></pre> 
              <pre data-prefix="6" className=""><code></code></pre> 
              <pre data-prefix="7" className="text-secondary animate-pulse"><code>  cin&gt;&gt;&quot;Learning Code&quot;;</code></pre>
              <pre data-prefix="8" className="text-secondary animate-pulse"><code>  cout&lt;&lt;&quot;Everyday&quot;</code></pre> 
              <pre data-prefix="9" className=""><code></code></pre> 
              <pre data-prefix="10" className="text-red-400"><code>  return 0;</code></pre> 
              <pre data-prefix="11" className=""><code></code></pre> 
              <pre data-prefix="12" className="text-warning"><code>&#125;</code></pre>
            </div>
          </div>
          
        </div>
                 
               </div>
            </div>
         </div>
      </div>
    </div>
    )
}

