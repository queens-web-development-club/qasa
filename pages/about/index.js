import Head from 'next/head';
import Image from 'next/image';
import QASAFullLogo from '@/assets/images/logos/qasa_full_logo.png';
import ImageCarousel from '@/components/ImageCarousel';
import Link from 'next/link';
import exImage from "@/assets/tmp/andrew-headshot.png"
const carouselImages = [exImage, exImage, exImage, exImage, exImage, exImage]

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>QASA - About</title>
                <meta name="description" content="Queen's Asian Student Association" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-aboutBlobs bg-cover bg-no-repeat-y bg-right bg-origin-border">
                <div className="main-margins">
                    {/** About Header Container */}
                    <div
                    className="py-2 text-black text-center underline underline-offset-4 text-[35px] md:text-[45px] xl:text-[55px] font-DMSans"
                    >
                        About Us
                    </div>
                    {/** About Section Container */}
                    <div
                    className="flex flex-wrap lg:flex-nowrap"
                    >
                        {/** About Description */}
                        <div
                        className="text-[20px] text-black md:text-[30px] xl:text-[40px] 
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
                    <div
                    className="py-2 text-black text-center underline underline-offset-4 text-[35px] md:text-[45px] xl:text-[55px] font-DMSans"
                    >
                        Meet Our Team
                    </div>
                    <div className="flex flex-wrap pb-12">
                        <Link href="/contact/senior-leadership" className="w-full lg:w-1/2 lg:px-2 cursor-pointer">
                            <ImageCarousel images={carouselImages} />
                            <div className="flex justify-center text-2xl"> Senior Leadership </div>
                        </Link>
                        <Link href="/contact/marketing" className="w-full lg:w-1/2 lg:px-2 cursor-pointer">
                            <ImageCarousel images={carouselImages} />
                            <div className="flex justify-center text-2xl"> Marketing </div>
                        </Link>
                        <Link href="/contact/outreach" className="w-full lg:w-1/2 lg:px-2 cursor-pointer">
                            <ImageCarousel images={carouselImages} />
                            <div className="flex justify-center text-2xl"> Outreach </div>
                        </Link>
                        <Link href="/contact/sponsorships" className="w-full lg:w-1/2 lg:px-2 cursor-pointer">
                            <ImageCarousel images={carouselImages} />
                            <div className="flex justify-center text-2xl"> Sponsorships </div>
                        </Link>
                        <Link href="/contact/logistics" className="w-full lg:w-1/2 lg:px-2 cursor-pointer">
                            <ImageCarousel images={carouselImages} />
                            <div className="flex justify-center text-2xl"> Logistics </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}