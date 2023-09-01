import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Return() {
  const bookThree = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <div>
      <h1>{bookThree.title}</h1>
      <p>{bookThree.description}</p>
      <ul>
        <li>
          {bookThree.books[0].ordinal} {bookThree.books[0].title}
        </li>
        <li>
          {bookThree.books[1].ordinal} {bookThree.books[1].title}
        </li>
        <br />
        <Image
          src={bookThree.cover}
          alt={bookThree.title}
          width={140}
          height={230}
        />
        <br />
        <br />
      </ul>
    </div>
  );
}
