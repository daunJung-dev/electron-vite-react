import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Accommodation = {
  __typename?: 'Accommodation';
  activeReservationCount: Scalars['Int']['output'];
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  cardData?: Maybe<Scalars['String']['output']>;
  cardSalesToday: Scalars['Int']['output'];
  cashSalesToday: Scalars['Int']['output'];
  cleanCardData?: Maybe<Scalars['String']['output']>;
  cmsInventoryCountMode?: Maybe<Scalars['Boolean']['output']>;
  conciergePaymentConfig?: Maybe<Scalars['String']['output']>;
  conciergeServiceSettings: AccommodationConciergeSetting;
  contact?: Maybe<Scalars['String']['output']>;
  csContact?: Maybe<Scalars['String']['output']>;
  defaultCheckIn?: Maybe<Scalars['String']['output']>;
  defaultCheckOut?: Maybe<Scalars['String']['output']>;
  defaultInitTemperature?: Maybe<Scalars['Int']['output']>;
  employees: Array<Employee>;
  encryptionKey?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  introductionArticle?: Maybe<AccommodationArticle>;
  inventoryMode?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isBookingEngineEnabled: Scalars['Boolean']['output'];
  isHome?: Maybe<Scalars['Boolean']['output']>;
  kioskArticle?: Maybe<AccommodationArticle>;
  kioskMainArticle?: Maybe<AccommodationArticle>;
  kiosks: Array<Maybe<Kiosk>>;
  mileageSettings: AccommodationMileageSetting;
  name?: Maybe<Scalars['String']['output']>;
  options: Array<Maybe<AccommodationOption>>;
  otaSetting?: Maybe<OtaSetting>;
  pricePeriods: Array<Maybe<PricePeriod>>;
  registererName?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  reservationSettings: AccommodationReservationSetting;
  roomTypes: Array<Maybe<RoomType>>;
  rooms: Array<Maybe<Room>>;
  salesToday: Scalars['Int']['output'];
  state?: Maybe<Scalars['String']['output']>;
  termsArticle?: Maybe<AccommodationArticle>;
  themes: Array<Maybe<Theme>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  todayReservationCount: Scalars['Int']['output'];
  todayReservationCountByType: Array<ReservationCount>;
  upcomingReservationCount: Scalars['Int']['output'];
  upcomingReservations: Array<Reservation>;
};


