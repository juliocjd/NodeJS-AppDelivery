import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export function UpdateDeliverymanController() {
  async function handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = UpdateDeliverymanUseCase();
    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery
    })

    return response.json(delivery)

  }
  return {
    handle
  }
}