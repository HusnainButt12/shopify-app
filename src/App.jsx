import { BsBagDashFill } from "react-icons/bs";
import Card from "./Components/Card";
import Company from "./Components/Company";
import Usability from "./Usability";
function App() {
  return (
    <>
      <div className="h-full w-full bg-[rgb(0,128,96)]">
        <div className="h-24 w-full flex flex-row justify-center items-center font-bold text-3xl text-white gap-1">
          <BsBagDashFill /> <text>shopify</text>
        </div>
        <div className="h-36 w-full flex flex-row justify-center items-center">
          <div className=" h-44 w-[60%] flex flex-col justify-center items-center text-center font-bold text-6xl text-white p-2">
            <text>Build your own ecommerce website in 3 easy steps</text>
          </div>
        </div>
        <div className="h-24 w-full flex flex-row justify-center items-center text-3xl text-white gap-1">
          <text>Shopify is trusted by millions of businesses worldwide</text>
        </div>
        <div className="h-24 w-full flex flex-row justify-center items-center text-white gap-4">
          <input
            placeholder="Enter Your email address"
            className="p-4 px-8 rounded-md text-black"
            type="text"
          />
          <button className="bg-black rounded-md p-4 px-4 hover:bg-[rgb(12,43,35)]">
            Start free trial
          </button>
        </div>
        <div className="h-10 w-full flex flex-row justify-center items-center text-white">
          <text>
            By entering your email, you agree to receive marketing emails from
            Shopify.
          </text>
        </div>
        <div className="h-36 w-full flex flex-row justify-center items-center">
          <div className="h-44 w-[30%] text-white bg-[rgb(0,128,96)] rounded-b-[200%] mt-96"></div>
          <div className="h-96 w-[80%] text-white bg-[rgb(0,128,96)] mt-60">
            <img
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/default@tablet-83f017c08356e1b69d531716b99faa0ff7ff6cee61097d7f5169a55032d79e73.png"
              alt="img"
              className="h-full w-full"
            />
          </div>
          <div className="h-44 w-[30%] text-white bg-[rgb(0,128,96)] rounded-b-[200%] mt-96"></div>
        </div>
        <div className="h-24 w-full flex flex-row justify-center items-center text-white"></div>
      </div>
      <div className="h-72 w-full mt-52 flex flex-row justify-center items-center gap-6"> 
        <Card
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAA2ADgDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAUGBAMC/8QAMxAAAQQBAgEICQUBAAAAAAAAAQACAwQRBRIhFBUxQVFUYXETNnOBkZKTsdEGIjKh0sH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACIRAAIBAwIHAAAAAAAAAAAAAAABEQIDIXGREhMxMkFCUf/aAAwDAQACEQMRAD8A2aIsvqPJptcnZfnkjhYwbNvHjgcOg9pQ4rr4FJqEWLqw6Y6awLNiVkbXYiLRxcMnp4eS6uTaD32f5T/lWDJXp8Lc1SLK8m0Hvs/yn/K+GClBqVI6bYlk3SgSbuHDI8B4pBedpua1ERQ3ChRwxT/qe22aNkjREDh7QRnDVdUWt603PYj7MQyueupR5vp90g+m38JzfT7pB9Nv4XSoej6S+CTld3eyw1xwNwIII6T8T1oV4aSRT5vp90g+m38Lnn0iCSxWlhayD0L9xDIwN/EH/i+KmnUnXTfrzukfuc44eC3Jznq8V4WNHfHqcFqpvdumL5suH7RkHh/apy+naW0RFDYKLW9abnsR9mK0o9vTbvOMlujPHG6Roa7ePLwPYEM7k4a+lhTtIgtMpSR6gXl7nn+b9x24HXnzXrp8d6MScvmjlJxs2DGO3qC4NGnvRyclt153ZcT6Z5JA4dHHy7etCOpSmyZQpkMsyMtmtNWftLicNI8feCu/TNcmmsNrTRiUk4EkYx7yOxc1uhLNrslZm5sUzhI8jox1n45Wkhgirs2Qxtjb2NGFTK3TVOMQeiIih6giIgCIiAIiIAiIgP/Z"
          tittle="① Choose & customise a theme"
          text="Customize the design of your shop from over thousands of themes. No design experience or programming skills required."
        />
        <Card
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAzADgDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAUCAwQBBv/EADQQAAEEAgACBQoGAwAAAAAAAAEAAgMEBRESURUhMWHBBhMUIjVBVHFz0jI2VZKx0ZGTov/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEAAgIABAcAAAAAAAAAAAAAAAECEQMSEyExMkFRcZGh/9oADAMBAAIRAxEAPwD7NEUrM27MD6sNRzWPneW8RG9dg8UMykoq2VUUX0bPfGwftH2rLGWrnSU9K7IyRzGcXE0a5dw5oZ1N6aZYRarUphqTSt0XMjc4b5gLTi7L7ePinl1xu3vXcSPBDdq6OtERChRc37RxX1vFqtKbmYqMkLDfkMYBPC5vb3+4oc8RXEpKLV/NNz6I/hin+jYH42f9p+1U8LDjY3yOozOlfrTi/tA/wFTnmc2lt7NWQxloQ2ZjkpiwNc7zfXojROu3wXPi8ZZsUIpY8jNCx29MbvQ6z3qnYy2NIkhlsAggtcA1x+fWAtdXKYqtCyCGxpjeoba7+kI44ea7+lQDQAJ3r3ojSHNDmkEEbBHvRQ9J6omdaH38Y1wDmmUggjYI21W1HzsU5mpWIIXTeYeXFre3tB8EOeLyHf0fT+Eg/wBbf6UylGyLymtsjY1jBCNNaNAfhWXTNz9In/6+1eYttifL2Ls1Z8DXxhoa/n1fLkqc24yay9zX5OVa89CR00EUjhKRt7ATrQXRm6daLFTvjrwseOHTmsAI9YLix093FwvrnGzS+uXcTd67AOR5LK/eu3qj63Rc7OPXrdZ1og8u5DCcdOuvgs472dV+iz+AizpxuipwRv6nMja0/MBFD1R4I3IiIUIiIAiIgCIiA//Z"
          tittle="② Add products"
          text="Add your products to the shop. List your eye-catching products with the best photos, price and descriptions."
        />
        <Card
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAoAEcDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIFBgME/8QAMhAAAgIBAgEGDgMAAAAAAAAAAQIAAwQFERIGITFRktETFBYiNUFTYXFzkaGx8EJU0v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAHhEAAwEAAgIDAAAAAAAAAAAAAAECERMhMVEDYZH/2gAMAwEAAhEDEQA/ANnM9h36xqSPdj5NVaByvCyjm6D1HrmhlLyX9HWfOP4EplfdJaPFte/u0dkf5k6sfWxahtzKGQEcQ4ekdmW882fRZkY5SvJbGIO5der6iQOM71/pDMwBl5GLabCvi78W22/F0d053U512qVkP4LEq2bzTzufWCJm78rLqsZqM7IuqRgvhCxAJ+G56jNRqGJdlqgpy3xuEkkp/L7iU4mle4j2RI1qUrVWYuQACx9fvkpD0CIiAJS8l/R1nzj+BLqZbSNVTBwWpWt7b3sJVFHuHdKY3Sm039mmuuroray1wiL0kyjsuyddsNWOGpwwfPc9LfvVOiablajaLtUfhrHOtCno+P7vLmutKkCVqFVRsABzCC4789I8GTo9N2BXiVMakRw24G5J2I5/rOHKZmTT6yrFT4YdB9xlxKXlR6Or+cPwYJ8kpQ8LqIiQ2EREASnfk3hO5YNcu532VhsPtEQc1M15RHyZw/a39pe6PJnD9rf2l7oiNOeKPQ8mcP2t/aXukq+TeEjhi1zbHfZmGx+0RA4o9FxERBoIiIB//9k="
          tittle="③ Start selling"
          text="Set up payments and shipping, and start selling."
        />
      </div>
      <Company />
      <Usability />
    </>
  );
}

export default App;
