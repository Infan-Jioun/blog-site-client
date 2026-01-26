"use client"
import { getBlogs } from '@/actions/blog.actions';
import React, { useEffect, useState } from 'react'

export default function AboutPage() {
  const [data, setData] = useState();
  console.log(data);
  useEffect(() => {
    //* IIFE Function
    (async () => {
      const res = await getBlogs();
      setData(res?.data)
    })();
  }, [data])

  return (
    <div>This is AboutPage...</div>
  )
}
