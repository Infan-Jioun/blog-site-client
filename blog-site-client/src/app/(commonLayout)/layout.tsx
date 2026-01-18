import React from 'react'
import { Navbar } from '../(dashboardLayout)/components/Navbar'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (

        <div>
            <Navbar />
            {children}
        </ div>
    )
}
