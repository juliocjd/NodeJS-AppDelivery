import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;
  // essa informação vem do token, que fica 

  if(!authHeader) {
    return response.status(401).json({
      message: "Token missing"
    })
  }
  /* 
  Usamos o Insomnia; segundo campo, ao invés de "Auth", selecionamos "Bearer"
  Quando o token vem pelo Bearer ele vem no formato "Bearer 3218938293891389219" (a sequência de números é o token)
  Então, é necessário fazer um split para pegar apenas o token; para tanto, criamos um array.
  Como usaremos o split com " " (espaço) o array teria dois valores; entretanto, o primeiro texto ("Bearer") não tem
  nenhuma importânica para nós. Assim, na declarão da constante usamos [, token] pq dessa forma ele ignora 
  o item 0 do array
  [0]: "Bearer"
  [1]: "3218938293891389219"
  */
  const [, token] = authHeader.split(" ")

  try {
    /* 
    os parâmetros de verify é o token que quero verificar e o segundo parâmetro é a chave secreta 
    que está em account/authenticateCliente/AuthenticateClientUseCase
    */
    const { sub } = verify(token, "019acc25a4e242bb55ad489832ada12d") as IPayload

    request.id_client = sub;
    
    return next();

  } catch (err) {
    return response.status(401).json({
      message: "Invalid Token!"
    })
  }

}