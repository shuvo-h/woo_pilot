
import { ABCOM } from "@/practice/genOneV1";
import { NextResponse } from "next/server";
/*
    - we will have info inside an array of object
    - organize the info and write them into a project structure
    -

*/

export const GET = async(req:Request) =>{
    const result = ABCOM()

    return new NextResponse(JSON.stringify({ok:123}),{status:200})
}
