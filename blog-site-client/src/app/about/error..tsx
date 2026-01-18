"user client";
import React, { useEffect } from 'react'

export default function AboutErrorPage({
    error, reset
}: {
    error: Error & {
        digest: string
    },
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div>
            <h1>Someting went wrong Please try again later.</h1>
            <button onClick={() => reset()}>Retry</button>
        </div>
    )
}
