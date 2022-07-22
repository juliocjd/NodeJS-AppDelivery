import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export function UpdateEndDateController() {
  async function handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateUseCase = UpdateEndDateUseCase();
    const delivery = await updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman
    });

    return response.json(delivery)
  }

  return {
    handle
  }
}