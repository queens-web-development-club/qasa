import Head from 'next/head';
import Image from 'next/image';
import QASAFullLogo from '@/assets/images/logos/qasa_full_logo.png'

export default function EventsPage() {
    return (
        <>
            <Head>
                <title>QASA - Events</title>
                <meta name="description" content="Queen's Asian Student Association" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <div
                    className="flex flex-wrap lg:flex-nowrap py-12"
                    >
                        {/** About Description */}
                        <div
                        className="text-[45px] sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[95px] font-[500] text-center lg:text-left lg:ml-4 w-full text-black  
                                lg:w-[50%] lg:py-10 font-DMSans"
                        >
                        Create <br /> Unforgettable <br /> Memories
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