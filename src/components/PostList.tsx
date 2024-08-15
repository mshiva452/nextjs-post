import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const PostList = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const postData = await response.json();
    return (
        postData?.map((post: any) => {
            return (
                <div key={post.id} className='rounded border-2 p-2 w-[228px] hover:border-zinc-400 hover:border-2 ease-in duration-300'>
                    <Link href={`/posts/${post.id}`} className='flex justify-around flex-col items-center h-full'>
                        <Image src={post.image} alt={post.title} width="200" height="200" className='h-[150px] w-[auto]' />
                        {post.title}
                    </Link>
                </div>
            )
        })
    )
}

export default PostList