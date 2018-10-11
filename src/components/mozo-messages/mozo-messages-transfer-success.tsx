import { Component, Method, Prop, State } from "@stencil/core";
import { Services } from "../../services";

@Component({
  tag: 'mozo-message-transfer-success',
  styleUrl: 'mozo-messages.scss'
})
export class MozoMessageTransferSuccess {
  @Prop() hash: string = "";

  @Method()
  async transferMozo(e) {
    e.preventDefault()
  }

  @State() status: string = "PENDING"

  getStatusInterval: any;

  async getTxStatus(hash) {
    let result = await Services.checkWallet()
    if (result) {
      if (result.status == "SUCCESS") {
        const responce = await Services.getTxStatus({ txhash: hash })
        if (responce) {
          if (responce.status == "SUCCESS") {
            this.status = responce.data.status
            if (responce.data.status != "PENDING") {
              clearInterval(this.getStatusInterval)
            }
          } else {
            //ShowMessage.showTransferFail("Your transaction is fail")
          }

        }
      } else {
        //await ShowMessage.accessWalletFail()
      }
    }
  }

  componentDidLoad() {
    this.getStatusInterval = setInterval(() => {
      this.getTxStatus(this.hash)
    }, 5000)
  }

  componentDidUnload() {
    clearInterval(this.getStatusInterval)
  }

  renderStatus(status) {
    if (status == "PENDING") {
      return <label class="text-primary text-inline">
        <svg style={{ marginTop: 0 }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 38 38">
          <defs>
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
              <stop stop-color="rgb(90, 156, 245)" stop-opacity="0" offset="0%"></stop>
              <stop stop-color="rgb(90, 156, 245)" stop-opacity=".631" offset="63.146%"></stop>
              <stop stop-color="rgb(90, 156, 245)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
              <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2" transform="rotate(170.158 18 18)">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
              </path>
              <circle fill="#fff" cx="36" cy="18" r="1" transform="rotate(170.158 18 18)">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"></animateTransform>
              </circle>
            </g>
          </g>
        </svg>&nbsp;<span class="form-label mt-x-sm"><i>Pending</i></span></label>
    } else if (status == "SUCCESS") {
      return <label class="text-primary text-inline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
          <path fill="#17B978" fill-rule="evenodd" d="M4.643 4.714C7.786 1.571 11.57 0 16 0c4.429 0 8.202 1.56 11.321 4.679C30.441 7.798 32 11.57 32 16c0 4.429-1.56 8.202-4.679 11.321C24.202 30.441 20.43 32 16 32c-4.429 0-8.202-1.56-11.321-4.679C1.559 24.202 0 20.43 0 16c0-4.429 1.548-8.19 4.643-11.286zm19.571 5.929c.048-.048.072-.12.072-.214 0-.143-.024-.239-.072-.286L22 8.429c-.048-.048-.143-.072-.286-.072-.095 0-.166.024-.214.072l-7.929 10.214c-2.095-2-3.166-3.024-3.214-3.072-.143-.142-.286-.214-.428-.214-.048 0-.143.072-.286.214l-1.786 1.786-.071.072c-.048.047-.072.142-.072.285 0 .096.024.167.072.215l.143.071c3.714 3.571 5.595 5.381 5.642 5.429.143.142.262.214.358.214.095 0 .214-.072.357-.214l9.928-12.786z" />
        </svg>&nbsp;<span class="form-label mt-x-sm"><i>Success</i></span></label>

    } else {
      return <label class="text-primary text-inline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd">
            <path fill="#F05454" d="M4.643 4.714C7.786 1.571 11.57 0 16 0c4.429 0 8.202 1.56 11.321 4.679C30.441 7.798 32 11.57 32 16c0 4.429-1.56 8.202-4.679 11.321C24.202 30.441 20.43 32 16 32c-4.429 0-8.202-1.56-11.321-4.679C1.559 24.202 0 20.43 0 16c0-4.429 1.548-8.19 4.643-11.286z" />
            <path fill="#FFF" d="M13.392 16.497l-4.77-4.753a.64.64 0 0 1-.115-.24.64.64 0 0 1 .053-.26l2.085-2.116c.105-.07.2-.11.284-.12.112-.013.2.004.262.053l1.762 1.755c.018.035.042.074.07.117L16 13.898l2.977-2.965c.028-.043.052-.082.07-.117l1.762-1.755c.063-.049.15-.066.262-.053.084.01.179.05.284.12l2.085 2.116a.64.64 0 0 1 .053.26.64.64 0 0 1-.115.24l-4.77 4.753 4.52 4.502a.537.537 0 0 1 .037.721l-1.647 2.015c-.123.156-.255.243-.395.26-.084.01-.22-.058-.408-.204L16 19.095l-4.715 4.696c-.188.146-.324.214-.408.204-.14-.017-.272-.104-.395-.26L8.835 21.72a.537.537 0 0 1 .037-.72l4.52-4.503z" />
          </g>
        </svg>&nbsp;<span class="form-label mt-x-sm"><i>Failed</i></span></label>

    }
  }

  render() {

    return [
      <div class="mozo-box">
        <h3>Send Complete</h3>
      </div>,
      <div class="mozo-box text-center">
        <div class="form-group">
          <svg xmlns="http://www.w3.org/2000/svg" width="165" height="60" viewBox="0 0 165 100">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(65)">
                <circle cx="50" cy="50" r="50" fill="#5A9CF5" fill-rule="nonzero" />
                <path fill="#FFF" d="M74.76 34.133c.16.323.24.564.24.726 0 .16-.08.403-.24.725l-29.928 38.69c-.481.484-.842.726-1.082.726-.4 0-.801-.202-1.202-.605L25.601 57.952l-.36-.363c-.16-.322-.241-.564-.241-.725 0-.08.08-.282.24-.605l.24-.242c2.244-2.418 4.007-4.272 5.29-5.561.48-.484.8-.726.96-.726.321 0 .722.242 1.203.726l9.615 9.43 24.039-31.073c.16-.161.4-.242.72-.242.241 0 .522.081.842.242l6.61 5.32z" />
              </g>
              <g fill="#5A9CF5" fill-rule="nonzero" transform="translate(0 33)">
                <rect width="59" height="5" rx="2.5" />
                <rect width="14" height="5" x="45" y="30" rx="2.5" />
                <rect width="29" height="5" x="26" y="15" rx="2.5" />
              </g>
            </g>
          </svg>
        </div>
        <div class="form-group mt-md">
          <label>Your TX has been broadcast.</label>
          <label class="text-address mt-md">TX hash: <span class="text-primary">{this.hash}</span></label>
        </div>
        {/* <div class="form-group">
          <input type="text" value={this.toAddressState} onInput={(e) => this.handleChangeAddress(e)} />
          <label>Receiver Address</label>
        </div>
        <div class="form-group">
          <input type="text" value={this.amountState} />
          <label>Amount</label>
        </div> */}
        <div class="form-action mt-lg">
          {this.renderStatus(this.status)}
          {/* <input class="mozo-btn w-xx-lg" type="button" value="View detail" onClick={(e) => this.transferMozo(e)} /> */}
        </div>
      </div>]
  }
}