import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const bookOne = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <h1>{bookOne.title}</h1>
      <p>{bookOne.description}</p>
      <ul>
        <li>
          {bookOne.books[0].ordinal} {bookOne.books[0].title}
        </li>
        <li>
          {bookOne.books[1].ordinal} {bookOne.books[1].title}
        </li>
        <br />
        <Image
          src={bookOne.cover}
          alt={bookOne.title}
          width={140}
          height={230}
        />
        <br />
        <br />
        <Link href="../volumes/the-two-towers">Next Volume</Link>
      </ul>
    </div>
  );
}
