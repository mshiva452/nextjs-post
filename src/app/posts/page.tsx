import React, { Suspense } from 'react'
import Link from 'next/link';
import PostList from '@/components/PostList';
import prisma from '@/lib/db';

const Posts = async () => {
    const user = await prisma.user.findUnique({
        where: {
            email: 'ss@gmail.com',
        },
        include: {
            posts: true
        }
    })
    /*    const posts = await prisma.post.findMany({
           where: {
               authorId: user?.id
               //title: {
               // contains: "posts"
               //}
           },
           orderBy: {
               createdAt: "desc"
           },
           select: {
               id: true,
               title: true,
               slug: true
           }
       }); */
    const postsCount = await prisma.post.count()
    console.log(user?.posts)
    return (
        <main className="text-center pt-10 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">All Products</h1>
            <div className='flex gap-5 flex-wrap w-full'>
                <Suspense fallback="Loading...">
                    <PostList />
                </Suspense>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts ({postsCount})    </h1>
            <div className='flex gap-5 flex-wrap w-full'>
                {
                    user?.posts?.map(post => {
                        return (
                            <div key={post.id} className='rounded border-2 p-2 w-[228px] hover:border-zinc-400 hover:border-2 ease-in duration-300'>
                                <Link href={`/posts/${post.slug}`} className='flex justify-around flex-col items-center h-full'>
                                    {post.title}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Posts