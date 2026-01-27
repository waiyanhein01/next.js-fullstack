"use server";

export interface State {
    message?: string | null;
}

export const createPostAction = async (prevState: State, data: FormData) => {
    const title = data.get("title") as string;
    const content = data.get("content") as string;
    const published = data.get("published") === "on";

    console.log(title, content, published);
    return { message: 'Message from server action!' };
}