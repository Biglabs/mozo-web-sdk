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
  @Element() el!: HTMLElement;

  @State() historyData: any[] = []

  async componentDidLoad() {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const txHistory = await Services.getTxHistory({ network: "SOLO" })

        if (txHistory) {
          if (txHistory.status == "SUCCESS") {
            this.historyData = txHistory.data
            console.log("test", this.historyData)

          } else {
            ShowMessage.showTransferFail()
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

  render() {
    return (
      <div class="mozo-box list">
        <label class="form-label">Mozo Transaction History</label>

        {this.historyData && <mozo-scroll-container class="mt-md">
          {this.historyData.map((item) => {
            return <div class="item" onClick={() => {
              this.showDetail(item)
            }}>
              <div class="item-left">
                <label class="text">{item.txStatus === "SUCCESS"? "Sent" : "Failed"}</label>
                <label class="text-address form-label">{item.addressTo}</label>
              </div>
              <div class="item-right">
                <label class="text">{item.amount} Mozo</label>
                <label class="form-label">₩{item.exchange_rates[1].value.toFixed(2)}</label>
              </div>
            </div>
          })}
        </mozo-scroll-container>}
      </div >)
  }
}
