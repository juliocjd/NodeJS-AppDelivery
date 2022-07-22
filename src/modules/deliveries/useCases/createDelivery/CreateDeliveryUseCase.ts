import { prisma } from "../../../../database/prismaClient";

interface ICreaeDelivery {
  id_client: string;
  item_name: string;
}

export function CreateDeliveryUseCase() {
  async function execute({id_client, item_name}: ICreaeDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name,
      }
    });

    return delivery;
  }

  return {
    execute
  }
}