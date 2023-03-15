export default function MailSignUp() {
    return(
        <div className="flex w-[100%] py-4 lg:w-[70%] lg:py-0 lg:pr-[5%]">
            <input type="text" placeholder="Email" name="email" 
            className="h-10 md:h-20 w-full bg-white text-black 
            text-[20px] md:text:[30px] lg:text-[35px] 
            pl-4 rounded-l-[10px]">
            </input>
            <button className="bg-blue-dark text-white
            text-[20px] md:text:[30px] lg:text-[35px] px-[5%]
            hover:shadow-xl duration-300 rounded-r-[10px]">
                Subscribe
            </button>
        </div>
    );
}