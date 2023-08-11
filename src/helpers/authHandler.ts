/* eslint-disable no-underscore-dangle */
import jwt, { JwtPayload } from "jsonwebtoken";
import ElectronStore from "electron-store";
import { electronStore } from "./electronStore";

class AuthHandler {
  selectedStorage: typeof electronStore;

  _user?: JwtPayload | null = null;

  __sessionCache__signedIn: any;

  constructor() {
    const savedAccessToken = electronStore.get("accessToken");
    this.selectedStorage = electronStore;

    if (savedAccessToken)
      this.user = jwt.decode(savedAccessToken) as JwtPayload;
  }

  get accessToken() {
    if (!this.selectedStorage) return null;
    return this.selectedStorage.get("accessToken");
  }

  get user() {
    return this._user;
  }

  set user(user: JwtPayload | null | undefined) {
    this._user = user;
    // if (user) {
    //   analytics.identify(user.id, {
    //     email: user.email,
    //     username: user.identity,
    //     name: user.name,
    //     nickname: user.nickname,
    //     accessLevel: user.accessLevel,
    //   });
    // }
  }

  signIn = (accessToken: string) => {
    this.__sessionCache__signedIn = true;
    this.user = jwt.decode(accessToken) as JwtPayload;
    this.selectedStorage = electronStore;
    this.selectedStorage.set("accessToken", accessToken);
  };

  signOut = () => {
    this.selectedStorage.reset("accessToken");
    this.selectedStorage.reset("refreshToken");
    this.selectedStorage.reset("accommodationId");
    this.selectedStorage.reset("kioskId");
  };
}

const authHandler = new AuthHandler();

export default authHandler;
