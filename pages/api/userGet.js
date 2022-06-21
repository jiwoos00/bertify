
import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export default async function handler(req, res) {
    console.log(req.method);
    if(req.method==="POST"){
        const user_addr=req.body.addr

        const user = await prisma.User.findUnique({
            where: {
                addr : user_addr,
            },
        })
        res.json({
            ok : true,
            user,
        });
    }

}