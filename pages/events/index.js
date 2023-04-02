import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FbLogo from "@/assets/images/logos/fb.png";
import InstaLogo from "@/assets/images/logos/insta.png";
import TreeLogo from "@/assets/images/logos/tree.png";
import PostsCarousel from '@/components/PostsCarousel';

export default function EventsPage() {
    return (
        <>
            <Head>
                <title>QASA - Events</title>
                <meta name="description" content="Queen's Asian Student Association" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-eventsBlobs bg-contain bg-no-repeat bg-right bg-origin-border">
                <div>
                    <div
                    className="flex flex-wrap lg:flex-nowrap py-12"
                    >
                        {/** About Description */}
                        <div
                        className="text-[45px] sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[95px] font-[500] text-center lg:text-left lg:ml-8 w-full text-red-light  
                                lg:py-10 font-DMSans"
                        >
                        Create <br /> Unforgettable <br /> Memories
                        </div>
                    </div>
                    <div className="flex justify-center text-2xl md:text-4xl xl:text-5xl pt-12 pb-6 text-black"> 
                        Recent Posts
                    </div>
                    <div className="flex justify-center pt-4 text-2xl md:text-4xl text-black"> 
                        Get involved with upcoming events 
                    </div>
                    <PostsCarousel />
                    <div className="flex justify-center text-2xl md:text-4xl xl:text-5xl pt-12 pb-6 text-black"> 
                        Looking for more?
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-[50%] text-black text-[25px] md:text-[35px] xl:text-[45px] text-center lg:text-left py-4 px-12">
                            Check out our socials or linktr.ee/qasa for more events!
                        </div>
                        <div className="w-full lg:w-[50%] flex justify-center flex-row flex-nowrap gap-2 py-6">
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
                    </div>
                </div>
            </main>
        </>
    )
}