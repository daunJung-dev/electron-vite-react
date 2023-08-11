import client from "@/helpers/apollo";
import authHandler from "@/helpers/authHandler";

export class VenditApiManager {
  client: typeof client;

  constructor() {
    this.client = client;
  }

  async getAccommodationByKiosk() {
    return;
  }
}