export type AccommodationCardSalesTodayArgs = {
  reservationType?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationCashSalesTodayArgs = {
  reservationType?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationOtaSettingArgs = {
  ota: Ota;
};


export type AccommodationRoomTypesArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationRoomsArgs = {
  queryState?: InputMaybe<RoomState>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationSalesTodayArgs = {
  reservationType?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationThumbnailArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationTodayReservationCountByTypeArgs = {
  useExpireAt?: InputMaybe<Scalars['Date']['input']>;
  useStartAt?: InputMaybe<Scalars['Date']['input']>;
};

export type AccommodationArticle = {
  __typename?: 'AccommodationArticle';
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type AccommodationArticleConnection = {
  __typename?: 'AccommodationArticleConnection';
  edges: Array<Maybe<AccommodationArticleEdge>>;
  pageInfo: PageInfo;
};

export type AccommodationArticleEdge = {
  __typename?: 'AccommodationArticleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AccommodationArticle>;
};

export type AccommodationConciergeSetting = {
  __typename?: 'AccommodationConciergeSetting';
  amenityActivated?: Maybe<Scalars['String']['output']>;
  enableConcierge?: Maybe<Scalars['Boolean']['output']>;
  onSitePaymentByCard?: Maybe<Scalars['Boolean']['output']>;
  onSitePaymentByCash?: Maybe<Scalars['Boolean']['output']>;
  roomServiceActivated?: Maybe<Scalars['String']['output']>;
  tempWorkingStop?: Maybe<Scalars['String']['output']>;
};

export type AccommodationConnection = {
  __typename?: 'AccommodationConnection';
  edges: Array<Maybe<AccommodationEdge>>;
  pageInfo: PageInfo;
};

export type AccommodationEdge = {
  __typename?: 'AccommodationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Accommodation>;
};

export type AccommodationInventoryMode = {
  __typename?: 'AccommodationInventoryMode';
  cmsInventoryCountMode?: Maybe<Scalars['Boolean']['output']>;
  inventoryMode?: Maybe<Scalars['Boolean']['output']>;
};

export type AccommodationMileageSetting = {
  __typename?: 'AccommodationMileageSetting';
  dailySalesResetTime?: Maybe<Scalars['String']['output']>;
  enableMileage?: Maybe<Scalars['Boolean']['output']>;
  expireAfter?: Maybe<Scalars['Int']['output']>;
  instruction?: Maybe<Scalars['String']['output']>;
  lodgeCashRate?: Maybe<Scalars['Float']['output']>;
  lodgeCreditCardRate?: Maybe<Scalars['Float']['output']>;
  manualRate?: Maybe<Scalars['Float']['output']>;
  mileageExtraPaySources: Array<Maybe<Scalars['String']['output']>>;
  mileageSources: Array<Maybe<Scalars['String']['output']>>;
  mileageTargets: Array<Maybe<Scalars['String']['output']>>;
  minimumUsableAmount?: Maybe<Scalars['Int']['output']>;
  platformRate?: Maybe<Scalars['Float']['output']>;
  receiptAddon?: Maybe<Scalars['String']['output']>;
  rentCashRate?: Maybe<Scalars['Float']['output']>;
  rentCreditCardRate?: Maybe<Scalars['Float']['output']>;
  useOutstanding?: Maybe<Scalars['Boolean']['output']>;
};

export type AccommodationNotification = {
  __typename?: 'AccommodationNotification';
  accommodationId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['Date']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dotType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  objective?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['Int']['output']>;
  relative?: Maybe<Scalars['String']['output']>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  template?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type AccommodationNotificationConnection = {
  __typename?: 'AccommodationNotificationConnection';
  edges: Array<Maybe<AccommodationNotificationEdge>>;
  pageInfo: PageInfo;
};

export type AccommodationNotificationEdge = {
  __typename?: 'AccommodationNotificationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<AccommodationNotification>;
};

export type AccommodationNotificationQueryFilter = {
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  relative?: InputMaybe<Scalars['String']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AccommodationOption = {
  __typename?: 'AccommodationOption';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type AccommodationOptionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AccommodationOta = {
  __typename?: 'AccommodationOta';
  accommodationId: Scalars['ID']['output'];
  assignees: Array<CompanyAssignee>;
  forwardEmail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDisabled: Scalars['Boolean']['output'];
  key?: Maybe<Ota>;
  name: Scalars['String']['output'];
  otaProducts: Array<OtaProduct>;
  profile?: Maybe<CompanyProfile>;
  registeredName: Scalars['String']['output'];
  shortName?: Maybe<Scalars['String']['output']>;
  useMultiIntegration: Scalars['Boolean']['output'];
};

export type AccommodationReservationSetting = {
  __typename?: 'AccommodationReservationSetting';
  addonTimeUnit?: Maybe<Scalars['Int']['output']>;
  assignRoomBefore?: Maybe<Scalars['Int']['output']>;
  assumeCheckoutBefore?: Maybe<Scalars['Int']['output']>;
  checkInTemplate?: Maybe<Scalars['String']['output']>;
  dailyCheckOutTime?: Maybe<Scalars['String']['output']>;
  defaultCheckedIn?: Maybe<Scalars['Boolean']['output']>;
  ignoreFutureOtaIntegration?: Maybe<Scalars['String']['output']>;
  lateCheckoutTargets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  logSuspicious?: Maybe<Scalars['Boolean']['output']>;
  maxParking?: Maybe<Scalars['Int']['output']>;
  parsedOTADefaultCheckIn?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  parsedOTADefaultCheckOut?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  preReservationTemplate?: Maybe<Scalars['String']['output']>;
  preserveParking?: Maybe<Scalars['Int']['output']>;
  reservationCancelledTemplate?: Maybe<Scalars['String']['output']>;
  reservationCreatedTemplate?: Maybe<Scalars['String']['output']>;
  reservationMergeStrategy?: Maybe<Scalars['String']['output']>;
  reservationTableColumns?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roomAssignOrderBy?: Maybe<Scalars['String']['output']>;
  sendConfirmEmailStrategy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  smsTemplates?: Maybe<Array<Maybe<ReservationSmsTemplate>>>;
  unlimitedCheckIn?: Maybe<Scalars['Boolean']['output']>;
  unlimitedRentCheckIn?: Maybe<Scalars['Boolean']['output']>;
  unlimitedRentCheckInDays?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  useAssignRoom?: Maybe<Scalars['Boolean']['output']>;
  useAutoAssignRoomOnKiosk?: Maybe<Scalars['Boolean']['output']>;
  useManualAssignAutoAdjustment?: Maybe<Scalars['Boolean']['output']>;
  useOutstandingIntegration?: Maybe<Scalars['Boolean']['output']>;
};

export type AccommodationReservationSettingForGuest = {
  __typename?: 'AccommodationReservationSettingForGuest';
  addonTimeUnit?: Maybe<Scalars['Int']['output']>;
};

export type AccommodationSales = {
  __typename?: 'AccommodationSales';
  accommodationId: Scalars['ID']['output'];
  cardSalesToday: Scalars['Int']['output'];
  cashSalesToday: Scalars['Int']['output'];
};


export type AccommodationSalesCardSalesTodayArgs = {
  reservationType?: InputMaybe<Scalars['String']['input']>;
};


export type AccommodationSalesCashSalesTodayArgs = {
  reservationType?: InputMaybe<Scalars['String']['input']>;
};

export type AccommodationUser = {
  __typename?: 'AccommodationUser';
  accommodationId: Scalars['ID']['output'];
  authority?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  userId: Scalars['ID']['output'];
};

export type AddAccommodationNotificationInput = {
  accommodationId: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  relative?: InputMaybe<Scalars['String']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  template?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AddAccommodationOtaInput = {
  accommodationId: Scalars['ID']['input'];
  forwardEmail?: InputMaybe<Scalars['String']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Ota>;
  name: Scalars['String']['input'];
  registeredName: Scalars['String']['input'];
  shortName?: InputMaybe<Scalars['String']['input']>;
  useMultiIntegration?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddCmsActivityLogInput = {
  accommodationId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  level: LogLevel;
  localeId?: InputMaybe<Scalars['String']['input']>;
  localeParams?: InputMaybe<Scalars['JSON']['input']>;
  otaKey: Ota;
  subject: SubjectType;
  title: Scalars['String']['input'];
  type: LogType;
};

export type AddCmsOtaAccount = {
  accommodationId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  otaKey: Ota;
  password: Scalars['String']['input'];
};

export type AddCompanyAssigneeInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
};

export type AddCouponInput = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  couponType: CouponType;
  discount: Scalars['Int']['input'];
  discountType: DiscountType;
  expireAt?: InputMaybe<Scalars['Date']['input']>;
  mask?: InputMaybe<Scalars['String']['input']>;
  maxDiscountAmount?: InputMaybe<Scalars['Int']['input']>;
  maxUsableCount?: InputMaybe<Scalars['Int']['input']>;
  minUsableAmount: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type AddDaemonMethod = {
  definition: Scalars['JSON']['input'];
  interval?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  otaKey?: InputMaybe<Ota>;
  type: MethodType;
};

export type AddKioskSystemNotificationInput = {
  createdAt?: InputMaybe<Scalars['Date']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  kioskId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AddMileageInput = {
  accommodationId: Scalars['ID']['input'];
  amount: Scalars['Int']['input'];
  phone: Scalars['String']['input'];
};

export type AddOtaSettingInput = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  ota: Ota;
  relatedId?: InputMaybe<Scalars['ID']['input']>;
  type: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AddOtaIntegrationSmsHistoryInput = {
  accommodationId: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['String']['input']>;
  ota?: InputMaybe<Ota>;
  status?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type AddOtaPriceContractionInput = {
  endDate: Scalars['Date']['input'];
  fri?: InputMaybe<Scalars['Boolean']['input']>;
  mon?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  reservationPackageId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sat?: InputMaybe<Scalars['Boolean']['input']>;
  startDate: Scalars['Date']['input'];
  sun?: InputMaybe<Scalars['Boolean']['input']>;
  thu?: InputMaybe<Scalars['Boolean']['input']>;
  tue?: InputMaybe<Scalars['Boolean']['input']>;
  wed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddOtaProductInput = {
  accommodationOtaId: Scalars['ID']['input'];
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  parserAcronyms?: InputMaybe<Array<Scalars['String']['input']>>;
  parserValues?: InputMaybe<Array<Scalars['String']['input']>>;
  reservationPackageId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  type: Scalars['String']['input'];
};

export type AddPaymentInput = {
  amount: Scalars['Int']['input'];
  approvalId?: InputMaybe<Scalars['String']['input']>;
  buyerCompany?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  commissionAmount?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  displayMessage?: InputMaybe<Scalars['String']['input']>;
  excludeMileage?: InputMaybe<Scalars['Boolean']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  isFullyPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isReservationPayment?: InputMaybe<Scalars['Boolean']['input']>;
  issuedCompany?: InputMaybe<Scalars['String']['input']>;
  kioskId?: InputMaybe<Scalars['ID']['input']>;
  merchantNumber?: InputMaybe<Scalars['String']['input']>;
  outstandingAmount?: InputMaybe<Scalars['Int']['input']>;
  parentPaymentId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  reservationType: Scalars['String']['input'];
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  useStartAt?: InputMaybe<Scalars['Date']['input']>;
  virtualAccounts?: InputMaybe<Scalars['String']['input']>;
};

export type AddReservationGroupInput = {
  accommodationId: Scalars['ID']['input'];
  companyAssigneeId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groupName: Scalars['String']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  reservedBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  useExpireAt: Scalars['Date']['input'];
  useStartAt: Scalars['Date']['input'];
};

export type AddReservationInput = {
  accommodationId: Scalars['ID']['input'];
  createdBy?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  guestName?: InputMaybe<Scalars['String']['input']>;
  isLongTerm?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  memoContent?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  otaNumber?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  reservationGroupId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId: Scalars['ID']['input'];
  roomTypeName?: InputMaybe<Scalars['String']['input']>;
  sleeps?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  useDefaultCheckInOut?: InputMaybe<Scalars['Boolean']['input']>;
  useExpireAt: Scalars['Date']['input'];
  useStartAt: Scalars['Date']['input'];
  useVehicle?: InputMaybe<Scalars['Boolean']['input']>;
  vehicleNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AddReservationPackageInput = {
  accommodationId: Scalars['ID']['input'];
  adjustPrice: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  packageOptions?: InputMaybe<Array<PackageOptionsInput>>;
  roomTypeId: Scalars['ID']['input'];
};

export type AddServiceProductInput = {
  accommodationId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type AgeEstimation = {
  __typename?: 'AgeEstimation';
  estimated: Scalars['Int']['output'];
  high: Scalars['Int']['output'];
  low: Scalars['Int']['output'];
};

export type AmanoDeletePreDiscountInfoInput = {
  accommodationId: Scalars['ID']['input'];
  lotAreaNo?: InputMaybe<Scalars['Int']['input']>;
  preDiscountId: Scalars['Int']['input'];
  registUserId?: InputMaybe<Scalars['String']['input']>;
};

export type AmanoFeeCarSearchInput = {
  accommodationId: Scalars['ID']['input'];
  carNo4Dight?: InputMaybe<Scalars['String']['input']>;
  eqpmNo?: InputMaybe<Scalars['Int']['input']>;
  lotAreaNo?: InputMaybe<Scalars['Int']['input']>;
};

export type AmanoFreeTimeZone = {
  __typename?: 'AmanoFreeTimeZone';
  endDtm: Scalars['String']['output'];
  startDtm: Scalars['String']['output'];
};

export type AmanoInCarInfo = {
  __typename?: 'AmanoInCarInfo';
  carNo: Scalars['String']['output'];
  carNoMain: Scalars['String']['output'];
  carNoSub: Scalars['String']['output'];
  dbTableName?: Maybe<Scalars['String']['output']>;
  feeRateNo: Scalars['Int']['output'];
  freeTimeZones: Array<Maybe<AmanoFreeTimeZone>>;
  inCarPicName: Scalars['String']['output'];
  inDtm: Scalars['String']['output'];
  inEqpmNo: Scalars['Int']['output'];
  inOutStatus: AmanoInOutStatus;
  lotAreaNo: Scalars['Int']['output'];
  manualCalcInDtm: Scalars['String']['output'];
  outCarPicName: Scalars['String']['output'];
  outDtm: Scalars['String']['output'];
  parkingTrnsID: Scalars['Int']['output'];
  payDtm: Scalars['String']['output'];
  paymentType: AmanoPaymentType;
  ticketNo: Scalars['Int']['output'];
};

export enum AmanoInOutStatus {
  In = 'IN',
  Out = 'OUT'
}

export type AmanoInsertPreDiscountInfoInput = {
  accommodationId: Scalars['ID']['input'];
  carNo: Scalars['String']['input'];
  dcCount: Scalars['Int']['input'];
  discCodeNo?: InputMaybe<Scalars['Int']['input']>;
  dongcode?: InputMaybe<Scalars['String']['input']>;
  endDtm: Scalars['String']['input'];
  hocode?: InputMaybe<Scalars['String']['input']>;
  lotAreaNo?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  preDiscountId?: InputMaybe<Scalars['Int']['input']>;
  registUserId?: InputMaybe<Scalars['String']['input']>;
  registUserName?: InputMaybe<Scalars['String']['input']>;
  startDtm: Scalars['String']['input'];
};

export enum AmanoPaymentType {
  PayFlagCansel = 'PAY_FLAG_CANSEL',
  PayFlagComplete = 'PAY_FLAG_COMPLETE',
  PayFlagDebitcardRecharge = 'PAY_FLAG_DEBITCARD_RECHARGE',
  PayFlagDebitcardSale = 'PAY_FLAG_DEBITCARD_SALE',
  PayFlagLostticket = 'PAY_FLAG_LOSTTICKET',
  PayFlagMinab = 'PAY_FLAG_MINAB',
  PayFlagNone = 'PAY_FLAG_NONE',
  PayFlagRecalculate = 'PAY_FLAG_RECALCULATE',
  PayFlagUsedDebitcard = 'PAY_FLAG_USED_DEBITCARD',
  PayFlagUsedEventcard = 'PAY_FLAG_USED_EVENTCARD',
  PayFlagUsedPasscard = 'PAY_FLAG_USED_PASSCARD'
}

export type AmanoPreDiscount = {
  __typename?: 'AmanoPreDiscount';
  carNo: Scalars['String']['output'];
  dcCount?: Maybe<Scalars['Int']['output']>;
  discCodeNo?: Maybe<Scalars['Int']['output']>;
  dongcode?: Maybe<Scalars['String']['output']>;
  endDtm?: Maybe<Scalars['String']['output']>;
  hocode?: Maybe<Scalars['String']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  preDiscountId: Scalars['Int']['output'];
  regiDtm?: Maybe<Scalars['String']['output']>;
  registUserId: Scalars['String']['output'];
  registUserName?: Maybe<Scalars['String']['output']>;
  startDtm?: Maybe<Scalars['String']['output']>;
};

export type AmanoPreDiscountListInfoInput = {
  accommodationId: Scalars['ID']['input'];
  carNo?: InputMaybe<Scalars['String']['input']>;
  discCodeNo?: InputMaybe<Scalars['Int']['input']>;
  dongcode?: InputMaybe<Scalars['String']['input']>;
  fromRegiDtm: Scalars['String']['input'];
  hocode?: InputMaybe<Scalars['String']['input']>;
  lotAreaNo?: InputMaybe<Scalars['Int']['input']>;
  registUserId?: InputMaybe<Scalars['String']['input']>;
  toRegiDtm: Scalars['String']['input'];
};

export type AmanoUpdatePreDiscountInfoInput = {
  accommodationId: Scalars['ID']['input'];
  carNo?: InputMaybe<Scalars['String']['input']>;
  dcCount?: InputMaybe<Scalars['Int']['input']>;
  discCodeNo?: InputMaybe<Scalars['Int']['input']>;
  dongcode?: InputMaybe<Scalars['String']['input']>;
  endDtm?: InputMaybe<Scalars['String']['input']>;
  hocode?: InputMaybe<Scalars['String']['input']>;
  lotAreaNo?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  preDiscountId: Scalars['Int']['input'];
  registUserId: Scalars['String']['input'];
  registUserName?: InputMaybe<Scalars['String']['input']>;
  startDtm?: InputMaybe<Scalars['String']['input']>;
};

export type Amenity = {
  __typename?: 'Amenity';
  icon?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AmenityInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AnonymouseSignInTokenPair = {
  __typename?: 'AnonymouseSignInTokenPair';
  authId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type Article = {
  __typename?: 'Article';
  attachments?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  edges: Array<Maybe<ArticleEdge>>;
  pageInfo: PageInfo;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Article>;
};

export type AssignReservationInput = {
  isManualAssign?: InputMaybe<Scalars['Boolean']['input']>;
  reservationId: Scalars['ID']['input'];
  roomId: Scalars['ID']['input'];
  roomName: Scalars['String']['input'];
};

export type AudioOption = {
  __typename?: 'AudioOption';
  accommodationId: Scalars['ID']['output'];
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  templateId: Scalars['String']['output'];
  time?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CancelCoamPaymentInput = {
  accommodationId: Scalars['ID']['input'];
  amount: Scalars['Int']['input'];
  tid: Scalars['String']['input'];
};

export type Captcha = {
  __typename?: 'Captcha';
  hash: Scalars['String']['output'];
  svg: Scalars['String']['output'];
};

export enum CardState {
  Admin = 'ADMIN',
  Clean = 'CLEAN',
  Error = 'ERROR',
  Guest = 'GUEST',
  Null = 'NULL'
}

export type ChangePasswordBySmsAuthInput = {
  identity: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  smsAuthHash: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
};

export type ChangeReservationRoomInput = {
  reservationId: Scalars['ID']['input'];
  roomId: Scalars['ID']['input'];
  roomName: Scalars['String']['input'];
};

export type CleaningPeriod = {
  __typename?: 'CleaningPeriod';
  endTime?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  startTime?: Maybe<Scalars['Date']['output']>;
};

export type ClearAllDataRelatedToCmsInput = {
  accommodationId: Scalars['ID']['input'];
};

export type CmsActivityLog = {
  __typename?: 'CmsActivityLog';
  accommodationId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  hasRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  level: LogLevel;
  localeId?: Maybe<Scalars['String']['output']>;
  localeParams?: Maybe<Scalars['JSON']['output']>;
  otaKey: Ota;
  subject: SubjectType;
  title: Scalars['String']['output'];
  type: LogType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CmsActivityLogConnection = {
  __typename?: 'CmsActivityLogConnection';
  edges: Array<CmsActivityLogEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CmsActivityLogEdge = {
  __typename?: 'CmsActivityLogEdge';
  cursor: Scalars['String']['output'];
  node: CmsActivityLog;
};

export type CmsActivityLogQueryFilter = {
  hasRead?: InputMaybe<Scalars['Boolean']['input']>;
  level?: InputMaybe<LogLevel>;
  otaKey?: InputMaybe<Ota>;
  subject?: InputMaybe<SubjectType>;
  type?: InputMaybe<LogType>;
};

export enum CmsCommandType {
  RemoteActionCall = 'RemoteActionCall'
}

export type CmsDaemonMethod = {
  __typename?: 'CmsDaemonMethod';
  createdAt: Scalars['DateTime']['output'];
  definition: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  interval?: Maybe<Scalars['Int']['output']>;
  methodId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  otaKey?: Maybe<Ota>;
  type: MethodType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CmsMonthlyReservationHistory = {
  __typename?: 'CmsMonthlyReservationHistory';
  cmsSellCount?: Maybe<Scalars['Int']['output']>;
  day?: Maybe<Scalars['String']['output']>;
  reservationSellCount?: Maybe<Scalars['Int']['output']>;
  roomTypeId?: Maybe<Scalars['String']['output']>;
};

export type CmsOta = {
  __typename?: 'CmsOta';
  id: Scalars['String']['output'];
  isConnected?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};


export type CmsOtaIsConnectedArgs = {
  accommodationId: Scalars['ID']['input'];
};

export type CmsOtaAccount = {
  __typename?: 'CmsOtaAccount';
  accommodationId: Scalars['ID']['output'];
  connectedOta: CmsOta;
  createdAt: Scalars['DateTime']['output'];
  customData?: Maybe<Scalars['JSON']['output']>;
  envs?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CmsOtaProductMap = {
  __typename?: 'CmsOtaProductMap';
  accommodationId: Scalars['ID']['output'];
  accommodationOtaId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  origin: Origin;
  otaKey: Ota;
  otaProductSetting?: Maybe<Array<Maybe<CmsOtaProductSetting>>>;
  productName: Scalars['String']['output'];
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  sellCount?: Maybe<Scalars['Int']['output']>;
  subKey?: Maybe<Ota>;
};

export type CmsOtaProductMapInput = {
  id: Scalars['ID']['input'];
  productName: Scalars['String']['input'];
  roomTypeId: Scalars['ID']['input'];
};

export type CmsOtaProductSetting = {
  __typename?: 'CmsOtaProductSetting';
  autoClosedRoomCount?: Maybe<Scalars['Int']['output']>;
  cmsOtaProductMap?: Maybe<CmsOtaProductMap>;
  id: Scalars['ID']['output'];
  isClosed?: Maybe<Scalars['Boolean']['output']>;
  isManuallyClosed: Scalars['Boolean']['output'];
  sellPrice?: Maybe<Scalars['Int']['output']>;
  subKey?: Maybe<Ota>;
};

export enum CmsRemoteActionType {
  ErrorPlatFormLogin = 'ErrorPlatFormLogin',
  ErrorPlatFormSignIn = 'ErrorPlatFormSignIn',
  ErrorSyncCmsOtaProducts = 'ErrorSyncCmsOtaProducts',
  ErrorSyncSalesSettingManagement = 'ErrorSyncSalesSettingManagement',
  ErrorSynchronizatioRangeReservation = 'ErrorSynchronizatioRangeReservation',
  ErrorSynchronizatioSalesSettingManagement = 'ErrorSynchronizatioSalesSettingManagement',
  ErrorSynchronizationGetTodayReservation = 'ErrorSynchronizationGetTodayReservation',
  ErrorSynchronizationRangeReservation = 'ErrorSynchronizationRangeReservation',
  ErrorUpdateSalesSettingManagement = 'ErrorUpdateSalesSettingManagement',
  FetchCmsOtaList = 'FetchCmsOtaList',
  FetchGetCmsOtaList = 'FetchGetCmsOtaList',
  FetchGetCmsReservationList = 'FetchGetCmsReservationList',
  FetchGetSalesSettingManagement = 'FetchGetSalesSettingManagement',
  FetchGetTodaySalesDashboard = 'FetchGetTodaySalesDashboard',
  FetchOtaProductMaps = 'FetchOtaProductMaps',
  FetchReservations = 'FetchReservations',
  FetchSales = 'FetchSales',
  FetchSalesSetting = 'FetchSalesSetting',
  FetchSalesSettingManagement = 'FetchSalesSettingManagement',
  Login = 'Login'
}

export type CmsReservation = {
  __typename?: 'CmsReservation';
  accommodationId: Scalars['String']['output'];
  autoClosedRoomCount?: Maybe<Scalars['Int']['output']>;
  cmsRoomStatus: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  depositPrice?: Maybe<Scalars['Int']['output']>;
  detail?: Maybe<CmsReservationDetail>;
  id: Scalars['ID']['output'];
  otaKey: Scalars['String']['output'];
  otaReservationNum?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  reservation?: Maybe<Reservation>;
  reservationId?: Maybe<Scalars['ID']['output']>;
  reservationTime?: Maybe<Scalars['String']['output']>;
  reservationType?: Maybe<Scalars['String']['output']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  status: Scalars['String']['output'];
  subKey?: Maybe<Scalars['String']['output']>;
  transportation?: Maybe<Scalars['String']['output']>;
};

export type CmsReservationDetail = {
  __typename?: 'CmsReservationDetail';
  phoneNumber?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  reservationType?: Maybe<Scalars['String']['output']>;
  useExpireAt?: Maybe<Scalars['String']['output']>;
  useStartAt?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type CmsReservationOffsetInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type CmsReservationQueryFilter = {
  filterType: FilterType;
  key?: InputMaybe<Scalars['String']['input']>;
  otaKey?: InputMaybe<Ota>;
  useStartAtDateOnly: Scalars['String']['input'];
  value?: InputMaybe<Array<InputMaybe<CmsWhereOptionStatus>>>;
};

export type CmsReturnType = {
  __typename?: 'CmsReturnType';
  commandId: Scalars['String']['output'];
  methodName: Scalars['String']['output'];
};

export enum CmsWhereOptionStatus {
  Lodge = 'LODGE',
  Rent = 'RENT'
}

export type CoamPaymentConfig = {
  __typename?: 'CoamPaymentConfig';
  accommodationId: Scalars['ID']['output'];
  cpid: Scalars['String']['output'];
};

export type CoampayData = {
  __typename?: 'CoampayData';
  cpid: Scalars['String']['output'];
  data: Scalars['String']['output'];
  infoId: Scalars['ID']['output'];
};

export type CoampayPurchaseInput = {
  accommodationId: Scalars['ID']['input'];
  amount: Scalars['Int']['input'];
  data: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  orderId: Scalars['String']['input'];
  sessionToken: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export enum CommandType {
  FetchReservation = 'FETCH_RESERVATION'
}

export type CompanyAssignee = {
  __typename?: 'CompanyAssignee';
  accommodationOtaId: Scalars['ID']['output'];
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Scalars['String']['output']>;
};

export type CompanyProfile = {
  __typename?: 'CompanyProfile';
  accommodationOtaId: Scalars['ID']['output'];
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  contractDate?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  saleEndDate?: Maybe<Scalars['Date']['output']>;
  saleStartDate?: Maybe<Scalars['Date']['output']>;
};

export type CompanyProfileInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  contractDate?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  saleEndDate?: InputMaybe<Scalars['Date']['input']>;
  saleStartDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ConciergeAmenity = {
  __typename?: 'ConciergeAmenity';
  accommodationId: Scalars['ID']['output'];
  categories?: Maybe<Array<Maybe<ConciergeAmenityCategory>>>;
  deliveryTime: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  soldOutPeriod?: Maybe<Scalars['String']['output']>;
  status: ConciergeAmenityStatus;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type ConciergeAmenityCategory = {
  __typename?: 'ConciergeAmenityCategory';
  accommodationId: Scalars['ID']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  status: DefaultStatus;
};

export type ConciergeAmenityConnection = {
  __typename?: 'ConciergeAmenityConnection';
  edges: Array<Maybe<ConciergeAmenityEdge>>;
  pageInfo: OffsetPageInfo;
};

export type ConciergeAmenityEdge = {
  __typename?: 'ConciergeAmenityEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConciergeAmenity>;
};

export type ConciergeAmenityOrderDetail = {
  __typename?: 'ConciergeAmenityOrderDetail';
  conciergeAmenityId: Scalars['ID']['output'];
  deliveryTime: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderId: Scalars['ID']['output'];
  origin: ConciergeAmenity;
  price: Scalars['Int']['output'];
  quantity: Scalars['String']['output'];
  soldOutPeriod?: Maybe<Scalars['String']['output']>;
};

export enum ConciergeAmenityStatus {
  Deleted = 'DELETED',
  Normal = 'NORMAL'
}

export type ConciergeConfigInfo = {
  __typename?: 'ConciergeConfigInfo';
  cpid?: Maybe<Scalars['String']['output']>;
  dataDogApplicationId?: Maybe<Scalars['String']['output']>;
  dataDogClientId?: Maybe<Scalars['String']['output']>;
  slackId?: Maybe<Scalars['String']['output']>;
};

export type ConciergeOrder = {
  __typename?: 'ConciergeOrder';
  amenities: Array<Maybe<ConciergeAmenityOrderDetail>>;
  amount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  expectedTime?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  paymentType: ConciergePaymentType;
  reason?: Maybe<Scalars['String']['output']>;
  request?: Maybe<Scalars['String']['output']>;
  requestTime?: Maybe<Scalars['Date']['output']>;
  reservation: Reservation;
  reservationId: Scalars['ID']['output'];
  roomServices: Array<Maybe<RoomServiceOrderDetail>>;
  status: ConciergeOrderStatus;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ConciergeOrderConnection = {
  __typename?: 'ConciergeOrderConnection';
  edges: Array<Maybe<ConciergeOrderEdge>>;
  pageInfo: OffsetPageInfo;
};

export type ConciergeOrderEdge = {
  __typename?: 'ConciergeOrderEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<ConciergeOrder>;
};

export type ConciergeOrderOptionInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<ConciergeOrderStatus>>>;
};

export type ConciergeOrderStatistics = {
  __typename?: 'ConciergeOrderStatistics';
  ADMIN_CANCEL: Scalars['Int']['output'];
  DELIVERY: Scalars['Int']['output'];
  FINISH: Scalars['Int']['output'];
  PROCESSING: Scalars['Int']['output'];
  USER_CANCEL: Scalars['Int']['output'];
  WAITING: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
};

export type ConciergeOrderStatisticsOptionInput = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export enum ConciergeOrderStatus {
  AdminCancel = 'ADMIN_CANCEL',
  Delivery = 'DELIVERY',
  Finish = 'FINISH',
  Processing = 'PROCESSING',
  UserCancel = 'USER_CANCEL',
  Waiting = 'WAITING'
}

export type ConciergePaymentInfo = {
  __typename?: 'ConciergePaymentInfo';
  accommodationId: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  data: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['String']['output'];
  reservationId: Scalars['ID']['output'];
  sessionToken: Scalars['String']['output'];
  status: ConciergePaymentStatus;
  type: ConciergePaymentInfoType;
  updatedAt: Scalars['Date']['output'];
};

export enum ConciergePaymentInfoType {
  ConciergeOrder = 'CONCIERGE_ORDER',
  EarlyCheckin = 'EARLY_CHECKIN',
  LateCheckout = 'LATE_CHECKOUT'
}

export type ConciergePaymentNotiInput = {
  AMOUNT?: InputMaybe<Scalars['Int']['input']>;
  BYPASSVALUE?: InputMaybe<Scalars['String']['input']>;
  CARDAUTHNO?: InputMaybe<Scalars['String']['input']>;
  CARDCODE?: InputMaybe<Scalars['String']['input']>;
  CARDNAME?: InputMaybe<Scalars['String']['input']>;
  CARDNO?: InputMaybe<Scalars['String']['input']>;
  ITEMNAME?: InputMaybe<Scalars['String']['input']>;
  ORDERID?: InputMaybe<Scalars['String']['input']>;
  O_TID?: InputMaybe<Scalars['String']['input']>;
  QUOTA?: InputMaybe<Scalars['String']['input']>;
  RETURNCODE: Scalars['String']['input'];
  RETURNMSG: Scalars['String']['input'];
  TID?: InputMaybe<Scalars['String']['input']>;
  TRANDATE?: InputMaybe<Scalars['String']['input']>;
  TRANTIME?: InputMaybe<Scalars['String']['input']>;
  USERNAME?: InputMaybe<Scalars['String']['input']>;
};

export enum ConciergePaymentStatus {
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Error = 'ERROR',
  Progress = 'PROGRESS',
  Ready = 'READY'
}

export enum ConciergePaymentType {
  CoamPayment = 'COAM_PAYMENT',
  DirectCard = 'DIRECT_CARD',
  DirectCash = 'DIRECT_CASH'
}

export type ConciergeServiceNotice = {
  __typename?: 'ConciergeServiceNotice';
  accommodationId: Scalars['ID']['output'];
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  priority: Scalars['Int']['output'];
  startDate: Scalars['Date']['output'];
  title: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export type ConciergeServiceSetting = {
  __typename?: 'ConciergeServiceSetting';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConciergeServiceSettingInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ConciergeSlackNotificationInfo = {
  payload: Scalars['String']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};

export type ConciergeWorkSetting = {
  __typename?: 'ConciergeWorkSetting';
  accommodationId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  value: Scalars['String']['output'];
  weekDay: Scalars['String']['output'];
  workType: ConciergeWorkType;
};

export type ConciergeWorkSettingInput = {
  value: Scalars['String']['input'];
  weekDay: Scalars['String']['input'];
  workType: ConciergeWorkType;
};

export enum ConciergeWorkType {
  Rest1 = 'REST1',
  Rest2 = 'REST2',
  Work = 'WORK'
}

export type ConnectionInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ConnectionOffsetInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  accommodationId?: Maybe<Scalars['ID']['output']>;
  code: Scalars['ID']['output'];
  couponType: CouponType;
  discount: Scalars['Int']['output'];
  discountType: DiscountType;
  expireAt: Scalars['Date']['output'];
  histories: Array<CouponUsageHistory>;
  id: Scalars['ID']['output'];
  isExhausted: Scalars['Boolean']['output'];
  mask?: Maybe<Scalars['String']['output']>;
  maxDiscountAmount: Scalars['Int']['output'];
  maxUsableCount: Scalars['Int']['output'];
  minUsableAmount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  usableCount: Scalars['Int']['output'];
};

export type CouponConnection = {
  __typename?: 'CouponConnection';
  edges: Array<Maybe<CouponEdge>>;
  pageInfo: PageInfo;
};

export type CouponEdge = {
  __typename?: 'CouponEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Coupon>;
};

export type CouponInput = {
  discountAmount: Scalars['Int']['input'];
  usageHash: Scalars['String']['input'];
};

export enum CouponType {
  Accommodation = 'accommodation',
  Package = 'package',
  RoomType = 'roomType',
  SpotAccommodation = 'spotAccommodation',
  SpotRoomType = 'spotRoomType',
  SpotUniversal = 'spotUniversal',
  Universal = 'universal'
}

export type CouponUsageHistory = {
  __typename?: 'CouponUsageHistory';
  coupon: Coupon;
  couponId: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  discountAmount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ipAddress: Scalars['String']['output'];
  purchaseAmount: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  usageHash: Scalars['String']['output'];
  usedAt?: Maybe<Scalars['Date']['output']>;
};

export type CreateAccommodationInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  contact: Scalars['String']['input'];
  csContact?: InputMaybe<Scalars['String']['input']>;
  defaultCheckIn: Scalars['String']['input'];
  defaultCheckOut: Scalars['String']['input'];
  isHome?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<InputMaybe<AccommodationOptionInput>>>;
  registererName: Scalars['String']['input'];
  registrationNumber: Scalars['String']['input'];
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CreateArticleInput = {
  attachments?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAudioOptionInput = {
  accommodationId: Scalars['ID']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  templateId: Scalars['String']['input'];
  time?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCmsOtaProductMapInput = {
  accommodationId: Scalars['ID']['input'];
  otaKey: Ota;
  productName: Scalars['String']['input'];
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  subKey?: InputMaybe<Ota>;
};

export type CreateCoamPaymentConfig = {
  accommodationId: Scalars['ID']['input'];
  cpid: Scalars['String']['input'];
};

export type CreateConciergeAmenity = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deliveryTime: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type CreateConciergeAmenityCategory = {
  accommodationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateConciergeAmenityOrderDetailInput = {
  amenityId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type CreateConciergeOrderInput = {
  accommodationId: Scalars['ID']['input'];
  amenities?: InputMaybe<Array<InputMaybe<CreateConciergeAmenityOrderDetailInput>>>;
  amount: Scalars['Int']['input'];
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  paymentInfoId?: InputMaybe<Scalars['ID']['input']>;
  paymentType: ConciergePaymentType;
  phone?: InputMaybe<Scalars['String']['input']>;
  request?: InputMaybe<Scalars['String']['input']>;
  requestTime?: InputMaybe<Scalars['Date']['input']>;
  reservationId: Scalars['ID']['input'];
  roomServices?: InputMaybe<Array<InputMaybe<CreateRoomServiceOrderDetailInput>>>;
};

export type CreateConciergeServiceNotice = {
  accommodationId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  priority: Scalars['Int']['input'];
  startDate: Scalars['Date']['input'];
  title: Scalars['String']['input'];
  type: Scalars['Int']['input'];
};

export type CreateKioskInput = {
  accommodationId: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  state?: InputMaybe<KioskState>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrUpdatePgConfigInput = {
  accommodationId: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderRequestTemplate = {
  accommodationId: Scalars['ID']['input'];
  request: Scalars['String']['input'];
};

export type CreatePriceInput = {
  addonAmount: Scalars['Int']['input'];
  addonAmount2?: InputMaybe<Scalars['Int']['input']>;
  addonSleepsMaximum?: InputMaybe<Scalars['Int']['input']>;
  bookingActualAmount?: InputMaybe<Scalars['Int']['input']>;
  bookingOriginAmount?: InputMaybe<Scalars['Int']['input']>;
  cardAmount: Scalars['Int']['input'];
  cashAmount: Scalars['Int']['input'];
  defaultRentTime?: InputMaybe<Scalars['String']['input']>;
  extendedRentTime?: InputMaybe<Scalars['String']['input']>;
  extraGuestAmount?: InputMaybe<Scalars['Int']['input']>;
  lateCheckoutLimit?: InputMaybe<Scalars['String']['input']>;
  lateCheckoutMaximum?: InputMaybe<Scalars['String']['input']>;
  pricePeriodId: Scalars['ID']['input'];
  priceType?: InputMaybe<PriceType>;
  rentExpireAt?: InputMaybe<Scalars['String']['input']>;
  roomTypeId: Scalars['ID']['input'];
  useAddon: Scalars['Boolean']['input'];
};

export type CreatePricePeriodInput = {
  accommodationId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
};

export type CreatePublicPurchaseRequestInput = {
  accommodationId: Scalars['ID']['input'];
  claimedDiscountAmount?: InputMaybe<Scalars['Int']['input']>;
  couponUsageHash?: InputMaybe<Scalars['String']['input']>;
  datePricesToken: Scalars['String']['input'];
  guestName: Scalars['String']['input'];
  overSleeps: Scalars['Int']['input'];
  person: Scalars['Int']['input'];
  phone: Scalars['String']['input'];
  request?: InputMaybe<Scalars['String']['input']>;
  roomTypeId: Scalars['ID']['input'];
  roomTypeName: Scalars['String']['input'];
  useExpireAt: Scalars['Date']['input'];
  useStartAt: Scalars['Date']['input'];
};

export type CreateReservationMemoInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  reservationId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoomInput = {
  accommodationId: Scalars['ID']['input'];
  amenities: Array<AmenityInput>;
  checkIn?: InputMaybe<Scalars['String']['input']>;
  checkOut?: InputMaybe<Scalars['String']['input']>;
  dayCheckOut?: InputMaybe<Scalars['String']['input']>;
  defaultSleeps: Scalars['Int']['input'];
  encryptionKey?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  kioskId: Scalars['ID']['input'];
  maxSleeps: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  number?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  roomTypeId: Scalars['ID']['input'];
  saleState?: InputMaybe<SaleState>;
  state?: InputMaybe<RoomState>;
};

export type CreateRoomMemoInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoomService = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  leadTime: Scalars['Int']['input'];
  options: Array<InputMaybe<CreateRoomServiceOption>>;
  price: Scalars['Int']['input'];
  summary?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type CreateRoomServiceCategory = {
  accommodationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRoomServiceCategoryMap = {
  roomServiceCategoryId: Scalars['ID']['input'];
  roomServiceId: Scalars['ID']['input'];
};

export type CreateRoomServiceOption = {
  accommodationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRoomServiceOptionDetailInput = {
  quantity: Scalars['Int']['input'];
  roomServiceOptionId: Scalars['ID']['input'];
};

export type CreateRoomServiceOrderDetailInput = {
  options?: InputMaybe<Array<InputMaybe<CreateRoomServiceOptionDetailInput>>>;
  quantity: Scalars['Int']['input'];
  roomServiceId: Scalars['ID']['input'];
};

export type CreateRoomTypeInput = {
  accommodationId: Scalars['ID']['input'];
  alias?: InputMaybe<Scalars['String']['input']>;
  checkIn?: InputMaybe<Scalars['String']['input']>;
  checkOut?: InputMaybe<Scalars['String']['input']>;
  dayQuantities?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  thirdPartyCode?: InputMaybe<Scalars['String']['input']>;
};

export type DaemonArg = {
  __typename?: 'DaemonArg';
  field: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum DaemonCommandType {
  RemoteMethodCall = 'RemoteMethodCall',
  SystemEvent = 'SystemEvent'
}

export type DailyQuantity = {
  __typename?: 'DailyQuantity';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  roomTypeId: Scalars['ID']['output'];
};

export type DailyQuantityInput = {
  date: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  roomTypeId: Scalars['ID']['input'];
};

export type DailySalesAggregate = {
  __typename?: 'DailySalesAggregate';
  amount: Scalars['Int']['output'];
  date: Scalars['String']['output'];
};

export type DatePrice = {
  __typename?: 'DatePrice';
  date?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
  tokenizedInfo?: Maybe<Scalars['String']['output']>;
};

export type DateQuantity = {
  __typename?: 'DateQuantity';
  date: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
};

export enum Day {
  Fri = 'fri',
  Mon = 'mon',
  Sat = 'sat',
  Sun = 'sun',
  Thu = 'thu',
  Tue = 'tue',
  Wed = 'wed'
}

export type DayPaymentSum = {
  __typename?: 'DayPaymentSum';
  day: Day;
  sum: Scalars['Int']['output'];
};

export type DayReservationCount = {
  __typename?: 'DayReservationCount';
  count: Scalars['Int']['output'];
  day: Day;
};

export type DeduplicateCmsReservationInput = {
  accommodationId: Scalars['ID']['input'];
  useExpireAt: Scalars['String']['input'];
  useStartAt: Scalars['String']['input'];
};

export type DefaultInfo = {
  __typename?: 'DefaultInfo';
  errorMessage?: Maybe<Scalars['String']['output']>;
  eventName: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum DefaultStatus {
  Deleted = 'DELETED',
  Disabled = 'DISABLED',
  Normal = 'NORMAL'
}

export type DeletePlatformInput = {
  accommodationId: Scalars['String']['input'];
  otaKey: Ota;
};

export type DeletePreDiscountInfoResponse = {
  __typename?: 'DeletePreDiscountInfoResponse';
  data: DefaultInfo;
  status: Scalars['String']['output'];
  statusMsg: Scalars['String']['output'];
};

export type DeleteRoomServiceCategoryMap = {
  roomServiceCategoryId: Scalars['ID']['input'];
  roomServiceId: Scalars['ID']['input'];
};

export type DeviceConnection = {
  __typename?: 'DeviceConnection';
  edges: Array<Maybe<DeviceEdge>>;
  pageInfo: PageInfo;
};

export type DeviceEdge = {
  __typename?: 'DeviceEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<RoomDevice>;
};

export type DeviceInput = {
  name: Scalars['String']['input'];
  power?: InputMaybe<Scalars['Boolean']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export enum DiscountType {
  Amount = 'amount',
  Percentage = 'percentage',
  Static = 'static'
}

export enum DuplicateCheckerType {
  Email = 'email',
  Identity = 'identity',
  Nickname = 'nickname',
  Phone = 'phone'
}

export type ElasticResponseType = {
  __typename?: 'ElasticResponseType';
  _id?: Maybe<Scalars['String']['output']>;
  _index?: Maybe<Scalars['String']['output']>;
  _primary_term?: Maybe<Scalars['Int']['output']>;
  _seq_no?: Maybe<Scalars['String']['output']>;
  _shards?: Maybe<ShardStatistics>;
  _version?: Maybe<Scalars['Int']['output']>;
  forced_refresh?: Maybe<Scalars['Boolean']['output']>;
  result?: Maybe<ElasticResult>;
};

export enum ElasticResult {
  Created = 'created',
  Deleted = 'deleted',
  Noop = 'noop',
  NotFound = 'not_found',
  Updated = 'updated'
}

export type Employee = {
  __typename?: 'Employee';
  authority: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type EmployeeInput = {
  accommodationId: Scalars['ID']['input'];
  authority?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ErrorCause = {
  __typename?: 'ErrorCause';
  caused_by?: Maybe<ErrorCause>;
  reason?: Maybe<Scalars['String']['output']>;
  root_cause?: Maybe<Array<Maybe<ErrorCause>>>;
  stack_trace?: Maybe<Scalars['String']['output']>;
  suppressed?: Maybe<Array<Maybe<ErrorCause>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ErrorCauseKeys = {
  __typename?: 'ErrorCauseKeys';
  caused_by?: Maybe<ErrorCause>;
  reason?: Maybe<Scalars['String']['output']>;
  root_cause?: Maybe<Array<Maybe<ErrorCause>>>;
  stack_trace?: Maybe<Scalars['String']['output']>;
  suppressed?: Maybe<Array<Maybe<ErrorCause>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Face = {
  __typename?: 'Face';
  age: AgeEstimation;
  gender: Gender;
  height: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type FaceDetection = {
  __typename?: 'FaceDetection';
  faces: Array<Face>;
};

export type FeeCarSearchData = {
  __typename?: 'FeeCarSearchData';
  errorMessage?: Maybe<Scalars['String']['output']>;
  eventName: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  inCarInfos: Array<Maybe<AmanoInCarInfo>>;
  success: Scalars['Boolean']['output'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
};

export enum FilterType {
  PaymendtDate = 'PAYMENDT_DATE',
  UseStartAtDate = 'USE_START_AT_DATE'
}

export type FixedReservationCount = {
  __typename?: 'FixedReservationCount';
  errored?: Maybe<Scalars['Int']['output']>;
  fixed?: Maybe<Scalars['Int']['output']>;
  fixedReservations?: Maybe<Array<Maybe<FixedReservationDiff>>>;
  legacy?: Maybe<Scalars['Int']['output']>;
  legacyIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type FixedReservationDiff = {
  __typename?: 'FixedReservationDiff';
  diff?: Maybe<Scalars['Int']['output']>;
  reservation?: Maybe<Reservation>;
};

export type GqlSchemaType = {
  __typename?: 'GQLSchemaType';
  sdl: Scalars['String']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GetCmsMonthlyReservationHistoryInput = {
  accommodationId?: InputMaybe<Scalars['String']['input']>;
  roomTypeId?: InputMaybe<Scalars['String']['input']>;
  useExpireAt?: InputMaybe<Scalars['String']['input']>;
  useStartAt?: InputMaybe<Scalars['String']['input']>;
};

export type GetCmsOtaListInput = {
  accommodationId: Scalars['String']['input'];
};

export type GetFeeCarSearchResponse = {
  __typename?: 'GetFeeCarSearchResponse';
  data: FeeCarSearchData;
  status: Scalars['String']['output'];
  statusMsg: Scalars['String']['output'];
};

export type GetPreDiscountListInfoResponse = {
  __typename?: 'GetPreDiscountListInfoResponse';
  data: PreDiscountListInfoData;
  status: Scalars['String']['output'];
  statusMsg: Scalars['String']['output'];
};

export type GetReservationListInput = {
  accommodationId: Scalars['String']['input'];
  filterType: FilterType;
  otaKey?: InputMaybe<Ota>;
  useStartAtDateOnly: Scalars['String']['input'];
};

export type GetTodaySalesDashboardInput = {
  accommodationId: Scalars['String']['input'];
  otaKey: Ota;
};

export type HandleEmergencyNotificationInput = {
  accommodationId: Scalars['ID']['input'];
  notificationId: Scalars['ID']['input'];
};

export type InfoInput = {
  content: Scalars['String']['input'];
  label: Scalars['String']['input'];
};

export type InsertPreDiscountInfoResponse = {
  __typename?: 'InsertPreDiscountInfoResponse';
  data: PreDiscountInfoData;
  status: Scalars['String']['output'];
  statusMsg: Scalars['String']['output'];
};

export type JobCountSet = {
  __typename?: 'JobCountSet';
  count?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
};

export type Kiosk = {
  __typename?: 'Kiosk';
  connectionState?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<KioskOptions>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  state?: Maybe<KioskState>;
  type?: Maybe<Scalars['String']['output']>;
};

export type KioskConnection = {
  __typename?: 'KioskConnection';
  edges: Array<Maybe<KioskEdge>>;
  pageInfo: PageInfo;
};

export type KioskEdge = {
  __typename?: 'KioskEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Kiosk>;
};

export type KioskOption = {
  __typename?: 'KioskOption';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type KioskOptionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type KioskOptions = {
  __typename?: 'KioskOptions';
  activateAdminStrategy: Array<Scalars['Boolean']['output']>;
  additionalPaymentDisabled?: Maybe<Scalars['Boolean']['output']>;
  addonSleepsMaximum?: Maybe<Scalars['Int']['output']>;
  amanoAPIKey?: Maybe<Scalars['String']['output']>;
  autoRebootInterval?: Maybe<Scalars['Int']['output']>;
  autoRebootTime?: Maybe<Scalars['String']['output']>;
  bannerImages: Array<Maybe<Scalars['String']['output']>>;
  billDispenserStrategy: Array<Scalars['Boolean']['output']>;
  blockMinorAgeBase?: Maybe<Scalars['Int']['output']>;
  blockMinorTimeRange?: Maybe<Scalars['String']['output']>;
  cardReaderComPort?: Maybe<Scalars['String']['output']>;
  cardType?: Maybe<Scalars['String']['output']>;
  cashInjectorPort?: Maybe<Scalars['String']['output']>;
  ccuComPort?: Maybe<Scalars['String']['output']>;
  ccuType?: Maybe<Scalars['String']['output']>;
  ccuVersion?: Maybe<Scalars['String']['output']>;
  collectContactStrategy: Array<Scalars['Boolean']['output']>;
  collectSleepsStrategy: Array<Scalars['Boolean']['output']>;
  customCCUOption?: Maybe<Scalars['String']['output']>;
  customKioskOption?: Maybe<Scalars['String']['output']>;
  customTermConfirm?: Maybe<Scalars['String']['output']>;
  deamonVersion?: Maybe<Scalars['String']['output']>;
  disableAircon?: Maybe<Scalars['Boolean']['output']>;
  firstCashDispensorAmount?: Maybe<Scalars['Int']['output']>;
  firstCashDispensorPort?: Maybe<Scalars['String']['output']>;
  firstUpperCameraDeviceId?: Maybe<Scalars['String']['output']>;
  icCardReaderNumber?: Maybe<Scalars['String']['output']>;
  icCardReaderType?: Maybe<Scalars['String']['output']>;
  idAuthenticatorType?: Maybe<Scalars['String']['output']>;
  idleMusic?: Maybe<Scalars['String']['output']>;
  ioBoardComPort?: Maybe<Scalars['String']['output']>;
  kakaoAPIKey?: Maybe<Scalars['String']['output']>;
  keyCardEncoder?: Maybe<Scalars['String']['output']>;
  keyCardServerAddress?: Maybe<Scalars['String']['output']>;
  lateCheckoutLimit?: Maybe<Scalars['String']['output']>;
  lateCheckoutMaximum?: Maybe<Scalars['String']['output']>;
  logDeviceNotFoundIgnore?: Maybe<Scalars['Boolean']['output']>;
  logSuspicious?: Maybe<Scalars['Boolean']['output']>;
  mainMenuHeading?: Maybe<Scalars['String']['output']>;
  mainMenuLayout: Array<Scalars['String']['output']>;
  maxKeyCardAmount?: Maybe<Scalars['Int']['output']>;
  mustCollectContact?: Maybe<Scalars['Boolean']['output']>;
  onSiteAdditionalPayList: Array<Scalars['String']['output']>;
  onSiteInstantPayList: Array<Scalars['String']['output']>;
  onSiteRenderList: Array<Scalars['String']['output']>;
  printReceiptStrategy?: Maybe<Scalars['String']['output']>;
  qrCameraDeviceId?: Maybe<Scalars['String']['output']>;
  qrReaderComPort?: Maybe<Scalars['String']['output']>;
  qrReaderType?: Maybe<Scalars['String']['output']>;
  relayComPort?: Maybe<Scalars['String']['output']>;
  relayConnectList: Array<Scalars['String']['output']>;
  reservationRenderList: Array<Scalars['String']['output']>;
  restrictBlockAddresses?: Maybe<Scalars['String']['output']>;
  rfidWriterComPort?: Maybe<Scalars['String']['output']>;
  secondCashDispensorAmount?: Maybe<Scalars['Int']['output']>;
  secondCashDispensorPort?: Maybe<Scalars['String']['output']>;
  secondUpperCameraDeviceId?: Maybe<Scalars['String']['output']>;
  showContactTimeRange?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  thermalPrinterComPort?: Maybe<Scalars['String']['output']>;
  usablePaymentType: Array<Scalars['String']['output']>;
  useAgreementTerms?: Maybe<Scalars['Boolean']['output']>;
  useAuthCancel?: Maybe<Scalars['Boolean']['output']>;
  useBlockMinor?: Maybe<Scalars['Boolean']['output']>;
  useBlockMinorInReservation?: Maybe<Scalars['Boolean']['output']>;
  useCheckPassport?: Maybe<Scalars['Boolean']['output']>;
  useCheckVehicle?: Maybe<Scalars['Boolean']['output']>;
  useCollectPersonalInfo?: Maybe<Scalars['Boolean']['output']>;
  useDetectGhostClean?: Maybe<Scalars['Boolean']['output']>;
  useDisableCarRequest?: Maybe<Scalars['Boolean']['output']>;
  useExtendReservationExpireAt?: Maybe<Scalars['Boolean']['output']>;
  useInspection?: Maybe<Scalars['Boolean']['output']>;
  useLateCheckout?: Maybe<Scalars['Boolean']['output']>;
  useLodgeSale?: Maybe<Scalars['Boolean']['output']>;
  usePowerOffAfterNeedClean?: Maybe<Scalars['Boolean']['output']>;
  usePreventAutoClean?: Maybe<Scalars['Boolean']['output']>;
  useRentSale?: Maybe<Scalars['Boolean']['output']>;
  useRoomNumberConfirm?: Maybe<Scalars['Boolean']['output']>;
  useSale?: Maybe<Scalars['Boolean']['output']>;
  useStandaloneCCU?: Maybe<Scalars['Boolean']['output']>;
  useUnderAgeLimit?: Maybe<Scalars['Boolean']['output']>;
  useWritableKeyDetection?: Maybe<Scalars['Boolean']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export enum KioskState {
  Active = 'ACTIVE',
  Error = 'ERROR',
  Maintenance = 'MAINTENANCE',
  Stopped = 'STOPPED'
}

export type LockOtpInput = {
  otp: Scalars['String']['input'];
};

export type LockOtpPayload = {
  __typename?: 'LockOtpPayload';
  success: Scalars['Boolean']['output'];
};

export enum LogLevel {
  Error = 'ERROR',
  Fatal = 'FATAL',
  Info = 'INFO',
  Warn = 'WARN'
}

export enum LogType {
  Log = 'LOG',
  Notice = 'NOTICE',
  Notification = 'NOTIFICATION'
}

export type MainPayPurchaseRequest = {
  accommodationId: Scalars['ID']['input'];
  accommodationName: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  goodsName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  publicPurchaseId: Scalars['ID']['input'];
  redirectionHost: Scalars['String']['input'];
};

export type MainPayPurchaseResolve = {
  authToken: Scalars['String']['input'];
  publicPurchaseId: Scalars['ID']['input'];
};

export type MainPayPurchaseResolveResult = {
  __typename?: 'MainPayPurchaseResolveResult';
  complete: Scalars['Boolean']['output'];
  resultCode: Scalars['String']['output'];
  resultMessage?: Maybe<Scalars['String']['output']>;
};

export type MainPayPurchaseSignature = {
  __typename?: 'MainPayPurchaseSignature';
  aid: Scalars['String']['output'];
  mbrNo: Scalars['String']['output'];
  mbrRefNo: Scalars['String']['output'];
  mobileUrl: Scalars['String']['output'];
  pcUrl: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
};

export enum MethodType {
  CommonMethod = 'CommonMethod',
  OtaMethod = 'OTAMethod'
}

export type Mileage = {
  __typename?: 'Mileage';
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  isUsed?: Maybe<Scalars['Boolean']['output']>;
  mileageUser?: Maybe<MileageUser>;
  parentPayment?: Maybe<Payment>;
  paymentType?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
};

export type MileageAggregation = {
  __typename?: 'MileageAggregation';
  phone: Scalars['String']['output'];
  totalAmount: Scalars['Int']['output'];
  usedAmount?: Maybe<Scalars['Int']['output']>;
};

export type MileageConnection = {
  __typename?: 'MileageConnection';
  edges: Array<Maybe<MileageEdge>>;
  pageInfo: PageInfo;
};

export type MileageEdge = {
  __typename?: 'MileageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Mileage>;
};

export type MileageQueryFilter = {
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
};

export type MileageRate = {
  __typename?: 'MileageRate';
  rate?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<ReserveTarget>;
};

export type MileageSetting = {
  __typename?: 'MileageSetting';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MileageSettingInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type MileageUser = {
  __typename?: 'MileageUser';
  accommodationId: Scalars['ID']['output'];
  createdAt: Scalars['Date']['output'];
  currentMileage: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lastVisitedAt: Scalars['Date']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  totalMileage: Scalars['Int']['output'];
  totalVisit: Scalars['Int']['output'];
};

export type MileageUserConnection = {
  __typename?: 'MileageUserConnection';
  edges: Array<Maybe<MileageUserEdge>>;
  pageInfo: PageInfo;
};

export type MileageUserEdge = {
  __typename?: 'MileageUserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MileageUser>;
};

export type MileageUserQueryFilter = {
  currentMileage?: InputMaybe<Scalars['Int']['input']>;
  dateFilterType?: InputMaybe<Scalars['String']['input']>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  totalVisit?: InputMaybe<Scalars['Int']['input']>;
};

export type ModifyAccommodationOtaInput = {
  forwardEmail?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  key?: InputMaybe<Ota>;
  name?: InputMaybe<Scalars['String']['input']>;
  registeredName?: InputMaybe<Scalars['String']['input']>;
  shortName?: InputMaybe<Scalars['String']['input']>;
  useMultiIntegration?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModifyCompanyAssigneeInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
};

export type ModifyOtaSettingInput = {
  data?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

export type ModifyOtaPriceContractionInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  fri?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  mon?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  reservationPackageId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sat?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  sun?: InputMaybe<Scalars['Boolean']['input']>;
  thu?: InputMaybe<Scalars['Boolean']['input']>;
  tue?: InputMaybe<Scalars['Boolean']['input']>;
  wed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModifyOtaProductInput = {
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  parserAcronyms?: InputMaybe<Array<Scalars['String']['input']>>;
  parserValues?: InputMaybe<Array<Scalars['String']['input']>>;
  reservationPackageId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ModifyPaymentInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  commissionAmount?: InputMaybe<Scalars['Int']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  isReservationPayment?: InputMaybe<Scalars['Boolean']['input']>;
  kioskId?: InputMaybe<Scalars['ID']['input']>;
  outstandingAmount?: InputMaybe<Scalars['Int']['input']>;
  paymentId: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ModifyReservationGroupInput = {
  companyAssigneeId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  reservedBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  useExpireAt?: InputMaybe<Scalars['Date']['input']>;
  useStartAt?: InputMaybe<Scalars['Date']['input']>;
};

export type ModifyReservationInput = {
  createdBy?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  guestName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  intendedType?: InputMaybe<Scalars['String']['input']>;
  isLongTerm?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  memoContent?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  otaNumber?: InputMaybe<Scalars['String']['input']>;
  paymentAmount?: InputMaybe<Scalars['Int']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  reservationGroupId?: InputMaybe<Scalars['ID']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sleeps?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  useExpireAt?: InputMaybe<Scalars['Date']['input']>;
  useStartAt?: InputMaybe<Scalars['Date']['input']>;
  useVehicle?: InputMaybe<Scalars['Boolean']['input']>;
  vehicleNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ModifyReservationPackageInput = {
  adjustPrice?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  packageOptions?: InputMaybe<Array<PackageOptionsInput>>;
  roomTypeId: Scalars['ID']['input'];
};

export type ModifyServiceProductInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ModifyUserContactInput = {
  contact?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _dev_addCmsOtaAccount: CmsOtaAccount;
  _dev_addDaemonMethod: CmsDaemonMethod;
  _dev_cleanPattern?: Maybe<Scalars['Boolean']['output']>;
  _dev_cleanUp?: Maybe<Scalars['Boolean']['output']>;
  _dev_deleteDaemonMethod: Scalars['Boolean']['output'];
  _dev_jobCount?: Maybe<Array<Maybe<JobCountSet>>>;
  _dev_migrateArticle: Scalars['Boolean']['output'];
  _dev_publishCmsActivityLog: CmsActivityLog;
  _dev_publishCmsBoardcastEvent: Scalars['Boolean']['output'];
  _dev_publishCmsCommand: Scalars['Boolean']['output'];
  _dev_publishDaemonCommand: Scalars['Boolean']['output'];
  _dev_testApi?: Maybe<Scalars['Boolean']['output']>;
  _dev_updateDaemonMethod: CmsDaemonMethod;
  activateSingleAccommodation?: Maybe<Accommodation>;
  addAccommodationOta: AccommodationOta;
  addCompanyAssignee: CompanyAssignee;
  addElasticSearchLog?: Maybe<ElasticResponseType>;
  addMileage?: Maybe<Mileage>;
  addMileageForPayment: Payment;
  addOTASetting?: Maybe<OtaSetting>;
  addOtaIntegrationSmsHistory: OtaIntegrationSmsHistory;
  addOtaPriceContraction: OtaPriceContraction;
  addOtaProduct: OtaProduct;
  addPayments: Array<Maybe<Payment>>;
  addReservation?: Maybe<Reservation>;
  addReservationGroup: ReservationGroup;
  addReservationPackage: ReservationPackage;
  addServiceProduct: ServiceProduct;
  addUserContact?: Maybe<UserContact>;
  addUserToAccommodation: Accommodation;
  agreeTerms: Scalars['Boolean']['output'];
  anonymousSignIn?: Maybe<SuccessOrErrorBool>;
  applyCoupon: CouponUsageHistory;
  assignRoomRequest: Room;
  assignRoomToReservation?: Maybe<Reservation>;
  bulkUpdateRoomDevice: Array<RoomDevice>;
  cancelAssignReservation?: Maybe<Reservation>;
  cancelMileage?: Maybe<Mileage>;
  cancelPayment: Payment;
  cancelPreAssignedRoom: Scalars['Boolean']['output'];
  changePassword?: Maybe<User>;
  changePasswordBySMSAuth?: Maybe<Scalars['Boolean']['output']>;
  changeReservationRoom?: Maybe<Reservation>;
  checkAccommodationRoomDevicesIntegrity?: Maybe<Scalars['Boolean']['output']>;
  checkAllAccommodationsRoomDevicesIntegrity?: Maybe<Scalars['Boolean']['output']>;
  checkInReservationByGuestSession?: Maybe<Reservation>;
  checkMailBox?: Maybe<Scalars['Boolean']['output']>;
  checkOutReservationByGuestSession?: Maybe<Reservation>;
  clearAllDataRelatedToCms?: Maybe<Scalars['Boolean']['output']>;
  confirmMileageSMSAuth?: Maybe<Scalars['String']['output']>;
  confirmSMSAuth?: Maybe<Scalars['String']['output']>;
  controlRoomDeviceByGuestSession?: Maybe<Scalars['Boolean']['output']>;
  createAccommodation: Accommodation;
  createAccommodationArticle: AccommodationArticle;
  createAccommodationAudioOption: AudioOption;
  createAccommodationCleaningPeriod: CleaningPeriod;
  createAccommodationKiosk: Kiosk;
  createArticle: Article;
  createCmsOtaProductMap: CmsOtaProductMap;
  createCoamPaymentConfigs: Array<Maybe<CoamPaymentConfig>>;
  createConciergeAmenity: Array<Maybe<ConciergeAmenity>>;
  createConciergeAmenityCategory: Array<Maybe<ConciergeAmenityCategory>>;
  createConciergeOrder?: Maybe<ConciergeOrder>;
  createConciergeServiceNotice: Array<Maybe<ConciergeServiceNotice>>;
  createEncryptionKeyOption?: Maybe<SystemOption>;
  createOrUpdateDailyQuantity?: Maybe<DailyQuantity>;
  createOrUpdatePgConfig?: Maybe<PgConfig>;
  createOrderRequestTemplate: Array<Maybe<OrderRequestTemplate>>;
  createPrice: Price;
  createPricePeriod: PricePeriod;
  createPublicPurchaseRequest?: Maybe<PublicPurchase>;
  createReservationMemo?: Maybe<ReservationMemo>;
  createRoom: Room;
  createRoomDevice: RoomDevice;
  createRoomMemo?: Maybe<RoomMemo>;
  createRoomService: Array<Maybe<RoomService>>;
  createRoomServiceCategory: Array<Maybe<RoomServiceCategory>>;
  createRoomType: RoomType;
  createTheme: Theme;
  deduplicateCmsReservations?: Maybe<Scalars['Boolean']['output']>;
  delelteAccommodationAudioOption?: Maybe<Scalars['Boolean']['output']>;
  deleteAccommodation?: Maybe<SuccessOrError>;
  deleteAccommodationArticle?: Maybe<SuccessOrError>;
  deleteAccommodationCleaningPeriod?: Maybe<SuccessOrError>;
  deleteAccommodationKiosk?: Maybe<SuccessOrError>;
  deleteAccommodationOta: Scalars['Boolean']['output'];
  deleteAccommodationThirdParty?: Maybe<Scalars['Boolean']['output']>;
  deleteAmanoPreDiscountInfo: DeletePreDiscountInfoResponse;
  deleteArticle: Scalars['Boolean']['output'];
  deleteCompanyAssignee: Scalars['Boolean']['output'];
  deleteConciergeAmenity: Scalars['Boolean']['output'];
  deleteConciergeAmenityCategory: Scalars['Boolean']['output'];
  deleteConciergeServiceNotice: Scalars['Boolean']['output'];
  deleteConciergeServiceNoticeImage: Scalars['Boolean']['output'];
  deleteEmployee?: Maybe<Scalars['Boolean']['output']>;
  deleteOrderRequestTemplate: Scalars['Boolean']['output'];
  deleteOtaPriceContraction: Scalars['Boolean']['output'];
  deleteOtaProduct: Scalars['Boolean']['output'];
  deletePaymentsByPeriod: Scalars['Boolean']['output'];
  deletePlatform: Scalars['Boolean']['output'];
  deletePrice: SuccessOrError;
  deletePricePeriod: SuccessOrError;
  deleteReservation: Reservation;
  deleteReservationGroup?: Maybe<Scalars['Boolean']['output']>;
  deleteReservationMemo?: Maybe<Scalars['Boolean']['output']>;
  deleteReservationPackage: Scalars['Boolean']['output'];
  deleteReservationsByPeriod: Scalars['Boolean']['output'];
  deleteRoom?: Maybe<SuccessOrError>;
  deleteRoomDevice?: Maybe<SuccessOrError>;
  deleteRoomMemo?: Maybe<SuccessOrError>;
  deleteRoomService: Scalars['Boolean']['output'];
  deleteRoomServiceCategory: Scalars['Boolean']['output'];
  deleteRoomType?: Maybe<SuccessOrError>;
  deleteServiceProduct: Scalars['Boolean']['output'];
  deleteSystemOption?: Maybe<SystemOption>;
  deleteTheme?: Maybe<SuccessOrError>;
  deleteThirdPartyProperty?: Maybe<Scalars['Boolean']['output']>;
  deleteUserContact?: Maybe<Scalars['Boolean']['output']>;
  deleteUserFromAccommodation: Accommodation;
  deleteUserNotification: Scalars['Boolean']['output'];
  devThirdPartyTest?: Maybe<Scalars['Boolean']['output']>;
  disableUser?: Maybe<Scalars['Boolean']['output']>;
  expireCoupon: Coupon;
  generateCaptcha: Captcha;
  getAlreadyFixedReservationCount?: Maybe<FixedReservationCount>;
  getReservationGuestSessionToken: Scalars['String']['output'];
  getThirdPartyToken?: Maybe<Scalars['String']['output']>;
  handleEmergencyNotification: Scalars['Boolean']['output'];
  insertAmanoPreDiscountInfo: InsertPreDiscountInfoResponse;
  issueCoupon: Array<Coupon>;
  lockOtpKey: LockOtpPayload;
  markExisitingReservationJobIds?: Maybe<Scalars['Boolean']['output']>;
  markPaidPayments: Array<Payment>;
  markReadUserNotifications: Scalars['Int']['output'];
  markRoomCarResponse: Scalars['Boolean']['output'];
  markRoomSelected: Room;
  modifyAccommodationOta: AccommodationOta;
  modifyCompanyAssignee: CompanyAssignee;
  modifyCompanyProfile: AccommodationOta;
  modifyOTASetting?: Maybe<OtaSetting>;
  modifyOtaPriceContraction: OtaPriceContraction;
  modifyOtaProduct: OtaProduct;
  modifyPayment?: Maybe<Payment>;
  modifyReservation: Reservation;
  modifyReservationGroup: ReservationGroup;
  modifyReservationPackage: ReservationPackage;
  modifyServiceProduct: ServiceProduct;
  modifyThirdPartyAccessOnAccommodation?: Maybe<Scalars['Boolean']['output']>;
  modifyThirdPartyProperty?: Maybe<ThirdPartyProperty>;
  modifyUserContact?: Maybe<UserContact>;
  parseOTAMessage?: Maybe<Array<Maybe<Reservation>>>;
  parseOTAMessageWithError: Array<ReservationParseResponse>;
  parseOtaMessageV2: Array<ReservationParseResponse>;
  platformSignIn: CmsReturnType;
  preAssignRoom: PreAssignedRoom;
  preregisterParkingByGuestSession: Scalars['Boolean']['output'];
  processPaymentDailyAnalysis?: Maybe<Scalars['Boolean']['output']>;
  processReservationDailyAnalysis?: Maybe<Scalars['Boolean']['output']>;
  publishAccommodationNotification: AccommodationNotification;
  publishKioskSystemNoficiation: Scalars['Boolean']['output'];
  publishUserNotification: Array<Maybe<UserNotification>>;
  registerThirdParty?: Maybe<ThirdPartyUser>;
  registerThirdPartyProperty?: Maybe<ThirdPartyProperty>;
  reportCommandResult: Scalars['Boolean']['output'];
  requestAnonymousSignIn: AnonymouseSignInTokenPair;
  requestCoampayData: CoampayData;
  requestEmailVerification?: Maybe<Scalars['Boolean']['output']>;
  requestFaceDetection: Array<Maybe<FaceDetection>>;
  requestMainpayPurchaseReady: MainPayPurchaseSignature;
  requestMileageSMSAuth?: Maybe<RequestSmsPayload>;
  requestSMSAuth?: Maybe<SuccessOrErrorBool>;
  resendSmsForReservation?: Maybe<Scalars['Boolean']['output']>;
  reservationCheckIn?: Maybe<Reservation>;
  reservationCheckOut: Reservation;
  resetBookingDatabase: Scalars['Boolean']['output'];
  resetConciergeServiceDatabase?: Maybe<Scalars['Boolean']['output']>;
  resetPaymentDatabase: Scalars['Boolean']['output'];
  resetReservationDatabase: Scalars['Boolean']['output'];
  resetRoomDatabase: Scalars['Boolean']['output'];
  resetSubscriptionDatabase?: Maybe<Scalars['Boolean']['output']>;
  resetUserDatabase: Scalars['Boolean']['output'];
  resolveMainpayPurchase: MainPayPurchaseResolveResult;
  resolveOutstandingPayment: Payment;
  resyncUserAccommodation?: Maybe<Scalars['Boolean']['output']>;
  revokeToken?: Maybe<TokenPayload>;
  roomCheckIn?: Maybe<Reservation>;
  roomCheckOut?: Maybe<Reservation>;
  sendConciergeSlackNotification: Scalars['Boolean']['output'];
  sendInquiryEmail?: Maybe<SuccessOrError>;
  sendKioskControlPacket?: Maybe<Scalars['Boolean']['output']>;
  sendMailTest?: Maybe<Scalars['Boolean']['output']>;
  sendRcuControlPacket: Scalars['Boolean']['output'];
  sendRecognitionEmail?: Maybe<Scalars['Boolean']['output']>;
  sendSlackNotification: Scalars['Boolean']['output'];
  setAccommodationCheckInAndOut?: Maybe<Accommodation>;
  setConciergeServiceSettings: Array<Maybe<ConciergeServiceSetting>>;
  setConciergeWorkSetting: Array<Maybe<ConciergeWorkSetting>>;
  setHomeAccommodation?: Maybe<Accommodation>;
  setKioskOptions?: Maybe<Array<Maybe<KioskOption>>>;
  setMileageSettings?: Maybe<Array<Maybe<MileageSetting>>>;
  setOtpKey: SetOtpPayload;
  setReservationSMSTemplates: Array<ReservationSmsTemplate>;
  setReservationSettings?: Maybe<Array<Maybe<ReservationSetting>>>;
  setRoomState: Room;
  setRoomStateByStaff: Room;
  signIn?: Maybe<SignInPayload>;
  signInByAdmin?: Maybe<SignInPayload>;
  signUp?: Maybe<SignUpPayload>;
  syncCmsOtaProducts: CmsReturnType;
  synchronizationReservation: CmsReturnType;
  synchronizationSalesRoomInfo: CmsReturnType;
  thirdPartySignIn?: Maybe<Scalars['Boolean']['output']>;
  updateAccommodation?: Maybe<Accommodation>;
  updateAccommodationArticle?: Maybe<AccommodationArticle>;
  updateAccommodationAudioOption: AudioOption;
  updateAccommodationCleaningPeriod?: Maybe<CleaningPeriod>;
  updateAccommodationInventoryMode?: Maybe<Scalars['Boolean']['output']>;
  updateAccommodationKiosk?: Maybe<Kiosk>;
  updateAmanoPreDiscountInfo: UpdatePreDiscountInfoResponse;
  updateArticle: Article;
  updateCmsActivityLogReadStatus: Scalars['Boolean']['output'];
  updateCmsOtaProductMaps: Scalars['Boolean']['output'];
  updateCoamPaymentConfig: CoamPaymentConfig;
  updateConciergeAmenity: Array<Maybe<ConciergeAmenity>>;
  updateConciergeAmenityCategory: Array<Maybe<ConciergeAmenityCategory>>;
  updateConciergeOrder?: Maybe<ConciergeOrder>;
  updateConciergeServiceNotice: Array<Maybe<ConciergeServiceNotice>>;
  updateEmployee: User;
  updateInfo?: Maybe<User>;
  updateMileageUser?: Maybe<MileageUser>;
  updateOrderRequestTemplate: Array<Maybe<OrderRequestTemplate>>;
  updatePrice?: Maybe<Price>;
  updatePricePeriod?: Maybe<PricePeriod>;
  updateReservationMemo?: Maybe<ReservationMemo>;
  updateRoom?: Maybe<Room>;
  updateRoomDevice?: Maybe<RoomDevice>;
  updateRoomInfoDatas?: Maybe<Array<Maybe<Room>>>;
  updateRoomKey?: Maybe<Room>;
  updateRoomMemo?: Maybe<RoomMemo>;
  updateRoomService: Array<Maybe<RoomService>>;
  updateRoomServiceCategory: Array<Maybe<RoomServiceCategory>>;
  updateRoomType?: Maybe<RoomType>;
  updateRooms: Array<Maybe<Room>>;
  updateSalesRoomInfo: CmsReturnType;
  updateTheme?: Maybe<Theme>;
  updateThirdParty?: Maybe<ThirdPartyUser>;
  uploadAccommodationArticleImages: AccommodationArticle;
  uploadAccommodationImage?: Maybe<Accommodation>;
  uploadArticleAttachments: Article;
  uploadAuthImages?: Maybe<Array<Scalars['String']['output']>>;
  uploadConciergeAmenityImage: Scalars['String']['output'];
  uploadConciergeServiceCategoryImage: Scalars['String']['output'];
  uploadConciergeServiceNoticeImage: Array<Maybe<Scalars['String']['output']>>;
  uploadKioskBannerImages?: Maybe<Array<Scalars['String']['output']>>;
  uploadRoomAmenityIcon?: Maybe<SuccessOrError>;
  uploadRoomImage: Room;
  uploadRoomServiceImage: Scalars['String']['output'];
  uploadRoomTypeImage: RoomType;
  uploadThumbnail?: Maybe<Scalars['String']['output']>;
  verifyEmail?: Maybe<SuccessOrErrorBool>;
  waitAnonymousSignIn?: Maybe<Scalars['String']['output']>;
  waitPublicPurchaseResolved?: Maybe<Reservation>;
  wingsProcessCheckOut: WingsCheckOutResult;
  wingsProcessWalkIn?: Maybe<WingsCheckInResult>;
  wingsReportKeyIssue: Scalars['Boolean']['output'];
  wingsReportKeyRetrieve: WingsKeyRetrieveResult;
  wingsReservationCancelCheckIn?: Maybe<Scalars['Boolean']['output']>;
  wingsReservationCheckIn: WingsCheckInResult;
};


export type Mutation_Dev_AddCmsOtaAccountArgs = {
  input: AddCmsOtaAccount;
};


export type Mutation_Dev_AddDaemonMethodArgs = {
  input: AddDaemonMethod;
};


export type Mutation_Dev_CleanPatternArgs = {
  match?: InputMaybe<Scalars['String']['input']>;
};


export type Mutation_Dev_CleanUpArgs = {
  subKey?: InputMaybe<Scalars['String']['input']>;
};


export type Mutation_Dev_DeleteDaemonMethodArgs = {
  name: Scalars['String']['input'];
};


export type Mutation_Dev_JobCountArgs = {
  subKey?: InputMaybe<Scalars['String']['input']>;
};


export type Mutation_Dev_MigrateArticleArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type Mutation_Dev_PublishCmsActivityLogArgs = {
  input?: InputMaybe<AddCmsActivityLogInput>;
};


export type Mutation_Dev_PublishCmsBoardcastEventArgs = {
  input?: InputMaybe<PublishCmsBroadcastEventinput>;
};


export type Mutation_Dev_PublishCmsCommandArgs = {
  input?: InputMaybe<PublishCmsCommandinput>;
};


export type Mutation_Dev_PublishDaemonCommandArgs = {
  input?: InputMaybe<PublishDaemonCommandinput>;
};


export type Mutation_Dev_TestApiArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  data2?: InputMaybe<Scalars['String']['input']>;
};


export type Mutation_Dev_UpdateDaemonMethodArgs = {
  input: UpdateDaemonMethod;
};


export type MutationActivateSingleAccommodationArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type MutationAddAccommodationOtaArgs = {
  input: AddAccommodationOtaInput;
};


export type MutationAddCompanyAssigneeArgs = {
  accommodationOtaId: Scalars['ID']['input'];
  input: AddCompanyAssigneeInput;
};


export type MutationAddElasticSearchLogArgs = {
  doc: Scalars['JSON']['input'];
  index: Scalars['String']['input'];
};


export type MutationAddMileageArgs = {
  input: AddMileageInput;
};


export type MutationAddMileageForPaymentArgs = {
  paymentId: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAddOtaSettingArgs = {
  input: AddOtaSettingInput;
};


export type MutationAddOtaIntegrationSmsHistoryArgs = {
  input: AddOtaIntegrationSmsHistoryInput;
};


export type MutationAddOtaPriceContractionArgs = {
  accommodationOtaId: Scalars['ID']['input'];
  input: AddOtaPriceContractionInput;
};


export type MutationAddOtaProductArgs = {
  input: AddOtaProductInput;
};


export type MutationAddPaymentsArgs = {
  accommodationId: Scalars['ID']['input'];
  coupon?: InputMaybe<CouponInput>;
  input: Array<AddPaymentInput>;
};


export type MutationAddReservationArgs = {
  input: AddReservationInput;
  needCheckIn?: InputMaybe<Scalars['Boolean']['input']>;
  sendSMS?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAddReservationGroupArgs = {
  input: AddReservationGroupInput;
};


export type MutationAddReservationPackageArgs = {
  input: AddReservationPackageInput;
};


export type MutationAddServiceProductArgs = {
  input: AddServiceProductInput;
};


export type MutationAddUserContactArgs = {
  input: UserContactInput;
};


export type MutationAddUserToAccommodationArgs = {
  accommodationId: Scalars['ID']['input'];
  authority?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationAgreeTermsArgs = {
  isAgreed: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
};


export type MutationAnonymousSignInArgs = {
  token: Scalars['String']['input'];
};


export type MutationApplyCouponArgs = {
  accommodationId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
  purchaseAmount: Scalars['Int']['input'];
  roomTypeId: Scalars['ID']['input'];
  usageHashMask?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAssignRoomRequestArgs = {
  orderBy?: InputMaybe<Scalars['String']['input']>;
  reservationType?: InputMaybe<Scalars['String']['input']>;
  roomTypeId: Scalars['ID']['input'];
};


export type MutationAssignRoomToReservationArgs = {
  input: AssignReservationInput;
};


export type MutationBulkUpdateRoomDeviceArgs = {
  ids: Array<Scalars['ID']['input']>;
  input: DeviceInput;
};


export type MutationCancelAssignReservationArgs = {
  reservationId: Scalars['ID']['input'];
};


export type MutationCancelMileageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCancelPaymentArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationCancelPreAssignedRoomArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangePasswordBySmsAuthArgs = {
  input: ChangePasswordBySmsAuthInput;
};


export type MutationChangeReservationRoomArgs = {
  input: ChangeReservationRoomInput;
};


export type MutationCheckAccommodationRoomDevicesIntegrityArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type MutationCheckInReservationByGuestSessionArgs = {
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};


export type MutationCheckMailBoxArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckOutReservationByGuestSessionArgs = {
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};


export type MutationClearAllDataRelatedToCmsArgs = {
  input?: InputMaybe<ClearAllDataRelatedToCmsInput>;
};


export type MutationConfirmMileageSmsAuthArgs = {
  number: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationConfirmSmsAuthArgs = {
  number: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationControlRoomDeviceByGuestSessionArgs = {
  data?: InputMaybe<Scalars['String']['input']>;
  deviceType: Scalars['String']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};


export type MutationCreateAccommodationArgs = {
  input: CreateAccommodationInput;
};


export type MutationCreateAccommodationArticleArgs = {
  input?: InputMaybe<CreateAccommodationArticleInput>;
};


export type MutationCreateAccommodationAudioOptionArgs = {
  input: CreateAudioOptionInput;
};


export type MutationCreateAccommodationCleaningPeriodArgs = {
  accommodationId: Scalars['ID']['input'];
  endTime: Scalars['Date']['input'];
  startTime: Scalars['Date']['input'];
};


export type MutationCreateAccommodationKioskArgs = {
  input: CreateKioskInput;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateCmsOtaProductMapArgs = {
  input?: InputMaybe<CreateCmsOtaProductMapInput>;
};


export type MutationCreateCoamPaymentConfigsArgs = {
  input: Array<InputMaybe<CreateCoamPaymentConfig>>;
};


export type MutationCreateConciergeAmenityArgs = {
  input: Array<InputMaybe<CreateConciergeAmenity>>;
};


export type MutationCreateConciergeAmenityCategoryArgs = {
  input: Array<InputMaybe<CreateConciergeAmenityCategory>>;
};


export type MutationCreateConciergeOrderArgs = {
  input: CreateConciergeOrderInput;
  sessionToken: Scalars['String']['input'];
};


export type MutationCreateConciergeServiceNoticeArgs = {
  input: Array<InputMaybe<CreateConciergeServiceNotice>>;
};


export type MutationCreateEncryptionKeyOptionArgs = {
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOrUpdateDailyQuantityArgs = {
  input: DailyQuantityInput;
};


export type MutationCreateOrUpdatePgConfigArgs = {
  input: CreateOrUpdatePgConfigInput;
};


export type MutationCreateOrderRequestTemplateArgs = {
  input: Array<InputMaybe<CreateOrderRequestTemplate>>;
};


export type MutationCreatePriceArgs = {
  input: CreatePriceInput;
};


export type MutationCreatePricePeriodArgs = {
  input?: InputMaybe<CreatePricePeriodInput>;
};


export type MutationCreatePublicPurchaseRequestArgs = {
  input: CreatePublicPurchaseRequestInput;
};


export type MutationCreateReservationMemoArgs = {
  input: CreateReservationMemoInput;
};


export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


export type MutationCreateRoomDeviceArgs = {
  input: DeviceInput;
  roomId: Scalars['ID']['input'];
};


export type MutationCreateRoomMemoArgs = {
  input: CreateRoomMemoInput;
};


export type MutationCreateRoomServiceArgs = {
  input: Array<InputMaybe<CreateRoomService>>;
};


export type MutationCreateRoomServiceCategoryArgs = {
  input: Array<InputMaybe<CreateRoomServiceCategory>>;
};


export type MutationCreateRoomTypeArgs = {
  input: CreateRoomTypeInput;
};


export type MutationCreateThemeArgs = {
  accommodationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeduplicateCmsReservationsArgs = {
  input?: InputMaybe<DeduplicateCmsReservationInput>;
};


export type MutationDelelteAccommodationAudioOptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationCleaningPeriodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationKioskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationOtaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccommodationThirdPartyArgs = {
  accommodationId: Scalars['ID']['input'];
  provider: ThirdPartyProvider;
};


export type MutationDeleteAmanoPreDiscountInfoArgs = {
  input: AmanoDeletePreDiscountInfoInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyAssigneeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteConciergeAmenityArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteConciergeAmenityCategoryArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteConciergeServiceNoticeArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteConciergeServiceNoticeImageArgs = {
  accommodationId: Scalars['ID']['input'];
  images: Array<InputMaybe<Scalars['String']['input']>>;
  serviceNoticeId: Scalars['ID']['input'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderRequestTemplateArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteOtaPriceContractionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOtaProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentsByPeriodArgs = {
  accommodationId: Scalars['ID']['input'];
  dateType?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


export type MutationDeletePlatformArgs = {
  input: DeletePlatformInput;
};


export type MutationDeletePriceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePricePeriodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationMemoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationPackageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationsByPeriodArgs = {
  accommodationId: Scalars['ID']['input'];
  dateType?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


export type MutationDeleteRoomArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoomDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoomMemoArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoomServiceArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteRoomServiceCategoryArgs = {
  id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteRoomTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSystemOptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThemeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteThirdPartyPropertyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserContactArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserFromAccommodationArgs = {
  accommodationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationDeleteUserNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDevThirdPartyTestArgs = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  boolData?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDisableUserArgs = {
  disable?: InputMaybe<Scalars['Boolean']['input']>;
  identity: Scalars['String']['input'];
};


export type MutationExpireCouponArgs = {
  code: Scalars['ID']['input'];
};


export type MutationGetReservationGuestSessionTokenArgs = {
  pinCode: Scalars['String']['input'];
  reservationId: Scalars['ID']['input'];
};


export type MutationGetThirdPartyTokenArgs = {
  name: Scalars['String']['input'];
};


export type MutationHandleEmergencyNotificationArgs = {
  input: HandleEmergencyNotificationInput;
};


export type MutationInsertAmanoPreDiscountInfoArgs = {
  input: AmanoInsertPreDiscountInfoInput;
};


export type MutationIssueCouponArgs = {
  input: AddCouponInput;
};


export type MutationLockOtpKeyArgs = {
  input?: InputMaybe<LockOtpInput>;
};


export type MutationMarkPaidPaymentsArgs = {
  paymentIds: Array<Scalars['ID']['input']>;
};


export type MutationMarkReadUserNotificationsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMarkRoomCarResponseArgs = {
  kioskId: Scalars['ID']['input'];
  rcuId: Scalars['Int']['input'];
};


export type MutationMarkRoomSelectedArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationModifyAccommodationOtaArgs = {
  input: ModifyAccommodationOtaInput;
};


export type MutationModifyCompanyAssigneeArgs = {
  input: ModifyCompanyAssigneeInput;
};


export type MutationModifyCompanyProfileArgs = {
  accommodationOtaId: Scalars['ID']['input'];
  input: CompanyProfileInput;
};


export type MutationModifyOtaSettingArgs = {
  input: ModifyOtaSettingInput;
};


export type MutationModifyOtaPriceContractionArgs = {
  input: ModifyOtaPriceContractionInput;
};


export type MutationModifyOtaProductArgs = {
  input: ModifyOtaProductInput;
};


export type MutationModifyPaymentArgs = {
  input: ModifyPaymentInput;
};


export type MutationModifyReservationArgs = {
  input: ModifyReservationInput;
};


export type MutationModifyReservationGroupArgs = {
  input: ModifyReservationGroupInput;
};


export type MutationModifyReservationPackageArgs = {
  input: ModifyReservationPackageInput;
};


export type MutationModifyServiceProductArgs = {
  input: ModifyServiceProductInput;
};


export type MutationModifyThirdPartyAccessOnAccommodationArgs = {
  accommodationId: Scalars['ID']['input'];
  allow: Scalars['Boolean']['input'];
  thirdParty: Scalars['String']['input'];
};


export type MutationModifyThirdPartyPropertyArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ThirdPartyPropertyInput>;
};


export type MutationModifyUserContactArgs = {
  input: ModifyUserContactInput;
};


export type MutationParseOtaMessageArgs = {
  message: Scalars['String']['input'];
  ota: Ota;
};


export type MutationParseOtaMessageWithErrorArgs = {
  message: Scalars['String']['input'];
  ota: Ota;
};


export type MutationParseOtaMessageV2Args = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  ota: Ota;
};


export type MutationPlatformSignInArgs = {
  input: PlatformSignInInput;
};


export type MutationPreAssignRoomArgs = {
  input: PreAssignRoomInput;
};


export type MutationPreregisterParkingByGuestSessionArgs = {
  input: PreregisterParkingByGuestSessionInput;
};


export type MutationProcessPaymentDailyAnalysisArgs = {
  for?: InputMaybe<Scalars['Int']['input']>;
  targetDate: Scalars['String']['input'];
};


export type MutationProcessReservationDailyAnalysisArgs = {
  for?: InputMaybe<Scalars['Int']['input']>;
  targetDate: Scalars['String']['input'];
};


export type MutationPublishAccommodationNotificationArgs = {
  input: AddAccommodationNotificationInput;
};


export type MutationPublishKioskSystemNoficiationArgs = {
  input: AddKioskSystemNotificationInput;
};


export type MutationPublishUserNotificationArgs = {
  input?: InputMaybe<UserNotificationInput>;
};


export type MutationRegisterThirdPartyArgs = {
  input?: InputMaybe<ThirdPartyInput>;
};


export type MutationRegisterThirdPartyPropertyArgs = {
  input?: InputMaybe<ThirdPartyPropertyInput>;
};


export type MutationReportCommandResultArgs = {
  input: ReportCommandResultInput;
};


export type MutationRequestAnonymousSignInArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRequestCoampayDataArgs = {
  input: CoampayPurchaseInput;
};


export type MutationRequestFaceDetectionArgs = {
  kioskId: Scalars['ID']['input'];
  pictures: Array<Scalars['Upload']['input']>;
};


export type MutationRequestMainpayPurchaseReadyArgs = {
  input: MainPayPurchaseRequest;
};


export type MutationRequestMileageSmsAuthArgs = {
  phone: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRequestSmsAuthArgs = {
  phone: Scalars['String']['input'];
};


export type MutationResendSmsForReservationArgs = {
  id: Scalars['ID']['input'];
  roomName?: InputMaybe<Scalars['String']['input']>;
  roomTypeName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReservationCheckInArgs = {
  reservationId: Scalars['ID']['input'];
  useExpireAtLimit?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReservationCheckOutArgs = {
  reservationId: Scalars['ID']['input'];
};


export type MutationResolveMainpayPurchaseArgs = {
  input: MainPayPurchaseResolve;
};


export type MutationResolveOutstandingPaymentArgs = {
  paymentId: Scalars['ID']['input'];
  resolvePaymentInput: AddPaymentInput;
};


export type MutationRoomCheckInArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationRoomCheckOutArgs = {
  roomId: Scalars['ID']['input'];
};


export type MutationSendConciergeSlackNotificationArgs = {
  input: ConciergeSlackNotificationInfo;
};


export type MutationSendInquiryEmailArgs = {
  input: SendInquiryEmailInput;
};


export type MutationSendKioskControlPacketArgs = {
  data: Scalars['String']['input'];
  kioskId: Scalars['ID']['input'];
};


export type MutationSendMailTestArgs = {
  html?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendRcuControlPacketArgs = {
  data: Scalars['String']['input'];
  kioskId: Scalars['ID']['input'];
};


export type MutationSendRecognitionEmailArgs = {
  basicInfos?: InputMaybe<Array<InputMaybe<InfoInput>>>;
  detailInfos?: InputMaybe<Array<InputMaybe<InfoInput>>>;
  fixedTitle?: InputMaybe<Scalars['String']['input']>;
  guestPicture?: InputMaybe<Array<Scalars['Upload']['input']>>;
  hideAgreement?: InputMaybe<Scalars['Boolean']['input']>;
  idPicture?: InputMaybe<Scalars['Upload']['input']>;
  titlePrefix?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendSlackNotificationArgs = {
  channel: Scalars['String']['input'];
  payload: Scalars['String']['input'];
};


export type MutationSetAccommodationCheckInAndOutArgs = {
  accommodationId: Scalars['ID']['input'];
  defaultCheckIn: Scalars['Date']['input'];
  defaultCheckOut: Scalars['Date']['input'];
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetConciergeServiceSettingsArgs = {
  accommodationId: Scalars['ID']['input'];
  inputs: Array<InputMaybe<ConciergeServiceSettingInput>>;
};


export type MutationSetConciergeWorkSettingArgs = {
  accommodationId: Scalars['ID']['input'];
  inputs: Array<InputMaybe<ConciergeWorkSettingInput>>;
};


export type MutationSetHomeAccommodationArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type MutationSetKioskOptionsArgs = {
  inputs?: InputMaybe<Array<InputMaybe<KioskOptionInput>>>;
  kioskId: Scalars['ID']['input'];
};


export type MutationSetMileageSettingsArgs = {
  accommodationId: Scalars['ID']['input'];
  inputs?: InputMaybe<Array<InputMaybe<MileageSettingInput>>>;
};


export type MutationSetReservationSmsTemplatesArgs = {
  accommodationId: Scalars['ID']['input'];
  inputs: Array<ReservationSmsTemplateInput>;
};


export type MutationSetReservationSettingsArgs = {
  accommodationId: Scalars['ID']['input'];
  inputs?: InputMaybe<Array<InputMaybe<ReservationSettingInput>>>;
};


export type MutationSetRoomStateArgs = {
  id: Scalars['ID']['input'];
  state: RoomState;
};


export type MutationSetRoomStateByStaffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignInByAdminArgs = {
  identity: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSyncCmsOtaProductsArgs = {
  input?: InputMaybe<SyncCmsOtaProductsInput>;
};


export type MutationSynchronizationReservationArgs = {
  input: SynchronizationReservationInput;
};


export type MutationSynchronizationSalesRoomInfoArgs = {
  input: SynchronizationSalesRoomInfoInput;
};


export type MutationThirdPartySignInArgs = {
  accommodationId: Scalars['ID']['input'];
  code?: InputMaybe<Scalars['String']['input']>;
  credential?: InputMaybe<Scalars['String']['input']>;
  isRenew?: InputMaybe<Scalars['Boolean']['input']>;
  provider: ThirdPartyProvider;
  scope: Scalars['String']['input'];
};


export type MutationUpdateAccommodationArgs = {
  input: UpdateAccommodationInput;
};


export type MutationUpdateAccommodationArticleArgs = {
  input?: InputMaybe<UpdateAccommodationArticleInput>;
};


export type MutationUpdateAccommodationAudioOptionArgs = {
  input: UpdateAudioOptionInput;
};


export type MutationUpdateAccommodationCleaningPeriodArgs = {
  endTime: Scalars['Date']['input'];
  id: Scalars['ID']['input'];
  startTime: Scalars['Date']['input'];
};


export type MutationUpdateAccommodationInventoryModeArgs = {
  input?: InputMaybe<UpdateAccommodationInventoryModeInput>;
};


export type MutationUpdateAccommodationKioskArgs = {
  input: UpdateKioskInput;
};


export type MutationUpdateAmanoPreDiscountInfoArgs = {
  input: AmanoUpdatePreDiscountInfoInput;
};


export type MutationUpdateArticleArgs = {
  input: UpdateArticleInput;
};


export type MutationUpdateCmsActivityLogReadStatusArgs = {
  input: UpdateCmsActivityLogReadStatus;
};


export type MutationUpdateCmsOtaProductMapsArgs = {
  input?: InputMaybe<UpdateCmsOtaProductMapsInput>;
};


export type MutationUpdateCoamPaymentConfigArgs = {
  input: UpdateCoamPaymentConfig;
};


export type MutationUpdateConciergeAmenityArgs = {
  input: Array<InputMaybe<UpdateConciergeAmenity>>;
};


export type MutationUpdateConciergeAmenityCategoryArgs = {
  input: Array<InputMaybe<UpdateConciergeAmenityCategory>>;
};


export type MutationUpdateConciergeOrderArgs = {
  accommodationId?: InputMaybe<Scalars['String']['input']>;
  input: UpdateConciergeOrderInput;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateConciergeServiceNoticeArgs = {
  input: Array<InputMaybe<UpdateConciergeServiceNotice>>;
};


export type MutationUpdateEmployeeArgs = {
  input: EmployeeInput;
};


export type MutationUpdateInfoArgs = {
  input: UserInput;
};


export type MutationUpdateMileageUserArgs = {
  input: UpdateMileageUserInput;
};


export type MutationUpdateOrderRequestTemplateArgs = {
  input: Array<InputMaybe<UpdateOrderRequestTemplate>>;
};


export type MutationUpdatePriceArgs = {
  input: UpdatePriceInput;
};


export type MutationUpdatePricePeriodArgs = {
  input?: InputMaybe<UpdatePricePeriodInput>;
};


export type MutationUpdateReservationMemoArgs = {
  input: UpdateReservationMemoInput;
};


export type MutationUpdateRoomArgs = {
  input: UpdateRoomInput;
};


export type MutationUpdateRoomDeviceArgs = {
  id: Scalars['ID']['input'];
  input: DeviceInput;
};


export type MutationUpdateRoomInfoDatasArgs = {
  ignoreRoomsId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  input: UpdateRoomInput;
};


export type MutationUpdateRoomKeyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateRoomMemoArgs = {
  input: UpdateRoomMemoInput;
};


export type MutationUpdateRoomServiceArgs = {
  input: Array<InputMaybe<UpdateRoomService>>;
};


export type MutationUpdateRoomServiceCategoryArgs = {
  input: Array<InputMaybe<UpdateRoomServiceCategory>>;
};


export type MutationUpdateRoomTypeArgs = {
  input: UpdateRoomTypeInput;
};


export type MutationUpdateRoomsArgs = {
  input: Array<InputMaybe<UpdateRoomInput>>;
};


export type MutationUpdateSalesRoomInfoArgs = {
  input: UpdateSalesRoomInfoInput;
};


export type MutationUpdateThemeArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateThirdPartyArgs = {
  input?: InputMaybe<UpdateThirdPartyInput>;
};


export type MutationUploadAccommodationArticleImagesArgs = {
  articleId: Scalars['ID']['input'];
  files: Array<Scalars['Upload']['input']>;
  persistFiles?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUploadAccommodationImageArgs = {
  accommodationId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
};


export type MutationUploadArticleAttachmentsArgs = {
  articleId: Scalars['ID']['input'];
  files: Array<Scalars['Upload']['input']>;
  persistFiles?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUploadAuthImagesArgs = {
  files: Array<Scalars['Upload']['input']>;
  kioskId: Scalars['ID']['input'];
  persistFiles?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUploadConciergeAmenityImageArgs = {
  conciergeAmenityId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
  type: Scalars['String']['input'];
};


export type MutationUploadConciergeServiceCategoryImageArgs = {
  file: Scalars['Upload']['input'];
  serviceCategoryId: Scalars['ID']['input'];
};


export type MutationUploadConciergeServiceNoticeImageArgs = {
  accommodationId: Scalars['ID']['input'];
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  serviceNoticeId: Scalars['ID']['input'];
};


export type MutationUploadKioskBannerImagesArgs = {
  files: Array<Scalars['Upload']['input']>;
  kioskId: Scalars['ID']['input'];
  persistFiles?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUploadRoomAmenityIconArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadRoomImageArgs = {
  file: Scalars['Upload']['input'];
  roomId: Scalars['ID']['input'];
};


export type MutationUploadRoomServiceImageArgs = {
  file: Scalars['Upload']['input'];
  roomServiceId: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};


export type MutationUploadRoomTypeImageArgs = {
  file: Scalars['Upload']['input'];
  roomTypeId: Scalars['ID']['input'];
};


export type MutationUploadThumbnailArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationVerifyEmailArgs = {
  authHash: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationWaitAnonymousSignInArgs = {
  authId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationWaitPublicPurchaseResolvedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWingsProcessCheckOutArgs = {
  accommodationId: Scalars['ID']['input'];
  folioNumber: Scalars['String']['input'];
};


export type MutationWingsProcessWalkInArgs = {
  accommodationId: Scalars['ID']['input'];
  adultCount: Scalars['Int']['input'];
  carNumber?: InputMaybe<Scalars['String']['input']>;
  childCount: Scalars['Int']['input'];
  dailyRoomFees?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate: Scalars['String']['input'];
  guestName: Scalars['String']['input'];
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  nights: Scalars['String']['input'];
  paymentId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeCode: Scalars['String']['input'];
  salesDate: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};


export type MutationWingsReportKeyIssueArgs = {
  accommodationId: Scalars['ID']['input'];
  folioNumber: Scalars['String']['input'];
  issuedCount?: InputMaybe<Scalars['Int']['input']>;
  keyId: Scalars['ID']['input'];
  registerDate?: InputMaybe<Scalars['String']['input']>;
  resultMessage?: InputMaybe<Scalars['String']['input']>;
  roomNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWingsReportKeyRetrieveArgs = {
  accommodationId: Scalars['ID']['input'];
  keyId: Scalars['ID']['input'];
};


export type MutationWingsReservationCancelCheckInArgs = {
  accommodationId: Scalars['ID']['input'];
  folioNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWingsReservationCheckInArgs = {
  accommodationId: Scalars['ID']['input'];
  carNumber?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['ID']['input']>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export enum Ota {
  Agoda = 'AGODA',
  Airbnb = 'AIRBNB',
  Allmytour = 'ALLMYTOUR',
  Auction = 'AUCTION',
  Bookingdotcom = 'BOOKINGDOTCOM',
  Cancelmarket = 'CANCELMARKET',
  Coolstay = 'COOLSTAY',
  Coupang = 'COUPANG',
  Ctrip = 'CTRIP',
  Dailyhotel = 'DAILYHOTEL',
  Ddangcheoridotcom = 'DDANGCHEORIDOTCOM',
  Ddnayo = 'DDNAYO',
  Eleventhstreet = 'ELEVENTHSTREET',
  Expedia = 'EXPEDIA',
  Gmarket = 'GMARKET',
  Googlehotel = 'GOOGLEHOTEL',
  Gshomeshopping = 'GSHOMESHOPPING',
  Hotelenjoy = 'HOTELENJOY',
  Hotelga = 'HOTELGA',
  Hotelnow = 'HOTELNOW',
  Hotelpackagedotcom = 'HOTELPACKAGEDOTCOM',
  Hotelpass = 'HOTELPASS',
  Hotelscombine = 'HOTELSCOMBINE',
  Hotelsdotcom = 'HOTELSDOTCOM',
  Hotelstory = 'HOTELSTORY',
  Hotelstorybengine = 'HOTELSTORYBENGINE',
  Hoteltime = 'HOTELTIME',
  Interpark = 'INTERPARK',
  Kakao = 'KAKAO',
  Meituan = 'MEITUAN',
  Naver = 'NAVER',
  Ohmyhotel = 'OHMYHOTEL',
  Onda = 'ONDA',
  Ondawave = 'ONDAWAVE',
  Plusand = 'PLUSAND',
  Saletonight = 'SALETONIGHT',
  Ssgdotcom = 'SSGDOTCOM',
  Tmon = 'TMON',
  Tripbtoz = 'TRIPBTOZ',
  Tripdotcom = 'TRIPDOTCOM',
  Triptopaz = 'TRIPTOPAZ',
  Trivago = 'TRIVAGO',
  VBooking = 'V_BOOKING',
  Webtour = 'WEBTOUR',
  Wemap = 'WEMAP',
  Yanolja = 'YANOLJA',
  Yanoljahotel = 'YANOLJAHOTEL',
  Yanoljapension = 'YANOLJAPENSION',
  Yeogieottae = 'YEOGIEOTTAE',
  HyundaiEasyWell = 'hyundaiEasyWell'
}

export type OtaSetting = {
  __typename?: 'OTASetting';
  accommodationId: Scalars['ID']['output'];
  data?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ota?: Maybe<Ota>;
  relatedId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  first?: Maybe<Scalars['Boolean']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  last?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type OrderRequestTemplate = {
  __typename?: 'OrderRequestTemplate';
  id: Scalars['ID']['output'];
  request: Scalars['String']['output'];
};

export enum Origin {
  Ota = 'OTA',
  Reservation = 'RESERVATION'
}

export type OtaIntegrationSmsHistory = {
  __typename?: 'OtaIntegrationSmsHistory';
  createdAt: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ota?: Maybe<Ota>;
  status: Scalars['String']['output'];
  text: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type OtaIntegrationSmsHistoryConnection = {
  __typename?: 'OtaIntegrationSmsHistoryConnection';
  edges: Array<Maybe<OtaIntegrationSmsHistoryEdge>>;
  pageInfo: PageInfo;
};

export type OtaIntegrationSmsHistoryEdge = {
  __typename?: 'OtaIntegrationSmsHistoryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<OtaIntegrationSmsHistory>;
};

export type OtaIntegrationSmsQueryFilter = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type OtaPriceContraction = {
  __typename?: 'OtaPriceContraction';
  endDate: Scalars['Date']['output'];
  fri?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  mon?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  reservationPackageId?: Maybe<Scalars['ID']['output']>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  sat?: Maybe<Scalars['Boolean']['output']>;
  startDate: Scalars['Date']['output'];
  sun?: Maybe<Scalars['Boolean']['output']>;
  thu?: Maybe<Scalars['Boolean']['output']>;
  tue?: Maybe<Scalars['Boolean']['output']>;
  wed?: Maybe<Scalars['Boolean']['output']>;
};

export type OtaProduct = {
  __typename?: 'OtaProduct';
  accommodationId?: Maybe<Scalars['ID']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  parserAcronyms: Array<Maybe<Scalars['String']['output']>>;
  parserValues: Array<Scalars['String']['output']>;
  reservationPackage?: Maybe<ReservationPackage>;
  reservationPackageId?: Maybe<Scalars['ID']['output']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PackageOption = {
  __typename?: 'PackageOption';
  defaultAmount: Scalars['Int']['output'];
  isSelectable: Scalars['Boolean']['output'];
  maxAmount: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  product: ServiceProduct;
  serviceProductId: Scalars['ID']['output'];
};

export type PackageOptionsInput = {
  defaultAmount?: InputMaybe<Scalars['Int']['input']>;
  isSelectable?: InputMaybe<Scalars['Boolean']['input']>;
  maxAmount?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  serviceProductId: Scalars['ID']['input'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int']['output'];
  approvalId?: Maybe<Scalars['String']['output']>;
  buyerCompany?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  childPayments: Array<Payment>;
  commissionAmount?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['Date']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  displayMessage?: Maybe<Scalars['String']['output']>;
  excludeMileage?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isCancelled: Scalars['Boolean']['output'];
  isFullyPaid: Scalars['Boolean']['output'];
  isReservationPayment?: Maybe<Scalars['Boolean']['output']>;
  issuedCompany?: Maybe<Scalars['String']['output']>;
  kioskId?: Maybe<Scalars['ID']['output']>;
  merchantNumber?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Mileage>;
  mileageUser?: Maybe<MileageUser>;
  outstandingAmount?: Maybe<Scalars['Int']['output']>;
  parentPayment?: Maybe<Payment>;
  parentPaymentId?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  reservation?: Maybe<Reservation>;
  reservationType: Scalars['String']['output'];
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  totalAmount: Scalars['Int']['output'];
  totalOutstandingAmount: Scalars['Int']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  useStartAt?: Maybe<Scalars['Date']['output']>;
  virtualAccounts?: Maybe<Array<Maybe<VirtualAccount>>>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  edges: Array<Maybe<PaymentEdge>>;
  pageInfo: PageInfo;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Payment>;
};

export type PaymentQueryFilter = {
  createdBy?: InputMaybe<Scalars['String']['input']>;
  dateFilterType?: InputMaybe<Scalars['String']['input']>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  outstandingOnly?: InputMaybe<Scalars['Boolean']['input']>;
  reservationType?: InputMaybe<Scalars['String']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentSalesReport = {
  __typename?: 'PaymentSalesReport';
  dateAggregates: Array<Maybe<DailySalesAggregate>>;
  typeAggregates: Array<Maybe<TypeSalesAggregate>>;
};

export type PaymentStatistics = {
  __typename?: 'PaymentStatistics';
  count: Scalars['Int']['output'];
  daySums: Array<DayPaymentSum>;
  remoteAmountSum: Scalars['Int']['output'];
  roomTypeSums: Array<RoomTypePaymentSum>;
  spotAmountSum: Scalars['Int']['output'];
  spotCardSum: Scalars['Int']['output'];
  spotCashSum: Scalars['Int']['output'];
  typeSums: Array<TypePaymentSum>;
};

export type PgConfig = {
  __typename?: 'PgConfig';
  accommodationId: Scalars['ID']['output'];
  data?: Maybe<Scalars['String']['output']>;
};

export type PlatformReservationCount = {
  __typename?: 'PlatformReservationCount';
  count: Scalars['Int']['output'];
  platform: Scalars['String']['output'];
};

export type PlatformSignInInput = {
  accommodationId: Scalars['String']['input'];
  customData?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  otaKey: Ota;
  password: Scalars['String']['input'];
};

export type PlatformVisitIntervalSum = {
  __typename?: 'PlatformVisitIntervalSum';
  platform: Scalars['String']['output'];
  sum: Scalars['Int']['output'];
};

export type PreAssignRoomInput = {
  reservationId: Scalars['ID']['input'];
  roomId: Scalars['ID']['input'];
};

export type PreAssignedRoom = {
  __typename?: 'PreAssignedRoom';
  reservation: Reservation;
  reservationId: Scalars['ID']['output'];
  roomId: Scalars['ID']['output'];
};

export type PreDiscountInfoData = {
  __typename?: 'PreDiscountInfoData';
  errorMessage?: Maybe<Scalars['String']['output']>;
  eventName: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  preDiscountId: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type PreDiscountListInfoData = {
  __typename?: 'PreDiscountListInfoData';
  errorMessage?: Maybe<Scalars['String']['output']>;
  eventName: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  list: Array<Maybe<AmanoPreDiscount>>;
  success: Scalars['Boolean']['output'];
};

export type PreregisterParkingByGuestSessionInput = {
  accommodationId: Scalars['ID']['input'];
  guestName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
  vehicleNumber: Scalars['String']['input'];
};

export type Price = {
  __typename?: 'Price';
  addonAmount?: Maybe<Scalars['Int']['output']>;
  addonAmount2?: Maybe<Scalars['Int']['output']>;
  addonSleepsMaximum?: Maybe<Scalars['Int']['output']>;
  bookingActualAmount?: Maybe<Scalars['Int']['output']>;
  bookingOriginAmount?: Maybe<Scalars['Int']['output']>;
  cardAmount?: Maybe<Scalars['Int']['output']>;
  cashAmount?: Maybe<Scalars['Int']['output']>;
  defaultRentTime?: Maybe<Scalars['String']['output']>;
  extendedRentTime?: Maybe<Scalars['String']['output']>;
  extraCleanAmount?: Maybe<Scalars['Int']['output']>;
  extraGuestAmount?: Maybe<Scalars['Int']['output']>;
  fri?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  lateCheckoutLimit?: Maybe<Scalars['String']['output']>;
  lateCheckoutMaximum?: Maybe<Scalars['String']['output']>;
  mon?: Maybe<Scalars['Boolean']['output']>;
  pricePeriodId?: Maybe<Scalars['String']['output']>;
  priceTimes: Array<Maybe<PriceTime>>;
  priceType?: Maybe<PriceType>;
  priority?: Maybe<Scalars['Int']['output']>;
  rentExpireAt?: Maybe<Scalars['String']['output']>;
  roomTypeId?: Maybe<Scalars['String']['output']>;
  sat?: Maybe<Scalars['Boolean']['output']>;
  sun?: Maybe<Scalars['Boolean']['output']>;
  thu?: Maybe<Scalars['Boolean']['output']>;
  tue?: Maybe<Scalars['Boolean']['output']>;
  useAddon?: Maybe<Scalars['Boolean']['output']>;
  wed?: Maybe<Scalars['Boolean']['output']>;
};

export type PricePeriod = {
  __typename?: 'PricePeriod';
  accommodationId?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  prices: Array<Maybe<Price>>;
  priority?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  tokenizedInfo: Array<Maybe<Scalars['String']['output']>>;
};

export type PriceTime = {
  __typename?: 'PriceTime';
  endTime?: Maybe<Scalars['DateTime']['output']>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<PriceTimeType>;
};

export type PriceTimeInput = {
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<PriceTimeType>;
};

export enum PriceTimeType {
  Available = 'AVAILABLE',
  Disabled = 'DISABLED',
  Early = 'EARLY',
  Extended = 'EXTENDED',
  Infinite = 'INFINITE'
}

export enum PriceType {
  Lodge = 'LODGE',
  Rent = 'RENT'
}

export type PublicPurchase = {
  __typename?: 'PublicPurchase';
  accommodationId: Scalars['ID']['output'];
  data: Scalars['String']['output'];
  datePricesToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  roomTypeId: Scalars['ID']['output'];
  status: Scalars['String']['output'];
  useExpireAt: Scalars['Date']['output'];
  useStartAt: Scalars['Date']['output'];
};

export type PublicPurchaseConnection = {
  __typename?: 'PublicPurchaseConnection';
  edges: Array<Maybe<PublicPurchaseEdge>>;
  pageInfo: PageInfo;
};

export type PublicPurchaseEdge = {
  __typename?: 'PublicPurchaseEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<PublicPurchase>;
};

export type PublishCmsBroadcastEventinput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  eventName: Scalars['String']['input'];
  otaKey?: InputMaybe<Scalars['String']['input']>;
};

export type PublishCmsCommandinput = {
  accommodationId: Scalars['ID']['input'];
  action: CmsRemoteActionType;
  commandId?: InputMaybe<Scalars['ID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  otaKey?: InputMaybe<Scalars['String']['input']>;
  type: CmsCommandType;
};

export type PublishDaemonCommandinput = {
  accommodationId: Scalars['ID']['input'];
  commandId?: InputMaybe<Scalars['ID']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
  otaKey?: InputMaybe<Scalars['String']['input']>;
  type: DaemonCommandType;
};

export type Query = {
  __typename?: 'Query';
  _paymentVersion: Scalars['String']['output'];
  _reservationVersion: Scalars['String']['output'];
  _subscriptionVersion: Scalars['String']['output'];
  aggregatePayments: Array<SaleAggregation>;
  findUser?: Maybe<User>;
  getAccommodationArticleConnection?: Maybe<AccommodationArticleConnection>;
  getAccommodationArticles?: Maybe<Array<Maybe<AccommodationArticle>>>;
  getAccommodationAudioOptions: Array<AudioOption>;
  getAccommodationCoupons: CouponConnection;
  getAccommodationGuestReservations: Array<Maybe<Reservation>>;
  getAccommodationKiosks?: Maybe<Array<Maybe<Kiosk>>>;
  getAccommodationMileageUsers: MileageUserConnection;
  getAccommodationMileages: MileageConnection;
  getAccommodationNotifications: AccommodationNotificationConnection;
  getAccommodationOtaList: Array<AccommodationOta>;
  getAccommodationPackages: Array<ReservationPackage>;
  getAccommodationPaymentStatistics: PaymentStatistics;
  getAccommodationPayments: PaymentConnection;
  getAccommodationPgConfig?: Maybe<PgConfig>;
  getAccommodationPublicPurchases: PublicPurchaseConnection;
  getAccommodationReservationStatistics: ReservationStatistics;
  getAccommodationReservations?: Maybe<ReservationConnection>;
  getAccommodationSales?: Maybe<AccommodationSales>;
  getAccommodationServiceProducts: Array<ServiceProduct>;
  getAccommodationThirdPartyApps: Array<ThirdPartyApp>;
  getAccommodations?: Maybe<AccommodationConnection>;
  getAmanoFeeCarSearch: GetFeeCarSearchResponse;
  getAmanoPreDiscountListInfo: GetPreDiscountListInfoResponse;
  getArticle?: Maybe<Article>;
  getArticles?: Maybe<ArticleConnection>;
  getBriefAccommodationById?: Maybe<Accommodation>;
  getCmsActivityLogs: CmsActivityLogConnection;
  getCmsMonthlyReservationHistory?: Maybe<Array<Maybe<CmsMonthlyReservationHistory>>>;
  getCmsOtaAccounts: Array<CmsOtaAccount>;
  getCmsOtaList?: Maybe<Array<CmsOta>>;
  getCmsOtaProductMaps: Array<CmsOtaProductMap>;
  getCmsOtaProductSettings?: Maybe<Array<CmsOtaProductSetting>>;
  getCmsReservationList?: Maybe<Array<CmsReservation>>;
  getConciergeAmenities: ConciergeAmenityConnection;
  getConciergeAmenity?: Maybe<ConciergeAmenity>;
  getConciergeAmenityCategories: Array<Maybe<ConciergeAmenityCategory>>;
  getConciergeConfig: ConciergeConfigInfo;
  getConciergeImageRootHost: Scalars['String']['output'];
  getConciergeOrder?: Maybe<ConciergeOrder>;
  getConciergeOrderByPaymentInfoId?: Maybe<ConciergeOrder>;
  getConciergeOrderStatistics: ConciergeOrderStatistics;
  getConciergeOrders: ConciergeOrderConnection;
  getConciergePaymentInfo: ConciergePaymentInfo;
  getConciergeServiceNotice: Array<Maybe<ConciergeServiceNotice>>;
  getConciergeServiceSettingByGuestSession: AccommodationConciergeSetting;
  getConciergeWorkSettings: Array<Maybe<ConciergeWorkSetting>>;
  getConciergeWorkSettingsByGuestSession: Array<Maybe<ConciergeWorkSetting>>;
  getDaemonCommonMethods?: Maybe<Array<CmsDaemonMethod>>;
  getDaemonOtaMethods?: Maybe<Array<CmsDaemonMethod>>;
  getEncryptionKeyList: Array<SystemOption>;
  getIsActiveAccommodations?: Maybe<Array<Maybe<Accommodation>>>;
  getIsExistUnmappedCmsOtaProductMap: Scalars['Boolean']['output'];
  getLodgeReservationsInDate: Array<Reservation>;
  getMyAccommodations?: Maybe<Array<Maybe<Accommodation>>>;
  getMyAgreement: Scalars['Boolean']['output'];
  getMyIntegrationSmsHistories?: Maybe<OtaIntegrationSmsHistoryConnection>;
  getMySalesReport: PaymentSalesReport;
  getMyUserNotifications: UserNotificationConnection;
  getOrderRequestTemplates: Array<Maybe<OrderRequestTemplate>>;
  getOtaPriceContractions: Array<OtaPriceContraction>;
  getOtaProductMaps: Array<CmsOtaProductMap>;
  getPermanentToken?: Maybe<Scalars['String']['output']>;
  getPermanentTokenForAdmin?: Maybe<Scalars['String']['output']>;
  getRentReservationsInDate: Array<Reservation>;
  getReservationReadyToCheckIn: Array<Maybe<Reservation>>;
  getReservationSettingByGuestSession: AccommodationReservationSettingForGuest;
  getRoomService?: Maybe<RoomService>;
  getRoomServiceCategory: Array<Maybe<RoomServiceCategory>>;
  getRoomServices: RoomServiceConnection;
  getSingleAccommodation?: Maybe<Accommodation>;
  getSingleAccommodationArticle?: Maybe<AccommodationArticle>;
  getSingleAccommodationByName?: Maybe<Accommodation>;
  getSingleAccommodationOta: AccommodationOta;
  getSingleOtaIntegrationSmsHistory?: Maybe<OtaIntegrationSmsHistory>;
  getSinglePayment?: Maybe<Payment>;
  getSinglePublicPurchase?: Maybe<PublicPurchase>;
  getSingleReservation?: Maybe<Reservation>;
  getSingleReservationByGuestSession?: Maybe<Reservation>;
  getSingleReservationGroup?: Maybe<ReservationGroup>;
  getSingleRoom?: Maybe<Room>;
  getSingleRoomType?: Maybe<RoomType>;
  getSmartAccessRooms: Array<SmartAccessRoom>;
  getSystemOTASettings: Array<Maybe<OtaSetting>>;
  getTodayAccommodationOtaSalseCount?: Maybe<Array<TodayAccommodationOtaSalseCount>>;
  getTodaySalesDashboard?: Maybe<Array<CmsOtaProductMap>>;
  getUserLogs?: Maybe<UserLogConnection>;
  getUsers?: Maybe<UserConnection>;
  getWingsReservationReadyToCheckIn: Array<Reservation>;
  getWingsRoomNumberByRoomKey?: Maybe<Scalars['String']['output']>;
  getWingsWalkinRoomTypes: Array<WingsRoomType>;
  myContacts: Array<UserContact>;
  myInfo?: Maybe<User>;
  queryMileage: MileageAggregation;
  refreshToken: TokenPayload;
  searchVehiclesByNumber: Array<SearchVehiclesResultByNumber>;
  thirdParties: Array<ThirdPartyUser>;
  userVersion: Scalars['String']['output'];
  verifyDuplicate?: Maybe<VerifyDuplicatePayload>;
};


export type QueryAggregatePaymentsArgs = {
  accommodationId: Scalars['ID']['input'];
  dateType?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['Date']['input'];
  to: Scalars['Date']['input'];
};


export type QueryFindUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAccommodationArticleConnectionArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAccommodationArticlesArgs = {
  accommodationId: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAccommodationAudioOptionsArgs = {
  id: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAccommodationCouponsArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationGuestReservationsArgs = {
  accommodationId: Scalars['ID']['input'];
  authToken: Scalars['String']['input'];
  guestName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type QueryGetAccommodationKiosksArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetAccommodationMileageUsersArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<MileageUserQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationMileagesArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MileageQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationNotificationsArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccommodationNotificationQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationOtaListArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetAccommodationPackagesArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetAccommodationPaymentStatisticsArgs = {
  accommodationId: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAccommodationPaymentsArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PaymentQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationPgConfigArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetAccommodationPublicPurchasesArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationReservationStatisticsArgs = {
  accommodationId: Scalars['ID']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAccommodationReservationsArgs = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReservationQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAccommodationSalesArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetAccommodationServiceProductsArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetAccommodationThirdPartyAppsArgs = {
  accommodationId: Scalars['ID']['input'];
  type?: InputMaybe<ThirdPartyProviderType>;
};


export type QueryGetAccommodationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAmanoFeeCarSearchArgs = {
  input: AmanoFeeCarSearchInput;
};


export type QueryGetAmanoPreDiscountListInfoArgs = {
  input: AmanoPreDiscountListInfoInput;
};


export type QueryGetArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetBriefAccommodationByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCmsActivityLogsArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CmsActivityLogQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCmsMonthlyReservationHistoryArgs = {
  input: GetCmsMonthlyReservationHistoryInput;
};


export type QueryGetCmsOtaAccountsArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetCmsOtaProductMapsArgs = {
  accommodationId: Scalars['ID']['input'];
  origin?: InputMaybe<Origin>;
  otaKey?: InputMaybe<Ota>;
  subKey?: InputMaybe<Ota>;
};


export type QueryGetCmsOtaProductSettingsArgs = {
  accommodationId: Scalars['ID']['input'];
  origin?: InputMaybe<Origin>;
  otaKey?: InputMaybe<Ota>;
  subKey?: InputMaybe<Ota>;
};


export type QueryGetCmsReservationListArgs = {
  accommodationId: Scalars['ID']['input'];
  filter?: InputMaybe<CmsReservationQueryFilter>;
};


export type QueryGetConciergeAmenitiesArgs = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  connectionArgs?: InputMaybe<ConnectionOffsetInput>;
  where?: InputMaybe<WhereOptionInput>;
};


export type QueryGetConciergeAmenityArgs = {
  conciergeAmenityId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetConciergeAmenityCategoriesArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetConciergeConfigArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetConciergeOrderArgs = {
  orderId: Scalars['ID']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetConciergeOrderByPaymentInfoIdArgs = {
  paymentInfoId: Scalars['ID']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetConciergeOrderStatisticsArgs = {
  accommodationId: Scalars['ID']['input'];
  options?: InputMaybe<ConciergeOrderStatisticsOptionInput>;
};


export type QueryGetConciergeOrdersArgs = {
  accommodationId: Scalars['ID']['input'];
  connectionInput: ConnectionOffsetInput;
  options?: InputMaybe<ConciergeOrderOptionInput>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetConciergePaymentInfoArgs = {
  paymentInfoId: Scalars['String']['input'];
  reservationId: Scalars['String']['input'];
  sessionToken: Scalars['String']['input'];
};


export type QueryGetConciergeServiceNoticeArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetConciergeServiceSettingByGuestSessionArgs = {
  input: QueryConciergeServiceSettingInput;
};


export type QueryGetConciergeWorkSettingsArgs = {
  accommodationId: Scalars['ID']['input'];
  weekDays?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetConciergeWorkSettingsByGuestSessionArgs = {
  input: QueryConciergeWorkSettingInput;
  weekDays?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetDaemonOtaMethodsArgs = {
  otaKey?: InputMaybe<Ota>;
};


export type QueryGetIsExistUnmappedCmsOtaProductMapArgs = {
  accommodationId: Scalars['ID']['input'];
  otaKey: Ota;
  subKey?: InputMaybe<Ota>;
};


export type QueryGetLodgeReservationsInDateArgs = {
  accommodationId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetMyAgreementArgs = {
  type: Scalars['String']['input'];
};


export type QueryGetMyIntegrationSmsHistoriesArgs = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OtaIntegrationSmsQueryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMySalesReportArgs = {
  aggregateFrom?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryGetMyUserNotificationsArgs = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  after?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetOrderRequestTemplatesArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetOtaPriceContractionsArgs = {
  accommodationOtaId: Scalars['ID']['input'];
  reservationPackageId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetOtaProductMapsArgs = {
  accommodationId: Scalars['ID']['input'];
  otaKey?: InputMaybe<Ota>;
};


export type QueryGetPermanentTokenArgs = {
  kioskId: Scalars['ID']['input'];
};


export type QueryGetPermanentTokenForAdminArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetRentReservationsInDateArgs = {
  accommodationId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type QueryGetReservationReadyToCheckInArgs = {
  accommodationId: Scalars['ID']['input'];
  number: Scalars['Int']['input'];
};


export type QueryGetReservationSettingByGuestSessionArgs = {
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};


export type QueryGetRoomServiceArgs = {
  roomServiceId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetRoomServiceCategoryArgs = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetRoomServicesArgs = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  connectionArgs?: InputMaybe<ConnectionOffsetInput>;
  where?: InputMaybe<WhereOptionInput>;
};


export type QueryGetSingleAccommodationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSingleAccommodationArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSingleAccommodationByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetSingleAccommodationOtaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSingleOtaIntegrationSmsHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSinglePaymentArgs = {
  paymentId: Scalars['ID']['input'];
};


export type QueryGetSinglePublicPurchaseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSingleReservationArgs = {
  reservationId: Scalars['ID']['input'];
};


export type QueryGetSingleReservationByGuestSessionArgs = {
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};


export type QueryGetSingleReservationGroupArgs = {
  reservationGroupId: Scalars['ID']['input'];
};


export type QueryGetSingleRoomArgs = {
  id: Scalars['ID']['input'];
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetSingleRoomTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSmartAccessRoomsArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetTodayAccommodationOtaSalseCountArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type QueryGetTodaySalesDashboardArgs = {
  input: GetTodaySalesDashboardInput;
};


export type QueryGetUserLogsArgs = {
  accommodationId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUsersArgs = {
  filter?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetWingsReservationReadyToCheckInArgs = {
  accommodationId: Scalars['ID']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetWingsRoomNumberByRoomKeyArgs = {
  accommodationId: Scalars['ID']['input'];
  keyId: Scalars['ID']['input'];
};


export type QueryGetWingsWalkinRoomTypesArgs = {
  accommodationId: Scalars['ID']['input'];
  adultCount?: InputMaybe<Scalars['Int']['input']>;
  childCount?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  langType?: InputMaybe<Wings_Langtype>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyContactsArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQueryMileageArgs = {
  accommodationId: Scalars['ID']['input'];
  authToken: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type QueryRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type QuerySearchVehiclesByNumberArgs = {
  accommodationId: Scalars['ID']['input'];
  targetDate?: InputMaybe<Scalars['Date']['input']>;
  vehicleNumber: Scalars['String']['input'];
};


export type QueryVerifyDuplicateArgs = {
  input: VerifyDuplicateInput;
};

export type QueryConciergeServiceSettingInput = {
  accommodationId: Scalars['ID']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};

export type QueryConciergeWorkSettingInput = {
  accommodationId: Scalars['ID']['input'];
  reservationId: Scalars['ID']['input'];
  sessionToken: Scalars['String']['input'];
};

export type RegisterParkingPassInput = {
  accommodationId: Scalars['ID']['input'];
  reservationId?: InputMaybe<Scalars['ID']['input']>;
  vehicleNumber: Scalars['String']['input'];
};

export type ReportCommandResultData = {
  result?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ReportCommandResultInput = {
  accommodationId: Scalars['ID']['input'];
  commandId?: InputMaybe<Scalars['ID']['input']>;
  data: Scalars['String']['input'];
  methodName: Scalars['String']['input'];
  methodUId?: InputMaybe<Scalars['ID']['input']>;
  otaKey: Ota;
  subKey?: InputMaybe<Ota>;
};

export type RequestSmsPayload = {
  __typename?: 'RequestSMSPayload';
  _dev_sentAuth?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Reservation = {
  __typename?: 'Reservation';
  accommodationId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['Date']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  guestName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  intendedType?: Maybe<Scalars['String']['output']>;
  intendedUseExpireAt?: Maybe<Scalars['Date']['output']>;
  intendedUseStartAt?: Maybe<Scalars['Date']['output']>;
  isCancelled?: Maybe<Scalars['Boolean']['output']>;
  isLongTerm?: Maybe<Scalars['Boolean']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  memo?: Maybe<ReservationMemo>;
  number?: Maybe<Scalars['Int']['output']>;
  otaNumber?: Maybe<Scalars['String']['output']>;
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['ID']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  reservationGroup?: Maybe<ReservationGroup>;
  reservationGroupId?: Maybe<Scalars['ID']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomType?: Maybe<RoomType>;
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  sleeps?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  useExpireAt: Scalars['Date']['output'];
  useStartAt: Scalars['Date']['output'];
  useVehicle?: Maybe<Scalars['Boolean']['output']>;
  vehicleNumber?: Maybe<Scalars['String']['output']>;
};

export type ReservationConnection = {
  __typename?: 'ReservationConnection';
  edges: Array<Maybe<ReservationEdge>>;
  pageInfo: PageInfo;
};

export type ReservationCount = {
  __typename?: 'ReservationCount';
  count: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type ReservationEdge = {
  __typename?: 'ReservationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Reservation>;
};

export type ReservationGroup = {
  __typename?: 'ReservationGroup';
  accommodationId: Scalars['ID']['output'];
  assignee?: Maybe<CompanyAssignee>;
  companyAssigneeId?: Maybe<Scalars['ID']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  reservations: Array<Reservation>;
  reservedBy?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  useExpireAt: Scalars['Date']['output'];
  useStartAt: Scalars['Date']['output'];
};

export type ReservationMemo = {
  __typename?: 'ReservationMemo';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  reservationId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type ReservationPackage = {
  __typename?: 'ReservationPackage';
  accommodationId: Scalars['ID']['output'];
  adjustPrice: Scalars['Int']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  packageOptions: Array<PackageOption>;
  roomTypeId: Scalars['ID']['output'];
};

export type ReservationParseResponse = {
  __typename?: 'ReservationParseResponse';
  error?: Maybe<Scalars['String']['output']>;
  parsed?: Maybe<Scalars['String']['output']>;
  reservation?: Maybe<Reservation>;
};

export type ReservationQueryFilter = {
  dateFilterType?: InputMaybe<Scalars['String']['input']>;
  dateFrom?: InputMaybe<Scalars['Date']['input']>;
  dateTo?: InputMaybe<Scalars['Date']['input']>;
  excludeCheckedIn?: InputMaybe<Scalars['Boolean']['input']>;
  excludeKiosk?: InputMaybe<Scalars['Boolean']['input']>;
  includeCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  includePast?: InputMaybe<Scalars['Boolean']['input']>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  queryType?: InputMaybe<ReservationQueryType>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  roomTypeId?: InputMaybe<Scalars['ID']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  timeRange?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  unpurchasedOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ReservationQueryType {
  All = 'ALL',
  Future = 'FUTURE',
  Today = 'TODAY'
}

export type ReservationSmsTemplate = {
  __typename?: 'ReservationSMSTemplate';
  content: Scalars['String']['output'];
  delay?: Maybe<Scalars['Int']['output']>;
  subject: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ReservationSmsTemplateInput = {
  content: Scalars['String']['input'];
  delay?: InputMaybe<Scalars['Int']['input']>;
  subject: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ReservationSetting = {
  __typename?: 'ReservationSetting';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ReservationSettingInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ReservationStatistics = {
  __typename?: 'ReservationStatistics';
  count: Scalars['Int']['output'];
  dayCounts: Array<DayReservationCount>;
  lodgeCount: Scalars['Int']['output'];
  platformCounts: Array<PlatformReservationCount>;
  platformVisitIntervalSums: Array<PlatformVisitIntervalSum>;
  remoteCount: Scalars['Int']['output'];
  rentCount: Scalars['Int']['output'];
  roomTypeCounts: Array<RoomTypeReservationCount>;
  spotCount: Scalars['Int']['output'];
};

export enum ReserveTarget {
  LodgeCash = 'LODGE_CASH',
  LodgeCreditcard = 'LODGE_CREDITCARD',
  Manual = 'MANUAL',
  RentCash = 'RENT_CASH',
  RentCreditcard = 'RENT_CREDITCARD'
}

export type Room = {
  __typename?: 'Room';
  accommodationId?: Maybe<Scalars['String']['output']>;
  amenities: Array<Maybe<Amenity>>;
  calculatedState: Scalars['String']['output'];
  cardData?: Maybe<Scalars['String']['output']>;
  cardState?: Maybe<CardState>;
  checkIn?: Maybe<Scalars['String']['output']>;
  checkOut?: Maybe<Scalars['String']['output']>;
  currentReservation?: Maybe<Reservation>;
  dayCheckOut?: Maybe<Scalars['String']['output']>;
  defaultSleeps?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  encryptionKey?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  kioskId?: Maybe<Scalars['String']['output']>;
  maxSleeps?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<RoomMemo>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  order?: Maybe<Scalars['String']['output']>;
  preAssignedReservationId: Scalars['ID']['output'];
  preAssignedRoom?: Maybe<PreAssignedRoom>;
  priority?: Maybe<Scalars['Int']['output']>;
  recentReservation?: Maybe<Reservation>;
  roomDevices: Array<Maybe<RoomDevice>>;
  roomThemes: Array<Maybe<RoomTheme>>;
  roomType: RoomType;
  roomTypeId?: Maybe<Scalars['String']['output']>;
  saleState?: Maybe<SaleState>;
  smartAccessInfo?: Maybe<ThirdPartyProperty>;
  state?: Maybe<RoomState>;
  stateUpdatedAt?: Maybe<Scalars['Date']['output']>;
  themes: Array<Maybe<Theme>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  upcomingReservation?: Maybe<Reservation>;
  upcomingReservationCount: Scalars['Int']['output'];
};


export type RoomCalculatedStateArgs = {
  fixedState?: InputMaybe<Scalars['String']['input']>;
};


export type RoomSmartAccessInfoArgs = {
  accommodationId: Scalars['ID']['input'];
};


export type RoomThumbnailArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  edges: Array<Maybe<RoomEdge>>;
  pageInfo: PageInfo;
};

export type RoomDevice = {
  __typename?: 'RoomDevice';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  power?: Maybe<Scalars['Boolean']['output']>;
  roomId: Scalars['String']['output'];
  state?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type RoomEdge = {
  __typename?: 'RoomEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Room>;
};

export type RoomMemo = {
  __typename?: 'RoomMemo';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  roomId: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type RoomSalesInfo = {
  autoClosedRoomCount?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  isClosed?: InputMaybe<Scalars['Boolean']['input']>;
  sellPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type RoomService = {
  __typename?: 'RoomService';
  categories?: Maybe<Array<Maybe<RoomServiceCategory>>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  leadTime: Scalars['Int']['output'];
  options?: Maybe<Array<Maybe<RoomServiceOption>>>;
  orderRequests?: Maybe<Array<Maybe<OrderRequestTemplate>>>;
  price: Scalars['Int']['output'];
  soldOutPeriod?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type RoomServiceCategory = {
  __typename?: 'RoomServiceCategory';
  accommodationId: Scalars['ID']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priority?: Maybe<Scalars['Int']['output']>;
  status: DefaultStatus;
};

export type RoomServiceConnection = {
  __typename?: 'RoomServiceConnection';
  edges: Array<Maybe<RoomServiceEdge>>;
  pageInfo: OffsetPageInfo;
};

export type RoomServiceEdge = {
  __typename?: 'RoomServiceEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<RoomService>;
};

export type RoomServiceOption = {
  __typename?: 'RoomServiceOption';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  status: RoomServiceStatus;
};

export type RoomServiceOptionDetail = {
  __typename?: 'RoomServiceOptionDetail';
  id: Scalars['ID']['output'];
  origin: RoomServiceOption;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  roomServiceOptionId: Scalars['ID']['output'];
  status: RoomServiceStatus;
};

export type RoomServiceOrderDetail = {
  __typename?: 'RoomServiceOrderDetail';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  leadTime: Scalars['Int']['output'];
  options?: Maybe<Array<Maybe<RoomServiceOptionDetail>>>;
  orderId: Scalars['ID']['output'];
  origin: RoomService;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  roomServiceId: Scalars['ID']['output'];
  soldOutPeriod?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum RoomServiceStatus {
  Deleted = 'DELETED',
  Normal = 'NORMAL'
}

export enum RoomState {
  Available = 'AVAILABLE',
  Cleaning = 'CLEANING',
  Inspection = 'INSPECTION',
  Left = 'LEFT',
  MaintenanceCleaning = 'MAINTENANCE_CLEANING',
  NeedCleaning = 'NEED_CLEANING',
  NeedInspection = 'NEED_INSPECTION',
  PowerDown = 'POWER_DOWN',
  Selected = 'SELECTED',
  UrgentCleaning = 'URGENT_CLEANING',
  Using = 'USING'
}

export type RoomTheme = {
  __typename?: 'RoomTheme';
  roomId?: Maybe<Scalars['String']['output']>;
  themeId?: Maybe<Scalars['String']['output']>;
};

export type RoomThemeInput = {
  themeId: Scalars['ID']['input'];
};

export type RoomType = {
  __typename?: 'RoomType';
  accommodationId: Scalars['ID']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  checkIn?: Maybe<Scalars['String']['output']>;
  checkOut?: Maybe<Scalars['String']['output']>;
  currentPrice: Array<Maybe<Price>>;
  dailyQuantities: Array<DailyQuantity>;
  datePrices: Array<Maybe<DatePrice>>;
  dateQuantities: Array<DateQuantity>;
  dayQuantities: Array<Scalars['Int']['output']>;
  defaultPrices: Array<Maybe<Price>>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  otaSetting?: Maybe<OtaSetting>;
  prices: Array<Maybe<Price>>;
  priority?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  remainingRoomTotalCount: Scalars['Int']['output'];
  rooms: Array<Maybe<Room>>;
  saleStateDisableCount?: Maybe<Scalars['Int']['output']>;
  thirdPartyCode?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  totalCount: Scalars['Int']['output'];
};


export type RoomTypeDailyQuantitiesArgs = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type RoomTypeDatePricesArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type RoomTypeDateQuantitiesArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};


export type RoomTypeOtaSettingArgs = {
  ota: Ota;
};


export type RoomTypePricesArgs = {
  fri?: InputMaybe<Scalars['Boolean']['input']>;
  mon?: InputMaybe<Scalars['Boolean']['input']>;
  sat?: InputMaybe<Scalars['Boolean']['input']>;
  sun?: InputMaybe<Scalars['Boolean']['input']>;
  thu?: InputMaybe<Scalars['Boolean']['input']>;
  tue?: InputMaybe<Scalars['Boolean']['input']>;
  wed?: InputMaybe<Scalars['Boolean']['input']>;
};


export type RoomTypeRoomsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  queryState?: InputMaybe<RoomState>;
  saleState?: InputMaybe<Array<InputMaybe<SaleState>>>;
};


export type RoomTypeThumbnailArgs = {
  size?: InputMaybe<Scalars['String']['input']>;
};

export type RoomTypeConnection = {
  __typename?: 'RoomTypeConnection';
  edges: Array<Maybe<RoomTypeEdge>>;
  pageInfo: PageInfo;
};

export type RoomTypeEdge = {
  __typename?: 'RoomTypeEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<RoomType>;
};

export type RoomTypePaymentSum = {
  __typename?: 'RoomTypePaymentSum';
  roomTypeId: Scalars['ID']['output'];
  sum: Scalars['Int']['output'];
};

export type RoomTypeReservationCount = {
  __typename?: 'RoomTypeReservationCount';
  count: Scalars['Int']['output'];
  roomTypeId: Scalars['ID']['output'];
};

export type SaleAggregation = {
  __typename?: 'SaleAggregation';
  amount: Scalars['Int']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  createdBy: Scalars['String']['output'];
  outstandingAmount: Scalars['Int']['output'];
  reservationType: Scalars['String']['output'];
  roomTypeId?: Maybe<Scalars['ID']['output']>;
  type: Scalars['String']['output'];
};

export enum SaleState {
  All = 'ALL',
  Disabled = 'DISABLED',
  Lodge = 'LODGE',
  Rent = 'RENT'
}

export type SearchVehiclesResultByNumber = {
  __typename?: 'SearchVehiclesResultByNumber';
  enteredAt?: Maybe<Scalars['Date']['output']>;
  vehicleNumber: Scalars['String']['output'];
};

export enum SeasonType {
  High = 'HIGH',
  Low = 'LOW'
}

export type ServiceProduct = {
  __typename?: 'ServiceProduct';
  accommodationId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SetOtpPayload = {
  __typename?: 'SetOtpPayload';
  otpKey: Scalars['String']['output'];
  qrCode: Scalars['String']['output'];
};

export type ShardFailure = {
  __typename?: 'ShardFailure';
  index?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<ErrorCause>;
  shard?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ShardStatistics = {
  __typename?: 'ShardStatistics';
  failed?: Maybe<Scalars['Int']['output']>;
  failures?: Maybe<Array<Maybe<ShardFailure>>>;
  skipped?: Maybe<Scalars['Int']['output']>;
  successful?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type SignInInput = {
  identity: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInPayload = {
  __typename?: 'SignInPayload';
  token?: Maybe<TokenPayload>;
};

export type SignUpInput = {
  accessLevel?: InputMaybe<UserType>;
  email: Scalars['String']['input'];
  identity: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  smsAuthHash?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  user?: Maybe<User>;
};

export type SmartAccessDevice = {
  __typename?: 'SmartAccessDevice';
  batteryUsage?: Maybe<Scalars['Int']['output']>;
  deviceId: Scalars['ID']['output'];
  deviceName?: Maybe<Scalars['String']['output']>;
  lockStatus?: Maybe<Scalars['String']['output']>;
  macId?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  roomId?: Maybe<Scalars['ID']['output']>;
  roomName?: Maybe<Scalars['String']['output']>;
  wifiStatus?: Maybe<Scalars['Int']['output']>;
};

export type SmartAccessRoom = {
  __typename?: 'SmartAccessRoom';
  devices?: Maybe<Array<Maybe<SmartAccessDevice>>>;
  roomId: Scalars['String']['output'];
  roomName: Scalars['String']['output'];
  roomPath?: Maybe<Scalars['String']['output']>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum SubjectType {
  System = 'SYSTEM',
  User = 'USER'
}

export type SuccessOrError = {
  __typename?: 'SuccessOrError';
  result?: Maybe<Scalars['String']['output']>;
};

export type SuccessOrErrorBool = {
  __typename?: 'SuccessOrErrorBool';
  error?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SyncCmsOtaProductsInput = {
  accommodationId: Scalars['ID']['input'];
  otaKey: Ota;
  subKey?: InputMaybe<Ota>;
};

export type SynchronizationGetTodayReservationInput = {
  accommodationId: Scalars['String']['input'];
  otaKey: Ota;
};

export type SynchronizationReservationInput = {
  accommodationId: Scalars['String']['input'];
  endDate: Scalars['Date']['input'];
  otaKey: Ota;
  startDate: Scalars['Date']['input'];
  subKey?: InputMaybe<Ota>;
};

export type SynchronizationSalesRoomInfoInput = {
  accommodationId: Scalars['String']['input'];
  otaKey: Ota;
  subKey?: InputMaybe<Ota>;
};

export type SystemOption = {
  __typename?: 'SystemOption';
  id: Scalars['ID']['output'];
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Theme = {
  __typename?: 'Theme';
  accommodationId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  rooms?: Maybe<Array<Maybe<Room>>>;
};

export type ThirdPartyApp = {
  __typename?: 'ThirdPartyApp';
  createdAt: Scalars['Date']['output'];
  provider: Scalars['String']['output'];
  scope: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type ThirdPartyInput = {
  authorities: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  trustedHosts?: InputMaybe<Scalars['String']['input']>;
};

export type ThirdPartyProperty = {
  __typename?: 'ThirdPartyProperty';
  data?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  relatedId?: Maybe<Scalars['String']['output']>;
  thirdPartyId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ThirdPartyPropertyInput = {
  accommodationId: Scalars['ID']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  relatedId?: InputMaybe<Scalars['String']['input']>;
  thirdPartyId?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export enum ThirdPartyProvider {
  AmanoKorea = 'AmanoKorea',
  NicePark = 'NicePark',
  SamsungSmartAccess = 'SamsungSmartAccess',
  SanhaWings = 'SanhaWings',
  TheMr = 'TheMR'
}

export enum ThirdPartyProviderType {
  Cms = 'CMS',
  Facility = 'Facility',
  Guest = 'Guest',
  Pms = 'PMS',
  Parking = 'Parking'
}

export type ThirdPartyUser = {
  __typename?: 'ThirdPartyUser';
  authority?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  trustedHosts?: Maybe<Scalars['String']['output']>;
};

export type TodayAccommodationOtaSalseCount = {
  __typename?: 'TodayAccommodationOtaSalseCount';
  count: Scalars['Int']['output'];
  otaKey: Ota;
};

export type TokenPayload = {
  __typename?: 'TokenPayload';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type TypePaymentSum = {
  __typename?: 'TypePaymentSum';
  sum: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TypeSalesAggregate = {
  __typename?: 'TypeSalesAggregate';
  amount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type UpdateAccommodationInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  cardData?: InputMaybe<Scalars['String']['input']>;
  cleanCardData?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  csContact?: InputMaybe<Scalars['String']['input']>;
  encryptionKey?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<AccommodationOptionInput>>>;
  registererName?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccommodationInventoryModeInput = {
  accommodationId: Scalars['ID']['input'];
  cmsInventoryCountMode?: InputMaybe<Scalars['Boolean']['input']>;
  inventoryMode?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateArticleInput = {
  attachments?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAudioOptionInput = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCmsOtaProductMapsInput = {
  accommodationId: Scalars['ID']['input'];
  dataSets: Array<CmsOtaProductMapInput>;
  otaKey: Ota;
};

export type UpdateCoamPaymentConfig = {
  accommodationId: Scalars['ID']['input'];
  cpid: Scalars['String']['input'];
};

export type UpdateConciergeAmenity = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deliveryTime?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  soldOutPeriod?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
};

export type UpdateConciergeAmenityCategory = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateConciergeOrderInput = {
  expectedTime?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  reservationId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<ConciergeOrderStatus>;
};

export type UpdateConciergeServiceNotice = {
  accommodationId: Scalars['ID']['input'];
  endDate: Scalars['Date']['input'];
  id: Scalars['ID']['input'];
  images: Array<InputMaybe<Scalars['String']['input']>>;
  priority: Scalars['Int']['input'];
  startDate: Scalars['Date']['input'];
  title: Scalars['String']['input'];
  type: Scalars['Int']['input'];
};

export type UpdateDaemonMethod = {
  definition?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  otaKey?: InputMaybe<Ota>;
  type?: InputMaybe<MethodType>;
};

export type UpdateKioskInput = {
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<KioskState>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMileageUserInput = {
  accommodationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type UpdateOrderRequestTemplate = {
  accommodationId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  request: Scalars['String']['input'];
};

export type UpdatePreDiscountInfoResponse = {
  __typename?: 'UpdatePreDiscountInfoResponse';
  data: PreDiscountInfoData;
  status: Scalars['String']['output'];
  statusMsg: Scalars['String']['output'];
};

export type UpdatePriceInput = {
  addonAmount?: InputMaybe<Scalars['Int']['input']>;
  addonAmount2?: InputMaybe<Scalars['Int']['input']>;
  addonSleepsMaximum?: InputMaybe<Scalars['Int']['input']>;
  bookingActualAmount?: InputMaybe<Scalars['Int']['input']>;
  bookingOriginAmount?: InputMaybe<Scalars['Int']['input']>;
  cardAmount?: InputMaybe<Scalars['Int']['input']>;
  cashAmount?: InputMaybe<Scalars['Int']['input']>;
  defaultRentTime?: InputMaybe<Scalars['String']['input']>;
  extendedRentTime?: InputMaybe<Scalars['String']['input']>;
  extraGuestAmount?: InputMaybe<Scalars['Int']['input']>;
  fri?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  lateCheckoutLimit?: InputMaybe<Scalars['String']['input']>;
  lateCheckoutMaximum?: InputMaybe<Scalars['String']['input']>;
  mon?: InputMaybe<Scalars['Boolean']['input']>;
  priceTimes?: InputMaybe<Array<InputMaybe<PriceTimeInput>>>;
  priceType?: InputMaybe<PriceType>;
  rentExpireAt?: InputMaybe<Scalars['String']['input']>;
  sat?: InputMaybe<Scalars['Boolean']['input']>;
  sun?: InputMaybe<Scalars['Boolean']['input']>;
  thu?: InputMaybe<Scalars['Boolean']['input']>;
  tue?: InputMaybe<Scalars['Boolean']['input']>;
  useAddon?: InputMaybe<Scalars['Boolean']['input']>;
  wed?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePricePeriodInput = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateReservationMemoInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomInput = {
  amenities?: InputMaybe<Array<InputMaybe<AmenityInput>>>;
  cardData?: InputMaybe<Scalars['String']['input']>;
  checkIn?: InputMaybe<Scalars['String']['input']>;
  checkOut?: InputMaybe<Scalars['String']['input']>;
  dayCheckOut?: InputMaybe<Scalars['String']['input']>;
  defaultSleeps?: InputMaybe<Scalars['Int']['input']>;
  encryptionKey?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['String']['input']>;
  kioskId?: InputMaybe<Scalars['String']['input']>;
  maxSleeps?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  roomThemes?: InputMaybe<Array<RoomThemeInput>>;
  roomTypeId?: InputMaybe<Scalars['String']['input']>;
  saleState?: InputMaybe<SaleState>;
};

export type UpdateRoomMemoInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomService = {
  accommodationId: Scalars['ID']['input'];
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Array<InputMaybe<UpdateRoomServiceOption>>>;
  price: Scalars['Int']['input'];
  soldOutPeriod?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['Upload']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoomServiceCategory = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoomServiceOption = {
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  roomServiceId?: InputMaybe<Scalars['ID']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoomTypeInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  checkIn?: InputMaybe<Scalars['String']['input']>;
  checkOut?: InputMaybe<Scalars['String']['input']>;
  dayQuantities?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  thirdPartyCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSalesRoomInfoInput = {
  accommodationId: Scalars['String']['input'];
  otaKey: Ota;
  roomSalesInfo?: InputMaybe<Array<RoomSalesInfo>>;
  subKey?: InputMaybe<Ota>;
};

export type UpdateThirdPartyInput = {
  authorities?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  trustedHosts?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  accessLevel: UserType;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identity: Scalars['String']['output'];
  isAuthorizedEmail?: Maybe<Scalars['Boolean']['output']>;
  isAuthorizedPhone?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<Maybe<UserEdge>>;
  pageInfo: PageInfo;
};

export type UserContact = {
  __typename?: 'UserContact';
  contact: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type UserContactInput = {
  contact: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<User>;
};

export type UserInput = {
  accessLevel?: InputMaybe<UserType>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  smsAuthHash?: InputMaybe<Scalars['String']['input']>;
};

export type UserLog = {
  __typename?: 'UserLog';
  createdAt: Scalars['Date']['output'];
  data?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  log?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
};

export type UserLogConnection = {
  __typename?: 'UserLogConnection';
  edges: Array<Maybe<UserLogEdge>>;
  pageInfo: PageInfo;
};

export type UserLogEdge = {
  __typename?: 'UserLogEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<UserLog>;
};

export type UserNotification = {
  __typename?: 'UserNotification';
  accommodationId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['Date']['output'];
  data?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isPublic?: Maybe<Scalars['Boolean']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  status?: Maybe<Scalars['Int']['output']>;
  summary: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type UserNotificationConnection = {
  __typename?: 'UserNotificationConnection';
  edges: Array<Maybe<UserNotificationEdge>>;
  pageInfo: PageInfo;
};

export type UserNotificationEdge = {
  __typename?: 'UserNotificationEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<UserNotification>;
};

export type UserNotificationInput = {
  accommodationAuthorities?: InputMaybe<Array<Scalars['String']['input']>>;
  accommodationId?: InputMaybe<Scalars['ID']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  summary: Scalars['String']['input'];
  type: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export enum UserType {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Partner = 'PARTNER',
  Partneradmin = 'PARTNERADMIN',
  Superadmin = 'SUPERADMIN'
}

export type UsersFilter = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyDuplicateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  identity?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyDuplicatePayload = {
  __typename?: 'VerifyDuplicatePayload';
  error?: Maybe<Array<Maybe<DuplicateCheckerType>>>;
  id: Scalars['ID']['output'];
  verified: Scalars['Boolean']['output'];
};

export type VirtualAccount = {
  __typename?: 'VirtualAccount';
  account?: Maybe<Scalars['String']['output']>;
  bank?: Maybe<Scalars['String']['output']>;
};

export enum Wings_Langtype {
  Eng = 'ENG',
  Kor = 'KOR'
}

export enum WeekType {
  Weekday = 'WEEKDAY',
  Weekend = 'WEEKEND'
}

export type WhereOptionInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<Scalars['String']['input']>;
  sortKey?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type WingsCheckInData = {
  __typename?: 'WingsCheckInData';
  folioNumber: Scalars['ID']['output'];
  rawData: Scalars['String']['output'];
  roomNumber: Scalars['String']['output'];
};

export type WingsCheckInPaymentInfo = {
  __typename?: 'WingsCheckInPaymentInfo';
  amount: Scalars['Int']['output'];
  isPaid: Scalars['Boolean']['output'];
  rawData: Scalars['String']['output'];
};

export type WingsCheckInResult = {
  __typename?: 'WingsCheckInResult';
  reservation: Reservation;
  wingsData: WingsCheckInData;
};

export type WingsCheckOutResult = {
  __typename?: 'WingsCheckOutResult';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type WingsDailyPriceInfo = {
  __typename?: 'WingsDailyPriceInfo';
  amount?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  rawData?: Maybe<Scalars['String']['output']>;
};

export type WingsKeyRetrieveResult = {
  __typename?: 'WingsKeyRetrieveResult';
  data?: Maybe<Scalars['String']['output']>;
  folioNumber?: Maybe<Scalars['String']['output']>;
  leftCount?: Maybe<Scalars['Int']['output']>;
  noBalance?: Maybe<Scalars['Boolean']['output']>;
  outstandingPayment?: Maybe<Payment>;
  requireFrontCheck?: Maybe<Scalars['Boolean']['output']>;
};

export type WingsPriceInfo = {
  __typename?: 'WingsPriceInfo';
  amount?: Maybe<Scalars['Int']['output']>;
  dailyPrices: Array<WingsDailyPriceInfo>;
  rawData?: Maybe<Scalars['String']['output']>;
};

export type WingsRoomType = {
  __typename?: 'WingsRoomType';
  price?: Maybe<WingsPriceInfo>;
  roomType: RoomType;
};

export type CreateAccommodationArticleInput = {
  accommodationId: Scalars['ID']['input'];
  attachments?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type SendInquiryEmailInput = {
  accommodationId: Scalars['ID']['input'];
  authToken: Scalars['String']['input'];
  contactType: Scalars['String']['input'];
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  etc?: InputMaybe<Scalars['String']['input']>;
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  person?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateAccommodationArticleInput = {
  attachments?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCmsActivityLogReadStatus = {
  id: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};
