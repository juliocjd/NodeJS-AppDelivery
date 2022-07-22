import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export function CreateDeliveryController() {
  async function handle (request: Request, response: Response) {
    const { item_name } = request.body;
    const id_client = request.id_client;
    const createDeliveryUseCase = CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name
    });

    return response.json(delivery);
  }

  return {
    handle
  }
}