import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = ResolversObject<{
  Node: never;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Accommodation: ResolverTypeWrapper<Accommodation>;
  AccommodationArticle: ResolverTypeWrapper<AccommodationArticle>;
  AccommodationArticleConnection: ResolverTypeWrapper<AccommodationArticleConnection>;
  AccommodationArticleEdge: ResolverTypeWrapper<AccommodationArticleEdge>;
  AccommodationConciergeSetting: ResolverTypeWrapper<AccommodationConciergeSetting>;
  AccommodationConnection: ResolverTypeWrapper<AccommodationConnection>;
  AccommodationEdge: ResolverTypeWrapper<AccommodationEdge>;
  AccommodationInventoryMode: ResolverTypeWrapper<AccommodationInventoryMode>;
  AccommodationMileageSetting: ResolverTypeWrapper<AccommodationMileageSetting>;
  AccommodationNotification: ResolverTypeWrapper<AccommodationNotification>;
  AccommodationNotificationConnection: ResolverTypeWrapper<AccommodationNotificationConnection>;
  AccommodationNotificationEdge: ResolverTypeWrapper<AccommodationNotificationEdge>;
  AccommodationNotificationQueryFilter: AccommodationNotificationQueryFilter;
  AccommodationOption: ResolverTypeWrapper<AccommodationOption>;
  AccommodationOptionInput: AccommodationOptionInput;
  AccommodationOta: ResolverTypeWrapper<AccommodationOta>;
  AccommodationReservationSetting: ResolverTypeWrapper<AccommodationReservationSetting>;
  AccommodationReservationSettingForGuest: ResolverTypeWrapper<AccommodationReservationSettingForGuest>;
  AccommodationSales: ResolverTypeWrapper<AccommodationSales>;
  AccommodationUser: ResolverTypeWrapper<AccommodationUser>;
  AddAccommodationNotificationInput: AddAccommodationNotificationInput;
  AddAccommodationOtaInput: AddAccommodationOtaInput;
  AddCmsActivityLogInput: AddCmsActivityLogInput;
  AddCmsOtaAccount: AddCmsOtaAccount;
  AddCompanyAssigneeInput: AddCompanyAssigneeInput;
  AddCouponInput: AddCouponInput;
  AddDaemonMethod: AddDaemonMethod;
  AddKioskSystemNotificationInput: AddKioskSystemNotificationInput;
  AddMileageInput: AddMileageInput;
  AddOTASettingInput: AddOtaSettingInput;
  AddOtaIntegrationSmsHistoryInput: AddOtaIntegrationSmsHistoryInput;
  AddOtaPriceContractionInput: AddOtaPriceContractionInput;
  AddOtaProductInput: AddOtaProductInput;
  AddPaymentInput: AddPaymentInput;
  AddReservationGroupInput: AddReservationGroupInput;
  AddReservationInput: AddReservationInput;
  AddReservationPackageInput: AddReservationPackageInput;
  AddServiceProductInput: AddServiceProductInput;
  AgeEstimation: ResolverTypeWrapper<AgeEstimation>;
  AmanoDeletePreDiscountInfoInput: AmanoDeletePreDiscountInfoInput;
  AmanoFeeCarSearchInput: AmanoFeeCarSearchInput;
  AmanoFreeTimeZone: ResolverTypeWrapper<AmanoFreeTimeZone>;
  AmanoInCarInfo: ResolverTypeWrapper<AmanoInCarInfo>;
  AmanoInOutStatus: AmanoInOutStatus;
  AmanoInsertPreDiscountInfoInput: AmanoInsertPreDiscountInfoInput;
  AmanoPaymentType: AmanoPaymentType;
  AmanoPreDiscount: ResolverTypeWrapper<AmanoPreDiscount>;
  AmanoPreDiscountListInfoInput: AmanoPreDiscountListInfoInput;
  AmanoUpdatePreDiscountInfoInput: AmanoUpdatePreDiscountInfoInput;
  Amenity: ResolverTypeWrapper<Amenity>;
  AmenityInput: AmenityInput;
  AnonymouseSignInTokenPair: ResolverTypeWrapper<AnonymouseSignInTokenPair>;
  Article: ResolverTypeWrapper<Article>;
  ArticleConnection: ResolverTypeWrapper<ArticleConnection>;
  ArticleEdge: ResolverTypeWrapper<ArticleEdge>;
  AssignReservationInput: AssignReservationInput;
  AudioOption: ResolverTypeWrapper<AudioOption>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CancelCoamPaymentInput: CancelCoamPaymentInput;
  Captcha: ResolverTypeWrapper<Captcha>;
  CardState: CardState;
  ChangePasswordBySMSAuthInput: ChangePasswordBySmsAuthInput;
  ChangePasswordInput: ChangePasswordInput;
  ChangeReservationRoomInput: ChangeReservationRoomInput;
  CleaningPeriod: ResolverTypeWrapper<CleaningPeriod>;
  ClearAllDataRelatedToCmsInput: ClearAllDataRelatedToCmsInput;
  CmsActivityLog: ResolverTypeWrapper<CmsActivityLog>;
  CmsActivityLogConnection: ResolverTypeWrapper<CmsActivityLogConnection>;
  CmsActivityLogEdge: ResolverTypeWrapper<CmsActivityLogEdge>;
  CmsActivityLogQueryFilter: CmsActivityLogQueryFilter;
  CmsCommandType: CmsCommandType;
  CmsDaemonMethod: ResolverTypeWrapper<CmsDaemonMethod>;
  CmsMonthlyReservationHistory: ResolverTypeWrapper<CmsMonthlyReservationHistory>;
  CmsOta: ResolverTypeWrapper<CmsOta>;
  CmsOtaAccount: ResolverTypeWrapper<CmsOtaAccount>;
  CmsOtaProductMap: ResolverTypeWrapper<CmsOtaProductMap>;
  CmsOtaProductMapInput: CmsOtaProductMapInput;
  CmsOtaProductSetting: ResolverTypeWrapper<CmsOtaProductSetting>;
  CmsRemoteActionType: CmsRemoteActionType;
  CmsReservation: ResolverTypeWrapper<CmsReservation>;
  CmsReservationDetail: ResolverTypeWrapper<CmsReservationDetail>;
  CmsReservationOffsetInput: CmsReservationOffsetInput;
  CmsReservationQueryFilter: CmsReservationQueryFilter;
  CmsReturnType: ResolverTypeWrapper<CmsReturnType>;
  CmsWhereOptionStatus: CmsWhereOptionStatus;
  CoamPaymentConfig: ResolverTypeWrapper<CoamPaymentConfig>;
  CoampayData: ResolverTypeWrapper<CoampayData>;
  CoampayPurchaseInput: CoampayPurchaseInput;
  CommandType: CommandType;
  CompanyAssignee: ResolverTypeWrapper<CompanyAssignee>;
  CompanyProfile: ResolverTypeWrapper<CompanyProfile>;
  CompanyProfileInput: CompanyProfileInput;
  ConciergeAmenity: ResolverTypeWrapper<ConciergeAmenity>;
  ConciergeAmenityCategory: ResolverTypeWrapper<ConciergeAmenityCategory>;
  ConciergeAmenityConnection: ResolverTypeWrapper<ConciergeAmenityConnection>;
  ConciergeAmenityEdge: ResolverTypeWrapper<ConciergeAmenityEdge>;
  ConciergeAmenityOrderDetail: ResolverTypeWrapper<ConciergeAmenityOrderDetail>;
  ConciergeAmenityStatus: ConciergeAmenityStatus;
  ConciergeConfigInfo: ResolverTypeWrapper<ConciergeConfigInfo>;
  ConciergeOrder: ResolverTypeWrapper<ConciergeOrder>;
  ConciergeOrderConnection: ResolverTypeWrapper<ConciergeOrderConnection>;
  ConciergeOrderEdge: ResolverTypeWrapper<ConciergeOrderEdge>;
  ConciergeOrderOptionInput: ConciergeOrderOptionInput;
  ConciergeOrderStatistics: ResolverTypeWrapper<ConciergeOrderStatistics>;
  ConciergeOrderStatisticsOptionInput: ConciergeOrderStatisticsOptionInput;
  ConciergeOrderStatus: ConciergeOrderStatus;
  ConciergePaymentInfo: ResolverTypeWrapper<ConciergePaymentInfo>;
  ConciergePaymentInfoType: ConciergePaymentInfoType;
  ConciergePaymentNotiInput: ConciergePaymentNotiInput;
  ConciergePaymentStatus: ConciergePaymentStatus;
  ConciergePaymentType: ConciergePaymentType;
  ConciergeServiceNotice: ResolverTypeWrapper<ConciergeServiceNotice>;
  ConciergeServiceSetting: ResolverTypeWrapper<ConciergeServiceSetting>;
  ConciergeServiceSettingInput: ConciergeServiceSettingInput;
  ConciergeSlackNotificationInfo: ConciergeSlackNotificationInfo;
  ConciergeWorkSetting: ResolverTypeWrapper<ConciergeWorkSetting>;
  ConciergeWorkSettingInput: ConciergeWorkSettingInput;
  ConciergeWorkType: ConciergeWorkType;
  ConnectionInput: ConnectionInput;
  ConnectionOffsetInput: ConnectionOffsetInput;
  Coupon: ResolverTypeWrapper<Coupon>;
  CouponConnection: ResolverTypeWrapper<CouponConnection>;
  CouponEdge: ResolverTypeWrapper<CouponEdge>;
  CouponInput: CouponInput;
  CouponType: CouponType;
  CouponUsageHistory: ResolverTypeWrapper<CouponUsageHistory>;
  CreateAccommodationInput: CreateAccommodationInput;
  CreateArticleInput: CreateArticleInput;
  CreateAudioOptionInput: CreateAudioOptionInput;
  CreateCmsOtaProductMapInput: CreateCmsOtaProductMapInput;
  CreateCoamPaymentConfig: CreateCoamPaymentConfig;
  CreateConciergeAmenity: CreateConciergeAmenity;
  CreateConciergeAmenityCategory: CreateConciergeAmenityCategory;
  CreateConciergeAmenityOrderDetailInput: CreateConciergeAmenityOrderDetailInput;
  CreateConciergeOrderInput: CreateConciergeOrderInput;
  CreateConciergeServiceNotice: CreateConciergeServiceNotice;
  CreateKioskInput: CreateKioskInput;
  CreateOrUpdatePgConfigInput: CreateOrUpdatePgConfigInput;
  CreateOrderRequestTemplate: CreateOrderRequestTemplate;
  CreatePriceInput: CreatePriceInput;
  CreatePricePeriodInput: CreatePricePeriodInput;
  CreatePublicPurchaseRequestInput: CreatePublicPurchaseRequestInput;
  CreateReservationMemoInput: CreateReservationMemoInput;
  CreateRoomInput: CreateRoomInput;
  CreateRoomMemoInput: CreateRoomMemoInput;
  CreateRoomService: CreateRoomService;
  CreateRoomServiceCategory: CreateRoomServiceCategory;
  CreateRoomServiceCategoryMap: CreateRoomServiceCategoryMap;
  CreateRoomServiceOption: CreateRoomServiceOption;
  CreateRoomServiceOptionDetailInput: CreateRoomServiceOptionDetailInput;
  CreateRoomServiceOrderDetailInput: CreateRoomServiceOrderDetailInput;
  CreateRoomTypeInput: CreateRoomTypeInput;
  DaemonArg: ResolverTypeWrapper<DaemonArg>;
  DaemonCommandType: DaemonCommandType;
  DailyQuantity: ResolverTypeWrapper<DailyQuantity>;
  DailyQuantityInput: DailyQuantityInput;
  DailySalesAggregate: ResolverTypeWrapper<DailySalesAggregate>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DatePrice: ResolverTypeWrapper<DatePrice>;
  DateQuantity: ResolverTypeWrapper<DateQuantity>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Day: Day;
  DayPaymentSum: ResolverTypeWrapper<DayPaymentSum>;
  DayReservationCount: ResolverTypeWrapper<DayReservationCount>;
  DeduplicateCmsReservationInput: DeduplicateCmsReservationInput;
  DefaultInfo: ResolverTypeWrapper<DefaultInfo>;
  DefaultStatus: DefaultStatus;
  DeletePlatformInput: DeletePlatformInput;
  DeletePreDiscountInfoResponse: ResolverTypeWrapper<DeletePreDiscountInfoResponse>;
  DeleteRoomServiceCategoryMap: DeleteRoomServiceCategoryMap;
  DeviceConnection: ResolverTypeWrapper<DeviceConnection>;
  DeviceEdge: ResolverTypeWrapper<DeviceEdge>;
  DeviceInput: DeviceInput;
  DiscountType: DiscountType;
  DuplicateCheckerType: DuplicateCheckerType;
  ElasticResponseType: ResolverTypeWrapper<ElasticResponseType>;
  ElasticResult: ElasticResult;
  Employee: ResolverTypeWrapper<Employee>;
  EmployeeInput: EmployeeInput;
  ErrorCause: ResolverTypeWrapper<ErrorCause>;
  ErrorCauseKeys: ResolverTypeWrapper<ErrorCauseKeys>;
  Face: ResolverTypeWrapper<Face>;
  FaceDetection: ResolverTypeWrapper<FaceDetection>;
  FeeCarSearchData: ResolverTypeWrapper<FeeCarSearchData>;
  File: ResolverTypeWrapper<File>;
  FilterType: FilterType;
  FixedReservationCount: ResolverTypeWrapper<FixedReservationCount>;
  FixedReservationDiff: ResolverTypeWrapper<FixedReservationDiff>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GQLSchemaType: ResolverTypeWrapper<GqlSchemaType>;
  Gender: Gender;
  GetCmsMonthlyReservationHistoryInput: GetCmsMonthlyReservationHistoryInput;
  GetCmsOtaListInput: GetCmsOtaListInput;
  GetFeeCarSearchResponse: ResolverTypeWrapper<GetFeeCarSearchResponse>;
  GetPreDiscountListInfoResponse: ResolverTypeWrapper<GetPreDiscountListInfoResponse>;
  GetReservationListInput: GetReservationListInput;
  GetTodaySalesDashboardInput: GetTodaySalesDashboardInput;
  HandleEmergencyNotificationInput: HandleEmergencyNotificationInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  InfoInput: InfoInput;
  InsertPreDiscountInfoResponse: ResolverTypeWrapper<InsertPreDiscountInfoResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  JobCountSet: ResolverTypeWrapper<JobCountSet>;
  Kiosk: ResolverTypeWrapper<Kiosk>;
  KioskConnection: ResolverTypeWrapper<KioskConnection>;
  KioskEdge: ResolverTypeWrapper<KioskEdge>;
  KioskOption: ResolverTypeWrapper<KioskOption>;
  KioskOptionInput: KioskOptionInput;
  KioskOptions: ResolverTypeWrapper<KioskOptions>;
  KioskState: KioskState;
  LockOtpInput: LockOtpInput;
  LockOtpPayload: ResolverTypeWrapper<LockOtpPayload>;
  LogLevel: LogLevel;
  LogType: LogType;
  MainPayPurchaseRequest: MainPayPurchaseRequest;
  MainPayPurchaseResolve: MainPayPurchaseResolve;
  MainPayPurchaseResolveResult: ResolverTypeWrapper<MainPayPurchaseResolveResult>;
  MainPayPurchaseSignature: ResolverTypeWrapper<MainPayPurchaseSignature>;
  MethodType: MethodType;
  Mileage: ResolverTypeWrapper<Mileage>;
  MileageAggregation: ResolverTypeWrapper<MileageAggregation>;
  MileageConnection: ResolverTypeWrapper<MileageConnection>;
  MileageEdge: ResolverTypeWrapper<MileageEdge>;
  MileageQueryFilter: MileageQueryFilter;
  MileageRate: ResolverTypeWrapper<MileageRate>;
  MileageSetting: ResolverTypeWrapper<MileageSetting>;
  MileageSettingInput: MileageSettingInput;
  MileageUser: ResolverTypeWrapper<MileageUser>;
  MileageUserConnection: ResolverTypeWrapper<MileageUserConnection>;
  MileageUserEdge: ResolverTypeWrapper<MileageUserEdge>;
  MileageUserQueryFilter: MileageUserQueryFilter;
  ModifyAccommodationOtaInput: ModifyAccommodationOtaInput;
  ModifyCompanyAssigneeInput: ModifyCompanyAssigneeInput;
  ModifyOTASettingInput: ModifyOtaSettingInput;
  ModifyOtaPriceContractionInput: ModifyOtaPriceContractionInput;
  ModifyOtaProductInput: ModifyOtaProductInput;
  ModifyPaymentInput: ModifyPaymentInput;
  ModifyReservationGroupInput: ModifyReservationGroupInput;
  ModifyReservationInput: ModifyReservationInput;
  ModifyReservationPackageInput: ModifyReservationPackageInput;
  ModifyServiceProductInput: ModifyServiceProductInput;
  ModifyUserContactInput: ModifyUserContactInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  OTA: Ota;
  OTASetting: ResolverTypeWrapper<OtaSetting>;
  OffsetPageInfo: ResolverTypeWrapper<OffsetPageInfo>;
  OrderRequestTemplate: ResolverTypeWrapper<OrderRequestTemplate>;
  Origin: Origin;
  OtaIntegrationSmsHistory: ResolverTypeWrapper<OtaIntegrationSmsHistory>;
  OtaIntegrationSmsHistoryConnection: ResolverTypeWrapper<OtaIntegrationSmsHistoryConnection>;
  OtaIntegrationSmsHistoryEdge: ResolverTypeWrapper<OtaIntegrationSmsHistoryEdge>;
  OtaIntegrationSmsQueryFilter: OtaIntegrationSmsQueryFilter;
  OtaPriceContraction: ResolverTypeWrapper<OtaPriceContraction>;
  OtaProduct: ResolverTypeWrapper<OtaProduct>;
  PackageOption: ResolverTypeWrapper<PackageOption>;
  PackageOptionsInput: PackageOptionsInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentConnection: ResolverTypeWrapper<PaymentConnection>;
  PaymentEdge: ResolverTypeWrapper<PaymentEdge>;
  PaymentQueryFilter: PaymentQueryFilter;
  PaymentSalesReport: ResolverTypeWrapper<PaymentSalesReport>;
  PaymentStatistics: ResolverTypeWrapper<PaymentStatistics>;
  PgConfig: ResolverTypeWrapper<PgConfig>;
  PlatformReservationCount: ResolverTypeWrapper<PlatformReservationCount>;
  PlatformSignInInput: PlatformSignInInput;
  PlatformVisitIntervalSum: ResolverTypeWrapper<PlatformVisitIntervalSum>;
  PreAssignRoomInput: PreAssignRoomInput;
  PreAssignedRoom: ResolverTypeWrapper<PreAssignedRoom>;
  PreDiscountInfoData: ResolverTypeWrapper<PreDiscountInfoData>;
  PreDiscountListInfoData: ResolverTypeWrapper<PreDiscountListInfoData>;
  PreregisterParkingByGuestSessionInput: PreregisterParkingByGuestSessionInput;
  Price: ResolverTypeWrapper<Price>;
  PricePeriod: ResolverTypeWrapper<PricePeriod>;
  PriceTime: ResolverTypeWrapper<PriceTime>;
  PriceTimeInput: PriceTimeInput;
  PriceTimeType: PriceTimeType;
  PriceType: PriceType;
  PublicPurchase: ResolverTypeWrapper<PublicPurchase>;
  PublicPurchaseConnection: ResolverTypeWrapper<PublicPurchaseConnection>;
  PublicPurchaseEdge: ResolverTypeWrapper<PublicPurchaseEdge>;
  PublishCmsBroadcastEventinput: PublishCmsBroadcastEventinput;
  PublishCmsCommandinput: PublishCmsCommandinput;
  PublishDaemonCommandinput: PublishDaemonCommandinput;
  Query: ResolverTypeWrapper<{}>;
  QueryConciergeServiceSettingInput: QueryConciergeServiceSettingInput;
  QueryConciergeWorkSettingInput: QueryConciergeWorkSettingInput;
  RegisterParkingPassInput: RegisterParkingPassInput;
  ReportCommandResultData: ReportCommandResultData;
  ReportCommandResultInput: ReportCommandResultInput;
  RequestSMSPayload: ResolverTypeWrapper<RequestSmsPayload>;
  Reservation: ResolverTypeWrapper<Reservation>;
  ReservationConnection: ResolverTypeWrapper<ReservationConnection>;
  ReservationCount: ResolverTypeWrapper<ReservationCount>;
  ReservationEdge: ResolverTypeWrapper<ReservationEdge>;
  ReservationGroup: ResolverTypeWrapper<ReservationGroup>;
  ReservationMemo: ResolverTypeWrapper<ReservationMemo>;
  ReservationPackage: ResolverTypeWrapper<ReservationPackage>;
  ReservationParseResponse: ResolverTypeWrapper<ReservationParseResponse>;
  ReservationQueryFilter: ReservationQueryFilter;
  ReservationQueryType: ReservationQueryType;
  ReservationSMSTemplate: ResolverTypeWrapper<ReservationSmsTemplate>;
  ReservationSMSTemplateInput: ReservationSmsTemplateInput;
  ReservationSetting: ResolverTypeWrapper<ReservationSetting>;
  ReservationSettingInput: ReservationSettingInput;
  ReservationStatistics: ResolverTypeWrapper<ReservationStatistics>;
  ReserveTarget: ReserveTarget;
  Room: ResolverTypeWrapper<Room>;
  RoomConnection: ResolverTypeWrapper<RoomConnection>;
  RoomDevice: ResolverTypeWrapper<RoomDevice>;
  RoomEdge: ResolverTypeWrapper<RoomEdge>;
  RoomMemo: ResolverTypeWrapper<RoomMemo>;
  RoomSalesInfo: RoomSalesInfo;
  RoomService: ResolverTypeWrapper<RoomService>;
  RoomServiceCategory: ResolverTypeWrapper<RoomServiceCategory>;
  RoomServiceConnection: ResolverTypeWrapper<RoomServiceConnection>;
  RoomServiceEdge: ResolverTypeWrapper<RoomServiceEdge>;
  RoomServiceOption: ResolverTypeWrapper<RoomServiceOption>;
  RoomServiceOptionDetail: ResolverTypeWrapper<RoomServiceOptionDetail>;
  RoomServiceOrderDetail: ResolverTypeWrapper<RoomServiceOrderDetail>;
  RoomServiceStatus: RoomServiceStatus;
  RoomState: RoomState;
  RoomTheme: ResolverTypeWrapper<RoomTheme>;
  RoomThemeInput: RoomThemeInput;
  RoomType: ResolverTypeWrapper<RoomType>;
  RoomTypeConnection: ResolverTypeWrapper<RoomTypeConnection>;
  RoomTypeEdge: ResolverTypeWrapper<RoomTypeEdge>;
  RoomTypePaymentSum: ResolverTypeWrapper<RoomTypePaymentSum>;
  RoomTypeReservationCount: ResolverTypeWrapper<RoomTypeReservationCount>;
  SaleAggregation: ResolverTypeWrapper<SaleAggregation>;
  SaleState: SaleState;
  SearchVehiclesResultByNumber: ResolverTypeWrapper<SearchVehiclesResultByNumber>;
  SeasonType: SeasonType;
  ServiceProduct: ResolverTypeWrapper<ServiceProduct>;
  SetOtpPayload: ResolverTypeWrapper<SetOtpPayload>;
  ShardFailure: ResolverTypeWrapper<ShardFailure>;
  ShardStatistics: ResolverTypeWrapper<ShardStatistics>;
  SignInInput: SignInInput;
  SignInPayload: ResolverTypeWrapper<SignInPayload>;
  SignUpInput: SignUpInput;
  SignUpPayload: ResolverTypeWrapper<SignUpPayload>;
  SmartAccessDevice: ResolverTypeWrapper<SmartAccessDevice>;
  SmartAccessRoom: ResolverTypeWrapper<SmartAccessRoom>;
  SortDirection: SortDirection;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  SubjectType: SubjectType;
  SuccessOrError: ResolverTypeWrapper<SuccessOrError>;
  SuccessOrErrorBool: ResolverTypeWrapper<SuccessOrErrorBool>;
  SyncCmsOtaProductsInput: SyncCmsOtaProductsInput;
  SynchronizationGetTodayReservationInput: SynchronizationGetTodayReservationInput;
  SynchronizationReservationInput: SynchronizationReservationInput;
  SynchronizationSalesRoomInfoInput: SynchronizationSalesRoomInfoInput;
  SystemOption: ResolverTypeWrapper<SystemOption>;
  Theme: ResolverTypeWrapper<Theme>;
  ThirdPartyApp: ResolverTypeWrapper<ThirdPartyApp>;
  ThirdPartyInput: ThirdPartyInput;
  ThirdPartyProperty: ResolverTypeWrapper<ThirdPartyProperty>;
  ThirdPartyPropertyInput: ThirdPartyPropertyInput;
  ThirdPartyProvider: ThirdPartyProvider;
  ThirdPartyProviderType: ThirdPartyProviderType;
  ThirdPartyUser: ResolverTypeWrapper<ThirdPartyUser>;
  TodayAccommodationOtaSalseCount: ResolverTypeWrapper<TodayAccommodationOtaSalseCount>;
  TokenPayload: ResolverTypeWrapper<TokenPayload>;
  TypePaymentSum: ResolverTypeWrapper<TypePaymentSum>;
  TypeSalesAggregate: ResolverTypeWrapper<TypeSalesAggregate>;
  UpdateAccommodationInput: UpdateAccommodationInput;
  UpdateAccommodationInventoryModeInput: UpdateAccommodationInventoryModeInput;
  UpdateArticleInput: UpdateArticleInput;
  UpdateAudioOptionInput: UpdateAudioOptionInput;
  UpdateCmsOtaProductMapsInput: UpdateCmsOtaProductMapsInput;
  UpdateCoamPaymentConfig: UpdateCoamPaymentConfig;
  UpdateConciergeAmenity: UpdateConciergeAmenity;
  UpdateConciergeAmenityCategory: UpdateConciergeAmenityCategory;
  UpdateConciergeOrderInput: UpdateConciergeOrderInput;
  UpdateConciergeServiceNotice: UpdateConciergeServiceNotice;
  UpdateDaemonMethod: UpdateDaemonMethod;
  UpdateKioskInput: UpdateKioskInput;
  UpdateMileageUserInput: UpdateMileageUserInput;
  UpdateOrderRequestTemplate: UpdateOrderRequestTemplate;
  UpdatePreDiscountInfoResponse: ResolverTypeWrapper<UpdatePreDiscountInfoResponse>;
  UpdatePriceInput: UpdatePriceInput;
  UpdatePricePeriodInput: UpdatePricePeriodInput;
  UpdateReservationMemoInput: UpdateReservationMemoInput;
  UpdateRoomInput: UpdateRoomInput;
  UpdateRoomMemoInput: UpdateRoomMemoInput;
  UpdateRoomService: UpdateRoomService;
  UpdateRoomServiceCategory: UpdateRoomServiceCategory;
  UpdateRoomServiceOption: UpdateRoomServiceOption;
  UpdateRoomTypeInput: UpdateRoomTypeInput;
  UpdateSalesRoomInfoInput: UpdateSalesRoomInfoInput;
  UpdateThirdPartyInput: UpdateThirdPartyInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserContact: ResolverTypeWrapper<UserContact>;
  UserContactInput: UserContactInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserInput: UserInput;
  UserLog: ResolverTypeWrapper<UserLog>;
  UserLogConnection: ResolverTypeWrapper<UserLogConnection>;
  UserLogEdge: ResolverTypeWrapper<UserLogEdge>;
  UserNotification: ResolverTypeWrapper<UserNotification>;
  UserNotificationConnection: ResolverTypeWrapper<UserNotificationConnection>;
  UserNotificationEdge: ResolverTypeWrapper<UserNotificationEdge>;
  UserNotificationInput: UserNotificationInput;
  UserType: UserType;
  UsersFilter: UsersFilter;
  VerifyDuplicateInput: VerifyDuplicateInput;
  VerifyDuplicatePayload: ResolverTypeWrapper<VerifyDuplicatePayload>;
  VirtualAccount: ResolverTypeWrapper<VirtualAccount>;
  WINGS_LANGTYPE: Wings_Langtype;
  WeekType: WeekType;
  WhereOptionInput: WhereOptionInput;
  WingsCheckInData: ResolverTypeWrapper<WingsCheckInData>;
  WingsCheckInPaymentInfo: ResolverTypeWrapper<WingsCheckInPaymentInfo>;
  WingsCheckInResult: ResolverTypeWrapper<WingsCheckInResult>;
  WingsCheckOutResult: ResolverTypeWrapper<WingsCheckOutResult>;
  WingsDailyPriceInfo: ResolverTypeWrapper<WingsDailyPriceInfo>;
  WingsKeyRetrieveResult: ResolverTypeWrapper<WingsKeyRetrieveResult>;
  WingsPriceInfo: ResolverTypeWrapper<WingsPriceInfo>;
  WingsRoomType: ResolverTypeWrapper<WingsRoomType>;
  createAccommodationArticleInput: CreateAccommodationArticleInput;
  sendInquiryEmailInput: SendInquiryEmailInput;
  updateAccommodationArticleInput: UpdateAccommodationArticleInput;
  updateCmsActivityLogReadStatus: UpdateCmsActivityLogReadStatus;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Accommodation: Accommodation;
  AccommodationArticle: AccommodationArticle;
  AccommodationArticleConnection: AccommodationArticleConnection;
  AccommodationArticleEdge: AccommodationArticleEdge;
  AccommodationConciergeSetting: AccommodationConciergeSetting;
  AccommodationConnection: AccommodationConnection;
  AccommodationEdge: AccommodationEdge;
  AccommodationInventoryMode: AccommodationInventoryMode;
  AccommodationMileageSetting: AccommodationMileageSetting;
  AccommodationNotification: AccommodationNotification;
  AccommodationNotificationConnection: AccommodationNotificationConnection;
  AccommodationNotificationEdge: AccommodationNotificationEdge;
  AccommodationNotificationQueryFilter: AccommodationNotificationQueryFilter;
  AccommodationOption: AccommodationOption;
  AccommodationOptionInput: AccommodationOptionInput;
  AccommodationOta: AccommodationOta;
  AccommodationReservationSetting: AccommodationReservationSetting;
  AccommodationReservationSettingForGuest: AccommodationReservationSettingForGuest;
  AccommodationSales: AccommodationSales;
  AccommodationUser: AccommodationUser;
  AddAccommodationNotificationInput: AddAccommodationNotificationInput;
  AddAccommodationOtaInput: AddAccommodationOtaInput;
  AddCmsActivityLogInput: AddCmsActivityLogInput;
  AddCmsOtaAccount: AddCmsOtaAccount;
  AddCompanyAssigneeInput: AddCompanyAssigneeInput;
  AddCouponInput: AddCouponInput;
  AddDaemonMethod: AddDaemonMethod;
  AddKioskSystemNotificationInput: AddKioskSystemNotificationInput;
  AddMileageInput: AddMileageInput;
  AddOTASettingInput: AddOtaSettingInput;
  AddOtaIntegrationSmsHistoryInput: AddOtaIntegrationSmsHistoryInput;
  AddOtaPriceContractionInput: AddOtaPriceContractionInput;
  AddOtaProductInput: AddOtaProductInput;
  AddPaymentInput: AddPaymentInput;
  AddReservationGroupInput: AddReservationGroupInput;
  AddReservationInput: AddReservationInput;
  AddReservationPackageInput: AddReservationPackageInput;
  AddServiceProductInput: AddServiceProductInput;
  AgeEstimation: AgeEstimation;
  AmanoDeletePreDiscountInfoInput: AmanoDeletePreDiscountInfoInput;
  AmanoFeeCarSearchInput: AmanoFeeCarSearchInput;
  AmanoFreeTimeZone: AmanoFreeTimeZone;
  AmanoInCarInfo: AmanoInCarInfo;
  AmanoInsertPreDiscountInfoInput: AmanoInsertPreDiscountInfoInput;
  AmanoPreDiscount: AmanoPreDiscount;
  AmanoPreDiscountListInfoInput: AmanoPreDiscountListInfoInput;
  AmanoUpdatePreDiscountInfoInput: AmanoUpdatePreDiscountInfoInput;
  Amenity: Amenity;
  AmenityInput: AmenityInput;
  AnonymouseSignInTokenPair: AnonymouseSignInTokenPair;
  Article: Article;
  ArticleConnection: ArticleConnection;
  ArticleEdge: ArticleEdge;
  AssignReservationInput: AssignReservationInput;
  AudioOption: AudioOption;
  Boolean: Scalars['Boolean']['output'];
  CancelCoamPaymentInput: CancelCoamPaymentInput;
  Captcha: Captcha;
  ChangePasswordBySMSAuthInput: ChangePasswordBySmsAuthInput;
  ChangePasswordInput: ChangePasswordInput;
  ChangeReservationRoomInput: ChangeReservationRoomInput;
  CleaningPeriod: CleaningPeriod;
  ClearAllDataRelatedToCmsInput: ClearAllDataRelatedToCmsInput;
  CmsActivityLog: CmsActivityLog;
  CmsActivityLogConnection: CmsActivityLogConnection;
  CmsActivityLogEdge: CmsActivityLogEdge;
  CmsActivityLogQueryFilter: CmsActivityLogQueryFilter;
  CmsDaemonMethod: CmsDaemonMethod;
  CmsMonthlyReservationHistory: CmsMonthlyReservationHistory;
  CmsOta: CmsOta;
  CmsOtaAccount: CmsOtaAccount;
  CmsOtaProductMap: CmsOtaProductMap;
  CmsOtaProductMapInput: CmsOtaProductMapInput;
  CmsOtaProductSetting: CmsOtaProductSetting;
  CmsReservation: CmsReservation;
  CmsReservationDetail: CmsReservationDetail;
  CmsReservationOffsetInput: CmsReservationOffsetInput;
  CmsReservationQueryFilter: CmsReservationQueryFilter;
  CmsReturnType: CmsReturnType;
  CoamPaymentConfig: CoamPaymentConfig;
  CoampayData: CoampayData;
  CoampayPurchaseInput: CoampayPurchaseInput;
  CompanyAssignee: CompanyAssignee;
  CompanyProfile: CompanyProfile;
  CompanyProfileInput: CompanyProfileInput;
  ConciergeAmenity: ConciergeAmenity;
  ConciergeAmenityCategory: ConciergeAmenityCategory;
  ConciergeAmenityConnection: ConciergeAmenityConnection;
  ConciergeAmenityEdge: ConciergeAmenityEdge;
  ConciergeAmenityOrderDetail: ConciergeAmenityOrderDetail;
  ConciergeConfigInfo: ConciergeConfigInfo;
  ConciergeOrder: ConciergeOrder;
  ConciergeOrderConnection: ConciergeOrderConnection;
  ConciergeOrderEdge: ConciergeOrderEdge;
  ConciergeOrderOptionInput: ConciergeOrderOptionInput;
  ConciergeOrderStatistics: ConciergeOrderStatistics;
  ConciergeOrderStatisticsOptionInput: ConciergeOrderStatisticsOptionInput;
  ConciergePaymentInfo: ConciergePaymentInfo;
  ConciergePaymentNotiInput: ConciergePaymentNotiInput;
  ConciergeServiceNotice: ConciergeServiceNotice;
  ConciergeServiceSetting: ConciergeServiceSetting;
  ConciergeServiceSettingInput: ConciergeServiceSettingInput;
  ConciergeSlackNotificationInfo: ConciergeSlackNotificationInfo;
  ConciergeWorkSetting: ConciergeWorkSetting;
  ConciergeWorkSettingInput: ConciergeWorkSettingInput;
  ConnectionInput: ConnectionInput;
  ConnectionOffsetInput: ConnectionOffsetInput;
  Coupon: Coupon;
  CouponConnection: CouponConnection;
  CouponEdge: CouponEdge;
  CouponInput: CouponInput;
  CouponUsageHistory: CouponUsageHistory;
  CreateAccommodationInput: CreateAccommodationInput;
  CreateArticleInput: CreateArticleInput;
  CreateAudioOptionInput: CreateAudioOptionInput;
  CreateCmsOtaProductMapInput: CreateCmsOtaProductMapInput;
  CreateCoamPaymentConfig: CreateCoamPaymentConfig;
  CreateConciergeAmenity: CreateConciergeAmenity;
  CreateConciergeAmenityCategory: CreateConciergeAmenityCategory;
  CreateConciergeAmenityOrderDetailInput: CreateConciergeAmenityOrderDetailInput;
  CreateConciergeOrderInput: CreateConciergeOrderInput;
  CreateConciergeServiceNotice: CreateConciergeServiceNotice;
  CreateKioskInput: CreateKioskInput;
  CreateOrUpdatePgConfigInput: CreateOrUpdatePgConfigInput;
  CreateOrderRequestTemplate: CreateOrderRequestTemplate;
  CreatePriceInput: CreatePriceInput;
  CreatePricePeriodInput: CreatePricePeriodInput;
  CreatePublicPurchaseRequestInput: CreatePublicPurchaseRequestInput;
  CreateReservationMemoInput: CreateReservationMemoInput;
  CreateRoomInput: CreateRoomInput;
  CreateRoomMemoInput: CreateRoomMemoInput;
  CreateRoomService: CreateRoomService;
  CreateRoomServiceCategory: CreateRoomServiceCategory;
  CreateRoomServiceCategoryMap: CreateRoomServiceCategoryMap;
  CreateRoomServiceOption: CreateRoomServiceOption;
  CreateRoomServiceOptionDetailInput: CreateRoomServiceOptionDetailInput;
  CreateRoomServiceOrderDetailInput: CreateRoomServiceOrderDetailInput;
  CreateRoomTypeInput: CreateRoomTypeInput;
  DaemonArg: DaemonArg;
  DailyQuantity: DailyQuantity;
  DailyQuantityInput: DailyQuantityInput;
  DailySalesAggregate: DailySalesAggregate;
  Date: Scalars['Date']['output'];
  DatePrice: DatePrice;
  DateQuantity: DateQuantity;
  DateTime: Scalars['DateTime']['output'];
  DayPaymentSum: DayPaymentSum;
  DayReservationCount: DayReservationCount;
  DeduplicateCmsReservationInput: DeduplicateCmsReservationInput;
  DefaultInfo: DefaultInfo;
  DeletePlatformInput: DeletePlatformInput;
  DeletePreDiscountInfoResponse: DeletePreDiscountInfoResponse;
  DeleteRoomServiceCategoryMap: DeleteRoomServiceCategoryMap;
  DeviceConnection: DeviceConnection;
  DeviceEdge: DeviceEdge;
  DeviceInput: DeviceInput;
  ElasticResponseType: ElasticResponseType;
  Employee: Employee;
  EmployeeInput: EmployeeInput;
  ErrorCause: ErrorCause;
  ErrorCauseKeys: ErrorCauseKeys;
  Face: Face;
  FaceDetection: FaceDetection;
  FeeCarSearchData: FeeCarSearchData;
  File: File;
  FixedReservationCount: FixedReservationCount;
  FixedReservationDiff: FixedReservationDiff;
  Float: Scalars['Float']['output'];
  GQLSchemaType: GqlSchemaType;
  GetCmsMonthlyReservationHistoryInput: GetCmsMonthlyReservationHistoryInput;
  GetCmsOtaListInput: GetCmsOtaListInput;
  GetFeeCarSearchResponse: GetFeeCarSearchResponse;
  GetPreDiscountListInfoResponse: GetPreDiscountListInfoResponse;
  GetReservationListInput: GetReservationListInput;
  GetTodaySalesDashboardInput: GetTodaySalesDashboardInput;
  HandleEmergencyNotificationInput: HandleEmergencyNotificationInput;
  ID: Scalars['ID']['output'];
  InfoInput: InfoInput;
  InsertPreDiscountInfoResponse: InsertPreDiscountInfoResponse;
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  JobCountSet: JobCountSet;
  Kiosk: Kiosk;
  KioskConnection: KioskConnection;
  KioskEdge: KioskEdge;
  KioskOption: KioskOption;
  KioskOptionInput: KioskOptionInput;
  KioskOptions: KioskOptions;
  LockOtpInput: LockOtpInput;
  LockOtpPayload: LockOtpPayload;
  MainPayPurchaseRequest: MainPayPurchaseRequest;
  MainPayPurchaseResolve: MainPayPurchaseResolve;
  MainPayPurchaseResolveResult: MainPayPurchaseResolveResult;
  MainPayPurchaseSignature: MainPayPurchaseSignature;
  Mileage: Mileage;
  MileageAggregation: MileageAggregation;
  MileageConnection: MileageConnection;
  MileageEdge: MileageEdge;
  MileageQueryFilter: MileageQueryFilter;
  MileageRate: MileageRate;
  MileageSetting: MileageSetting;
  MileageSettingInput: MileageSettingInput;
  MileageUser: MileageUser;
  MileageUserConnection: MileageUserConnection;
  MileageUserEdge: MileageUserEdge;
  MileageUserQueryFilter: MileageUserQueryFilter;
  ModifyAccommodationOtaInput: ModifyAccommodationOtaInput;
  ModifyCompanyAssigneeInput: ModifyCompanyAssigneeInput;
  ModifyOTASettingInput: ModifyOtaSettingInput;
  ModifyOtaPriceContractionInput: ModifyOtaPriceContractionInput;
  ModifyOtaProductInput: ModifyOtaProductInput;
  ModifyPaymentInput: ModifyPaymentInput;
  ModifyReservationGroupInput: ModifyReservationGroupInput;
  ModifyReservationInput: ModifyReservationInput;
  ModifyReservationPackageInput: ModifyReservationPackageInput;
  ModifyServiceProductInput: ModifyServiceProductInput;
  ModifyUserContactInput: ModifyUserContactInput;
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  OTASetting: OtaSetting;
  OffsetPageInfo: OffsetPageInfo;
  OrderRequestTemplate: OrderRequestTemplate;
  OtaIntegrationSmsHistory: OtaIntegrationSmsHistory;
  OtaIntegrationSmsHistoryConnection: OtaIntegrationSmsHistoryConnection;
  OtaIntegrationSmsHistoryEdge: OtaIntegrationSmsHistoryEdge;
  OtaIntegrationSmsQueryFilter: OtaIntegrationSmsQueryFilter;
  OtaPriceContraction: OtaPriceContraction;
  OtaProduct: OtaProduct;
  PackageOption: PackageOption;
  PackageOptionsInput: PackageOptionsInput;
  PageInfo: PageInfo;
  Payment: Payment;
  PaymentConnection: PaymentConnection;
  PaymentEdge: PaymentEdge;
  PaymentQueryFilter: PaymentQueryFilter;
  PaymentSalesReport: PaymentSalesReport;
  PaymentStatistics: PaymentStatistics;
  PgConfig: PgConfig;
  PlatformReservationCount: PlatformReservationCount;
  PlatformSignInInput: PlatformSignInInput;
  PlatformVisitIntervalSum: PlatformVisitIntervalSum;
  PreAssignRoomInput: PreAssignRoomInput;
  PreAssignedRoom: PreAssignedRoom;
  PreDiscountInfoData: PreDiscountInfoData;
  PreDiscountListInfoData: PreDiscountListInfoData;
  PreregisterParkingByGuestSessionInput: PreregisterParkingByGuestSessionInput;
  Price: Price;
  PricePeriod: PricePeriod;
  PriceTime: PriceTime;
  PriceTimeInput: PriceTimeInput;
  PublicPurchase: PublicPurchase;
  PublicPurchaseConnection: PublicPurchaseConnection;
  PublicPurchaseEdge: PublicPurchaseEdge;
  PublishCmsBroadcastEventinput: PublishCmsBroadcastEventinput;
  PublishCmsCommandinput: PublishCmsCommandinput;
  PublishDaemonCommandinput: PublishDaemonCommandinput;
  Query: {};
  QueryConciergeServiceSettingInput: QueryConciergeServiceSettingInput;
  QueryConciergeWorkSettingInput: QueryConciergeWorkSettingInput;
  RegisterParkingPassInput: RegisterParkingPassInput;
  ReportCommandResultData: ReportCommandResultData;
  ReportCommandResultInput: ReportCommandResultInput;
  RequestSMSPayload: RequestSmsPayload;
  Reservation: Reservation;
  ReservationConnection: ReservationConnection;
  ReservationCount: ReservationCount;
  ReservationEdge: ReservationEdge;
  ReservationGroup: ReservationGroup;
  ReservationMemo: ReservationMemo;
  ReservationPackage: ReservationPackage;
  ReservationParseResponse: ReservationParseResponse;
  ReservationQueryFilter: ReservationQueryFilter;
  ReservationSMSTemplate: ReservationSmsTemplate;
  ReservationSMSTemplateInput: ReservationSmsTemplateInput;
  ReservationSetting: ReservationSetting;
  ReservationSettingInput: ReservationSettingInput;
  ReservationStatistics: ReservationStatistics;
  Room: Room;
  RoomConnection: RoomConnection;
  RoomDevice: RoomDevice;
  RoomEdge: RoomEdge;
  RoomMemo: RoomMemo;
  RoomSalesInfo: RoomSalesInfo;
  RoomService: RoomService;
  RoomServiceCategory: RoomServiceCategory;
  RoomServiceConnection: RoomServiceConnection;
  RoomServiceEdge: RoomServiceEdge;
  RoomServiceOption: RoomServiceOption;
  RoomServiceOptionDetail: RoomServiceOptionDetail;
  RoomServiceOrderDetail: RoomServiceOrderDetail;
  RoomTheme: RoomTheme;
  RoomThemeInput: RoomThemeInput;
  RoomType: RoomType;
  RoomTypeConnection: RoomTypeConnection;
  RoomTypeEdge: RoomTypeEdge;
  RoomTypePaymentSum: RoomTypePaymentSum;
  RoomTypeReservationCount: RoomTypeReservationCount;
  SaleAggregation: SaleAggregation;
  SearchVehiclesResultByNumber: SearchVehiclesResultByNumber;
  ServiceProduct: ServiceProduct;
  SetOtpPayload: SetOtpPayload;
  ShardFailure: ShardFailure;
  ShardStatistics: ShardStatistics;
  SignInInput: SignInInput;
  SignInPayload: SignInPayload;
  SignUpInput: SignUpInput;
  SignUpPayload: SignUpPayload;
  SmartAccessDevice: SmartAccessDevice;
  SmartAccessRoom: SmartAccessRoom;
  String: Scalars['String']['output'];
  SuccessOrError: SuccessOrError;
  SuccessOrErrorBool: SuccessOrErrorBool;
  SyncCmsOtaProductsInput: SyncCmsOtaProductsInput;
  SynchronizationGetTodayReservationInput: SynchronizationGetTodayReservationInput;
  SynchronizationReservationInput: SynchronizationReservationInput;
  SynchronizationSalesRoomInfoInput: SynchronizationSalesRoomInfoInput;
  SystemOption: SystemOption;
  Theme: Theme;
  ThirdPartyApp: ThirdPartyApp;
  ThirdPartyInput: ThirdPartyInput;
  ThirdPartyProperty: ThirdPartyProperty;
  ThirdPartyPropertyInput: ThirdPartyPropertyInput;
  ThirdPartyUser: ThirdPartyUser;
  TodayAccommodationOtaSalseCount: TodayAccommodationOtaSalseCount;
  TokenPayload: TokenPayload;
  TypePaymentSum: TypePaymentSum;
  TypeSalesAggregate: TypeSalesAggregate;
  UpdateAccommodationInput: UpdateAccommodationInput;
  UpdateAccommodationInventoryModeInput: UpdateAccommodationInventoryModeInput;
  UpdateArticleInput: UpdateArticleInput;
  UpdateAudioOptionInput: UpdateAudioOptionInput;
  UpdateCmsOtaProductMapsInput: UpdateCmsOtaProductMapsInput;
  UpdateCoamPaymentConfig: UpdateCoamPaymentConfig;
  UpdateConciergeAmenity: UpdateConciergeAmenity;
  UpdateConciergeAmenityCategory: UpdateConciergeAmenityCategory;
  UpdateConciergeOrderInput: UpdateConciergeOrderInput;
  UpdateConciergeServiceNotice: UpdateConciergeServiceNotice;
  UpdateDaemonMethod: UpdateDaemonMethod;
  UpdateKioskInput: UpdateKioskInput;
  UpdateMileageUserInput: UpdateMileageUserInput;
  UpdateOrderRequestTemplate: UpdateOrderRequestTemplate;
  UpdatePreDiscountInfoResponse: UpdatePreDiscountInfoResponse;
  UpdatePriceInput: UpdatePriceInput;
  UpdatePricePeriodInput: UpdatePricePeriodInput;
  UpdateReservationMemoInput: UpdateReservationMemoInput;
  UpdateRoomInput: UpdateRoomInput;
  UpdateRoomMemoInput: UpdateRoomMemoInput;
  UpdateRoomService: UpdateRoomService;
  UpdateRoomServiceCategory: UpdateRoomServiceCategory;
  UpdateRoomServiceOption: UpdateRoomServiceOption;
  UpdateRoomTypeInput: UpdateRoomTypeInput;
  UpdateSalesRoomInfoInput: UpdateSalesRoomInfoInput;
  UpdateThirdPartyInput: UpdateThirdPartyInput;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserConnection: UserConnection;
  UserContact: UserContact;
  UserContactInput: UserContactInput;
  UserEdge: UserEdge;
  UserInput: UserInput;
  UserLog: UserLog;
  UserLogConnection: UserLogConnection;
  UserLogEdge: UserLogEdge;
  UserNotification: UserNotification;
  UserNotificationConnection: UserNotificationConnection;
  UserNotificationEdge: UserNotificationEdge;
  UserNotificationInput: UserNotificationInput;
  UsersFilter: UsersFilter;
  VerifyDuplicateInput: VerifyDuplicateInput;
  VerifyDuplicatePayload: VerifyDuplicatePayload;
  VirtualAccount: VirtualAccount;
  WhereOptionInput: WhereOptionInput;
  WingsCheckInData: WingsCheckInData;
  WingsCheckInPaymentInfo: WingsCheckInPaymentInfo;
  WingsCheckInResult: WingsCheckInResult;
  WingsCheckOutResult: WingsCheckOutResult;
  WingsDailyPriceInfo: WingsDailyPriceInfo;
  WingsKeyRetrieveResult: WingsKeyRetrieveResult;
  WingsPriceInfo: WingsPriceInfo;
  WingsRoomType: WingsRoomType;
  createAccommodationArticleInput: CreateAccommodationArticleInput;
  sendInquiryEmailInput: SendInquiryEmailInput;
  updateAccommodationArticleInput: UpdateAccommodationArticleInput;
  updateCmsActivityLogReadStatus: UpdateCmsActivityLogReadStatus;
}>;

