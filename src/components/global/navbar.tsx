import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  const user = await currentUser();
  return (
    <header className="fixed h-[60px] right-0 left-0 top-0 py-2 px-8 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-1">
        <Image
          src="/genmind-logo.svg"
          width={40}
          height={40}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-2xl  font-extrabold ">Genmind</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-8 list-none text-sm">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#product">Products</Link>
          </li>
          <li>
            <Link href="#pricing">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
