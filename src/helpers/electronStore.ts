/* eslint-disable import/prefer-default-export */
import Store from "electron-store";

type StoreType = {
  adminMode: boolean;
  advancedAdminMode: boolean;
  keyIssueMode: boolean;
  keySyncMode: boolean;
  recentNetworkOfflineStatus: string | null;
  storedPaymentData?: string | null;
  recentStartPayTime?: string | null;
  currentPaymentId: string | null;
  accessToken?: string;
  refreshToken?: string;
  accommodationId?: string;
  kioskId?: string;
  identityCamId?: string;
  identitySpareCamId?: string;
  idAuthenticatorVideoId?: string;
};

const electronStore = new Store<StoreType>({
  defaults: {
    adminMode: false,
    advancedAdminMode: false,
    keyIssueMode: false,
    keySyncMode: false,
    recentNetworkOfflineStatus: null,
    storedPaymentData: null,
    recentStartPayTime: null,
    currentPaymentId: null,
  },
});

export { electronStore };
