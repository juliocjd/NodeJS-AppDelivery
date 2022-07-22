import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticateClient {
  username: string;
  password: string;
}

export function AuthenticateClientUseCase() {
  async function execute({username, password}: IAuthenticateClient) {
    // Receber username e password

    // Verificar se o username está cadastrado
    const client = await prisma.clients.findFirst({
      where: {
        username: username
      }
    })

    if(!client) {
      throw new Error ("Username or password incorrect");
    }

    // Verificar se o password corresponde ao username
    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error ("Username or password incorrect");
    }

    // Gerar token
    const token = sign({username}, "019acc25a4e242bb55ad489832ada12d", {
      subject: client.id,
      expiresIn: "1d"
    })

    return token;
    
  }
  return { 
    execute 
  }
}