import { prisma } from "../../../../database/prismaClient";

export function FindAllAvailableUseCase() {
  async function execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null
      }
    })
    return deliveries;
  }
  return {
    execute
  }
}