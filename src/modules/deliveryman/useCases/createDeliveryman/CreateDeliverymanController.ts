import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export function CreateDeliverymanController() {
  async function handle (request: Request, response: Response) {
    const {username, password} = request.body;

    const createDeliverymanUseCase = CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);

  }
  return {
    handle
  }
}