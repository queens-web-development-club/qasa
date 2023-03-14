import Image from 'next/image';
import FbLogo from "../assets/images/logos/fb.png";
import InstaLogo from "../assets/images/logos/insta.png";
import TreeLogo from "../assets/images/logos/tree.png";
import MailSignUp from './MailSignUp';


export default function Footer() {
    return(
        <footer className="bg-beige px-8 pb-24">
            {/** Footer Prompt Container */}
            <div>
                {/** Title */}
                <div className="text-black 
                text-[40px] md:text-[60px] lg:text-[80px]">
                    Stay connected
                </div>
                {/** Subtext */}
                <div className="text-black 
                text-[20px] md:text:[30px] lg:text-[40px]">
                    Sign up for our mailing list.
                </div>
                {/** Links */}
                <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                <MailSignUp />
                <Image src={FbLogo} className="ml-auto mr-[2%] h-20 w-20"></Image>
                <Image src={InstaLogo} className="mr-[2%] h-20 w-20"></Image>
                <Image src={TreeLogo} className="h-20 w-20"></Image>
                </div>
            </div>
        </footer>
    );
}