
import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export default async function handler(req, res) {
    
    const user_addr=req.body.addr
    await prisma.User.create({
        data: {
            addr: user_addr
        }
    });
    res.json({
        ok: true
    });
}