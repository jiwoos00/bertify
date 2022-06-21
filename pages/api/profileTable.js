
import { PrismaClient } from "@prisma/client"

const prisma=new PrismaClient()

export default async function handler(req, res) {
    const username = req.body.username;
    const useraddr = req.body.useraddr;
    console.log(username,useraddr)
    await prisma.user.update({
        where: {
            addr: useraddr
        },
        data: {
          name: username
        },
      });
      res.json({
        ok: true
    });

}