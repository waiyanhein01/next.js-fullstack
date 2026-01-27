"use server";
export const createPostAction = async (data: FormData) => {
    const title = data.get("title") as string;
    const content = data.get("content") as string;
    const published = data.get("published") === "on";

    console.log(title, content, published);
}