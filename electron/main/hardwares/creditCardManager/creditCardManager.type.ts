export type CardInboundResponseData = {
  cardNumber: string;
  approvalNo: string;
  approvalDate: string;
  approvalTime: string;
  approvalAmount: string;
};

export type CancelPaymentInput = {
  amount: number;
  approvalNo: string;
  approvalDate: string;
};

export type PaymentCallback = (status: boolean, data: CardInboundResponseData) => void;

// VAN 인터페이스
export interface VAN {
  pay(amount: number, callback: PaymentCallback): void;
  cancelPayment(
    cancelData: CancelPaymentInput,
    callback: PaymentCallback
  ): void;
}
