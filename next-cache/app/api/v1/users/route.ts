import prisma from "@/lib/prisma"
import { cacheLife } from "next/cache"
import { NextRequest } from "next/server"

// pagination with GET method(weak Security)
export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get("page")
    const limit = searchParams.get("limit")

    console.log("page", page, "limit", limit)

    try {
        const users = await getUsers()
        return Response.json(users)
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected Error"
        return new Response(message, { status: 500 })
    }
}

export const getUsers = async () => {
    "use cache";
    cacheLife("minutes");
    return await prisma.user.findMany()
}

// pagination with POST method(strong Security)
export const POST = async (request: NextRequest) => {
    // with json data in body
    // const { page, limit } = await request.json() 

    // with form data in body
    const formData = await request.formData()
    const page = formData.get("page")
    const limit = formData.get("limit")

    console.log("page", page, "limit", limit)
    try {
        const users = await getUsers()
        return Response.json(users)
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unexpected Error"
        return new Response(message, { status: 500 })
    }
}