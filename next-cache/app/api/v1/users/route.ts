import prisma from "@/lib/prisma"
import { cacheLife } from "next/cache"

export const GET = async () => {
    const users = await getUsers()
    return Response.json(users)
}

export const getUsers = async () => {
    "use cache";
    cacheLife("minutes");
    return await prisma.user.findMany()
}