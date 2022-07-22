import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";

export function FindAllDeliveriesDeliverymanController() {
  async function handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliverymanUseCase = FindAllDeliveriesDeliverymanUseCase()
    const deliveries = await findAllDeliverymanUseCase.execute(id_deliveryman);

    return response.json(deliveries);
  }

  return {
    handle
  }
}