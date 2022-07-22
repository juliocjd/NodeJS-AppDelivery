import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndDate {
  id_delivery: string;
  id_deliveryman: string;
}

export function UpdateEndDateUseCase() {
  async function execute ({id_delivery, id_deliveryman}: IUpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date()
      }
    })
    return result
  }
  return {
    execute
  }
}