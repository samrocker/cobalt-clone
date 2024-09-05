import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface ExperienceCardProps {
  imageUrl: string;
  className?: string ;
  title: string;
  description: string;
}

const ExperienceCard = ({ imageUrl, className, title, description }: ExperienceCardProps) => {
  return (
    <div className={cn('w-full max-w-[384px] bg-[#111113] flex-between flex-col rounded-3xl pb-10 border-2 border-white/10 gap-10', className)}>
        <div className='w-full flex-center'>
            <Image src={imageUrl} alt='Experience' width={1920} height={1080} className='w-full rounded-3xl' />
        </div>
        <div className='px-5 flex-[1] w-full flex flex-col items-start justify-center gap-3'>
            <h1 className='text-lg text-white font-normal'>{title}</h1>
            <p className={cn('text-sm text-[#A1A1AA] font-normal max-w-[281px]', className)}>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceCard