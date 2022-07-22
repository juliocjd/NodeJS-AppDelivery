import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export function AuthenticateDeliverymanUseCase() {
  async function execute({username, password}: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (!deliveryman) {
      throw new Error ("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);    

    if (!passwordMatch) {
      throw new Error ("Username or password invalid!");
    }

    const token = sign( {username}, "019acc25a4e242bb77ad489832ada12d", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token;
  }

  return {
    execute
  }
}