import React, { Children } from 'react'
import { Button } from '../../components/ui/button'
import Link from 'next/link'

export default function AnalyticsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <Button className='border-2 rounded-3xl ' asChild><Link href={"/dashboard/analytics/weekly"} >Weekly</Link></Button>
                </div>
                <div>
                    <Button className='border-2 rounded-3xl' asChild><Link href={"/dashboard/analytics/monthly"} >Monthly</Link></Button>
                </div>
            </div>
            <div className='text-center'>
                {children}
            </div>
        </div>
    )
}
