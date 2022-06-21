import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export default async function handler(req, res) {
    
    const addr=req.query.addr
    const user = await prisma.user.findUnique({
        where: {
            addr: addr
        }
  
      });
      res.json({
        ok: true,
        ok2:user.name,
        ok3:user.auth
    });
}