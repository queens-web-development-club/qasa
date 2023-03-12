import Image from 'next/image';
import TempImage from "../assets/tmp/recent-img-tmp.png";

export default function LatestPost() {
    return (
        /* Component Container */
        <div 
        className="w-full h-min rounded-[20px] flex flex-row flex-wrap overflow-hidden
        lg:flex-nowrap"
        >
            {/* Latest Post Image */}
            <Image
            className="w-[100%] lg:max-w-[50%]"
            src={TempImage}
            alt="QASA's Latest Post"
            />
            
            {/* Latest Post Description Container */}
            <div
            className="grow relative flex flex-wrap  bg-blue-light p-5 lg:max-w-[50%]"
            >
                <div>
                    <div className="text-[25px] text-black text-center grow max-h-[20%]
                    md:text-[35px]
                    lg:text-left lg:text-[45px]
                    xl:text-[60px]"
                    >
                        Latest Post
                    </div>
                    <div
                    className="py-5 text-black"
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </div>
                </div>
                
                <div className="grow self-end">
                    <button
                    className="bg-blue-dark rounded-[20px] w-full text-[20px] text-white
                    md:text-[25px]
                    lg:text-[30px]
                    xl:text-[40px]
                    hover:shadow-xl duration-300">
                        View Post
                    </button>
                </div>
                
            </div>
        </div>
    )
}
