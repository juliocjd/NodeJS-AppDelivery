import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export function AuthenticateDeliverymanController() {
  async function handle (request: Request, response: Response) {
    const {username, password} = request.body;

    const authenticateDeliverymanUseCase = AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username, 
      password
    })

    return response.json(result);
  }
  return {
    handle
  }
}