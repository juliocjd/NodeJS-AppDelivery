import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClients";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = CreateClientController();
const createDeliverymanController = CreateDeliverymanController();
const createDeliveryController = CreateDeliveryController(); 

const updateDeliverymanController = UpdateDeliverymanController();

const authenticateDeliverymanController = AuthenticateDeliverymanController();
const authenticateClientController = AuthenticateClientController();

const findAllAvailableController = FindAllAvailableController();

const findAllDeliveriesClient = FindAllDeliveriesController();
const findAllDeliveriesDeliveryman = FindAllDeliveriesDeliverymanController();
const updateEndDateController = UpdateEndDateController();
 

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);

routes.get("/delivery/available", ensureAuthenticateDeliveryman,findAllAvailableController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient,  findAllDeliveriesClient.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.put("/delivery/updateEndDate", ensureAuthenticateDeliveryman, updateEndDateController.handle);

export { routes }