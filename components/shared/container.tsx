import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className={cn("container mx-auto max-w-screen-xl px-4")}>
      {children}
    </div>
  )
}
