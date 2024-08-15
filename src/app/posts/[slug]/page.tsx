import React from 'react';
import prisma from '@/lib/db';

const Post = async ({ params }: { params: { slug: string } }) => {
    /* const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const data = await response.json();
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.category}-{data.rating.rate}({data.rating.count})</p>
            <Image src={data.image} alt={data.title} width={200} height={200} />
            <div>{data.description}</div>
        </div>
    ) */
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug
        }
    })
    return (
        <div>
            <h2>{post?.title}</h2>
            <div>{post?.content}</div>
        </div>
    )
}

export default Post