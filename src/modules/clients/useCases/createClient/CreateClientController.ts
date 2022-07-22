import { Request, Response } from "express"
import { CreateClientUseCase } from "./CreateClientUseCase"

export function CreateClientController() {
  async function handle (request: Request, response: Response) {
    const { username, password } = request.body
    
    const createClientUseCase = CreateClientUseCase();
    
    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
  return {
    handle
  }
}