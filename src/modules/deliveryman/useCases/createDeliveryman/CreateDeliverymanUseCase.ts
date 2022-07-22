import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export function  CreateDeliverymanUseCase() {
  async function execute({username, password}: ICreateDeliveryman) {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    });

    if (deliverymanExist) {
      throw new Error("Deliveryman already exists");
    }

    // Criptografar a senha
    const hashPassword = await hash(password, 10);

    // Salva o deliveryman
    const deliveryman = await prisma.deliveryman.create({
      data: {
        username, 
        password: hashPassword
      }
    });

    return deliveryman;
  }
  return {
    execute
  }
}