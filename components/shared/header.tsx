import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { Container } from '.';
import Image from 'next/image';

export interface IHeaderProps {
      className?: string
}

export function Header(props: IHeaderProps) {
      if (!props) {
            throw new Error('Header component received null or undefined props');
      }
      return (
            <header className={cn('h-16 flex items-center w-full bg-blue shadow-md', props.className)}>
                  <Container className="flex items-center justify-between py-8">

                        <Link href="/">
                              <div className="flex items-center gap-4">
                                    <img src="https://marketplace.canva.com/EAF1kJubgwA/1/0/1600w/canva-blue-and-white-modern-technology-company-logo-fAFQqyuW2Co.jpg" alt="Logo"
                                          width={35} height={35} />
                                    <div>
                                          <h1 className="text-2xl uppercase font-black">IWTL</h1>
                                          <p className="text-sm text-gray-400 leading-3">лучше уже некуда</p>
                                    </div>
                              </div>
                        </Link>
                        <nav className="flex justify-between items-center cursor-pointer ">
                              <ul className="flex space-x-4  w-full">
                                    <li className={cn("group py-2 px-2 cursor-pointer ")}>
                                          <Link href="/" className="text-red-500 cursor-pointer group-hover:text-blue-700 ">
                                                Home

                                          </Link>
                                    </li>
                              </ul>
                        </nav>


                  </Container>
            </header>
      );
}
