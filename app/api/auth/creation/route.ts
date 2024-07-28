import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import {unstable_noStore as noStore} from "next/cache";


export async function GET(){
   noStore();
   const {getUser} =getKindeServerSession(); 
   const user= await getUser();

   if (!user || user==null || !user.id) {
    throw new Error("Something went wrong, i am sorry.....")
   }

   let dbUser = await prisma.user.findUnique({
   where :{
    id: user.id,
   },
 });
if(!dbUser){
    dbUser=await prisma.user.create({
       data : {
        email: user.email ?? "", 
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        id: user.id,
        profileimage: user.picture,
       }
    });
}

return NextResponse.redirect("http://localhost:3000");
}