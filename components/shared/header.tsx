import { cn } from '@/lib/utils';
import Link from 'next/link';
import * as React from 'react';
import Container from './container';

export interface IHeaderProps { }

export function Header(props: IHeaderProps) {
      return (
            <header className={cn('h-16 flex items-center w-full bg-blue shadow-md')}>
                  <Container>
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
