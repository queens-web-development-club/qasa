export default function MailSignUp() {
    async function clickHandler(enteredData) {
        const response = await fetch("/api/mailing-list", {
            method: "POST",
            body: JSON.stringify(enteredData),
            headers: 
            {
            "Content-Type": 
            "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    }

    [/** This needs to grab the text in the field and apply it to the handler above */]
    return(
        <div className="flex w-[100%] py-4 lg:w-[70%] lg:py-0 lg:pr-[5%]">
            <input type="text" placeholder="Email" name="email"
            className="h-10 md:h-20 w-full bg-white text-black 
            text-[20px] md:text:[30px] lg:text-[35px] 
            pl-4 rounded-l-[10px]">
            </input>
            <button onClick={clickHandler} className="bg-blue-dark text-white
            text-[20px] md:text:[30px] lg:text-[35px] px-[5%]
            hover:shadow-xl duration-300 rounded-r-[10px]">
                Subscribe
            </button>
        </div>
    );
}