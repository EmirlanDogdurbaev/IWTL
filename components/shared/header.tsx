import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Container } from ".";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import logo from "../../public/next.svg";

export interface IHeaderProps {
  className?: string;
}

export function Header({ className }: IHeaderProps) {
  const img = logo;
  return (
    <header
      className={cn(
        "h-16 flex items-center w-full bg-blue shadow-md",
        className,
      )}
    >
      <Container className={cn("flex items-center justify-between py-8")}>
        <ul className={cn("flex space-x-4 w-full items-center")}>
          <li>
            <Link href="/">
              <div className="flex items-center gap-4">
                <Image
                  src={img}
                  alt="Logo"
                  width={35}
                  height={35}
                />
                <div>
                  <h1 className="text-2xl uppercase font-black">IWTL</h1>
                </div>
              </div>
            </Link>
          </li>
          <li className="hidden md:block group py-2 px-2 cursor-pointer">
            <Link href="/" className="text-dark-500 cursor-pointer ">
              Home
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/about" className="text-dark-500 cursor-pointer ">
              About
            </Link>
          </li>
        </ul>
        <nav className="flex justify-between items-center cursor-pointer">
          <ul className="flex space-x-4 w-full items-center">
            <li>
              <Input placeholder="Поиск" width={400} />
            </li>
            <li>
              <Button>Sign Up</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
