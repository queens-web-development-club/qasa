import Image from 'next/image';
import TempImage from "@/assets/tmp/recent-img-tmp.png";

export default function PostsCarousel() {
    return (
        <div className="bg-beige">
            <PostWidget image={TempImage} date="January 20" />
            <PostWidget image={TempImage} date="February 20" />
            <PostWidget image={TempImage} date="March 20" />
        </div>
    )
}

function PostWidget({ image, date }) {
    return (
        <div>
        </>
    )
}

