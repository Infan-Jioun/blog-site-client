
import { blogSerivice } from '@/services/blog.service';
import { BlogPost } from '@/types';
import Image from 'next/image';
import React from 'react';

export const dynamicParams = false;

export async function generateStaticParams() {
    const response = await blogSerivice.getBlogPosts();
    return response?.data?.data?.map((blog: BlogPost) => ({ id: blog.id })).slice(0, 3)
}
export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    // 1. Await the params to get the ID
    const { id } = await params;

    const response = await blogSerivice.getBlogById(id);

    // 3. Handle the case where the post doesn't exist
    if (!response || response.error || !response.data) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <p className="text-xl font-medium text-red-500">Post not found!</p>
            </div>
        );
    }

    const post = response.data;

    return (
        <article className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Header Section */}
            <header className="space-y-4">
                {post.isFeatured && (
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-full">
                        Featured Post
                    </span>
                )}
                <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center  text-sm space-x-6 border-b pb-4">
                    <span className="flex items-center gap-1">👁️ {post.views.toLocaleString()} views</span>
                    <span className="flex items-center gap-1">💬 {post._count.comments} comments</span>
                </div>
            </header>

            {/* Thumbnail */}
            {post.thumbnail && (
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={post.thumbnail}
                        alt={post.title}
                        priority
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}

            {/* Content Section */}
            {/* Using 'whitespace-pre-wrap' preserves line breaks from your DB content */}
            <div className="prose lg:prose-xl max-w-none  leading-relaxed whitespace-pre-wrap">
                {post.content}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-8 border-t">
                    {post.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200  rounded-lg text-sm font-medium transition-colors cursor-default"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </article>
    );
}