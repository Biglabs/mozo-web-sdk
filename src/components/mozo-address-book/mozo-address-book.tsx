import { Component, Prop, Element, State, Event, EventEmitter } from '@stencil/core';
import 'simplebar';

import { ShowMessage } from "../../utils/helpers"
import { Services } from "../../services"


@Component({
  tag: 'mozo-address-book',
  styleUrl: 'mozo-address-book.scss',
  //shadow: true
})
export class MozoAddressBook {

  @Prop() coinType: string = "mozo";
  @Element() el!: HTMLElement;

  @State() addressBookData: any[] = []

  @Event() selectAddressBook: EventEmitter;
  
  selectAddressBookHandler(addressItem: any) {
    this.selectAddressBook.emit(addressItem);
  }

  async componentDidLoad() {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const response = await Services.getAddressBook()

        if (response) {
          if (response.status == "SUCCESS") {
            this.addressBookData = response.data 

          } else {
            ShowMessage.showTransferFail()
          }
        }
      } else {
        //this.accessWallet = false
      }
    }
  }

  render() {
    return (
      <div class="mozo-box list">
        {this.addressBookData && <mozo-scroll-container>
          {this.addressBookData.map((item) => {
            return <div class="item" onClick={() => this.selectAddressBookHandler(item)}>
              <div class="item-left">
                <label class="text">{item.name}</label>
                <label class="text-address form-label">{item.soloAddress}</label>
              </div>
            </div>
          })}
        </mozo-scroll-container>}
      </div >)
  }
}
