import { Component, Prop, Element, State, Listen } from '@stencil/core';
import 'simplebar';

import { ShowMessage } from "../../utils/helpers"
import { Services } from "../../services"


@Component({
  tag: 'mozo-history',
  styleUrl: 'mozo-history.scss',
  //shadow: true
})
export class MozoHistory {

  @Prop() coinType: string = "mozo";
  @Prop() maxHeight: string = "500px"

  @Prop({ context: 'ownerAddress' }) private ownerAddress: string = "";

  @Element() el!: HTMLElement;

  @State() historyData: any[] = []
  @State() noData: boolean = false
  @State() page: number = 1
  @State() size: number = 15
  @State() isDataLoading: boolean = false
  @State() isEndLoadMore: boolean = false
  @State() accessWallet: boolean = true

  @Listen('endBottomScrollHandle')
  async selectAddressBookCompletedHandler(event: CustomEvent) {
    if (!this.isDataLoading && !this.isEndLoadMore) {
      this.isDataLoading = true
      let data = await this.loadMoreHistoryTransaction()
      this.isDataLoading = false
      if (data.length < this.size) {
        this.isEndLoadMore = true
      }
      let scrollContainer = event.detail.querySelector(".simplebar-content")
      data.map(async (item) => {
        !item.timeConverted && (item.timeConverted =  this.convertTime(item.time * 1000))
        !item.status && (item.status = this.showStatus(item.txStatus, item.addressFrom))
        let newEl = document.createElement("div")
        newEl.classList.add("item")
        newEl.addEventListener("click", () => this.showDetail(item))

        newEl.innerHTML = `<div class="item-left">
                            <label class="text">${item.status}</label>
                            <label class="text-address form-label">${item.timeConverted}</label>
                          </div>
                          <div class="item-right">
                            <label class="${'text ' + item.status.toLowerCase()}" >${item.amount} Mozo</label>
                            <label class="form-label">₩${item.exchange_rates[1].value.toFixed(2)}</label>
                          </div>`
       
        scrollContainer.append(newEl)
      })

    }

  }


  async componentDidLoad() {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const txHistory = await Services.getTxHistory({ network: "SOLO", size: this.size })

        if (txHistory) {
          if (txHistory.status == "SUCCESS") {
            this.historyData = txHistory.data
            this.noData = this.historyData.length <= 0
            this.isEndLoadMore = this.historyData.length < this.size
          } else {
            ShowMessage.showTransferFail()
          }
        }
      } else {
        this.accessWallet = false
      }
    }
  }


  async componentWillLoad() {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        if (this.ownerAddress == "") {

          const balanceResponce = await Services.getWalletBalance({ network: "SOLO" })

          if (balanceResponce) {
            if (balanceResponce.status == "SUCCESS") {
              this.ownerAddress = balanceResponce.data.address
            }
          }
        }

      } else {
        //this.accessWallet = false
      }
    }
  }

  async loadMoreHistoryTransaction() {
    this.page = this.page + 1
    const txHistory = await Services.getTxHistory({ network: "SOLO", page: this.page, size: this.size })
    if (txHistory) {
      if (txHistory.status == "SUCCESS") {
        return txHistory.data
      }
    }

    return []
  }

  showDetail(data) {
    ShowMessage.transactionDetail(data)
  }

  showStatus(status, fromAddress) {
    return status === "SUCCESS" ? (fromAddress.toLowerCase() == this.ownerAddress.toLowerCase() ? "Sent" : "Received") : "Failed"
  }

  convertTime(date) {
    return new Date(date).toLocaleString()
  }

  login() {
    Services.login()
  }

  renderItem(item) {
    !item.timeConverted && (item.timeConverted =  this.convertTime(item.time * 1000))
    !item.status && (item.status = this.showStatus(item.txStatus, item.addressFrom))

    return <div class="item" onClick={() => {
      this.showDetail(item)
    }}>
      <div class="item-left">
        <label class="text">{item.status}</label>
        <label class="text-address form-label">{item.timeConverted}</label>
      </div>
      <div class="item-right">
        <label class={"text " + item.status.toLowerCase()} >{item.amount} Mozo</label>
        <label class="form-label">₩{item.exchange_rates[1].value.toFixed(2)}</label>
      </div>
    </div>
  }

  render() {
    return (
      <div class="mozo-box list">
      {this.accessWallet ? <label class="form-label">Mozo Transaction History</label>: 
              <label class="text-note">You must be <a class="text-link" onClick={() => this.login()
              
              }>Login</a> to show history transaction</label>}
        
        {this.noData && (<div class="mozo-panel no-data mt-md"><label class="form-label"><i>No transaction history</i></label></div>)}

        {this.historyData && <mozo-scroll-container maxHeight={this.maxHeight} class="mt-md">
          {this.historyData.map((item) => {
            return this.renderItem(item)
          })}
        </mozo-scroll-container>}
        <div class={"loading-more " + (this.isDataLoading ? "mozo-show": "mozo-hide")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="10" viewBox="0 0 120 30" fill="#5a9cf5">
            <circle cx="15" cy="15" r="12.1019">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="15" r="11.8981" fill-opacity="0.3">
              <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
            </circle>
            <circle cx="105" cy="15" r="12.1019">
              <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div >)
  }
}
