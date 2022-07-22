import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export function FindAllDeliveriesController() {
  async function handle (request: Request, response: Response) {
    const { id_client } = request;
    const findAllDeliveriesUseCase = FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCase.execute(id_client);

    return response.json(deliveries);


  }
  return {
    handle
  }
}