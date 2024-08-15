import { createPost } from "@/actions/actions"
import prisma from "@/lib/db"

const CreatePost = async () => {
    const postsCount = await prisma.post.count()
    return (
        <main className="flex flex-col items-center pt-10">
            <h1 className="text-4xl md:text-5xl">Create Post- {postsCount}</h1>
            <form className="my-10 flex flex-col" name="newpost" action={createPost}>
                <input
                    type="text"
                    name="title"
                    className="border rounded p-3 h-full"
                    placeholder="Enter post title"
                    required
                />
                <textarea name="content" id="content" cols={30} rows={5} className="border my-5 p-5" placeholder="Content"></textarea>
                <button type="submit" className="h-full px-5 py-2 rounded bg-blue-500 text-white">Submit</button>
            </form>
        </main>
    )
}

export default CreatePost