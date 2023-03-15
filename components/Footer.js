import Link from 'next/link';
import Image from 'next/image';
import FbLogo from "../assets/images/logos/fb.png";
import InstaLogo from "../assets/images/logos/insta.png";
import TreeLogo from "../assets/images/logos/tree.png";
import MailSignUp from './MailSignUp';

export default function Footer() {
    return(
        <footer className="bg-beige px-8 pb-16 pt-4">
            {/** Footer Prompt Container */}
            <div>
                {/** Title */}
                <div className="text-black 
                text-[40px] md:text-[60px] lg:text-[70px]">
                    Stay connected
                </div>
                {/** Subtext */}
                <div className="text-black 
                text-[20px] md:text:[30px] lg:text-[40px]">
                    Sign up for our mailing list.
                </div>

                {/** Socials */}
                <div className='flex flex-row flex-wrap lg:flex-nowrap'>
                {/** Mail Sign Up Box */}
                <MailSignUp />
                {/** Facebook */}
                <Link href="https://www.facebook.com/queens.qasa"
                className="ml-auto mr-[2%] h-20 w-20 
                hover:shadow-xl duration-300 rounded-[22px]"
                target="_blank">
                    <Image src={FbLogo} />
                </Link>
                {/** Instagram */}
                <Link href="https://www.instagram.com/queens.asa/"
                className=" mr-[2%] h-20 w-20 
                hover:shadow-xl duration-300 rounded-[22px]"
                target="_blank">
                    <Image src={InstaLogo} />
                </Link>
                {/** Linktree */}
                <Link href="https://linktr.ee/qasa"
                className="mr-[2%] h-20 w-20 
                hover:shadow-xl duration-300 rounded-[22px]"
                target="_blank">
                    <Image src={TreeLogo} />
                </Link>

                </div>
            </div>
        </footer>
    );
}