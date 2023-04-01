import Head from 'next/head';
import Image from 'next/image';
import QASAFullLogo from '@/assets/images/logos/qasa_full_logo.png';
import ImageCarousel from '@/components/ImageCarousel';
import Link from 'next/link';
import exImage from "@/assets/images/headshots/andrew-headshot.png"
const carouselImages = [exImage, exImage, exImage, exImage, exImage, exImage]

import SeniorLeadershipPhoto from '@/assets/images/team-photos/senior-leadership.png';
import MarketingPhoto from '@/assets/images/team-photos/marketing.png';
import OutreachPhoto from '@/assets/images/team-photos/outreach.png';
import SponsorshipsPhoto from '@/assets/images/team-photos/sponsorships.png';
import LogisticsPhoto from '@/assets/images/team-photos/logistics.png';

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
                    <div>
                        {/** About Description */}
                        <div className="text-[15px] md:text-[25px] xl:text-[35px] text-black text-center
                                 lg:py-6 font-DMSans"
                        >
                            The Queen's Asian Students Association (QASA) was newly formed in 2018 after having been the Queen's Chinese Students Association (QCSA) for many years. 
                            The reason for reforming was to promote inclusivity and diversity on the Queen's campus while breaking the stigma surrounding the Asian culture. 
                        </div>
                        <div className="text-[15px] md:text-[25px] xl:text-[35px] text-black text-center
                                 lg:py-6 font-DMSans">
                            Specifically, QASA aims to promote the Asian culture on campus through hosting a variety of events, such as Game Night, Night Market, and SingCon, where Queen's students have an opportunity to learn and familiarize themselves with the culture. 
                        </div>
                        <div className="text-[15px] md:text-[25px] xl:text-[35px] text-black text-center
                                 lg:py-6 font-DMSans">
                            As well, with mentorship opportunities available for our members, we hope to foster connections and inclusivity.
                        </div>
                    </div>
                    <div
                    className="py-2 text-black text-center underline underline-offset-4 text-[35px] md:text-[45px] xl:text-[55px] font-DMSans"
                    >
                        Meet Our Team
                    </div>
                    <div className="flex flex-wrap pb-12">
                        <Link href="/contact/senior-leadership" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={SeniorLeadershipPhoto} className="mx-auto hover:shadow-xl hover:scale-105 duration-200"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl"> Senior Leadership </div>
                        </Link>
                        <Link href="/contact/marketing" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={MarketingPhoto} className="mx-auto hover:shadow-xl hover:scale-105 duration-200"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl"> Marketing </div>
                        </Link>
                        <Link href="/contact/outreach" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={OutreachPhoto} className="mx-auto hover:shadow-xl hover:scale-105 duration-200"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl"> Outreach </div>
                        </Link>
                        <Link href="/contact/sponsorships" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={SponsorshipsPhoto} className="mx-auto hover:shadow-xl hover:scale-105 duration-200"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl"> Sponsorships </div>
                        </Link>
                        <Link href="/contact/logistics" className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8">
                            <Image src={LogisticsPhoto} className="mx-auto hover:shadow-xl hover:scale-105 duration-200"/>
                            <div className="flex justify-center pt-4 text-2xl md:text-4xl"> Logistics </div>
                        </Link>
                        <div className="w-full lg:w-1/2 lg:px-2 cursor-pointer py-8 flex items-center justify-center">
                            <Image src={QASAFullLogo} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}