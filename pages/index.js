import Head from 'next/head'
import Image from 'next/image';
import LatestPost from '@/components/LatestPost'
import ImageCarousel from '@/components/ImageCarousel';
import QASAFullLogo from '@/assets/images/qasa_full_logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Queen's Asian Student Association</title>
        <meta name="description" content="Queen's Asian Student Association" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-12 lg:mx-36 xl:mx-60">
          {/** Header Container */}
          <div 
          className="text-center text-[60px] text-red-light 
                    lg:text-[75px]"
          > 
            QASA
          </div>
          {/** Subheading Container */}
          <div
          className="text-center text-black text-[20px] md:text-[30px] xl:text-[40px]"
          >
            Queen's Asian Students' Association
          </div>
        
          <ImageCarousel />
          <LatestPost />
          
          {/** About Header Container */}
          <div
          className="py-2 text-black text-center underline underline-offset-4 text-[25px] md:text-[35px] xl:text-[45px]"
          >
            About QASA
          </div>
          {/** About Section Container */}
          <div
          className="flex flex-wrap lg:flex-nowrap"
          >
            {/** About Description */}
            <div
            className="text-[15px] text-black md:text-[25px] xl:text-[35px] 
                       lg:w-[50%] lg:py-10"
            >
              Queen's Asian Students Association (QASA) is a cultural
              club that hosts events throughout the year to foster
              friendship, strengthen the ties between the school and the 
              community, and educate, inform, and promote Asian culture
            </div>
            <div
            className="flex grow justify-center lg:w-[50%]"
            > {/** Logo Container */}
              <Image 
              src={QASAFullLogo}
              alt=""
             
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
