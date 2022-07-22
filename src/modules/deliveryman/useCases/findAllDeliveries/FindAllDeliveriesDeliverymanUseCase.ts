import { prisma } from "../../../../database/prismaClient"

export function FindAllDeliveriesDeliverymanUseCase() {
  async function execute (id_deliveryman: string) {
    const deliveries = await prisma.deliveryman.findMany({
      select: {
        id: true,
        username: true,
        deliveries: true
      },
      where: {
        id: id_deliveryman
      }
    })

    return deliveries;
  }

  return {
    execute
  }
}