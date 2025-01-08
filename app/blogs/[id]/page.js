import Button from '@/app/components/Button';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    if (Number(id) >= 4) notFound();
    return (
        <div>
            This is blog {id}
            <Button/>
        </div>
    )
}
