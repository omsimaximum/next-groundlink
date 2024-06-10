import { NAVLINKS } from "@/constants/store";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-red-500 px-[150px] mx-auto" >
      <div className=" bg-red-200">
        <h1>Groundlink</h1>
        <ul>
          {NAVLINKS.map(item => (
            <li key={item.name}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
