import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Towers() {
  const bookTwo = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <h1>{bookTwo.title}</h1>
      <p>{bookTwo.description}</p>
      <ul>
        <li>
          {bookTwo.books[0].ordinal} {bookTwo.books[0].title}
        </li>
        <li>
          {bookTwo.books[1].ordinal} {bookTwo.books[1].title}
        </li>
        <br />
        <Image
          src={bookTwo.cover}
          alt={bookTwo.title}
          width={140}
          height={230}
        />{" "}
        <br />
        <br />
        <Link href="../volumes/the-return-of-the-king">Next Volume</Link>
      </ul>
    </div>
  );
}
