import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FbLogo from "@/assets/images/logos/fb.png";
import InstaLogo from "@/assets/images/logos/insta.png";
import TreeLogo from "@/assets/images/logos/tree.png";

import SeniorLeadershipPhoto from '@/assets/images/team-photos/senior-leadership.png';
import MarketingPhoto from '@/assets/images/team-photos/marketing.png';
import OutreachPhoto from '@/assets/images/team-photos/outreach.png';
import SponsorshipsPhoto from '@/assets/images/team-photos/sponsorships.png';
import LogisticsPhoto from '@/assets/images/team-photos/logistics.png';


import exImage from "@/assets/images/image-carousel/carousel-img-1.png"
const carouselImages = [exImage, exImage, exImage, exImage, exImage, exImage]
export default function ExecsPage() {
    return (
        <>
            <Head>
                <title>QASA - Team</title>
                <meta name="description" content="Queen's Asian Student Association" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-contactBlobs bg-cover bg-no-repeat-y bg-right bg-origin-border">
                <div className="main-margins">
                    <div className="flex justify-center underline text-2xl md:text-4xl xl:text-5xl pt-10 pb-6 text-black">
                        Contact Us
                    </div>
                    <div className="flex justify-center text-xl pb-6 text-black">
                        quasa@clubs.queensu.ca
                    </div>
                    <div className="flex justify-center flex-row flex-nowrap gap-2">
                        {/** Facebook */}
                        <Link href="https://www.facebook.com/queens.qasa"
                            className="h-20 w-20 
                            hover:shadow-xl duration-300 rounded-[22px]"
                            target="_blank">
                                <Image src={FbLogo} />
                        </Link>
                            {/** Instagram */}
                        <Link href="https://www.instagram.com/queens.asa/"
                            className=" h-20 w-20 
                            hover:shadow-xl duration-300 rounded-[22px]"
                            target="_blank">
                                <Image src={InstaLogo} />
                        </Link>
                            {/** Linktree */}
                        <Link href="https://linktr.ee/qasa"
                            className="h-20 w-20 
                            hover:shadow-xl duration-300 rounded-[22px]"
                            target="_blank">
                                <Image src={TreeLogo} />
                        </Link>
                    </div>
                    <div className="flex justify-center underline text-2xl md:text-4xl xl:text-5xl pt-12 pb-6 text-black"> 
                        Meet the Team
                    </div>
                    <div className="flex flex-wrap">
                        <Link href="/contact/senior-leadership" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={SeniorLeadershipPhoto} className="mx-auto"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> Senior Leadership </div>
                        </Link>
                        <Link href="/contact/marketing" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={MarketingPhoto} className="mx-auto"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> Marketing </div>
                        </Link>
                        <Link href="/contact/outreach" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={OutreachPhoto} className="mx-auto"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> Outreach </div>
                        </Link>
                        <Link href="/contact/sponsorships" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={SponsorshipsPhoto} className="mx-auto"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> Sponsorships </div>
                        </Link>
                        <Link href="/contact/logistics" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={LogisticsPhoto} className="mx-auto"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> Logistics </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}