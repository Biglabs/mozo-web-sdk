import { Component, Prop, Element, State } from '@stencil/core';
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

  async componentDidLoad() {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const txHistory = await Services.getTxHistory({ network: "SOLO" })

        if (txHistory) {
          if (txHistory.status == "SUCCESS") {
            this.historyData = txHistory.data
            this.noData = this.historyData.length <= 0
          } else {
            ShowMessage.showTransferFail()
          }
        }
      } else {
        //this.accessWallet = false
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
              console.log("history", this.ownerAddress)
            }
          }
        }

      } else {
        //this.accessWallet = false
      }
    }
  }

  showDetail(data) {
    ShowMessage.transactionDetail(data)
  }

  showStatus(status, fromAddress) {
    console.log("owner", this.ownerAddress)
    console.log("from", fromAddress)
    return status === "SUCCESS" ? (fromAddress.toLowerCase() == this.ownerAddress.toLowerCase() ? "Sent" : "Received") : "Failed"
  }

  convertTime(date) {
    let options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  render() {
    return (
      <div class="mozo-box list">
        <label class="form-label">Mozo Transaction History</label>
        {this.noData && (<div class="mozo-panel no-data mt-md"><label class="form-label"><i>No transaction history</i></label></div>)}

        {this.historyData && <mozo-scroll-container maxHeight={this.maxHeight} class="mt-md">
          {this.historyData.map((item) => {
            return <div class="item" onClick={() => {
              item.time = this.convertTime(item.time * 1000)
              item.status = this.showStatus(item.txStatus, item.addressFrom)
              this.showDetail(item)
            }}>
              <div class="item-left">
                <label class="text">{this.showStatus(item.txStatus, item.addressFrom)}</label>
                <label class="text-address form-label">{this.convertTime(item.time * 1000)}</label>
              </div>
              <div class="item-right">
                <label class={"text " +  this.showStatus(item.txStatus, item.addressFrom).toLowerCase()} >{item.amount} Mozo</label>
                <label class="form-label">₩{item.exchange_rates[1].value.toFixed(2)}</label>
              </div>
            </div>
          })}
        </mozo-scroll-container>}
      </div >)
  }
}
