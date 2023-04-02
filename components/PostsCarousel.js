import Image from 'next/image';
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import TempImage from "@/assets/tmp/recent-img-carousel.png";
const tempTimeline = [
    { image: TempImage, date: "January 20" },
    { image: TempImage, date: "February 20" },
    { image: TempImage, date: "March 20" },
    { image: TempImage, date: "April 20" },
    { image: TempImage, date: "June 20" },

]

export default function PostsCarousel() {
    const [imageOffset, setImageOffset] = useState(0)

    return (
        <div className="relative w-full h-full">
            <div className="translate-y-24">
                <div className="flex justify-center text-4xl md:text-6xl xl:text-8xl text-black"> 
                    Recent Posts
                </div>
                <div className="flex justify-center pt-4 text-xl md:text-2xl text-black"> 
                    Get involved with upcoming events 
                </div>
            </div>
            <button  onClick={() => setImageOffset(imageOffset - 1)} className="absolute left-28 bottom-[40%] z-2 hover:scale-125 duration-200 cursor-pointer">
                <AiOutlineArrowLeft  className="h-[40px] w-[40px]"/>
            </button>
            <div className="absolute right-28 bottom-[40%] hover:scale-125 duration-200 cursor-pointer">
                <AiOutlineArrowRight onClick={() => setImageOffset(imageOffset + 1)} className="h-[40px] w-[40px]"/>
            </div>
            <div className="bg-beige flex h-fit md:mx-40 py-20 md:px-8 rounded-xl overflow-hidden">
                <div 
                style={{ transform: `translateX(-${33*imageOffset}%)`, transition: "all 1s ease" }}
                className="flex flex-nowrap">
                    {tempTimeline.map((post, idx)=> {
                        return (
                            <PostWidget image={post.image} date={post.date} />
                        )
                    })}
                </div>
                
            </div>
        </div>
        
    )
}

function PostWidget({ image, date }) {
    return (
        <div className="relative h-[400px] shrink-0 w-full md:w-1/3 md:p-6 text-center flex justify-center items-center">
            <Image src={image} className="object-cover w-full h-full rounded-xl"/>
            <div className="absolute w-full py-2.5 bottom-50 inset-x-0 text-white md:text-4xl lg:text-6xl">
                {date}
            </div>
        </div>
    )
}

