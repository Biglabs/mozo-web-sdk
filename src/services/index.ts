import { post, get } from "./requestManager"

async function CheckWallet() {
  return await get("checkwallet")
}

async function SendTransaction(data) {
  return await post("transaction/send", data)
}

async function GetAddressWallet(data) {
  return await get("getwalletaddress", data)
}

async function GetWalletBalance(data) {
  return await get("getwalletbalance", data)
}

async function GetTxHistory(data) {
  return await get("getTxHistory", data)
}

async function GetAddressBook() {
  return await get("address-book")
}

async function GetTxStatus(data) {
  return await get("transaction/txstatus", data)
}


export const Services = {
  checkWallet: CheckWallet,
  sendTransaction: SendTransaction,
  getAddressWallet: GetAddressWallet,
  getWalletBalance: GetWalletBalance,
  getTxHistory: GetTxHistory,
  getAddressBook: GetAddressBook,
  getTxStatus: GetTxStatus
}