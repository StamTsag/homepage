import { Button } from "../ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="h-[60vh] flex flex-col items-center justify-center mb-20 text-center"
    >
      <h1 className="xs:text-2xl font-black text-4xl tracking-tighter">
        Want to learn more?
      </h1>

      <h1 className="xs:text-sm xs:w-[75%] text-lg">Get in contact with me.</h1>

      <span className="mt-6" />

      <Link href="mailto:stamatiostsag@gmail.com">
        <Button className="xs:text-sm text-lg" size="lg" variant={"outline"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="xs:w-[26px] xs:h-[26px] mr-2"
          >
            <path
              fill="currentColor"
              d="M4.615 19q-.69 0-1.152-.462T3 17.385V6.615q0-.69.463-1.152T4.615 5h14.77q.69 0 1.152.463T21 6.615v10.77q0 .69-.462 1.152T19.385 19zM12 12.115l-8-5.23v10.5q0 .269.173.442t.442.173h14.77q.269 0 .442-.173t.173-.442v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.442.173H4z"
            />
          </svg>
          Email me
        </Button>
      </Link>
    </div>
  );
}
