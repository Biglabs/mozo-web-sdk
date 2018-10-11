import { post, get } from "./requestManager"
import { ShowMessage } from "../utils/helpers"

async function CheckWallet() {
  return await get("checkwallet")
}

function Login() {
  ShowMessage.openWallet(async () => {
    let responce = await get("login")
    if (responce) {
      if (responce.status == "SUCCESS") {
        location.reload();
      }
    } else {
      ShowMessage.showTransferFail()
    }
  })

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
  data.size = data.size || 20
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
  login: Login,
  sendTransaction: SendTransaction,
  getAddressWallet: GetAddressWallet,
  getWalletBalance: GetWalletBalance,
  getTxHistory: GetTxHistory,
  getAddressBook: GetAddressBook,
  getTxStatus: GetTxStatus
}