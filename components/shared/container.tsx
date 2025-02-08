import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
      children: ReactNode
      className?: string
}

export default function Container({ children, className }: Props) {
      return (
            <div className={cn("container mx-auto max-w-[1280px]", className)}>
                  {children}
            </div>
      )
}


