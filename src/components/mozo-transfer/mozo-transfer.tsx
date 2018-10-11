import { Component, Prop, Method, Element } from '@stencil/core';
// import protocolCheck from 'custom-protocol-detection'
// const uri = 'solosigner:'

import {ShowMessage} from "../../utils/helpers"

import {Services} from "../../services"


@Component({
  tag: 'mozo-transfer',
  styleUrl: 'mozo-transfer.css'
})
export class MozoTransfer {

  @Prop() value: string = "MOZO Payment";
  @Prop() toAddress: string = "";
  @Prop() amount: number = 0;

  @Element() el!: HTMLElement;

  @Method()
  async transferMozo(e) {
    e.preventDefault()

    let result = await Services.checkWallet()
    if(result) {
      if(result.status == "SUCCESS") {
        await ShowMessage.showTransactionForm({toAddress: this.toAddress, amount: this.amount})
      } else {
        await ShowMessage.accessWalletFail()
      }
    }
  }

  async open() {
    var modal = document.querySelector("mozo-modal");
    modal.style.display = "block";
  }

  render() {
    return (
      <div>
        <input class="mozo-btn" type="button" value={this.value} onClick={(e) =>  this.transferMozo(e)} />
      </div>

    );
  }
}
