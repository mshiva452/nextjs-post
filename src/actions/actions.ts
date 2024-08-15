"use server";

import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  try {
    const data = {
      slug: (formData.get("title") as string).split(" ").join("-").toLowerCase() as string,
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: {
        connect: {
          email: "ss@gmail.com",
        },
      },
    };
    const response = await prisma.post.create({ data });
    console.log(response);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log("There is a unique constraint violation, a new user cannot be created with the email");
      }
    }
  }

  revalidatePath("/posts");
};

export const updatePost = async (formData: FormData, id: string) => {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("data") as string,
      slug: (formData.get("slug") as string).split(" ").join("-").toLowerCase(),
      content: formData.get("content") as string,
    },
  });
};

export const deletePost = async () => {};
