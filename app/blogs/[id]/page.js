import { notFound } from 'next/navigation';
import React from 'react'

export default function page({params}) {
    const {id} = params;
    if (Number(id) >= 4) notFound();
    return (
        <div>
            This is blog {id}
        </div>
    )
}