export type AccommodationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Accommodation'] = ResolversParentTypes['Accommodation']> = ResolversObject<{
  activeReservationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardSalesToday?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<AccommodationCardSalesTodayArgs>>;
  cashSalesToday?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<AccommodationCashSalesTodayArgs>>;
  cleanCardData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cmsInventoryCountMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  conciergePaymentConfig?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conciergeServiceSettings?: Resolver<ResolversTypes['AccommodationConciergeSetting'], ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  csContact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultCheckIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultCheckOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultInitTemperature?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  employees?: Resolver<Array<ResolversTypes['Employee']>, ParentType, ContextType>;
  encryptionKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  introductionArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType>;
  inventoryMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isBookingEngineEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isHome?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kioskArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType>;
  kioskMainArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType>;
  kiosks?: Resolver<Array<Maybe<ResolversTypes['Kiosk']>>, ParentType, ContextType>;
  mileageSettings?: Resolver<ResolversTypes['AccommodationMileageSetting'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Array<Maybe<ResolversTypes['AccommodationOption']>>, ParentType, ContextType>;
  otaSetting?: Resolver<Maybe<ResolversTypes['OTASetting']>, ParentType, ContextType, RequireFields<AccommodationOtaSettingArgs, 'ota'>>;
  pricePeriods?: Resolver<Array<Maybe<ResolversTypes['PricePeriod']>>, ParentType, ContextType>;
  registererName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationSettings?: Resolver<ResolversTypes['AccommodationReservationSetting'], ParentType, ContextType>;
  roomTypes?: Resolver<Array<Maybe<ResolversTypes['RoomType']>>, ParentType, ContextType, Partial<AccommodationRoomTypesArgs>>;
  rooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType, Partial<AccommodationRoomsArgs>>;
  salesToday?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<AccommodationSalesTodayArgs>>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termsArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType>;
  themes?: Resolver<Array<Maybe<ResolversTypes['Theme']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<AccommodationThumbnailArgs>>;
  todayReservationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  todayReservationCountByType?: Resolver<Array<ResolversTypes['ReservationCount']>, ParentType, ContextType, Partial<AccommodationTodayReservationCountByTypeArgs>>;
  upcomingReservationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  upcomingReservations?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationArticleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationArticle'] = ResolversParentTypes['AccommodationArticle']> = ResolversObject<{
  attachments?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationArticleConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationArticleConnection'] = ResolversParentTypes['AccommodationArticleConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['AccommodationArticleEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationArticleEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationArticleEdge'] = ResolversParentTypes['AccommodationArticleEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationConciergeSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationConciergeSetting'] = ResolversParentTypes['AccommodationConciergeSetting']> = ResolversObject<{
  amenityActivated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableConcierge?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  onSitePaymentByCard?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  onSitePaymentByCash?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  roomServiceActivated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tempWorkingStop?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationConnection'] = ResolversParentTypes['AccommodationConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['AccommodationEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationEdge'] = ResolversParentTypes['AccommodationEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationInventoryModeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationInventoryMode'] = ResolversParentTypes['AccommodationInventoryMode']> = ResolversObject<{
  cmsInventoryCountMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  inventoryMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationMileageSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationMileageSetting'] = ResolversParentTypes['AccommodationMileageSetting']> = ResolversObject<{
  dailySalesResetTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enableMileage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  expireAfter?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  instruction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lodgeCashRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lodgeCreditCardRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  manualRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mileageExtraPaySources?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  mileageSources?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  mileageTargets?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  minimumUsableAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  platformRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  receiptAddon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rentCashRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rentCreditCardRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  useOutstanding?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationNotificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationNotification'] = ResolversParentTypes['AccommodationNotification']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dotType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  objective?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  relative?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationNotificationConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationNotificationConnection'] = ResolversParentTypes['AccommodationNotificationConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['AccommodationNotificationEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationNotificationEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationNotificationEdge'] = ResolversParentTypes['AccommodationNotificationEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['AccommodationNotification']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationOption'] = ResolversParentTypes['AccommodationOption']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationOtaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationOta'] = ResolversParentTypes['AccommodationOta']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assignees?: Resolver<Array<ResolversTypes['CompanyAssignee']>, ParentType, ContextType>;
  forwardEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otaProducts?: Resolver<Array<ResolversTypes['OtaProduct']>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['CompanyProfile']>, ParentType, ContextType>;
  registeredName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useMultiIntegration?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationReservationSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationReservationSetting'] = ResolversParentTypes['AccommodationReservationSetting']> = ResolversObject<{
  addonTimeUnit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assignRoomBefore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assumeCheckoutBefore?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  checkInTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dailyCheckOutTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultCheckedIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ignoreFutureOtaIntegration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lateCheckoutTargets?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  logSuspicious?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  maxParking?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parsedOTADefaultCheckIn?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  parsedOTADefaultCheckOut?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  preReservationTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preserveParking?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reservationCancelledTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationCreatedTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationMergeStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationTableColumns?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  roomAssignOrderBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sendConfirmEmailStrategy?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  smsTemplates?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReservationSMSTemplate']>>>, ParentType, ContextType>;
  unlimitedCheckIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unlimitedRentCheckIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  unlimitedRentCheckInDays?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  useAssignRoom?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useAutoAssignRoomOnKiosk?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useManualAssignAutoAdjustment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useOutstandingIntegration?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationReservationSettingForGuestResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationReservationSettingForGuest'] = ResolversParentTypes['AccommodationReservationSettingForGuest']> = ResolversObject<{
  addonTimeUnit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationSalesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationSales'] = ResolversParentTypes['AccommodationSales']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cardSalesToday?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<AccommodationSalesCardSalesTodayArgs>>;
  cashSalesToday?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<AccommodationSalesCashSalesTodayArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccommodationUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AccommodationUser'] = ResolversParentTypes['AccommodationUser']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  authority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AgeEstimationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AgeEstimation'] = ResolversParentTypes['AgeEstimation']> = ResolversObject<{
  estimated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmanoFreeTimeZoneResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AmanoFreeTimeZone'] = ResolversParentTypes['AmanoFreeTimeZone']> = ResolversObject<{
  endDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmanoInCarInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AmanoInCarInfo'] = ResolversParentTypes['AmanoInCarInfo']> = ResolversObject<{
  carNo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carNoMain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  carNoSub?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dbTableName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  feeRateNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  freeTimeZones?: Resolver<Array<Maybe<ResolversTypes['AmanoFreeTimeZone']>>, ParentType, ContextType>;
  inCarPicName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inEqpmNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  inOutStatus?: Resolver<ResolversTypes['AmanoInOutStatus'], ParentType, ContextType>;
  lotAreaNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  manualCalcInDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outCarPicName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parkingTrnsID?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payDtm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentType?: Resolver<ResolversTypes['AmanoPaymentType'], ParentType, ContextType>;
  ticketNo?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmanoPreDiscountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AmanoPreDiscount'] = ResolversParentTypes['AmanoPreDiscount']> = ResolversObject<{
  carNo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dcCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  discCodeNo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dongcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDtm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hocode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preDiscountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  regiDtm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDtm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AmenityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = ResolversObject<{
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnonymouseSignInTokenPairResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AnonymouseSignInTokenPair'] = ResolversParentTypes['AnonymouseSignInTokenPair']> = ResolversObject<{
  authId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  attachments?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ArticleConnection'] = ResolversParentTypes['ArticleConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['ArticleEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ArticleEdge'] = ResolversParentTypes['ArticleEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AudioOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AudioOption'] = ResolversParentTypes['AudioOption']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CaptchaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Captcha'] = ResolversParentTypes['Captcha']> = ResolversObject<{
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  svg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CleaningPeriodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CleaningPeriod'] = ResolversParentTypes['CleaningPeriod']> = ResolversObject<{
  endTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsActivityLogResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsActivityLog'] = ResolversParentTypes['CmsActivityLog']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['LogLevel'], ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localeParams?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  otaKey?: Resolver<ResolversTypes['OTA'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['SubjectType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LogType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsActivityLogConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsActivityLogConnection'] = ResolversParentTypes['CmsActivityLogConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['CmsActivityLogEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsActivityLogEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsActivityLogEdge'] = ResolversParentTypes['CmsActivityLogEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CmsActivityLog'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsDaemonMethodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsDaemonMethod'] = ResolversParentTypes['CmsDaemonMethod']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  definition?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  interval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  methodId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otaKey?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MethodType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsMonthlyReservationHistoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsMonthlyReservationHistory'] = ResolversParentTypes['CmsMonthlyReservationHistory']> = ResolversObject<{
  cmsSellCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationSellCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsOtaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsOta'] = ResolversParentTypes['CmsOta']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isConnected?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<CmsOtaIsConnectedArgs, 'accommodationId'>>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsOtaAccountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsOtaAccount'] = ResolversParentTypes['CmsOtaAccount']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  connectedOta?: Resolver<ResolversTypes['CmsOta'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customData?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  envs?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsOtaProductMapResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsOtaProductMap'] = ResolversParentTypes['CmsOtaProductMap']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accommodationOtaId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Origin'], ParentType, ContextType>;
  otaKey?: Resolver<ResolversTypes['OTA'], ParentType, ContextType>;
  otaProductSetting?: Resolver<Maybe<Array<Maybe<ResolversTypes['CmsOtaProductSetting']>>>, ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sellCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subKey?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsOtaProductSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsOtaProductSetting'] = ResolversParentTypes['CmsOtaProductSetting']> = ResolversObject<{
  autoClosedRoomCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cmsOtaProductMap?: Resolver<Maybe<ResolversTypes['CmsOtaProductMap']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isManuallyClosed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sellPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subKey?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsReservationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsReservation'] = ResolversParentTypes['CmsReservation']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  autoClosedRoomCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cmsRoomStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  depositPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['CmsReservationDetail']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  otaKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otaReservationNum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  reservationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  reservationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transportation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsReservationDetailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsReservationDetail'] = ResolversParentTypes['CmsReservationDetail']> = ResolversObject<{
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useExpireAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useStartAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CmsReturnTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CmsReturnType'] = ResolversParentTypes['CmsReturnType']> = ResolversObject<{
  commandId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  methodName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoamPaymentConfigResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoamPaymentConfig'] = ResolversParentTypes['CoamPaymentConfig']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cpid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoampayDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CoampayData'] = ResolversParentTypes['CoampayData']> = ResolversObject<{
  cpid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  infoId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyAssigneeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CompanyAssignee'] = ResolversParentTypes['CompanyAssignee']> = ResolversObject<{
  accommodationOtaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CompanyProfile'] = ResolversParentTypes['CompanyProfile']> = ResolversObject<{
  accommodationOtaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contractDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleEndDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  saleStartDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeAmenityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeAmenity'] = ResolversParentTypes['ConciergeAmenity']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConciergeAmenityCategory']>>>, ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soldOutPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ConciergeAmenityStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeAmenityCategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeAmenityCategory'] = ResolversParentTypes['ConciergeAmenityCategory']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DefaultStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeAmenityConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeAmenityConnection'] = ResolversParentTypes['ConciergeAmenityConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenityEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeAmenityEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeAmenityEdge'] = ResolversParentTypes['ConciergeAmenityEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ConciergeAmenity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeAmenityOrderDetailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeAmenityOrderDetail'] = ResolversParentTypes['ConciergeAmenityOrderDetail']> = ResolversObject<{
  conciergeAmenityId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deliveryTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['ConciergeAmenity'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  soldOutPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeConfigInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeConfigInfo'] = ResolversParentTypes['ConciergeConfigInfo']> = ResolversObject<{
  cpid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataDogApplicationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dataDogClientId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slackId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeOrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeOrder'] = ResolversParentTypes['ConciergeOrder']> = ResolversObject<{
  amenities?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenityOrderDetail']>>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  expectedTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  paymentType?: Resolver<ResolversTypes['ConciergePaymentType'], ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  request?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reservation?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType>;
  reservationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roomServices?: Resolver<Array<Maybe<ResolversTypes['RoomServiceOrderDetail']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ConciergeOrderStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeOrderConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeOrderConnection'] = ResolversParentTypes['ConciergeOrderConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['ConciergeOrderEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeOrderEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeOrderEdge'] = ResolversParentTypes['ConciergeOrderEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['ConciergeOrder']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeOrderStatisticsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeOrderStatistics'] = ResolversParentTypes['ConciergeOrderStatistics']> = ResolversObject<{
  ADMIN_CANCEL?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  DELIVERY?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  FINISH?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  PROCESSING?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  USER_CANCEL?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  WAITING?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergePaymentInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergePaymentInfo'] = ResolversParentTypes['ConciergePaymentInfo']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reservationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ConciergePaymentStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ConciergePaymentInfoType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeServiceNoticeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeServiceNotice'] = ResolversParentTypes['ConciergeServiceNotice']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeServiceSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeServiceSetting'] = ResolversParentTypes['ConciergeServiceSetting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConciergeWorkSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ConciergeWorkSetting'] = ResolversParentTypes['ConciergeWorkSetting']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weekDay?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  workType?: Resolver<ResolversTypes['ConciergeWorkType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Coupon'] = ResolversParentTypes['Coupon']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  couponType?: Resolver<ResolversTypes['CouponType'], ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  discountType?: Resolver<ResolversTypes['DiscountType'], ParentType, ContextType>;
  expireAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  histories?: Resolver<Array<ResolversTypes['CouponUsageHistory']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isExhausted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  mask?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxDiscountAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxUsableCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  minUsableAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usableCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CouponConnection'] = ResolversParentTypes['CouponConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['CouponEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CouponEdge'] = ResolversParentTypes['CouponEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Coupon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CouponUsageHistoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CouponUsageHistory'] = ResolversParentTypes['CouponUsageHistory']> = ResolversObject<{
  coupon?: Resolver<ResolversTypes['Coupon'], ParentType, ContextType>;
  couponId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  discountAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ipAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  purchaseAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usageHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DaemonArgResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DaemonArg'] = ResolversParentTypes['DaemonArg']> = ResolversObject<{
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyQuantityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DailyQuantity'] = ResolversParentTypes['DailyQuantity']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailySalesAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DailySalesAggregate'] = ResolversParentTypes['DailySalesAggregate']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DatePriceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DatePrice'] = ResolversParentTypes['DatePrice']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType>;
  tokenizedInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DateQuantityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DateQuantity'] = ResolversParentTypes['DateQuantity']> = ResolversObject<{
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DayPaymentSumResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DayPaymentSum'] = ResolversParentTypes['DayPaymentSum']> = ResolversObject<{
  day?: Resolver<ResolversTypes['Day'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DayReservationCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DayReservationCount'] = ResolversParentTypes['DayReservationCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  day?: Resolver<ResolversTypes['Day'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DefaultInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DefaultInfo'] = ResolversParentTypes['DefaultInfo']> = ResolversObject<{
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletePreDiscountInfoResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeletePreDiscountInfoResponse'] = ResolversParentTypes['DeletePreDiscountInfoResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['DefaultInfo'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMsg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeviceConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeviceConnection'] = ResolversParentTypes['DeviceConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['DeviceEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeviceEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeviceEdge'] = ResolversParentTypes['DeviceEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RoomDevice']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElasticResponseTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ElasticResponseType'] = ResolversParentTypes['ElasticResponseType']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _primary_term?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  _seq_no?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  _shards?: Resolver<Maybe<ResolversTypes['ShardStatistics']>, ParentType, ContextType>;
  _version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  forced_refresh?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['ElasticResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmployeeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employee'] = ResolversParentTypes['Employee']> = ResolversObject<{
  authority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorCauseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ErrorCause'] = ResolversParentTypes['ErrorCause']> = ResolversObject<{
  caused_by?: Resolver<Maybe<ResolversTypes['ErrorCause']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  root_cause?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorCause']>>>, ParentType, ContextType>;
  stack_trace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suppressed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorCause']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorCauseKeysResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ErrorCauseKeys'] = ResolversParentTypes['ErrorCauseKeys']> = ResolversObject<{
  caused_by?: Resolver<Maybe<ResolversTypes['ErrorCause']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  root_cause?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorCause']>>>, ParentType, ContextType>;
  stack_trace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suppressed?: Resolver<Maybe<Array<Maybe<ResolversTypes['ErrorCause']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FaceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Face'] = ResolversParentTypes['Face']> = ResolversObject<{
  age?: Resolver<ResolversTypes['AgeEstimation'], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['Gender'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FaceDetectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FaceDetection'] = ResolversParentTypes['FaceDetection']> = ResolversObject<{
  faces?: Resolver<Array<ResolversTypes['Face']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FeeCarSearchDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FeeCarSearchData'] = ResolversParentTypes['FeeCarSearchData']> = ResolversObject<{
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inCarInfos?: Resolver<Array<Maybe<ResolversTypes['AmanoInCarInfo']>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = ResolversObject<{
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedReservationCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FixedReservationCount'] = ResolversParentTypes['FixedReservationCount']> = ResolversObject<{
  errored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fixed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fixedReservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['FixedReservationDiff']>>>, ParentType, ContextType>;
  legacy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  legacyIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FixedReservationDiffResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FixedReservationDiff'] = ResolversParentTypes['FixedReservationDiff']> = ResolversObject<{
  diff?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlSchemaTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GQLSchemaType'] = ResolversParentTypes['GQLSchemaType']> = ResolversObject<{
  sdl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetFeeCarSearchResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GetFeeCarSearchResponse'] = ResolversParentTypes['GetFeeCarSearchResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['FeeCarSearchData'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMsg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetPreDiscountListInfoResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GetPreDiscountListInfoResponse'] = ResolversParentTypes['GetPreDiscountListInfoResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['PreDiscountListInfoData'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMsg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InsertPreDiscountInfoResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['InsertPreDiscountInfoResponse'] = ResolversParentTypes['InsertPreDiscountInfoResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['PreDiscountInfoData'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMsg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type JobCountSetResolvers<ContextType = Context, ParentType extends ResolversParentTypes['JobCountSet'] = ResolversParentTypes['JobCountSet']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KioskResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Kiosk'] = ResolversParentTypes['Kiosk']> = ResolversObject<{
  connectionState?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['KioskOptions']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['KioskState']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KioskConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['KioskConnection'] = ResolversParentTypes['KioskConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['KioskEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KioskEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['KioskEdge'] = ResolversParentTypes['KioskEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Kiosk']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KioskOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['KioskOption'] = ResolversParentTypes['KioskOption']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type KioskOptionsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['KioskOptions'] = ResolversParentTypes['KioskOptions']> = ResolversObject<{
  activateAdminStrategy?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType>;
  additionalPaymentDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addonSleepsMaximum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amanoAPIKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  autoRebootInterval?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  autoRebootTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bannerImages?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  billDispenserStrategy?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockMinorAgeBase?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blockMinorTimeRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardReaderComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cashInjectorPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccuComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccuType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ccuVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collectContactStrategy?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType>;
  collectSleepsStrategy?: Resolver<Array<ResolversTypes['Boolean']>, ParentType, ContextType>;
  customCCUOption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customKioskOption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customTermConfirm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deamonVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  disableAircon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  firstCashDispensorAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  firstCashDispensorPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstUpperCameraDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icCardReaderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icCardReaderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idAuthenticatorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idleMusic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ioBoardComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kakaoAPIKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyCardEncoder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyCardServerAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lateCheckoutLimit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lateCheckoutMaximum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logDeviceNotFoundIgnore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  logSuspicious?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mainMenuHeading?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mainMenuLayout?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  maxKeyCardAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  mustCollectContact?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  onSiteAdditionalPayList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  onSiteInstantPayList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  onSiteRenderList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  printReceiptStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qrCameraDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qrReaderComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  qrReaderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relayComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relayConnectList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  reservationRenderList?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  restrictBlockAddresses?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rfidWriterComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondCashDispensorAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  secondCashDispensorPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondUpperCameraDeviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  showContactTimeRange?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thermalPrinterComPort?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usablePaymentType?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  useAgreementTerms?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useAuthCancel?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useBlockMinor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useBlockMinorInReservation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useCheckPassport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useCheckVehicle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useCollectPersonalInfo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useDetectGhostClean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useDisableCarRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useExtendReservationExpireAt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useInspection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useLateCheckout?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useLodgeSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  usePowerOffAfterNeedClean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  usePreventAutoClean?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useRentSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useRoomNumberConfirm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useSale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useStandaloneCCU?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useUnderAgeLimit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useWritableKeyDetection?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LockOtpPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LockOtpPayload'] = ResolversParentTypes['LockOtpPayload']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainPayPurchaseResolveResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MainPayPurchaseResolveResult'] = ResolversParentTypes['MainPayPurchaseResolveResult']> = ResolversObject<{
  complete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resultCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resultMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MainPayPurchaseSignatureResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MainPayPurchaseSignature'] = ResolversParentTypes['MainPayPurchaseSignature']> = ResolversObject<{
  aid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mbrNo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mbrRefNo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pcUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mileage'] = ResolversParentTypes['Mileage']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCancelled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isUsed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mileageUser?: Resolver<Maybe<ResolversTypes['MileageUser']>, ParentType, ContextType>;
  parentPayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  paymentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageAggregationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageAggregation'] = ResolversParentTypes['MileageAggregation']> = ResolversObject<{
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  usedAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageConnection'] = ResolversParentTypes['MileageConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['MileageEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageEdge'] = ResolversParentTypes['MileageEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Mileage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageRateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageRate'] = ResolversParentTypes['MileageRate']> = ResolversObject<{
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ReserveTarget']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageSetting'] = ResolversParentTypes['MileageSetting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageUser'] = ResolversParentTypes['MileageUser']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  currentMileage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastVisitedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalMileage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalVisit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageUserConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageUserConnection'] = ResolversParentTypes['MileageUserConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['MileageUserEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MileageUserEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MileageUserEdge'] = ResolversParentTypes['MileageUserEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['MileageUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  _dev_addCmsOtaAccount?: Resolver<ResolversTypes['CmsOtaAccount'], ParentType, ContextType, RequireFields<Mutation_Dev_AddCmsOtaAccountArgs, 'input'>>;
  _dev_addDaemonMethod?: Resolver<ResolversTypes['CmsDaemonMethod'], ParentType, ContextType, RequireFields<Mutation_Dev_AddDaemonMethodArgs, 'input'>>;
  _dev_cleanPattern?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<Mutation_Dev_CleanPatternArgs>>;
  _dev_cleanUp?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<Mutation_Dev_CleanUpArgs>>;
  _dev_deleteDaemonMethod?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<Mutation_Dev_DeleteDaemonMethodArgs, 'name'>>;
  _dev_jobCount?: Resolver<Maybe<Array<Maybe<ResolversTypes['JobCountSet']>>>, ParentType, ContextType, Partial<Mutation_Dev_JobCountArgs>>;
  _dev_migrateArticle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<Mutation_Dev_MigrateArticleArgs, 'accommodationId'>>;
  _dev_publishCmsActivityLog?: Resolver<ResolversTypes['CmsActivityLog'], ParentType, ContextType, Partial<Mutation_Dev_PublishCmsActivityLogArgs>>;
  _dev_publishCmsBoardcastEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<Mutation_Dev_PublishCmsBoardcastEventArgs>>;
  _dev_publishCmsCommand?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<Mutation_Dev_PublishCmsCommandArgs>>;
  _dev_publishDaemonCommand?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<Mutation_Dev_PublishDaemonCommandArgs>>;
  _dev_testApi?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<Mutation_Dev_TestApiArgs>>;
  _dev_updateDaemonMethod?: Resolver<ResolversTypes['CmsDaemonMethod'], ParentType, ContextType, RequireFields<Mutation_Dev_UpdateDaemonMethodArgs, 'input'>>;
  activateSingleAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationActivateSingleAccommodationArgs, 'accommodationId'>>;
  addAccommodationOta?: Resolver<ResolversTypes['AccommodationOta'], ParentType, ContextType, RequireFields<MutationAddAccommodationOtaArgs, 'input'>>;
  addCompanyAssignee?: Resolver<ResolversTypes['CompanyAssignee'], ParentType, ContextType, RequireFields<MutationAddCompanyAssigneeArgs, 'accommodationOtaId' | 'input'>>;
  addElasticSearchLog?: Resolver<Maybe<ResolversTypes['ElasticResponseType']>, ParentType, ContextType, RequireFields<MutationAddElasticSearchLogArgs, 'doc' | 'index'>>;
  addMileage?: Resolver<Maybe<ResolversTypes['Mileage']>, ParentType, ContextType, RequireFields<MutationAddMileageArgs, 'input'>>;
  addMileageForPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationAddMileageForPaymentArgs, 'paymentId'>>;
  addOTASetting?: Resolver<Maybe<ResolversTypes['OTASetting']>, ParentType, ContextType, RequireFields<MutationAddOtaSettingArgs, 'input'>>;
  addOtaIntegrationSmsHistory?: Resolver<ResolversTypes['OtaIntegrationSmsHistory'], ParentType, ContextType, RequireFields<MutationAddOtaIntegrationSmsHistoryArgs, 'input'>>;
  addOtaPriceContraction?: Resolver<ResolversTypes['OtaPriceContraction'], ParentType, ContextType, RequireFields<MutationAddOtaPriceContractionArgs, 'accommodationOtaId' | 'input'>>;
  addOtaProduct?: Resolver<ResolversTypes['OtaProduct'], ParentType, ContextType, RequireFields<MutationAddOtaProductArgs, 'input'>>;
  addPayments?: Resolver<Array<Maybe<ResolversTypes['Payment']>>, ParentType, ContextType, RequireFields<MutationAddPaymentsArgs, 'accommodationId' | 'input'>>;
  addReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationAddReservationArgs, 'input'>>;
  addReservationGroup?: Resolver<ResolversTypes['ReservationGroup'], ParentType, ContextType, RequireFields<MutationAddReservationGroupArgs, 'input'>>;
  addReservationPackage?: Resolver<ResolversTypes['ReservationPackage'], ParentType, ContextType, RequireFields<MutationAddReservationPackageArgs, 'input'>>;
  addServiceProduct?: Resolver<ResolversTypes['ServiceProduct'], ParentType, ContextType, RequireFields<MutationAddServiceProductArgs, 'input'>>;
  addUserContact?: Resolver<Maybe<ResolversTypes['UserContact']>, ParentType, ContextType, RequireFields<MutationAddUserContactArgs, 'input'>>;
  addUserToAccommodation?: Resolver<ResolversTypes['Accommodation'], ParentType, ContextType, RequireFields<MutationAddUserToAccommodationArgs, 'accommodationId' | 'userId'>>;
  agreeTerms?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAgreeTermsArgs, 'isAgreed' | 'type'>>;
  anonymousSignIn?: Resolver<Maybe<ResolversTypes['SuccessOrErrorBool']>, ParentType, ContextType, RequireFields<MutationAnonymousSignInArgs, 'token'>>;
  applyCoupon?: Resolver<ResolversTypes['CouponUsageHistory'], ParentType, ContextType, RequireFields<MutationApplyCouponArgs, 'accommodationId' | 'code' | 'purchaseAmount' | 'roomTypeId'>>;
  assignRoomRequest?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationAssignRoomRequestArgs, 'roomTypeId'>>;
  assignRoomToReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationAssignRoomToReservationArgs, 'input'>>;
  bulkUpdateRoomDevice?: Resolver<Array<ResolversTypes['RoomDevice']>, ParentType, ContextType, RequireFields<MutationBulkUpdateRoomDeviceArgs, 'ids' | 'input'>>;
  cancelAssignReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationCancelAssignReservationArgs, 'reservationId'>>;
  cancelMileage?: Resolver<Maybe<ResolversTypes['Mileage']>, ParentType, ContextType, RequireFields<MutationCancelMileageArgs, 'id'>>;
  cancelPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationCancelPaymentArgs, 'paymentId'>>;
  cancelPreAssignedRoom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCancelPreAssignedRoomArgs, 'roomId'>>;
  changePassword?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'input'>>;
  changePasswordBySMSAuth?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationChangePasswordBySmsAuthArgs, 'input'>>;
  changeReservationRoom?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationChangeReservationRoomArgs, 'input'>>;
  checkAccommodationRoomDevicesIntegrity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCheckAccommodationRoomDevicesIntegrityArgs, 'accommodationId'>>;
  checkAllAccommodationsRoomDevicesIntegrity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  checkInReservationByGuestSession?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationCheckInReservationByGuestSessionArgs, 'reservationId' | 'sessionToken'>>;
  checkMailBox?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCheckMailBoxArgs>>;
  checkOutReservationByGuestSession?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationCheckOutReservationByGuestSessionArgs, 'reservationId' | 'sessionToken'>>;
  clearAllDataRelatedToCms?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationClearAllDataRelatedToCmsArgs>>;
  confirmMileageSMSAuth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationConfirmMileageSmsAuthArgs, 'number' | 'phone'>>;
  confirmSMSAuth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationConfirmSmsAuthArgs, 'number' | 'phone'>>;
  controlRoomDeviceByGuestSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationControlRoomDeviceByGuestSessionArgs, 'deviceType' | 'reservationId' | 'sessionToken'>>;
  createAccommodation?: Resolver<ResolversTypes['Accommodation'], ParentType, ContextType, RequireFields<MutationCreateAccommodationArgs, 'input'>>;
  createAccommodationArticle?: Resolver<ResolversTypes['AccommodationArticle'], ParentType, ContextType, Partial<MutationCreateAccommodationArticleArgs>>;
  createAccommodationAudioOption?: Resolver<ResolversTypes['AudioOption'], ParentType, ContextType, RequireFields<MutationCreateAccommodationAudioOptionArgs, 'input'>>;
  createAccommodationCleaningPeriod?: Resolver<ResolversTypes['CleaningPeriod'], ParentType, ContextType, RequireFields<MutationCreateAccommodationCleaningPeriodArgs, 'accommodationId' | 'endTime' | 'startTime'>>;
  createAccommodationKiosk?: Resolver<ResolversTypes['Kiosk'], ParentType, ContextType, RequireFields<MutationCreateAccommodationKioskArgs, 'input'>>;
  createArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'input'>>;
  createCmsOtaProductMap?: Resolver<ResolversTypes['CmsOtaProductMap'], ParentType, ContextType, Partial<MutationCreateCmsOtaProductMapArgs>>;
  createCoamPaymentConfigs?: Resolver<Array<Maybe<ResolversTypes['CoamPaymentConfig']>>, ParentType, ContextType, RequireFields<MutationCreateCoamPaymentConfigsArgs, 'input'>>;
  createConciergeAmenity?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenity']>>, ParentType, ContextType, RequireFields<MutationCreateConciergeAmenityArgs, 'input'>>;
  createConciergeAmenityCategory?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenityCategory']>>, ParentType, ContextType, RequireFields<MutationCreateConciergeAmenityCategoryArgs, 'input'>>;
  createConciergeOrder?: Resolver<Maybe<ResolversTypes['ConciergeOrder']>, ParentType, ContextType, RequireFields<MutationCreateConciergeOrderArgs, 'input' | 'sessionToken'>>;
  createConciergeServiceNotice?: Resolver<Array<Maybe<ResolversTypes['ConciergeServiceNotice']>>, ParentType, ContextType, RequireFields<MutationCreateConciergeServiceNoticeArgs, 'input'>>;
  createEncryptionKeyOption?: Resolver<Maybe<ResolversTypes['SystemOption']>, ParentType, ContextType, Partial<MutationCreateEncryptionKeyOptionArgs>>;
  createOrUpdateDailyQuantity?: Resolver<Maybe<ResolversTypes['DailyQuantity']>, ParentType, ContextType, RequireFields<MutationCreateOrUpdateDailyQuantityArgs, 'input'>>;
  createOrUpdatePgConfig?: Resolver<Maybe<ResolversTypes['PgConfig']>, ParentType, ContextType, RequireFields<MutationCreateOrUpdatePgConfigArgs, 'input'>>;
  createOrderRequestTemplate?: Resolver<Array<Maybe<ResolversTypes['OrderRequestTemplate']>>, ParentType, ContextType, RequireFields<MutationCreateOrderRequestTemplateArgs, 'input'>>;
  createPrice?: Resolver<ResolversTypes['Price'], ParentType, ContextType, RequireFields<MutationCreatePriceArgs, 'input'>>;
  createPricePeriod?: Resolver<ResolversTypes['PricePeriod'], ParentType, ContextType, Partial<MutationCreatePricePeriodArgs>>;
  createPublicPurchaseRequest?: Resolver<Maybe<ResolversTypes['PublicPurchase']>, ParentType, ContextType, RequireFields<MutationCreatePublicPurchaseRequestArgs, 'input'>>;
  createReservationMemo?: Resolver<Maybe<ResolversTypes['ReservationMemo']>, ParentType, ContextType, RequireFields<MutationCreateReservationMemoArgs, 'input'>>;
  createRoom?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationCreateRoomArgs, 'input'>>;
  createRoomDevice?: Resolver<ResolversTypes['RoomDevice'], ParentType, ContextType, RequireFields<MutationCreateRoomDeviceArgs, 'input' | 'roomId'>>;
  createRoomMemo?: Resolver<Maybe<ResolversTypes['RoomMemo']>, ParentType, ContextType, RequireFields<MutationCreateRoomMemoArgs, 'input'>>;
  createRoomService?: Resolver<Array<Maybe<ResolversTypes['RoomService']>>, ParentType, ContextType, RequireFields<MutationCreateRoomServiceArgs, 'input'>>;
  createRoomServiceCategory?: Resolver<Array<Maybe<ResolversTypes['RoomServiceCategory']>>, ParentType, ContextType, RequireFields<MutationCreateRoomServiceCategoryArgs, 'input'>>;
  createRoomType?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType, RequireFields<MutationCreateRoomTypeArgs, 'input'>>;
  createTheme?: Resolver<ResolversTypes['Theme'], ParentType, ContextType, RequireFields<MutationCreateThemeArgs, 'accommodationId' | 'name'>>;
  deduplicateCmsReservations?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDeduplicateCmsReservationsArgs>>;
  delelteAccommodationAudioOption?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDelelteAccommodationAudioOptionArgs, 'id'>>;
  deleteAccommodation?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteAccommodationArgs, 'id'>>;
  deleteAccommodationArticle?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteAccommodationArticleArgs, 'id'>>;
  deleteAccommodationCleaningPeriod?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteAccommodationCleaningPeriodArgs, 'id'>>;
  deleteAccommodationKiosk?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteAccommodationKioskArgs, 'id'>>;
  deleteAccommodationOta?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteAccommodationOtaArgs, 'id'>>;
  deleteAccommodationThirdParty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteAccommodationThirdPartyArgs, 'accommodationId' | 'provider'>>;
  deleteAmanoPreDiscountInfo?: Resolver<ResolversTypes['DeletePreDiscountInfoResponse'], ParentType, ContextType, RequireFields<MutationDeleteAmanoPreDiscountInfoArgs, 'input'>>;
  deleteArticle?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteCompanyAssignee?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteCompanyAssigneeArgs, 'id'>>;
  deleteConciergeAmenity?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteConciergeAmenityArgs, 'id'>>;
  deleteConciergeAmenityCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteConciergeAmenityCategoryArgs, 'id'>>;
  deleteConciergeServiceNotice?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteConciergeServiceNoticeArgs, 'id'>>;
  deleteConciergeServiceNoticeImage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteConciergeServiceNoticeImageArgs, 'accommodationId' | 'images' | 'serviceNoticeId'>>;
  deleteEmployee?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteEmployeeArgs, 'id'>>;
  deleteOrderRequestTemplate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOrderRequestTemplateArgs, 'id'>>;
  deleteOtaPriceContraction?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOtaPriceContractionArgs, 'id'>>;
  deleteOtaProduct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOtaProductArgs, 'id'>>;
  deletePaymentsByPeriod?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePaymentsByPeriodArgs, 'accommodationId' | 'from' | 'to'>>;
  deletePlatform?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePlatformArgs, 'input'>>;
  deletePrice?: Resolver<ResolversTypes['SuccessOrError'], ParentType, ContextType, RequireFields<MutationDeletePriceArgs, 'id'>>;
  deletePricePeriod?: Resolver<ResolversTypes['SuccessOrError'], ParentType, ContextType, RequireFields<MutationDeletePricePeriodArgs, 'id'>>;
  deleteReservation?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType, RequireFields<MutationDeleteReservationArgs, 'id'>>;
  deleteReservationGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteReservationGroupArgs, 'id'>>;
  deleteReservationMemo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteReservationMemoArgs, 'id'>>;
  deleteReservationPackage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteReservationPackageArgs, 'id'>>;
  deleteReservationsByPeriod?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteReservationsByPeriodArgs, 'accommodationId' | 'from' | 'to'>>;
  deleteRoom?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteRoomArgs, 'id'>>;
  deleteRoomDevice?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteRoomDeviceArgs, 'id'>>;
  deleteRoomMemo?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteRoomMemoArgs, 'id'>>;
  deleteRoomService?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteRoomServiceArgs, 'id'>>;
  deleteRoomServiceCategory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteRoomServiceCategoryArgs, 'id'>>;
  deleteRoomType?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteRoomTypeArgs, 'id'>>;
  deleteServiceProduct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteServiceProductArgs, 'id'>>;
  deleteSystemOption?: Resolver<Maybe<ResolversTypes['SystemOption']>, ParentType, ContextType, RequireFields<MutationDeleteSystemOptionArgs, 'id'>>;
  deleteTheme?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationDeleteThemeArgs, 'id'>>;
  deleteThirdPartyProperty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteThirdPartyPropertyArgs, 'id'>>;
  deleteUserContact?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteUserContactArgs, 'id'>>;
  deleteUserFromAccommodation?: Resolver<ResolversTypes['Accommodation'], ParentType, ContextType, RequireFields<MutationDeleteUserFromAccommodationArgs, 'accommodationId' | 'userId'>>;
  deleteUserNotification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserNotificationArgs, 'id'>>;
  devThirdPartyTest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationDevThirdPartyTestArgs>>;
  disableUser?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDisableUserArgs, 'identity'>>;
  expireCoupon?: Resolver<ResolversTypes['Coupon'], ParentType, ContextType, RequireFields<MutationExpireCouponArgs, 'code'>>;
  generateCaptcha?: Resolver<ResolversTypes['Captcha'], ParentType, ContextType>;
  getAlreadyFixedReservationCount?: Resolver<Maybe<ResolversTypes['FixedReservationCount']>, ParentType, ContextType>;
  getReservationGuestSessionToken?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationGetReservationGuestSessionTokenArgs, 'pinCode' | 'reservationId'>>;
  getThirdPartyToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationGetThirdPartyTokenArgs, 'name'>>;
  handleEmergencyNotification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationHandleEmergencyNotificationArgs, 'input'>>;
  insertAmanoPreDiscountInfo?: Resolver<ResolversTypes['InsertPreDiscountInfoResponse'], ParentType, ContextType, RequireFields<MutationInsertAmanoPreDiscountInfoArgs, 'input'>>;
  issueCoupon?: Resolver<Array<ResolversTypes['Coupon']>, ParentType, ContextType, RequireFields<MutationIssueCouponArgs, 'input'>>;
  lockOtpKey?: Resolver<ResolversTypes['LockOtpPayload'], ParentType, ContextType, Partial<MutationLockOtpKeyArgs>>;
  markExisitingReservationJobIds?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  markPaidPayments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<MutationMarkPaidPaymentsArgs, 'paymentIds'>>;
  markReadUserNotifications?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationMarkReadUserNotificationsArgs, 'ids'>>;
  markRoomCarResponse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMarkRoomCarResponseArgs, 'kioskId' | 'rcuId'>>;
  markRoomSelected?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationMarkRoomSelectedArgs, 'roomId'>>;
  modifyAccommodationOta?: Resolver<ResolversTypes['AccommodationOta'], ParentType, ContextType, RequireFields<MutationModifyAccommodationOtaArgs, 'input'>>;
  modifyCompanyAssignee?: Resolver<ResolversTypes['CompanyAssignee'], ParentType, ContextType, RequireFields<MutationModifyCompanyAssigneeArgs, 'input'>>;
  modifyCompanyProfile?: Resolver<ResolversTypes['AccommodationOta'], ParentType, ContextType, RequireFields<MutationModifyCompanyProfileArgs, 'accommodationOtaId' | 'input'>>;
  modifyOTASetting?: Resolver<Maybe<ResolversTypes['OTASetting']>, ParentType, ContextType, RequireFields<MutationModifyOtaSettingArgs, 'input'>>;
  modifyOtaPriceContraction?: Resolver<ResolversTypes['OtaPriceContraction'], ParentType, ContextType, RequireFields<MutationModifyOtaPriceContractionArgs, 'input'>>;
  modifyOtaProduct?: Resolver<ResolversTypes['OtaProduct'], ParentType, ContextType, RequireFields<MutationModifyOtaProductArgs, 'input'>>;
  modifyPayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<MutationModifyPaymentArgs, 'input'>>;
  modifyReservation?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType, RequireFields<MutationModifyReservationArgs, 'input'>>;
  modifyReservationGroup?: Resolver<ResolversTypes['ReservationGroup'], ParentType, ContextType, RequireFields<MutationModifyReservationGroupArgs, 'input'>>;
  modifyReservationPackage?: Resolver<ResolversTypes['ReservationPackage'], ParentType, ContextType, RequireFields<MutationModifyReservationPackageArgs, 'input'>>;
  modifyServiceProduct?: Resolver<ResolversTypes['ServiceProduct'], ParentType, ContextType, RequireFields<MutationModifyServiceProductArgs, 'input'>>;
  modifyThirdPartyAccessOnAccommodation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationModifyThirdPartyAccessOnAccommodationArgs, 'accommodationId' | 'allow' | 'thirdParty'>>;
  modifyThirdPartyProperty?: Resolver<Maybe<ResolversTypes['ThirdPartyProperty']>, ParentType, ContextType, RequireFields<MutationModifyThirdPartyPropertyArgs, 'id'>>;
  modifyUserContact?: Resolver<Maybe<ResolversTypes['UserContact']>, ParentType, ContextType, RequireFields<MutationModifyUserContactArgs, 'input'>>;
  parseOTAMessage?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reservation']>>>, ParentType, ContextType, RequireFields<MutationParseOtaMessageArgs, 'message' | 'ota'>>;
  parseOTAMessageWithError?: Resolver<Array<ResolversTypes['ReservationParseResponse']>, ParentType, ContextType, RequireFields<MutationParseOtaMessageWithErrorArgs, 'message' | 'ota'>>;
  parseOtaMessageV2?: Resolver<Array<ResolversTypes['ReservationParseResponse']>, ParentType, ContextType, RequireFields<MutationParseOtaMessageV2Args, 'message' | 'ota'>>;
  platformSignIn?: Resolver<ResolversTypes['CmsReturnType'], ParentType, ContextType, RequireFields<MutationPlatformSignInArgs, 'input'>>;
  preAssignRoom?: Resolver<ResolversTypes['PreAssignedRoom'], ParentType, ContextType, RequireFields<MutationPreAssignRoomArgs, 'input'>>;
  preregisterParkingByGuestSession?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPreregisterParkingByGuestSessionArgs, 'input'>>;
  processPaymentDailyAnalysis?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationProcessPaymentDailyAnalysisArgs, 'targetDate'>>;
  processReservationDailyAnalysis?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationProcessReservationDailyAnalysisArgs, 'targetDate'>>;
  publishAccommodationNotification?: Resolver<ResolversTypes['AccommodationNotification'], ParentType, ContextType, RequireFields<MutationPublishAccommodationNotificationArgs, 'input'>>;
  publishKioskSystemNoficiation?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationPublishKioskSystemNoficiationArgs, 'input'>>;
  publishUserNotification?: Resolver<Array<Maybe<ResolversTypes['UserNotification']>>, ParentType, ContextType, Partial<MutationPublishUserNotificationArgs>>;
  registerThirdParty?: Resolver<Maybe<ResolversTypes['ThirdPartyUser']>, ParentType, ContextType, Partial<MutationRegisterThirdPartyArgs>>;
  registerThirdPartyProperty?: Resolver<Maybe<ResolversTypes['ThirdPartyProperty']>, ParentType, ContextType, Partial<MutationRegisterThirdPartyPropertyArgs>>;
  reportCommandResult?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationReportCommandResultArgs, 'input'>>;
  requestAnonymousSignIn?: Resolver<ResolversTypes['AnonymouseSignInTokenPair'], ParentType, ContextType, Partial<MutationRequestAnonymousSignInArgs>>;
  requestCoampayData?: Resolver<ResolversTypes['CoampayData'], ParentType, ContextType, RequireFields<MutationRequestCoampayDataArgs, 'input'>>;
  requestEmailVerification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  requestFaceDetection?: Resolver<Array<Maybe<ResolversTypes['FaceDetection']>>, ParentType, ContextType, RequireFields<MutationRequestFaceDetectionArgs, 'kioskId' | 'pictures'>>;
  requestMainpayPurchaseReady?: Resolver<ResolversTypes['MainPayPurchaseSignature'], ParentType, ContextType, RequireFields<MutationRequestMainpayPurchaseReadyArgs, 'input'>>;
  requestMileageSMSAuth?: Resolver<Maybe<ResolversTypes['RequestSMSPayload']>, ParentType, ContextType, RequireFields<MutationRequestMileageSmsAuthArgs, 'phone'>>;
  requestSMSAuth?: Resolver<Maybe<ResolversTypes['SuccessOrErrorBool']>, ParentType, ContextType, RequireFields<MutationRequestSmsAuthArgs, 'phone'>>;
  resendSmsForReservation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationResendSmsForReservationArgs, 'id'>>;
  reservationCheckIn?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationReservationCheckInArgs, 'reservationId'>>;
  reservationCheckOut?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType, RequireFields<MutationReservationCheckOutArgs, 'reservationId'>>;
  resetBookingDatabase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resetConciergeServiceDatabase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  resetPaymentDatabase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resetReservationDatabase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resetRoomDatabase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resetSubscriptionDatabase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  resetUserDatabase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  resolveMainpayPurchase?: Resolver<ResolversTypes['MainPayPurchaseResolveResult'], ParentType, ContextType, RequireFields<MutationResolveMainpayPurchaseArgs, 'input'>>;
  resolveOutstandingPayment?: Resolver<ResolversTypes['Payment'], ParentType, ContextType, RequireFields<MutationResolveOutstandingPaymentArgs, 'paymentId' | 'resolvePaymentInput'>>;
  resyncUserAccommodation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  revokeToken?: Resolver<Maybe<ResolversTypes['TokenPayload']>, ParentType, ContextType>;
  roomCheckIn?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationRoomCheckInArgs, 'roomId'>>;
  roomCheckOut?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationRoomCheckOutArgs, 'roomId'>>;
  sendConciergeSlackNotification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendConciergeSlackNotificationArgs, 'input'>>;
  sendInquiryEmail?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationSendInquiryEmailArgs, 'input'>>;
  sendKioskControlPacket?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSendKioskControlPacketArgs, 'data' | 'kioskId'>>;
  sendMailTest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationSendMailTestArgs>>;
  sendRcuControlPacket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendRcuControlPacketArgs, 'data' | 'kioskId'>>;
  sendRecognitionEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationSendRecognitionEmailArgs>>;
  sendSlackNotification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendSlackNotificationArgs, 'channel' | 'payload'>>;
  setAccommodationCheckInAndOut?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationSetAccommodationCheckInAndOutArgs, 'accommodationId' | 'defaultCheckIn' | 'defaultCheckOut'>>;
  setConciergeServiceSettings?: Resolver<Array<Maybe<ResolversTypes['ConciergeServiceSetting']>>, ParentType, ContextType, RequireFields<MutationSetConciergeServiceSettingsArgs, 'accommodationId' | 'inputs'>>;
  setConciergeWorkSetting?: Resolver<Array<Maybe<ResolversTypes['ConciergeWorkSetting']>>, ParentType, ContextType, RequireFields<MutationSetConciergeWorkSettingArgs, 'accommodationId' | 'inputs'>>;
  setHomeAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationSetHomeAccommodationArgs, 'accommodationId'>>;
  setKioskOptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['KioskOption']>>>, ParentType, ContextType, RequireFields<MutationSetKioskOptionsArgs, 'kioskId'>>;
  setMileageSettings?: Resolver<Maybe<Array<Maybe<ResolversTypes['MileageSetting']>>>, ParentType, ContextType, RequireFields<MutationSetMileageSettingsArgs, 'accommodationId'>>;
  setOtpKey?: Resolver<ResolversTypes['SetOtpPayload'], ParentType, ContextType>;
  setReservationSMSTemplates?: Resolver<Array<ResolversTypes['ReservationSMSTemplate']>, ParentType, ContextType, RequireFields<MutationSetReservationSmsTemplatesArgs, 'accommodationId' | 'inputs'>>;
  setReservationSettings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReservationSetting']>>>, ParentType, ContextType, RequireFields<MutationSetReservationSettingsArgs, 'accommodationId'>>;
  setRoomState?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationSetRoomStateArgs, 'id' | 'state'>>;
  setRoomStateByStaff?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationSetRoomStateByStaffArgs, 'id'>>;
  signIn?: Resolver<Maybe<ResolversTypes['SignInPayload']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'input'>>;
  signInByAdmin?: Resolver<Maybe<ResolversTypes['SignInPayload']>, ParentType, ContextType, RequireFields<MutationSignInByAdminArgs, 'identity'>>;
  signUp?: Resolver<Maybe<ResolversTypes['SignUpPayload']>, ParentType, ContextType, RequireFields<MutationSignUpArgs, 'input'>>;
  syncCmsOtaProducts?: Resolver<ResolversTypes['CmsReturnType'], ParentType, ContextType, Partial<MutationSyncCmsOtaProductsArgs>>;
  synchronizationReservation?: Resolver<ResolversTypes['CmsReturnType'], ParentType, ContextType, RequireFields<MutationSynchronizationReservationArgs, 'input'>>;
  synchronizationSalesRoomInfo?: Resolver<ResolversTypes['CmsReturnType'], ParentType, ContextType, RequireFields<MutationSynchronizationSalesRoomInfoArgs, 'input'>>;
  thirdPartySignIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationThirdPartySignInArgs, 'accommodationId' | 'provider' | 'scope'>>;
  updateAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationUpdateAccommodationArgs, 'input'>>;
  updateAccommodationArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType, Partial<MutationUpdateAccommodationArticleArgs>>;
  updateAccommodationAudioOption?: Resolver<ResolversTypes['AudioOption'], ParentType, ContextType, RequireFields<MutationUpdateAccommodationAudioOptionArgs, 'input'>>;
  updateAccommodationCleaningPeriod?: Resolver<Maybe<ResolversTypes['CleaningPeriod']>, ParentType, ContextType, RequireFields<MutationUpdateAccommodationCleaningPeriodArgs, 'endTime' | 'id' | 'startTime'>>;
  updateAccommodationInventoryMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationUpdateAccommodationInventoryModeArgs>>;
  updateAccommodationKiosk?: Resolver<Maybe<ResolversTypes['Kiosk']>, ParentType, ContextType, RequireFields<MutationUpdateAccommodationKioskArgs, 'input'>>;
  updateAmanoPreDiscountInfo?: Resolver<ResolversTypes['UpdatePreDiscountInfoResponse'], ParentType, ContextType, RequireFields<MutationUpdateAmanoPreDiscountInfoArgs, 'input'>>;
  updateArticle?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'input'>>;
  updateCmsActivityLogReadStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateCmsActivityLogReadStatusArgs, 'input'>>;
  updateCmsOtaProductMaps?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, Partial<MutationUpdateCmsOtaProductMapsArgs>>;
  updateCoamPaymentConfig?: Resolver<ResolversTypes['CoamPaymentConfig'], ParentType, ContextType, RequireFields<MutationUpdateCoamPaymentConfigArgs, 'input'>>;
  updateConciergeAmenity?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenity']>>, ParentType, ContextType, RequireFields<MutationUpdateConciergeAmenityArgs, 'input'>>;
  updateConciergeAmenityCategory?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenityCategory']>>, ParentType, ContextType, RequireFields<MutationUpdateConciergeAmenityCategoryArgs, 'input'>>;
  updateConciergeOrder?: Resolver<Maybe<ResolversTypes['ConciergeOrder']>, ParentType, ContextType, RequireFields<MutationUpdateConciergeOrderArgs, 'input'>>;
  updateConciergeServiceNotice?: Resolver<Array<Maybe<ResolversTypes['ConciergeServiceNotice']>>, ParentType, ContextType, RequireFields<MutationUpdateConciergeServiceNoticeArgs, 'input'>>;
  updateEmployee?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateEmployeeArgs, 'input'>>;
  updateInfo?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateInfoArgs, 'input'>>;
  updateMileageUser?: Resolver<Maybe<ResolversTypes['MileageUser']>, ParentType, ContextType, RequireFields<MutationUpdateMileageUserArgs, 'input'>>;
  updateOrderRequestTemplate?: Resolver<Array<Maybe<ResolversTypes['OrderRequestTemplate']>>, ParentType, ContextType, RequireFields<MutationUpdateOrderRequestTemplateArgs, 'input'>>;
  updatePrice?: Resolver<Maybe<ResolversTypes['Price']>, ParentType, ContextType, RequireFields<MutationUpdatePriceArgs, 'input'>>;
  updatePricePeriod?: Resolver<Maybe<ResolversTypes['PricePeriod']>, ParentType, ContextType, Partial<MutationUpdatePricePeriodArgs>>;
  updateReservationMemo?: Resolver<Maybe<ResolversTypes['ReservationMemo']>, ParentType, ContextType, RequireFields<MutationUpdateReservationMemoArgs, 'input'>>;
  updateRoom?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<MutationUpdateRoomArgs, 'input'>>;
  updateRoomDevice?: Resolver<Maybe<ResolversTypes['RoomDevice']>, ParentType, ContextType, RequireFields<MutationUpdateRoomDeviceArgs, 'id' | 'input'>>;
  updateRoomInfoDatas?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType, RequireFields<MutationUpdateRoomInfoDatasArgs, 'input'>>;
  updateRoomKey?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<MutationUpdateRoomKeyArgs, 'id'>>;
  updateRoomMemo?: Resolver<Maybe<ResolversTypes['RoomMemo']>, ParentType, ContextType, RequireFields<MutationUpdateRoomMemoArgs, 'input'>>;
  updateRoomService?: Resolver<Array<Maybe<ResolversTypes['RoomService']>>, ParentType, ContextType, RequireFields<MutationUpdateRoomServiceArgs, 'input'>>;
  updateRoomServiceCategory?: Resolver<Array<Maybe<ResolversTypes['RoomServiceCategory']>>, ParentType, ContextType, RequireFields<MutationUpdateRoomServiceCategoryArgs, 'input'>>;
  updateRoomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType, RequireFields<MutationUpdateRoomTypeArgs, 'input'>>;
  updateRooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType, RequireFields<MutationUpdateRoomsArgs, 'input'>>;
  updateSalesRoomInfo?: Resolver<ResolversTypes['CmsReturnType'], ParentType, ContextType, RequireFields<MutationUpdateSalesRoomInfoArgs, 'input'>>;
  updateTheme?: Resolver<Maybe<ResolversTypes['Theme']>, ParentType, ContextType, RequireFields<MutationUpdateThemeArgs, 'id' | 'name'>>;
  updateThirdParty?: Resolver<Maybe<ResolversTypes['ThirdPartyUser']>, ParentType, ContextType, Partial<MutationUpdateThirdPartyArgs>>;
  uploadAccommodationArticleImages?: Resolver<ResolversTypes['AccommodationArticle'], ParentType, ContextType, RequireFields<MutationUploadAccommodationArticleImagesArgs, 'articleId' | 'files'>>;
  uploadAccommodationImage?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<MutationUploadAccommodationImageArgs, 'accommodationId' | 'file'>>;
  uploadArticleAttachments?: Resolver<ResolversTypes['Article'], ParentType, ContextType, RequireFields<MutationUploadArticleAttachmentsArgs, 'articleId' | 'files'>>;
  uploadAuthImages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<MutationUploadAuthImagesArgs, 'files' | 'kioskId'>>;
  uploadConciergeAmenityImage?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadConciergeAmenityImageArgs, 'conciergeAmenityId' | 'file' | 'type'>>;
  uploadConciergeServiceCategoryImage?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadConciergeServiceCategoryImageArgs, 'file' | 'serviceCategoryId'>>;
  uploadConciergeServiceNoticeImage?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<MutationUploadConciergeServiceNoticeImageArgs, 'accommodationId' | 'files' | 'serviceNoticeId'>>;
  uploadKioskBannerImages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<MutationUploadKioskBannerImagesArgs, 'files' | 'kioskId'>>;
  uploadRoomAmenityIcon?: Resolver<Maybe<ResolversTypes['SuccessOrError']>, ParentType, ContextType, RequireFields<MutationUploadRoomAmenityIconArgs, 'file'>>;
  uploadRoomImage?: Resolver<ResolversTypes['Room'], ParentType, ContextType, RequireFields<MutationUploadRoomImageArgs, 'file' | 'roomId'>>;
  uploadRoomServiceImage?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationUploadRoomServiceImageArgs, 'file' | 'roomServiceId' | 'type'>>;
  uploadRoomTypeImage?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType, RequireFields<MutationUploadRoomTypeImageArgs, 'file' | 'roomTypeId'>>;
  uploadThumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationUploadThumbnailArgs, 'image'>>;
  verifyEmail?: Resolver<Maybe<ResolversTypes['SuccessOrErrorBool']>, ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'authHash' | 'email'>>;
  waitAnonymousSignIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationWaitAnonymousSignInArgs, 'authId' | 'token'>>;
  waitPublicPurchaseResolved?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<MutationWaitPublicPurchaseResolvedArgs, 'id'>>;
  wingsProcessCheckOut?: Resolver<ResolversTypes['WingsCheckOutResult'], ParentType, ContextType, RequireFields<MutationWingsProcessCheckOutArgs, 'accommodationId' | 'folioNumber'>>;
  wingsProcessWalkIn?: Resolver<Maybe<ResolversTypes['WingsCheckInResult']>, ParentType, ContextType, RequireFields<MutationWingsProcessWalkInArgs, 'accommodationId' | 'adultCount' | 'childCount' | 'endDate' | 'guestName' | 'nights' | 'roomTypeCode' | 'salesDate' | 'startDate'>>;
  wingsReportKeyIssue?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationWingsReportKeyIssueArgs, 'accommodationId' | 'folioNumber' | 'keyId'>>;
  wingsReportKeyRetrieve?: Resolver<ResolversTypes['WingsKeyRetrieveResult'], ParentType, ContextType, RequireFields<MutationWingsReportKeyRetrieveArgs, 'accommodationId' | 'keyId'>>;
  wingsReservationCancelCheckIn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationWingsReservationCancelCheckInArgs, 'accommodationId'>>;
  wingsReservationCheckIn?: Resolver<ResolversTypes['WingsCheckInResult'], ParentType, ContextType, RequireFields<MutationWingsReservationCheckInArgs, 'accommodationId'>>;
}>;

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type OtaSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OTASetting'] = ResolversParentTypes['OTASetting']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ota?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  relatedId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OffsetPageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OffsetPageInfo'] = ResolversParentTypes['OffsetPageInfo']> = ResolversObject<{
  first?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderRequestTemplateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderRequestTemplate'] = ResolversParentTypes['OrderRequestTemplate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  request?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OtaIntegrationSmsHistoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtaIntegrationSmsHistory'] = ResolversParentTypes['OtaIntegrationSmsHistory']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ota?: Resolver<Maybe<ResolversTypes['OTA']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OtaIntegrationSmsHistoryConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtaIntegrationSmsHistoryConnection'] = ResolversParentTypes['OtaIntegrationSmsHistoryConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['OtaIntegrationSmsHistoryEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OtaIntegrationSmsHistoryEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtaIntegrationSmsHistoryEdge'] = ResolversParentTypes['OtaIntegrationSmsHistoryEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['OtaIntegrationSmsHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OtaPriceContractionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtaPriceContraction'] = ResolversParentTypes['OtaPriceContraction']> = ResolversObject<{
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  fri?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reservationPackageId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  sun?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thu?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OtaProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtaProduct'] = ResolversParentTypes['OtaProduct']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  commissionRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  parserAcronyms?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  parserValues?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  reservationPackage?: Resolver<Maybe<ResolversTypes['ReservationPackage']>, ParentType, ContextType>;
  reservationPackageId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PackageOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PackageOption'] = ResolversParentTypes['PackageOption']> = ResolversObject<{
  defaultAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isSelectable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['ServiceProduct'], ParentType, ContextType>;
  serviceProductId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  approvalId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buyerCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childPayments?: Resolver<Array<ResolversTypes['Payment']>, ParentType, ContextType>;
  commissionAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  excludeMileage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isCancelled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFullyPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isReservationPayment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  issuedCompany?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kioskId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  merchantNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mileage?: Resolver<Maybe<ResolversTypes['Mileage']>, ParentType, ContextType>;
  mileageUser?: Resolver<Maybe<ResolversTypes['MileageUser']>, ParentType, ContextType>;
  outstandingAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentPayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  parentPaymentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  purpose?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  reservationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalOutstandingAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  useStartAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  virtualAccounts?: Resolver<Maybe<Array<Maybe<ResolversTypes['VirtualAccount']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaymentConnection'] = ResolversParentTypes['PaymentConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['PaymentEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaymentEdge'] = ResolversParentTypes['PaymentEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentSalesReportResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaymentSalesReport'] = ResolversParentTypes['PaymentSalesReport']> = ResolversObject<{
  dateAggregates?: Resolver<Array<Maybe<ResolversTypes['DailySalesAggregate']>>, ParentType, ContextType>;
  typeAggregates?: Resolver<Array<Maybe<ResolversTypes['TypeSalesAggregate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentStatisticsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PaymentStatistics'] = ResolversParentTypes['PaymentStatistics']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  daySums?: Resolver<Array<ResolversTypes['DayPaymentSum']>, ParentType, ContextType>;
  remoteAmountSum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomTypeSums?: Resolver<Array<ResolversTypes['RoomTypePaymentSum']>, ParentType, ContextType>;
  spotAmountSum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spotCardSum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  spotCashSum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeSums?: Resolver<Array<ResolversTypes['TypePaymentSum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PgConfigResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PgConfig'] = ResolversParentTypes['PgConfig']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlatformReservationCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PlatformReservationCount'] = ResolversParentTypes['PlatformReservationCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlatformVisitIntervalSumResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PlatformVisitIntervalSum'] = ResolversParentTypes['PlatformVisitIntervalSum']> = ResolversObject<{
  platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PreAssignedRoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PreAssignedRoom'] = ResolversParentTypes['PreAssignedRoom']> = ResolversObject<{
  reservation?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType>;
  reservationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PreDiscountInfoDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PreDiscountInfoData'] = ResolversParentTypes['PreDiscountInfoData']> = ResolversObject<{
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  preDiscountId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PreDiscountListInfoDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PreDiscountListInfoData'] = ResolversParentTypes['PreDiscountListInfoData']> = ResolversObject<{
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  eventName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  list?: Resolver<Array<Maybe<ResolversTypes['AmanoPreDiscount']>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = ResolversObject<{
  addonAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addonAmount2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  addonSleepsMaximum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bookingActualAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bookingOriginAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cardAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cashAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultRentTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extendedRentTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extraCleanAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extraGuestAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fri?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lateCheckoutLimit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lateCheckoutMaximum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pricePeriodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceTimes?: Resolver<Array<Maybe<ResolversTypes['PriceTime']>>, ParentType, ContextType>;
  priceType?: Resolver<Maybe<ResolversTypes['PriceType']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rentExpireAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  sun?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thu?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  useAddon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  wed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PricePeriodResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PricePeriod'] = ResolversParentTypes['PricePeriod']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isDefault?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prices?: Resolver<Array<Maybe<ResolversTypes['Price']>>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  tokenizedInfo?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PriceTimeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PriceTime'] = ResolversParentTypes['PriceTime']> = ResolversObject<{
  endTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PriceTimeType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicPurchaseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PublicPurchase'] = ResolversParentTypes['PublicPurchase']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  datePricesToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  roomTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  useExpireAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  useStartAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicPurchaseConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PublicPurchaseConnection'] = ResolversParentTypes['PublicPurchaseConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['PublicPurchaseEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicPurchaseEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PublicPurchaseEdge'] = ResolversParentTypes['PublicPurchaseEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['PublicPurchase']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  _paymentVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _reservationVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _subscriptionVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  aggregatePayments?: Resolver<Array<ResolversTypes['SaleAggregation']>, ParentType, ContextType, RequireFields<QueryAggregatePaymentsArgs, 'accommodationId' | 'from' | 'to'>>;
  findUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryFindUserArgs, 'id'>>;
  getAccommodationArticleConnection?: Resolver<Maybe<ResolversTypes['AccommodationArticleConnection']>, ParentType, ContextType, RequireFields<QueryGetAccommodationArticleConnectionArgs, 'accommodationId'>>;
  getAccommodationArticles?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccommodationArticle']>>>, ParentType, ContextType, RequireFields<QueryGetAccommodationArticlesArgs, 'accommodationId'>>;
  getAccommodationAudioOptions?: Resolver<Array<ResolversTypes['AudioOption']>, ParentType, ContextType, RequireFields<QueryGetAccommodationAudioOptionsArgs, 'id'>>;
  getAccommodationCoupons?: Resolver<ResolversTypes['CouponConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationCouponsArgs, 'accommodationId'>>;
  getAccommodationGuestReservations?: Resolver<Array<Maybe<ResolversTypes['Reservation']>>, ParentType, ContextType, RequireFields<QueryGetAccommodationGuestReservationsArgs, 'accommodationId' | 'authToken' | 'guestName' | 'phone'>>;
  getAccommodationKiosks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Kiosk']>>>, ParentType, ContextType, RequireFields<QueryGetAccommodationKiosksArgs, 'id'>>;
  getAccommodationMileageUsers?: Resolver<ResolversTypes['MileageUserConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationMileageUsersArgs, 'accommodationId'>>;
  getAccommodationMileages?: Resolver<ResolversTypes['MileageConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationMileagesArgs, 'accommodationId'>>;
  getAccommodationNotifications?: Resolver<ResolversTypes['AccommodationNotificationConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationNotificationsArgs, 'accommodationId'>>;
  getAccommodationOtaList?: Resolver<Array<ResolversTypes['AccommodationOta']>, ParentType, ContextType, RequireFields<QueryGetAccommodationOtaListArgs, 'accommodationId'>>;
  getAccommodationPackages?: Resolver<Array<ResolversTypes['ReservationPackage']>, ParentType, ContextType, RequireFields<QueryGetAccommodationPackagesArgs, 'accommodationId'>>;
  getAccommodationPaymentStatistics?: Resolver<ResolversTypes['PaymentStatistics'], ParentType, ContextType, RequireFields<QueryGetAccommodationPaymentStatisticsArgs, 'accommodationId'>>;
  getAccommodationPayments?: Resolver<ResolversTypes['PaymentConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationPaymentsArgs, 'accommodationId'>>;
  getAccommodationPgConfig?: Resolver<Maybe<ResolversTypes['PgConfig']>, ParentType, ContextType, RequireFields<QueryGetAccommodationPgConfigArgs, 'accommodationId'>>;
  getAccommodationPublicPurchases?: Resolver<ResolversTypes['PublicPurchaseConnection'], ParentType, ContextType, RequireFields<QueryGetAccommodationPublicPurchasesArgs, 'accommodationId'>>;
  getAccommodationReservationStatistics?: Resolver<ResolversTypes['ReservationStatistics'], ParentType, ContextType, RequireFields<QueryGetAccommodationReservationStatisticsArgs, 'accommodationId'>>;
  getAccommodationReservations?: Resolver<Maybe<ResolversTypes['ReservationConnection']>, ParentType, ContextType, Partial<QueryGetAccommodationReservationsArgs>>;
  getAccommodationSales?: Resolver<Maybe<ResolversTypes['AccommodationSales']>, ParentType, ContextType, RequireFields<QueryGetAccommodationSalesArgs, 'accommodationId'>>;
  getAccommodationServiceProducts?: Resolver<Array<ResolversTypes['ServiceProduct']>, ParentType, ContextType, RequireFields<QueryGetAccommodationServiceProductsArgs, 'accommodationId'>>;
  getAccommodationThirdPartyApps?: Resolver<Array<ResolversTypes['ThirdPartyApp']>, ParentType, ContextType, RequireFields<QueryGetAccommodationThirdPartyAppsArgs, 'accommodationId'>>;
  getAccommodations?: Resolver<Maybe<ResolversTypes['AccommodationConnection']>, ParentType, ContextType, Partial<QueryGetAccommodationsArgs>>;
  getAmanoFeeCarSearch?: Resolver<ResolversTypes['GetFeeCarSearchResponse'], ParentType, ContextType, RequireFields<QueryGetAmanoFeeCarSearchArgs, 'input'>>;
  getAmanoPreDiscountListInfo?: Resolver<ResolversTypes['GetPreDiscountListInfoResponse'], ParentType, ContextType, RequireFields<QueryGetAmanoPreDiscountListInfoArgs, 'input'>>;
  getArticle?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryGetArticleArgs, 'id'>>;
  getArticles?: Resolver<Maybe<ResolversTypes['ArticleConnection']>, ParentType, ContextType, Partial<QueryGetArticlesArgs>>;
  getBriefAccommodationById?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<QueryGetBriefAccommodationByIdArgs, 'id'>>;
  getCmsActivityLogs?: Resolver<ResolversTypes['CmsActivityLogConnection'], ParentType, ContextType, RequireFields<QueryGetCmsActivityLogsArgs, 'accommodationId'>>;
  getCmsMonthlyReservationHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['CmsMonthlyReservationHistory']>>>, ParentType, ContextType, RequireFields<QueryGetCmsMonthlyReservationHistoryArgs, 'input'>>;
  getCmsOtaAccounts?: Resolver<Array<ResolversTypes['CmsOtaAccount']>, ParentType, ContextType, RequireFields<QueryGetCmsOtaAccountsArgs, 'accommodationId'>>;
  getCmsOtaList?: Resolver<Maybe<Array<ResolversTypes['CmsOta']>>, ParentType, ContextType>;
  getCmsOtaProductMaps?: Resolver<Array<ResolversTypes['CmsOtaProductMap']>, ParentType, ContextType, RequireFields<QueryGetCmsOtaProductMapsArgs, 'accommodationId'>>;
  getCmsOtaProductSettings?: Resolver<Maybe<Array<ResolversTypes['CmsOtaProductSetting']>>, ParentType, ContextType, RequireFields<QueryGetCmsOtaProductSettingsArgs, 'accommodationId'>>;
  getCmsReservationList?: Resolver<Maybe<Array<ResolversTypes['CmsReservation']>>, ParentType, ContextType, RequireFields<QueryGetCmsReservationListArgs, 'accommodationId'>>;
  getConciergeAmenities?: Resolver<ResolversTypes['ConciergeAmenityConnection'], ParentType, ContextType, RequireFields<QueryGetConciergeAmenitiesArgs, 'accommodationId'>>;
  getConciergeAmenity?: Resolver<Maybe<ResolversTypes['ConciergeAmenity']>, ParentType, ContextType, Partial<QueryGetConciergeAmenityArgs>>;
  getConciergeAmenityCategories?: Resolver<Array<Maybe<ResolversTypes['ConciergeAmenityCategory']>>, ParentType, ContextType, RequireFields<QueryGetConciergeAmenityCategoriesArgs, 'accommodationId'>>;
  getConciergeConfig?: Resolver<ResolversTypes['ConciergeConfigInfo'], ParentType, ContextType, RequireFields<QueryGetConciergeConfigArgs, 'accommodationId'>>;
  getConciergeImageRootHost?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  getConciergeOrder?: Resolver<Maybe<ResolversTypes['ConciergeOrder']>, ParentType, ContextType, RequireFields<QueryGetConciergeOrderArgs, 'orderId' | 'reservationId'>>;
  getConciergeOrderByPaymentInfoId?: Resolver<Maybe<ResolversTypes['ConciergeOrder']>, ParentType, ContextType, RequireFields<QueryGetConciergeOrderByPaymentInfoIdArgs, 'paymentInfoId' | 'reservationId'>>;
  getConciergeOrderStatistics?: Resolver<ResolversTypes['ConciergeOrderStatistics'], ParentType, ContextType, RequireFields<QueryGetConciergeOrderStatisticsArgs, 'accommodationId'>>;
  getConciergeOrders?: Resolver<ResolversTypes['ConciergeOrderConnection'], ParentType, ContextType, RequireFields<QueryGetConciergeOrdersArgs, 'accommodationId' | 'connectionInput'>>;
  getConciergePaymentInfo?: Resolver<ResolversTypes['ConciergePaymentInfo'], ParentType, ContextType, RequireFields<QueryGetConciergePaymentInfoArgs, 'paymentInfoId' | 'reservationId' | 'sessionToken'>>;
  getConciergeServiceNotice?: Resolver<Array<Maybe<ResolversTypes['ConciergeServiceNotice']>>, ParentType, ContextType, RequireFields<QueryGetConciergeServiceNoticeArgs, 'accommodationId'>>;
  getConciergeServiceSettingByGuestSession?: Resolver<ResolversTypes['AccommodationConciergeSetting'], ParentType, ContextType, RequireFields<QueryGetConciergeServiceSettingByGuestSessionArgs, 'input'>>;
  getConciergeWorkSettings?: Resolver<Array<Maybe<ResolversTypes['ConciergeWorkSetting']>>, ParentType, ContextType, RequireFields<QueryGetConciergeWorkSettingsArgs, 'accommodationId'>>;
  getConciergeWorkSettingsByGuestSession?: Resolver<Array<Maybe<ResolversTypes['ConciergeWorkSetting']>>, ParentType, ContextType, RequireFields<QueryGetConciergeWorkSettingsByGuestSessionArgs, 'input'>>;
  getDaemonCommonMethods?: Resolver<Maybe<Array<ResolversTypes['CmsDaemonMethod']>>, ParentType, ContextType>;
  getDaemonOtaMethods?: Resolver<Maybe<Array<ResolversTypes['CmsDaemonMethod']>>, ParentType, ContextType, Partial<QueryGetDaemonOtaMethodsArgs>>;
  getEncryptionKeyList?: Resolver<Array<ResolversTypes['SystemOption']>, ParentType, ContextType>;
  getIsActiveAccommodations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Accommodation']>>>, ParentType, ContextType>;
  getIsExistUnmappedCmsOtaProductMap?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryGetIsExistUnmappedCmsOtaProductMapArgs, 'accommodationId' | 'otaKey'>>;
  getLodgeReservationsInDate?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryGetLodgeReservationsInDateArgs, 'accommodationId' | 'endDate' | 'startDate'>>;
  getMyAccommodations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Accommodation']>>>, ParentType, ContextType>;
  getMyAgreement?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryGetMyAgreementArgs, 'type'>>;
  getMyIntegrationSmsHistories?: Resolver<Maybe<ResolversTypes['OtaIntegrationSmsHistoryConnection']>, ParentType, ContextType, Partial<QueryGetMyIntegrationSmsHistoriesArgs>>;
  getMySalesReport?: Resolver<ResolversTypes['PaymentSalesReport'], ParentType, ContextType, Partial<QueryGetMySalesReportArgs>>;
  getMyUserNotifications?: Resolver<ResolversTypes['UserNotificationConnection'], ParentType, ContextType, Partial<QueryGetMyUserNotificationsArgs>>;
  getOrderRequestTemplates?: Resolver<Array<Maybe<ResolversTypes['OrderRequestTemplate']>>, ParentType, ContextType, RequireFields<QueryGetOrderRequestTemplatesArgs, 'accommodationId'>>;
  getOtaPriceContractions?: Resolver<Array<ResolversTypes['OtaPriceContraction']>, ParentType, ContextType, RequireFields<QueryGetOtaPriceContractionsArgs, 'accommodationOtaId'>>;
  getOtaProductMaps?: Resolver<Array<ResolversTypes['CmsOtaProductMap']>, ParentType, ContextType, RequireFields<QueryGetOtaProductMapsArgs, 'accommodationId'>>;
  getPermanentToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetPermanentTokenArgs, 'kioskId'>>;
  getPermanentTokenForAdmin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetPermanentTokenForAdminArgs, 'accommodationId'>>;
  getRentReservationsInDate?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryGetRentReservationsInDateArgs, 'accommodationId' | 'endDate' | 'startDate'>>;
  getReservationReadyToCheckIn?: Resolver<Array<Maybe<ResolversTypes['Reservation']>>, ParentType, ContextType, RequireFields<QueryGetReservationReadyToCheckInArgs, 'accommodationId' | 'number'>>;
  getReservationSettingByGuestSession?: Resolver<ResolversTypes['AccommodationReservationSettingForGuest'], ParentType, ContextType, RequireFields<QueryGetReservationSettingByGuestSessionArgs, 'reservationId' | 'sessionToken'>>;
  getRoomService?: Resolver<Maybe<ResolversTypes['RoomService']>, ParentType, ContextType, Partial<QueryGetRoomServiceArgs>>;
  getRoomServiceCategory?: Resolver<Array<Maybe<ResolversTypes['RoomServiceCategory']>>, ParentType, ContextType, Partial<QueryGetRoomServiceCategoryArgs>>;
  getRoomServices?: Resolver<ResolversTypes['RoomServiceConnection'], ParentType, ContextType, RequireFields<QueryGetRoomServicesArgs, 'accommodationId'>>;
  getSingleAccommodation?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<QueryGetSingleAccommodationArgs, 'id'>>;
  getSingleAccommodationArticle?: Resolver<Maybe<ResolversTypes['AccommodationArticle']>, ParentType, ContextType, RequireFields<QueryGetSingleAccommodationArticleArgs, 'id'>>;
  getSingleAccommodationByName?: Resolver<Maybe<ResolversTypes['Accommodation']>, ParentType, ContextType, RequireFields<QueryGetSingleAccommodationByNameArgs, 'name'>>;
  getSingleAccommodationOta?: Resolver<ResolversTypes['AccommodationOta'], ParentType, ContextType, Partial<QueryGetSingleAccommodationOtaArgs>>;
  getSingleOtaIntegrationSmsHistory?: Resolver<Maybe<ResolversTypes['OtaIntegrationSmsHistory']>, ParentType, ContextType, RequireFields<QueryGetSingleOtaIntegrationSmsHistoryArgs, 'id'>>;
  getSinglePayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QueryGetSinglePaymentArgs, 'paymentId'>>;
  getSinglePublicPurchase?: Resolver<Maybe<ResolversTypes['PublicPurchase']>, ParentType, ContextType, RequireFields<QueryGetSinglePublicPurchaseArgs, 'id'>>;
  getSingleReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryGetSingleReservationArgs, 'reservationId'>>;
  getSingleReservationByGuestSession?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryGetSingleReservationByGuestSessionArgs, 'reservationId' | 'sessionToken'>>;
  getSingleReservationGroup?: Resolver<Maybe<ResolversTypes['ReservationGroup']>, ParentType, ContextType, RequireFields<QueryGetSingleReservationGroupArgs, 'reservationGroupId'>>;
  getSingleRoom?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType, RequireFields<QueryGetSingleRoomArgs, 'id'>>;
  getSingleRoomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType, RequireFields<QueryGetSingleRoomTypeArgs, 'id'>>;
  getSmartAccessRooms?: Resolver<Array<ResolversTypes['SmartAccessRoom']>, ParentType, ContextType, RequireFields<QueryGetSmartAccessRoomsArgs, 'accommodationId'>>;
  getSystemOTASettings?: Resolver<Array<Maybe<ResolversTypes['OTASetting']>>, ParentType, ContextType>;
  getTodayAccommodationOtaSalseCount?: Resolver<Maybe<Array<ResolversTypes['TodayAccommodationOtaSalseCount']>>, ParentType, ContextType, RequireFields<QueryGetTodayAccommodationOtaSalseCountArgs, 'accommodationId'>>;
  getTodaySalesDashboard?: Resolver<Maybe<Array<ResolversTypes['CmsOtaProductMap']>>, ParentType, ContextType, RequireFields<QueryGetTodaySalesDashboardArgs, 'input'>>;
  getUserLogs?: Resolver<Maybe<ResolversTypes['UserLogConnection']>, ParentType, ContextType, RequireFields<QueryGetUserLogsArgs, 'accommodationId'>>;
  getUsers?: Resolver<Maybe<ResolversTypes['UserConnection']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
  getWingsReservationReadyToCheckIn?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryGetWingsReservationReadyToCheckInArgs, 'accommodationId'>>;
  getWingsRoomNumberByRoomKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryGetWingsRoomNumberByRoomKeyArgs, 'accommodationId' | 'keyId'>>;
  getWingsWalkinRoomTypes?: Resolver<Array<ResolversTypes['WingsRoomType']>, ParentType, ContextType, RequireFields<QueryGetWingsWalkinRoomTypesArgs, 'accommodationId'>>;
  myContacts?: Resolver<Array<ResolversTypes['UserContact']>, ParentType, ContextType, Partial<QueryMyContactsArgs>>;
  myInfo?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  queryMileage?: Resolver<ResolversTypes['MileageAggregation'], ParentType, ContextType, RequireFields<QueryQueryMileageArgs, 'accommodationId' | 'authToken' | 'phone'>>;
  refreshToken?: Resolver<ResolversTypes['TokenPayload'], ParentType, ContextType, RequireFields<QueryRefreshTokenArgs, 'refreshToken'>>;
  searchVehiclesByNumber?: Resolver<Array<ResolversTypes['SearchVehiclesResultByNumber']>, ParentType, ContextType, RequireFields<QuerySearchVehiclesByNumberArgs, 'accommodationId' | 'vehicleNumber'>>;
  thirdParties?: Resolver<Array<ResolversTypes['ThirdPartyUser']>, ParentType, ContextType>;
  userVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  verifyDuplicate?: Resolver<Maybe<ResolversTypes['VerifyDuplicatePayload']>, ParentType, ContextType, RequireFields<QueryVerifyDuplicateArgs, 'input'>>;
}>;

export type RequestSmsPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RequestSMSPayload'] = ResolversParentTypes['RequestSMSPayload']> = ResolversObject<{
  _dev_sentAuth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guestName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  intendedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  intendedUseExpireAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  intendedUseStartAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  isCancelled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isLongTerm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPaid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPrimary?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['ReservationMemo']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  otaNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  paymentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationGroup?: Resolver<Maybe<ResolversTypes['ReservationGroup']>, ParentType, ContextType>;
  reservationGroupId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  roomId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  roomType?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  sleeps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  useExpireAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  useStartAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  useVehicle?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  vehicleNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationConnection'] = ResolversParentTypes['ReservationConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['ReservationEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationCount'] = ResolversParentTypes['ReservationCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationEdge'] = ResolversParentTypes['ReservationEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationGroupResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationGroup'] = ResolversParentTypes['ReservationGroup']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  assignee?: Resolver<Maybe<ResolversTypes['CompanyAssignee']>, ParentType, ContextType>;
  companyAssigneeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  platform?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservations?: Resolver<Array<ResolversTypes['Reservation']>, ParentType, ContextType>;
  reservedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  useExpireAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  useStartAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationMemoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationMemo'] = ResolversParentTypes['ReservationMemo']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  reservationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationPackageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationPackage'] = ResolversParentTypes['ReservationPackage']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adjustPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  packageOptions?: Resolver<Array<ResolversTypes['PackageOption']>, ParentType, ContextType>;
  roomTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationParseResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationParseResponse'] = ResolversParentTypes['ReservationParseResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parsed?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationSmsTemplateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationSMSTemplate'] = ResolversParentTypes['ReservationSMSTemplate']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  delay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationSettingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationSetting'] = ResolversParentTypes['ReservationSetting']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReservationStatisticsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ReservationStatistics'] = ResolversParentTypes['ReservationStatistics']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dayCounts?: Resolver<Array<ResolversTypes['DayReservationCount']>, ParentType, ContextType>;
  lodgeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  platformCounts?: Resolver<Array<ResolversTypes['PlatformReservationCount']>, ParentType, ContextType>;
  platformVisitIntervalSums?: Resolver<Array<ResolversTypes['PlatformVisitIntervalSum']>, ParentType, ContextType>;
  remoteCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomTypeCounts?: Resolver<Array<ResolversTypes['RoomTypeReservationCount']>, ParentType, ContextType>;
  spotCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amenities?: Resolver<Array<Maybe<ResolversTypes['Amenity']>>, ParentType, ContextType>;
  calculatedState?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<RoomCalculatedStateArgs>>;
  cardData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cardState?: Resolver<Maybe<ResolversTypes['CardState']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  dayCheckOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultSleeps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encryptionKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kioskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxSleeps?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['RoomMemo']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preAssignedReservationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  preAssignedRoom?: Resolver<Maybe<ResolversTypes['PreAssignedRoom']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recentReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  roomDevices?: Resolver<Array<Maybe<ResolversTypes['RoomDevice']>>, ParentType, ContextType>;
  roomThemes?: Resolver<Array<Maybe<ResolversTypes['RoomTheme']>>, ParentType, ContextType>;
  roomType?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  saleState?: Resolver<Maybe<ResolversTypes['SaleState']>, ParentType, ContextType>;
  smartAccessInfo?: Resolver<Maybe<ResolversTypes['ThirdPartyProperty']>, ParentType, ContextType, RequireFields<RoomSmartAccessInfoArgs, 'accommodationId'>>;
  state?: Resolver<Maybe<ResolversTypes['RoomState']>, ParentType, ContextType>;
  stateUpdatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  themes?: Resolver<Array<Maybe<ResolversTypes['Theme']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<RoomThumbnailArgs>>;
  upcomingReservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType>;
  upcomingReservationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomConnection'] = ResolversParentTypes['RoomConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['RoomEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomDeviceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomDevice'] = ResolversParentTypes['RoomDevice']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  power?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomEdge'] = ResolversParentTypes['RoomEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomMemoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomMemo'] = ResolversParentTypes['RoomMemo']> = ResolversObject<{
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomService'] = ResolversParentTypes['RoomService']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomServiceCategory']>>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  leadTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomServiceOption']>>>, ParentType, ContextType>;
  orderRequests?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderRequestTemplate']>>>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  soldOutPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceCategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceCategory'] = ResolversParentTypes['RoomServiceCategory']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['DefaultStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceConnection'] = ResolversParentTypes['RoomServiceConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['RoomServiceEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['OffsetPageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceEdge'] = ResolversParentTypes['RoomServiceEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RoomService']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceOption'] = ResolversParentTypes['RoomServiceOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RoomServiceStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceOptionDetailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceOptionDetail'] = ResolversParentTypes['RoomServiceOptionDetail']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['RoomServiceOption'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomServiceOptionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RoomServiceStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomServiceOrderDetailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomServiceOrderDetail'] = ResolversParentTypes['RoomServiceOrderDetail']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  leadTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  options?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoomServiceOptionDetail']>>>, ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['RoomService'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomServiceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  soldOutPeriod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomThemeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomTheme'] = ResolversParentTypes['RoomTheme']> = ResolversObject<{
  roomId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  themeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomType'] = ResolversParentTypes['RoomType']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkIn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkOut?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currentPrice?: Resolver<Array<Maybe<ResolversTypes['Price']>>, ParentType, ContextType>;
  dailyQuantities?: Resolver<Array<ResolversTypes['DailyQuantity']>, ParentType, ContextType, Partial<RoomTypeDailyQuantitiesArgs>>;
  datePrices?: Resolver<Array<Maybe<ResolversTypes['DatePrice']>>, ParentType, ContextType, Partial<RoomTypeDatePricesArgs>>;
  dateQuantities?: Resolver<Array<ResolversTypes['DateQuantity']>, ParentType, ContextType, RequireFields<RoomTypeDateQuantitiesArgs, 'endDate' | 'startDate'>>;
  dayQuantities?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultPrices?: Resolver<Array<Maybe<ResolversTypes['Price']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  otaSetting?: Resolver<Maybe<ResolversTypes['OTASetting']>, ParentType, ContextType, RequireFields<RoomTypeOtaSettingArgs, 'ota'>>;
  prices?: Resolver<Array<Maybe<ResolversTypes['Price']>>, ParentType, ContextType, Partial<RoomTypePricesArgs>>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  remainingRoomTotalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType, Partial<RoomTypeRoomsArgs>>;
  saleStateDisableCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thirdPartyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<RoomTypeThumbnailArgs>>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomTypeConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomTypeConnection'] = ResolversParentTypes['RoomTypeConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['RoomTypeEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomTypeEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomTypeEdge'] = ResolversParentTypes['RoomTypeEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomTypePaymentSumResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomTypePaymentSum'] = ResolversParentTypes['RoomTypePaymentSum']> = ResolversObject<{
  roomTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoomTypeReservationCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomTypeReservationCount'] = ResolversParentTypes['RoomTypeReservationCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  roomTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SaleAggregationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SaleAggregation'] = ResolversParentTypes['SaleAggregation']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outstandingAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reservationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomTypeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchVehiclesResultByNumberResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SearchVehiclesResultByNumber'] = ResolversParentTypes['SearchVehiclesResultByNumber']> = ResolversObject<{
  enteredAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  vehicleNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ServiceProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ServiceProduct'] = ResolversParentTypes['ServiceProduct']> = ResolversObject<{
  accommodationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SetOtpPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SetOtpPayload'] = ResolversParentTypes['SetOtpPayload']> = ResolversObject<{
  otpKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  qrCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShardFailureResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShardFailure'] = ResolversParentTypes['ShardFailure']> = ResolversObject<{
  index?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reason?: Resolver<Maybe<ResolversTypes['ErrorCause']>, ParentType, ContextType>;
  shard?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShardStatisticsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ShardStatistics'] = ResolversParentTypes['ShardStatistics']> = ResolversObject<{
  failed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failures?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShardFailure']>>>, ParentType, ContextType>;
  skipped?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  successful?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignInPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignInPayload'] = ResolversParentTypes['SignInPayload']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['TokenPayload']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignUpPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignUpPayload'] = ResolversParentTypes['SignUpPayload']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartAccessDeviceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SmartAccessDevice'] = ResolversParentTypes['SmartAccessDevice']> = ResolversObject<{
  batteryUsage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deviceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  deviceName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lockStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  macId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roomId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  roomName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wifiStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SmartAccessRoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SmartAccessRoom'] = ResolversParentTypes['SmartAccessRoom']> = ResolversObject<{
  devices?: Resolver<Maybe<Array<Maybe<ResolversTypes['SmartAccessDevice']>>>, ParentType, ContextType>;
  roomId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuccessOrErrorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SuccessOrError'] = ResolversParentTypes['SuccessOrError']> = ResolversObject<{
  result?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SuccessOrErrorBoolResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SuccessOrErrorBool'] = ResolversParentTypes['SuccessOrErrorBool']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SystemOptionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SystemOption'] = ResolversParentTypes['SystemOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThemeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Theme'] = ResolversParentTypes['Theme']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyAppResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ThirdPartyApp'] = ResolversParentTypes['ThirdPartyApp']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyPropertyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ThirdPartyProperty'] = ResolversParentTypes['ThirdPartyProperty']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relatedId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thirdPartyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThirdPartyUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ThirdPartyUser'] = ResolversParentTypes['ThirdPartyUser']> = ResolversObject<{
  authority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trustedHosts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodayAccommodationOtaSalseCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TodayAccommodationOtaSalseCount'] = ResolversParentTypes['TodayAccommodationOtaSalseCount']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  otaKey?: Resolver<ResolversTypes['OTA'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TokenPayload'] = ResolversParentTypes['TokenPayload']> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypePaymentSumResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TypePaymentSum'] = ResolversParentTypes['TypePaymentSum']> = ResolversObject<{
  sum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeSalesAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TypeSalesAggregate'] = ResolversParentTypes['TypeSalesAggregate']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UpdatePreDiscountInfoResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UpdatePreDiscountInfoResponse'] = ResolversParentTypes['UpdatePreDiscountInfoResponse']> = ResolversObject<{
  data?: Resolver<ResolversTypes['PreDiscountInfoData'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statusMsg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  accessLevel?: Resolver<ResolversTypes['UserType'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isAuthorizedEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isAuthorizedPhone?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['UserEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserContactResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserContact'] = ResolversParentTypes['UserContact']> = ResolversObject<{
  contact?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLogResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserLog'] = ResolversParentTypes['UserLog']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  log?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLogConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserLogConnection'] = ResolversParentTypes['UserLogConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['UserLogEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLogEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserLogEdge'] = ResolversParentTypes['UserLogEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserLog']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserNotificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserNotification'] = ResolversParentTypes['UserNotification']> = ResolversObject<{
  accommodationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPublic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserNotificationConnectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserNotificationConnection'] = ResolversParentTypes['UserNotificationConnection']> = ResolversObject<{
  edges?: Resolver<Array<Maybe<ResolversTypes['UserNotificationEdge']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserNotificationEdgeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserNotificationEdge'] = ResolversParentTypes['UserNotificationEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['UserNotification']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerifyDuplicatePayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['VerifyDuplicatePayload'] = ResolversParentTypes['VerifyDuplicatePayload']> = ResolversObject<{
  error?: Resolver<Maybe<Array<Maybe<ResolversTypes['DuplicateCheckerType']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  verified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VirtualAccountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['VirtualAccount'] = ResolversParentTypes['VirtualAccount']> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsCheckInDataResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsCheckInData'] = ResolversParentTypes['WingsCheckInData']> = ResolversObject<{
  folioNumber?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rawData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsCheckInPaymentInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsCheckInPaymentInfo'] = ResolversParentTypes['WingsCheckInPaymentInfo']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isPaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  rawData?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsCheckInResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsCheckInResult'] = ResolversParentTypes['WingsCheckInResult']> = ResolversObject<{
  reservation?: Resolver<ResolversTypes['Reservation'], ParentType, ContextType>;
  wingsData?: Resolver<ResolversTypes['WingsCheckInData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsCheckOutResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsCheckOutResult'] = ResolversParentTypes['WingsCheckOutResult']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsDailyPriceInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsDailyPriceInfo'] = ResolversParentTypes['WingsDailyPriceInfo']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsKeyRetrieveResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsKeyRetrieveResult'] = ResolversParentTypes['WingsKeyRetrieveResult']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  folioNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leftCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  noBalance?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  outstandingPayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  requireFrontCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsPriceInfoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsPriceInfo'] = ResolversParentTypes['WingsPriceInfo']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dailyPrices?: Resolver<Array<ResolversTypes['WingsDailyPriceInfo']>, ParentType, ContextType>;
  rawData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WingsRoomTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['WingsRoomType'] = ResolversParentTypes['WingsRoomType']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['WingsPriceInfo']>, ParentType, ContextType>;
  roomType?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Accommodation?: AccommodationResolvers<ContextType>;
  AccommodationArticle?: AccommodationArticleResolvers<ContextType>;
  AccommodationArticleConnection?: AccommodationArticleConnectionResolvers<ContextType>;
  AccommodationArticleEdge?: AccommodationArticleEdgeResolvers<ContextType>;
  AccommodationConciergeSetting?: AccommodationConciergeSettingResolvers<ContextType>;
  AccommodationConnection?: AccommodationConnectionResolvers<ContextType>;
  AccommodationEdge?: AccommodationEdgeResolvers<ContextType>;
  AccommodationInventoryMode?: AccommodationInventoryModeResolvers<ContextType>;
  AccommodationMileageSetting?: AccommodationMileageSettingResolvers<ContextType>;
  AccommodationNotification?: AccommodationNotificationResolvers<ContextType>;
  AccommodationNotificationConnection?: AccommodationNotificationConnectionResolvers<ContextType>;
  AccommodationNotificationEdge?: AccommodationNotificationEdgeResolvers<ContextType>;
  AccommodationOption?: AccommodationOptionResolvers<ContextType>;
  AccommodationOta?: AccommodationOtaResolvers<ContextType>;
  AccommodationReservationSetting?: AccommodationReservationSettingResolvers<ContextType>;
  AccommodationReservationSettingForGuest?: AccommodationReservationSettingForGuestResolvers<ContextType>;
  AccommodationSales?: AccommodationSalesResolvers<ContextType>;
  AccommodationUser?: AccommodationUserResolvers<ContextType>;
  AgeEstimation?: AgeEstimationResolvers<ContextType>;
  AmanoFreeTimeZone?: AmanoFreeTimeZoneResolvers<ContextType>;
  AmanoInCarInfo?: AmanoInCarInfoResolvers<ContextType>;
  AmanoPreDiscount?: AmanoPreDiscountResolvers<ContextType>;
  Amenity?: AmenityResolvers<ContextType>;
  AnonymouseSignInTokenPair?: AnonymouseSignInTokenPairResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleConnection?: ArticleConnectionResolvers<ContextType>;
  ArticleEdge?: ArticleEdgeResolvers<ContextType>;
  AudioOption?: AudioOptionResolvers<ContextType>;
  Captcha?: CaptchaResolvers<ContextType>;
  CleaningPeriod?: CleaningPeriodResolvers<ContextType>;
  CmsActivityLog?: CmsActivityLogResolvers<ContextType>;
  CmsActivityLogConnection?: CmsActivityLogConnectionResolvers<ContextType>;
  CmsActivityLogEdge?: CmsActivityLogEdgeResolvers<ContextType>;
  CmsDaemonMethod?: CmsDaemonMethodResolvers<ContextType>;
  CmsMonthlyReservationHistory?: CmsMonthlyReservationHistoryResolvers<ContextType>;
  CmsOta?: CmsOtaResolvers<ContextType>;
  CmsOtaAccount?: CmsOtaAccountResolvers<ContextType>;
  CmsOtaProductMap?: CmsOtaProductMapResolvers<ContextType>;
  CmsOtaProductSetting?: CmsOtaProductSettingResolvers<ContextType>;
  CmsReservation?: CmsReservationResolvers<ContextType>;
  CmsReservationDetail?: CmsReservationDetailResolvers<ContextType>;
  CmsReturnType?: CmsReturnTypeResolvers<ContextType>;
  CoamPaymentConfig?: CoamPaymentConfigResolvers<ContextType>;
  CoampayData?: CoampayDataResolvers<ContextType>;
  CompanyAssignee?: CompanyAssigneeResolvers<ContextType>;
  CompanyProfile?: CompanyProfileResolvers<ContextType>;
  ConciergeAmenity?: ConciergeAmenityResolvers<ContextType>;
  ConciergeAmenityCategory?: ConciergeAmenityCategoryResolvers<ContextType>;
  ConciergeAmenityConnection?: ConciergeAmenityConnectionResolvers<ContextType>;
  ConciergeAmenityEdge?: ConciergeAmenityEdgeResolvers<ContextType>;
  ConciergeAmenityOrderDetail?: ConciergeAmenityOrderDetailResolvers<ContextType>;
  ConciergeConfigInfo?: ConciergeConfigInfoResolvers<ContextType>;
  ConciergeOrder?: ConciergeOrderResolvers<ContextType>;
  ConciergeOrderConnection?: ConciergeOrderConnectionResolvers<ContextType>;
  ConciergeOrderEdge?: ConciergeOrderEdgeResolvers<ContextType>;
  ConciergeOrderStatistics?: ConciergeOrderStatisticsResolvers<ContextType>;
  ConciergePaymentInfo?: ConciergePaymentInfoResolvers<ContextType>;
  ConciergeServiceNotice?: ConciergeServiceNoticeResolvers<ContextType>;
  ConciergeServiceSetting?: ConciergeServiceSettingResolvers<ContextType>;
  ConciergeWorkSetting?: ConciergeWorkSettingResolvers<ContextType>;
  Coupon?: CouponResolvers<ContextType>;
  CouponConnection?: CouponConnectionResolvers<ContextType>;
  CouponEdge?: CouponEdgeResolvers<ContextType>;
  CouponUsageHistory?: CouponUsageHistoryResolvers<ContextType>;
  DaemonArg?: DaemonArgResolvers<ContextType>;
  DailyQuantity?: DailyQuantityResolvers<ContextType>;
  DailySalesAggregate?: DailySalesAggregateResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DatePrice?: DatePriceResolvers<ContextType>;
  DateQuantity?: DateQuantityResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DayPaymentSum?: DayPaymentSumResolvers<ContextType>;
  DayReservationCount?: DayReservationCountResolvers<ContextType>;
  DefaultInfo?: DefaultInfoResolvers<ContextType>;
  DeletePreDiscountInfoResponse?: DeletePreDiscountInfoResponseResolvers<ContextType>;
  DeviceConnection?: DeviceConnectionResolvers<ContextType>;
  DeviceEdge?: DeviceEdgeResolvers<ContextType>;
  ElasticResponseType?: ElasticResponseTypeResolvers<ContextType>;
  Employee?: EmployeeResolvers<ContextType>;
  ErrorCause?: ErrorCauseResolvers<ContextType>;
  ErrorCauseKeys?: ErrorCauseKeysResolvers<ContextType>;
  Face?: FaceResolvers<ContextType>;
  FaceDetection?: FaceDetectionResolvers<ContextType>;
  FeeCarSearchData?: FeeCarSearchDataResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  FixedReservationCount?: FixedReservationCountResolvers<ContextType>;
  FixedReservationDiff?: FixedReservationDiffResolvers<ContextType>;
  GQLSchemaType?: GqlSchemaTypeResolvers<ContextType>;
  GetFeeCarSearchResponse?: GetFeeCarSearchResponseResolvers<ContextType>;
  GetPreDiscountListInfoResponse?: GetPreDiscountListInfoResponseResolvers<ContextType>;
  InsertPreDiscountInfoResponse?: InsertPreDiscountInfoResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JobCountSet?: JobCountSetResolvers<ContextType>;
  Kiosk?: KioskResolvers<ContextType>;
  KioskConnection?: KioskConnectionResolvers<ContextType>;
  KioskEdge?: KioskEdgeResolvers<ContextType>;
  KioskOption?: KioskOptionResolvers<ContextType>;
  KioskOptions?: KioskOptionsResolvers<ContextType>;
  LockOtpPayload?: LockOtpPayloadResolvers<ContextType>;
  MainPayPurchaseResolveResult?: MainPayPurchaseResolveResultResolvers<ContextType>;
  MainPayPurchaseSignature?: MainPayPurchaseSignatureResolvers<ContextType>;
  Mileage?: MileageResolvers<ContextType>;
  MileageAggregation?: MileageAggregationResolvers<ContextType>;
  MileageConnection?: MileageConnectionResolvers<ContextType>;
  MileageEdge?: MileageEdgeResolvers<ContextType>;
  MileageRate?: MileageRateResolvers<ContextType>;
  MileageSetting?: MileageSettingResolvers<ContextType>;
  MileageUser?: MileageUserResolvers<ContextType>;
  MileageUserConnection?: MileageUserConnectionResolvers<ContextType>;
  MileageUserEdge?: MileageUserEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  OTASetting?: OtaSettingResolvers<ContextType>;
  OffsetPageInfo?: OffsetPageInfoResolvers<ContextType>;
  OrderRequestTemplate?: OrderRequestTemplateResolvers<ContextType>;
  OtaIntegrationSmsHistory?: OtaIntegrationSmsHistoryResolvers<ContextType>;
  OtaIntegrationSmsHistoryConnection?: OtaIntegrationSmsHistoryConnectionResolvers<ContextType>;
  OtaIntegrationSmsHistoryEdge?: OtaIntegrationSmsHistoryEdgeResolvers<ContextType>;
  OtaPriceContraction?: OtaPriceContractionResolvers<ContextType>;
  OtaProduct?: OtaProductResolvers<ContextType>;
  PackageOption?: PackageOptionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  PaymentConnection?: PaymentConnectionResolvers<ContextType>;
  PaymentEdge?: PaymentEdgeResolvers<ContextType>;
  PaymentSalesReport?: PaymentSalesReportResolvers<ContextType>;
  PaymentStatistics?: PaymentStatisticsResolvers<ContextType>;
  PgConfig?: PgConfigResolvers<ContextType>;
  PlatformReservationCount?: PlatformReservationCountResolvers<ContextType>;
  PlatformVisitIntervalSum?: PlatformVisitIntervalSumResolvers<ContextType>;
  PreAssignedRoom?: PreAssignedRoomResolvers<ContextType>;
  PreDiscountInfoData?: PreDiscountInfoDataResolvers<ContextType>;
  PreDiscountListInfoData?: PreDiscountListInfoDataResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  PricePeriod?: PricePeriodResolvers<ContextType>;
  PriceTime?: PriceTimeResolvers<ContextType>;
  PublicPurchase?: PublicPurchaseResolvers<ContextType>;
  PublicPurchaseConnection?: PublicPurchaseConnectionResolvers<ContextType>;
  PublicPurchaseEdge?: PublicPurchaseEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RequestSMSPayload?: RequestSmsPayloadResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  ReservationConnection?: ReservationConnectionResolvers<ContextType>;
  ReservationCount?: ReservationCountResolvers<ContextType>;
  ReservationEdge?: ReservationEdgeResolvers<ContextType>;
  ReservationGroup?: ReservationGroupResolvers<ContextType>;
  ReservationMemo?: ReservationMemoResolvers<ContextType>;
  ReservationPackage?: ReservationPackageResolvers<ContextType>;
  ReservationParseResponse?: ReservationParseResponseResolvers<ContextType>;
  ReservationSMSTemplate?: ReservationSmsTemplateResolvers<ContextType>;
  ReservationSetting?: ReservationSettingResolvers<ContextType>;
  ReservationStatistics?: ReservationStatisticsResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  RoomConnection?: RoomConnectionResolvers<ContextType>;
  RoomDevice?: RoomDeviceResolvers<ContextType>;
  RoomEdge?: RoomEdgeResolvers<ContextType>;
  RoomMemo?: RoomMemoResolvers<ContextType>;
  RoomService?: RoomServiceResolvers<ContextType>;
  RoomServiceCategory?: RoomServiceCategoryResolvers<ContextType>;
  RoomServiceConnection?: RoomServiceConnectionResolvers<ContextType>;
  RoomServiceEdge?: RoomServiceEdgeResolvers<ContextType>;
  RoomServiceOption?: RoomServiceOptionResolvers<ContextType>;
  RoomServiceOptionDetail?: RoomServiceOptionDetailResolvers<ContextType>;
  RoomServiceOrderDetail?: RoomServiceOrderDetailResolvers<ContextType>;
  RoomTheme?: RoomThemeResolvers<ContextType>;
  RoomType?: RoomTypeResolvers<ContextType>;
  RoomTypeConnection?: RoomTypeConnectionResolvers<ContextType>;
  RoomTypeEdge?: RoomTypeEdgeResolvers<ContextType>;
  RoomTypePaymentSum?: RoomTypePaymentSumResolvers<ContextType>;
  RoomTypeReservationCount?: RoomTypeReservationCountResolvers<ContextType>;
  SaleAggregation?: SaleAggregationResolvers<ContextType>;
  SearchVehiclesResultByNumber?: SearchVehiclesResultByNumberResolvers<ContextType>;
  ServiceProduct?: ServiceProductResolvers<ContextType>;
  SetOtpPayload?: SetOtpPayloadResolvers<ContextType>;
  ShardFailure?: ShardFailureResolvers<ContextType>;
  ShardStatistics?: ShardStatisticsResolvers<ContextType>;
  SignInPayload?: SignInPayloadResolvers<ContextType>;
  SignUpPayload?: SignUpPayloadResolvers<ContextType>;
  SmartAccessDevice?: SmartAccessDeviceResolvers<ContextType>;
  SmartAccessRoom?: SmartAccessRoomResolvers<ContextType>;
  SuccessOrError?: SuccessOrErrorResolvers<ContextType>;
  SuccessOrErrorBool?: SuccessOrErrorBoolResolvers<ContextType>;
  SystemOption?: SystemOptionResolvers<ContextType>;
  Theme?: ThemeResolvers<ContextType>;
  ThirdPartyApp?: ThirdPartyAppResolvers<ContextType>;
  ThirdPartyProperty?: ThirdPartyPropertyResolvers<ContextType>;
  ThirdPartyUser?: ThirdPartyUserResolvers<ContextType>;
  TodayAccommodationOtaSalseCount?: TodayAccommodationOtaSalseCountResolvers<ContextType>;
  TokenPayload?: TokenPayloadResolvers<ContextType>;
  TypePaymentSum?: TypePaymentSumResolvers<ContextType>;
  TypeSalesAggregate?: TypeSalesAggregateResolvers<ContextType>;
  UpdatePreDiscountInfoResponse?: UpdatePreDiscountInfoResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserContact?: UserContactResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserLog?: UserLogResolvers<ContextType>;
  UserLogConnection?: UserLogConnectionResolvers<ContextType>;
  UserLogEdge?: UserLogEdgeResolvers<ContextType>;
  UserNotification?: UserNotificationResolvers<ContextType>;
  UserNotificationConnection?: UserNotificationConnectionResolvers<ContextType>;
  UserNotificationEdge?: UserNotificationEdgeResolvers<ContextType>;
  VerifyDuplicatePayload?: VerifyDuplicatePayloadResolvers<ContextType>;
  VirtualAccount?: VirtualAccountResolvers<ContextType>;
  WingsCheckInData?: WingsCheckInDataResolvers<ContextType>;
  WingsCheckInPaymentInfo?: WingsCheckInPaymentInfoResolvers<ContextType>;
  WingsCheckInResult?: WingsCheckInResultResolvers<ContextType>;
  WingsCheckOutResult?: WingsCheckOutResultResolvers<ContextType>;
  WingsDailyPriceInfo?: WingsDailyPriceInfoResolvers<ContextType>;
  WingsKeyRetrieveResult?: WingsKeyRetrieveResultResolvers<ContextType>;
  WingsPriceInfo?: WingsPriceInfoResolvers<ContextType>;
  WingsRoomType?: WingsRoomTypeResolvers<ContextType>;
}>;

