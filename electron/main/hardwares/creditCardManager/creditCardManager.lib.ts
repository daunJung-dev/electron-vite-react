import { CancelPaymentInput, PaymentCallback, VAN } from "./creditCardManager.type";

class CreditCardManager {
  van: VAN | undefined;

  constructor() {
  }

  init(van: VAN) {
    this.van = van;
  }

  startPay(amount: number, callback: PaymentCallback) {
    this.van?.pay(amount, callback);
  }

  cancelPay(cancelData: CancelPaymentInput, callback: PaymentCallback) {
    this.van?.cancelPayment(cancelData, callback);
  }
}

export default CreditCardManager;
