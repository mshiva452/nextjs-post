import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "test post content",
    author: {
      connectOrCreate: {
        where: {
          email: "test@prisma.com",
        },
        create: {
          email: "test@prisma.com",
          hashedPassword: "dshadadkadlasd",
        },
      },
    },
  },
];
async function main() {
  console.log("Starting prisma seeding...");
  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log("New post created with id", newPost.id);
  }
  console.log("seeding finished...");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
