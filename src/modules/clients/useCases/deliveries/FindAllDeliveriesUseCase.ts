import { prisma } from "../../../../database/prismaClient"

export function FindAllDeliveriesUseCase() {
  async function execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      select: {
        id: true,
        username: true,
        deliveries: true
      },
      where: {
        id: id_client
      },
      
      
    });

    return deliveries;
  }

  return {
    execute
  }
}