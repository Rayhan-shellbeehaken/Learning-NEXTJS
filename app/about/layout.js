import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/about/mission">Mission</Link></li>
                <li><Link href="/about/vission">Vission</Link></li>
            </ul>
        </nav>
        <div>{children}</div>
    </div>
    
  )
}
