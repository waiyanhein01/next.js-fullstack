"use server";
import { z } from "zod"
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath, updateTag, revalidateTag } from "next/cache";

export interface State {
    errors?: {
        title?: string[]
        content?: string[]
        published?: string[]
    }
    message?: string | null;
}

const FormSchema = z.object({
    title: z.string().trim().min(5, "Title must be at least 5 characters"),
    content: z.string().trim().min(10, "Content must be at least 10 characters"),
    published: z.string().nullable().transform((value) => value === "on"),
})

export const createPostAction = async (authorId: number, prevState: State, data: FormData) => {
    const ValidatedFields = FormSchema.safeParse(
        {
            title: data.get("title"),
            content: data.get("content"),
            published: data.get("published"),

        },
    )

    if (!ValidatedFields.success) {
        const fatten = z.flattenError(ValidatedFields.error)
        return { errors: fatten.fieldErrors, message: 'Failed to create a new post!' };
    }

    const { title, content, published } = ValidatedFields.data;

    try {
        await prisma.post.create({
            data: {
                title,
                content,
                published,
                authorId,
            }
        })
    } catch (error) {
        return {
            message: "Failed to create a new post!",
        }
    }

    // revalidatePath("/posts")

    // revalidateTag("posts", "max")
    updateTag("posts")

    redirect("/posts")
}

// revalidatePath - revalidate a specific page or layout

// revalidateTag - revalidate data in server action or route handler
// updateTag - revalidate data in server action only

// if u want to use revalidateTag and updateTag, you need to use with cacheTags()
