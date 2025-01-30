import {
  getSpendingLimitsPolicy,
  getTimeFramePolicy,
  getUniversalActionPolicy,
  getUsageLimitPolicy,
  getValueLimitPolicy
} from "@rhinestone/module-sdk"
import { type Hex, toBytes, toHex } from "viem"
import { ParamCondition } from "../modules/smartSessionsValidator/Types"

export * from "./abi"
export * from "./tokens"

export const ENTRY_POINT_ADDRESS: Hex =
  "0x0000000071727De22E5E9d8BAf0edAc6f37da032"
export const ENTRYPOINT_SIMULATIONS_ADDRESS: Hex =
  "0x74Cb5e4eE81b86e70f9045036a1C5477de69eE87"
export const NEXUS_BOOTSTRAP_ADDRESS: Hex =
  "0x87679198dA10ab61E9e2A7F94F631B63eCaB2acD"

export const TEST_ADDRESS_K1_VALIDATOR_FACTORY_ADDRESS: Hex =
  "0x704C800D313c6B184228B5b733bBd6BC3EA9832c"
export const TEST_ADDRESS_K1_VALIDATOR_ADDRESS: Hex =
  "0xCfa6175DDC2eF918e527b2972D9AB8B149f151b7"
export const MAINNET_ADDRESS_K1_VALIDATOR_FACTORY_ADDRESS: Hex =
  "0xB90E96337B9A65653c69795d7dCD6b5CBD1A268C"
export const MAINNET_ADDRESS_K1_VALIDATOR_ADDRESS: Hex =
  "0xE8b4285513B7aE3A8490164C8BD43D7932046Dc2"
export const BICONOMY_ATTESTER_ADDRESS: Hex =
  "0xA4C777199658a41688E9488c4EcbD7a2925Cc23A" // this is the mock attester to use for now for testnets

export const NEXUS_ACCOUNT_FACTORY =
  "0x2E8e8B5a8f7580F43b477562B244298174CB9E1f"

export const MEE_VALIDATOR_ADDRESS =
  "0xFbCbF8314DE6DA57ea2Bc4710115F5271041CA50"
export const OLD_MEE_VALIDATOR_ADDRESS =
  "0x068EA3E30788ABaFDC6fD0b38d20BD38a40a2B3D"

export const MEE_VALIDATOR_ADDRESSES = [
  OLD_MEE_VALIDATOR_ADDRESS,
  MEE_VALIDATOR_ADDRESS
]

export const TEMP_MEE_ATTESTER_ADDR =
  "0x000000333034E9f539ce08819E12c1b8Cb29084d"

export const BICONOMY_EXPERIMENTAL_ATTESTER =
  "0x531b827c1221ec7ce13266e8f5cb1ec6ae470be5"

// Rhinestone constants
export {
  SMART_SESSIONS_ADDRESS,
  OWNABLE_VALIDATOR_ADDRESS,
  OWNABLE_EXECUTOR_ADDRESS,
  RHINESTONE_ATTESTER_ADDRESS,
  REGISTRY_ADDRESS,
  type EnableSessionData,
  type ActionData,
  type PolicyData,
  type Session,
  SmartSessionMode,
  encodeSmartSessionSignature,
  getAddOwnableExecutorOwnerAction,
  getExecuteOnOwnedAccountAction,
  getAccount,
  getOwnableValidatorMockSignature,
  getOwnableValidatorThreshold,
  isModuleInstalled as isRhinestoneModuleInstalled,
  findTrustedAttesters,
  getTrustAttestersAction,
  getOwnableValidatorSignature,
  getAddOwnableValidatorOwnerAction,
  getOwnableValidatorOwners,
  getRemoveOwnableValidatorOwnerAction,
  getSetOwnableValidatorThresholdAction,
  decodeSmartSessionSignature,
  encodeValidationData,
  getEnableSessionDetails,
  getSmartSessionsValidator,
  getSudoPolicy,
  getSpendingLimitsPolicy,
  getUsageLimitPolicy,
  getValueLimitPolicy,
  getOwnableValidator,
  getUniversalActionPolicy
} from "@rhinestone/module-sdk"

// Rhinestone doesn't export the universal action policy address, so we need to get it from the policies
export const UNIVERSAL_ACTION_POLICY_ADDRESS: Hex = getUniversalActionPolicy({
  valueLimitPerUse: 0n,
  paramRules: {
    length: 16,
    rules: new Array(16).fill({
      condition: ParamCondition.EQUAL,
      isLimited: false,
      offset: 0,
      ref: toHex(toBytes("0x", { size: 32 })),
      usage: { limit: BigInt(0), used: BigInt(0) }
    })
  }
}).address

export const TIME_FRAME_POLICY_ADDRESS: Hex = getTimeFramePolicy({
  validUntil: 0,
  validAfter: 0
}).address

export const VALUE_LIMIT_POLICY_ADDRESS: Hex = getValueLimitPolicy({
  limit: 0n
}).address

export const USAGE_LIMIT_POLICY_ADDRESS: Hex = getUsageLimitPolicy({
  limit: 0n
}).address

export const SPENDING_LIMITS_POLICY_ADDRESS: Hex = getSpendingLimitsPolicy([
  {
    token: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    limit: 0n
  }
]).address
