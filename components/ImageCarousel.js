import { useState } from "react"
import Image from "next/image"
import exImage from "@/assets/images/image-carousel/carousel-img-1.png"

const images = [exImage, exImage, exImage, exImage, exImage, exImage]

export default function ImageCarousel() {
    const [imageOffset, setImageOffset] = useState(0)

    const rotationTimer = setTimeout(() => {
        imageOffset === images.length - 1 ? setImageOffset(0) : setImageOffset(imageOffset + 1)
    }, 3000)

    return (
        <div
        className="relative flex justify-center w-full py-[20px] lg:px-[30px]">

            {/* Container for currently shown image */}
            <div
            className="overflow-hidden flex items-center">
                
                {/* Container with images all next to each other. This container will shift with the imageOffset */}
                <div
                style={{ transform: `translateX(-${100 * imageOffset}%)`, transition: "all 1s ease" }}
                className="flex flex-row flex-nowrap"
                >
                    {images.map((img, index) => {
                        return (
                            <div
                            key={index}
                            className="w-[100%] h-[100%] shrink-0 flex justify-center"> 
                                <Image src={img} key={index} alt="" />
                            </div>
                        )
                        })
                    }
                </div>
                
            </div>
            
            {/* Buttons Container */}
            <div
            className="absolute flex flex-row flex-nowrap bottom-5 md:bottom-6"
            >
                {images.map((_, index) => {
                    return (
                        <div 
                        className={`h-2 w-2 xl:h-4 xl:w-4 rounded-full mx-1 mb-1 cursor-pointer ${index === imageOffset ? "bg-red-light outline outline-2 outline-beige" : "bg-beige"}`}
                        onClick={() => {setImageOffset(index); clearTimeout(rotationTimer)}}
                        />
                    )
                })}

            </div>
        </div>
    )
}

