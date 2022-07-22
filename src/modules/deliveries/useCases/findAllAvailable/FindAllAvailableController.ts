import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export function FindAllAvailableController() {
  async function handle(request: Request, response: Response) {
    const findAllAvailableUseCase = FindAllAvailableUseCase();

    const deliveries = await findAllAvailableUseCase.execute();

    return response.json(deliveries)
  }

  return { 
    handle
  }
}