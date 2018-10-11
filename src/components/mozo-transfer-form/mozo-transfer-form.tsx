import { Component, Prop, State, Method, Element, Listen } from '@stencil/core';

import { ShowMessage } from "../../utils/helpers"
import { Services } from "../../services"


@Component({
  tag: 'mozo-transfer-form',
  styleUrl: 'mozo-transfer-form.scss',
  //shadow: true
})
export class MozoTransferForm {

  @Prop() amount: number;
  @Prop() toAddress: string = "";

  @State() amountState: number;
  @State() toAddressState: string = "";
  @State() addressIsWrong: boolean = false;
  @State() amountIsWrong: boolean = false;
  @State() submitDisable: boolean = false;

  @Element() el!: HTMLElement;

  @Listen('selectAddressBook')
  selectAddressBookCompletedHandler(event: CustomEvent) {
    this.toAddressState = event.detail.soloAddress
    if (event.detail.soloAddress.trim() == "" || !(/^(0x)?[0-9a-fA-F]{40}$/.test(event.detail.soloAddress.trim()))) {
      this.addressIsWrong = true
    } else {
      this.addressIsWrong = false
    }
    this.hideDropDown()
  }

  elDropDown: HTMLElement
  getStatusInterval: any

  @Method()
  async transferMozo(e) {
    e.preventDefault()
    this.submitDisable = true

    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const txResult = await ShowMessage.showTransactionWallet({ to: this.toAddressState, value: this.amountState, network: "SOLO" })
        this.submitDisable = false
        if (txResult) {
          if (txResult.status == "SUCCESS") {
            ShowMessage.showTransferSuccess(txResult.data.tx.hash)

            // this.getStatusInterval = setInterval(() => {
            //   this.getTxStatus(txResult.data.tx.hash)
            // }, 5000)
          } else {
            ShowMessage.showTransferFail("Your transaction is fail")
          }

        }
      } else {
        await ShowMessage.accessWalletFail()
      }
    }
  }

  componentDidLoad() {
    this.amountState = this.amount;
    this.toAddressState = this.toAddress;

    if (this.toAddress.trim() != "" && !(/^(0x)?[0-9a-fA-F]{40}$/.test(this.toAddress.trim()))) {
      this.addressIsWrong = true
    } else {
      this.addressIsWrong = false
    }

    if (this.amountState.toString().trim() != "" && isNaN(this.amountState)) {
      this.amountIsWrong = true
    } else {
      this.amountIsWrong = false
    }

    this.elDropDown = document.querySelector("#drop-down-address-book") as HTMLElement
    let targetEl = document.querySelector("#importAddress") as HTMLElement

    document.addEventListener('click', (e) => {

      if(this.elDropDown != (e.target as HTMLElement) && targetEl != (e.target as HTMLElement) && !targetEl.contains(e.target as HTMLElement) && !this.elDropDown.contains(e.target as HTMLElement))  
      {
        this.hideDropDown();
      }

    });
  }

  showDropDown() {
    this.elDropDown.style.display = "block";
  }

  hideDropDown() {
    this.elDropDown.style.display = "none";
  }

  handleChangeAddress(event) {
    const value = event.target.value;
    this.toAddressState = value;

    if (value.trim() == "" || !(/^(0x)?[0-9a-fA-F]{40}$/.test(value.trim()))) {
      this.addressIsWrong = true
    } else {
      this.addressIsWrong = false
    }

    event.target.focus()
  }

  close(url: string) {
    window.open(url, '_blank');
  }

  handleChangeAmount(event) {
    const value = event.target.value;
    this.amountState = value;

    if (this.amountState.toString().trim() == "" || isNaN(this.amountState)) {
      this.amountIsWrong = true
    } else {
      this.amountIsWrong = false
    }
  }

  showDropDownHandle(e) {
    e.preventDefault()
    this.showDropDown()
  }


  render() {

    return (
      <div class="mozo-form">
        <h3>Send Mozo Off-chain</h3>
        <div class="form-group">
          <input type="text" value={this.toAddressState} onInput={(e) => this.handleChangeAddress(e)} />
          <label>Receiver Address</label>
          {this.addressIsWrong && <small class="text-error">{this.toAddressState.toString().trim() == "" ? "This field is required" : "Recipient address is invalid"}</small>}
          <br/>
          <a id="importAddress" class="mt-x-sm" onClick={(e) => {
            this.showDropDownHandle(e)
          }}> <small class="text-inline"><svg class="small" xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12">
            <path fill="#5A9CF5" fill-rule="evenodd" d="M1.854 1.034C2.586.344 3.468 0 4.5 0c1.032 0 1.914.345 2.646 1.034.732.69 1.098 1.52 1.098 2.491 0 .972-.366 1.803-1.098 2.492-.732.69-1.614 1.034-2.646 1.034-1.032 0-1.914-.345-2.646-1.034-.732-.69-1.098-1.52-1.098-2.492 0-.971.366-1.802 1.098-2.491zM0 10.594c0-.747.414-1.405 1.242-1.975.828-.571 1.914-.856 3.258-.856 1.308 0 2.385.285 3.231.856C8.577 9.189 9 9.847 9 10.593c0 .373-.429.7-1.287.983C6.855 11.86 5.784 12 4.5 12c-1.344 0-2.43-.141-3.258-.424C.414 11.294 0 10.966 0 10.593z" />
          </svg>&nbsp; Select from address book</small></a>
        </div>
        <div id="drop-down-address-book" class="drop-down">
            <mozo-address-book></mozo-address-book>
          </div>
        <div class="form-group">
          <input type="text" value={this.amountState} onInput={(e) => this.handleChangeAmount(e)} />
          <label>Amount</label>
          {this.amountIsWrong && <small class="text-error">{this.amountState.toString().trim() == "" ? "This field is required" : "Amount is not a number"}</small>}
        </div>
        <div class="form-action">
          <input disabled={this.addressIsWrong || this.toAddressState.trim() == "" || this.amountIsWrong || this.amountState.toString().trim() == "" || this.submitDisable} class="mozo-btn w-xx-lg" type="button" value="Submit" onClick={(e) => this.transferMozo(e)} />
        </div>
      </div>
    );
  }
}
