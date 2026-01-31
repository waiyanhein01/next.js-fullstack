import prisma from "@/lib/prisma";
import { cacheLife } from "next/cache";
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    try {
        const user = await getUser(+id)
        if (user === null) {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 })
        }
        return Response.json(user)
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected Error"
        return new Response(message, { status: 500 })
    }
}

export const getUser = async (id: number) => {
    "use cache";
    cacheLife("minutes");
    return await prisma.user.findUnique({ where: { id } })
}