import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export function AuthenticateClientController() {
  async function handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientUseCase = AuthenticateClientUseCase();
    const result = await authenticateClientUseCase.execute ({
      username, 
      password
    });

    return response.json(result);
  }
  return {
    handle
  }
}