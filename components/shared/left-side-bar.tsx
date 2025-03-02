import { cn } from '@/lib/utils';
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Link from 'next/link';

type IProps = {
      className?: string;
}

export const LeftSideBar: React.FC<IProps> = ({ className }) => {
      const links = [
            { title: "Javascript", links: ["Основы", "Замыкания", "Асинхронность"] },
            { title: "HTML & CSS", links: ["Flexbox", "Grid", "Анимации"] },
            { title: "React", links: ["Компоненты", "Hooks", "Состояние"] },
            { title: "TypeScript", links: ["Типы", "Интерфейсы", "Generics"] },
            { title: "Общие вопросы", links: ["Алгоритмы", "Структуры данных"] },
      ]

      const list = links.map((item, index) => {
            return (
                  <AccordionItem key={index} value={item.title} className={cn("pr-4", className)}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                              <ul className="space-y-1">
                                    {item.links.map((link, i) => (
                                          <li key={i} className={cn("pl-4 py-1")}>
                                                <Link href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-black transition">
                                                      {link}
                                                </Link>
                                          </li>
                                    ))}
                              </ul>
                        </AccordionContent>
                  </AccordionItem>
            )
      })
      return (
            <div className="grid grid-cols-12 gap-4">
                  <aside className="col-span-4 w-[250px] h-full border-r border-gray-200 py-5">
                        <h2 className="text-lg font-semibold capitalize">команда iwtl <br /> представляет</h2>
                        <p className="text-gray-500 text-sm mb-4">Гайд по подготовке</p>
                        <hr className="border-gray-300 mb-4" />
                        <h3 className="text-md font-bold mb-2">Вопросы</h3>
                        <Accordion type="single" collapsible>
                              {list}
                        </Accordion>
                  </aside>
            </div>
      )
}