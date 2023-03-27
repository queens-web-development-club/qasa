import Head from 'next/head'
import Image from 'next/image';
import LatestPost from '@/components/LatestPost'
import ImageCarousel from '@/components/ImageCarousel';
import QASAFullLogo from '@/assets/images/logos/qasa_full_logo.png'
import exImage from "@/assets/images/image-carousel/carousel-img-1.png"
const carouselImages = [exImage, exImage, exImage, exImage, exImage, exImage]

export default function Home() {
  return (
    <>
      <Head>
        <title>Queen's Asian Student Association</title>
        <meta name="description" content="Queen's Asian Student Association" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-homeBlobs bg-contain bg-repeat-y bg-right bg-origin-border">
        <div className="main-margins">
          {/** Header Container */}
          <div 
          className="text-center text-[60px] text-red-light font-LeagueSpartan
                    lg:text-[75px]"
          > 
            QASA
          </div>
          {/** Subheading Container */}
          <div
          className="text-center text-black text-[20px] md:text-[30px] xl:text-[40px] font-DMSans"
          >
            Queen's Asian Students' Association
          </div>
        
          <ImageCarousel images={carouselImages}/>
          <LatestPost />
          {/** About Header Container */}
          <div
          className="py-2 text-black text-center underline underline-offset-4 text-[25px] md:text-[35px] xl:text-[45px] font-DMSans"
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
                       lg:w-[50%] lg:py-10 font-DMSans"
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
