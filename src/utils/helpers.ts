//import { Element } from '@stencil/core';
import 'ionicons';
import '@ionic/core';
import protocolCheck from 'custom-protocol-detection'
import { Services } from "../services"
//import SimpleBar from 'simplebar';
const uri = 'solosigner:'

async function _checkModalAvailable() {
  const body = document.querySelector('body');
  let mozoModal = document.querySelector('mozo-modal');

  if (body) {
    await body.componentOnReady();

    if (!mozoModal) {
      mozoModal = document.createElement('mozo-modal');
    }
    await body.appendChild(mozoModal);
  }
  return mozoModal
}

function CloseModal() {
  let mozoModal = document.querySelector('mozo-modal');

  if (mozoModal) {
    mozoModal.closeModal()
  }
}

function OpenWallet(callBack) {
  protocolCheck(uri,
    async () => {
      await InstallWalletMessage()
    },
    async () => {
      callBack()
    },
    () => {
      console.log('This browser does not provide a method to detect protocol support')
    })
}



async function AccessWalletFail() {

  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = await mozoModal.querySelector('modal-content');
    modalContent.innerHTML = `
    <div class="mozo-form text-center">
    <div class="form-group">
      <svg xmlns="http://www.w3.org/2000/svg" width="159" height="80" viewBox="0 0 159 40">
        <path fill="#141A22" fill-rule="evenodd" d="M28.474 0h8.304l-.27 40h-8.034V14.931l-9.895 12.544v.483l-.19-.241-.19.241v-.483L8.303 14.931V40H.27L0 0h8.304L18.39 13.828 28.474 0zm34.644 39.766c-10.888 0-19.715-8.902-19.715-19.883S52.23 0 63.118 0c10.89 0 19.716 8.902 19.716 19.883 0 10.98-8.827 19.883-19.716 19.883zm.169-9.177c5.77 0 10.448-4.717 10.448-10.536 0-5.82-4.678-10.536-10.448-10.536-5.77 0-10.448 4.717-10.448 10.536s4.678 10.536 10.448 10.536zm75.997 9.177c-10.888 0-19.715-8.902-19.715-19.883S128.396 0 139.284 0C150.174 0 159 8.902 159 19.883c0 10.98-8.827 19.883-19.716 19.883zm.169-9.177c5.77 0 10.448-4.717 10.448-10.536 0-5.82-4.678-10.536-10.448-10.536-5.77 0-10.448 4.717-10.448 10.536s4.678 10.536 10.448 10.536zM87.626 1.606h29.633L101.937 30.11h14.673v8.673H86.563l15.711-28.316H87.708l-.082-8.862z" />
      </svg>
    </div>
    <h5>Login required</h5>
    <div class="form-group">
      You need to login to your Mozo account before using this feature
    </div>
    <div class="form-action">
      <input id="accessMOZOWallet" class="mozo-btn w-xx-lg" type="button" value="Login to Mozo Account" />
    </div>
  </div>
      `;

    // listen for close event
    const button = mozoModal.querySelector('#accessMOZOWallet');
    button.addEventListener('click', () => {
      button.setAttribute("disabled", "disabled")
      OpenWallet(() => {
        mozoModal.closeModal()
        button.removeAttribute("disabled")
      })
    });
    await mozoModal.componentOnReady()
    await mozoModal.openModal()
  }
}

async function InstallWalletMessage() {

  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = await mozoModal.querySelector('modal-content');
    modalContent.innerHTML = `
    <div class="mozo-form text-center">
    <div class="form-group">
      <svg xmlns="http://www.w3.org/2000/svg" width="159" height="80" viewBox="0 0 159 40">
        <path fill="#141A22" fill-rule="evenodd" d="M28.474 0h8.304l-.27 40h-8.034V14.931l-9.895 12.544v.483l-.19-.241-.19.241v-.483L8.303 14.931V40H.27L0 0h8.304L18.39 13.828 28.474 0zm34.644 39.766c-10.888 0-19.715-8.902-19.715-19.883S52.23 0 63.118 0c10.89 0 19.716 8.902 19.716 19.883 0 10.98-8.827 19.883-19.716 19.883zm.169-9.177c5.77 0 10.448-4.717 10.448-10.536 0-5.82-4.678-10.536-10.448-10.536-5.77 0-10.448 4.717-10.448 10.536s4.678 10.536 10.448 10.536zm75.997 9.177c-10.888 0-19.715-8.902-19.715-19.883S128.396 0 139.284 0C150.174 0 159 8.902 159 19.883c0 10.98-8.827 19.883-19.716 19.883zm.169-9.177c5.77 0 10.448-4.717 10.448-10.536 0-5.82-4.678-10.536-10.448-10.536-5.77 0-10.448 4.717-10.448 10.536s4.678 10.536 10.448 10.536zM87.626 1.606h29.633L101.937 30.11h14.673v8.673H86.563l15.711-28.316H87.708l-.082-8.862z" />
      </svg>
    </div>
    <h5>Download Mozo Wallet</h5>
    <div class="form-group">
      You need to download Mozo Wallet first
    </div>
    <div class="form-action">
      <input id="downloadWallet" class="mozo-btn w-xx-lg" type="button" value="Download Mozo Wallet" />
    </div>
  </div>
      `;

    // listen for close event
    const button = mozoModal.querySelector('#downloadWallet');
    button.addEventListener('click', () => {
      button.setAttribute("disabled", "disabled")
      window.open("https://google.com", "_blank");
      mozoModal.closeModal();
    });
    await mozoModal.componentOnReady()
    await mozoModal.openModal()
  }
}

async function ShowTransactionForm(data: any) {

  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = mozoModal.querySelector('modal-content');


    modalContent.innerHTML = `
      <mozo-transfer-form amount=${data.amount || 0} to-address=${data.toAddress || ""}>
      
      </mozo-transfer-form>
      `;

    // listen for close event
    // const button = mozoModal.querySelector('button');
    // button.addEventListener('click', () => {
    //   mozoModal.closeModal();
    await mozoModal.componentOnReady()

    // let scrollEl = mozoModal.querySelector('scroll-bar')

    // if (scrollEl) {
    //   var el = new SimpleBar(scrollEl);
    //   el.getScrollElement().addEventListener('scroll', function () {
    //     console.log("aaaa")
    //   });
    // }


    mozoModal.openModal()
  }
}

async function ShowTransferSuccess(hash: string) {
  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = mozoModal.querySelector('modal-content');


    modalContent.innerHTML = `
      <mozo-message-transfer-success hash=${hash}>
      </mozo-message-transfer-success>
      `;

    // listen for close event
    // const button = mozoModal.querySelector('button');
    // button.addEventListener('click', () => {
    //   mozoModal.closeModal();
    // });
    await mozoModal.componentOnReady()
    mozoModal.openModal()
  }
}

async function ShowTransferFail(message: string = "Server error") {
  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = mozoModal.querySelector('modal-content');


    modalContent.innerHTML = `
      <mozo-message-transfer-fail message="${message}">
      </mozo-message-transfer-fail>
      `;

    // listen for close event
    // const button = mozoModal.querySelector('button');
    // button.addEventListener('click', () => {
    //   mozoModal.closeModal();
    // });
    await mozoModal.componentOnReady()
    mozoModal.openModal()
  }
}

async function ShowTransactionWallet(data: any) {
  return await Services.sendTransaction(data)
}

async function PresentPopover(ev, options = null) {
  let popoverController = document.querySelector('ion-popover-controller');
  const body = document.querySelector('body');

  if (body) {
    await body.componentOnReady();

    if (!popoverController) {
      popoverController = document.createElement('ion-popover-controller');
    }
    await body.appendChild(popoverController);
  }

  await popoverController.componentOnReady();

  const popover = await popoverController.create({
    component: options !== null && options.component? options.component : "mozo-address-book",
    translucent: true,
    event: ev,
    showBackdrop: false,
    cssClass: options !== null && options.className ? options.className : ""
  });

  //popover.setAttribute("translucent", "true")

  return await popover.present();
}

async function TransactionDetail(data) {

  let mozoModal = await _checkModalAvailable();

  if (mozoModal) {
    await mozoModal.componentOnReady()
    let modalContent = await mozoModal.querySelector('modal-content');
  //   modalContent.innerHTML = `
  //   <div class="mozo-box">
  //     <h5>Transaction Detail</h5>
  //   </div>
  //   <div class="mozo-box text-center mt-lg line-sm">
  //   <h5 class="text-primary">Sent</h5>
  //   <label class="form-label">Jan 15, 2018 - 6:00 PM</label>
  //   <div class="form-group mt-md">
  //     <label class="form-label">From Mozo Offchain Wallet</label><br />
  //     <label class="text-primary text-inline">
  //       <svg style="margin-top: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24">
  //         <g fill="none" fill-rule="evenodd">
  //           <circle cx="12" cy="12" r="12" fill="#5A9CF5" />
  //           <path fill="#FFF" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".9" d="M14.582 7.04c.794-.13 2.875-.114 3.743 2.746.528 1.742.33 3.587 0 5.252h.505c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176h-1.903a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.53c.26-.85.256-2.844-.107-4.167-.304-1.315-1.26-2.383-2.454-2.383-.587 0-2.39.077-2.713 4.584v.24h-.366v-.24c-.323-4.507-2.126-4.584-2.713-4.584-1.194 0-2.15 1.068-2.454 2.383-.363 1.323-.368 3.316-.107 4.167h.53c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176H5.17a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.505c-.33-1.665-.528-3.51 0-5.252.868-2.86 2.949-2.876 3.743-2.745 1.454.302 2.204 1.34 2.582 2.555.378-1.216 1.128-2.253 2.582-2.555z" />
  //         </g>
  //       </svg>&nbsp;<span>${data.amount}</span></label>
  //   </div>
  //   <div class="form-group mt-md">
  //     <label class="form-label">Receiver Address</label><br />
  //     <label>${data.addressTo}</label>
  //   </div>
  //   <div class="form-group mt-md">
  //     <label class="form-label">Receiver Address</label><br />
  //     <label class="text-primary text-inline">
  //       <svg style="margin-top: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24">
  //         <g fill="none" fill-rule="evenodd">
  //           <circle cx="12" cy="12" r="12" fill="#5A9CF5" />
  //           <path fill="#FFF" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".9" d="M14.582 7.04c.794-.13 2.875-.114 3.743 2.746.528 1.742.33 3.587 0 5.252h.505c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176h-1.903a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.53c.26-.85.256-2.844-.107-4.167-.304-1.315-1.26-2.383-2.454-2.383-.587 0-2.39.077-2.713 4.584v.24h-.366v-.24c-.323-4.507-2.126-4.584-2.713-4.584-1.194 0-2.15 1.068-2.454 2.383-.363 1.323-.368 3.316-.107 4.167h.53c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176H5.17a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.505c-.33-1.665-.528-3.51 0-5.252.868-2.86 2.949-2.876 3.743-2.745 1.454.302 2.204 1.34 2.582 2.555.378-1.216 1.128-2.253 2.582-2.555z" />
  //         </g>
  //       </svg>&nbsp;<span>${data.amount}</span></label>
  //   </div>
  // </div>
  //     `;
  modalContent.innerHTML = `
    <div class="mozo-box">
      <h5>Transaction Detail</h5>
    </div>
    <div class="mozo-box text-center mt-lg line-sm">
    <h5 class="text-primary">${data.status}</h5>
    <label class="form-label"><i>${data.time}</i></label>
    
    <div class="form-group mt-md">
      <label class="form-label">${data.status.toLowerCase() == "sent" ? "Receiver Address": "Sender Address"} </label><br />
      <label>${data.status.toLowerCase() == "sent" ? data.addressTo : data.addressFrom}</label>
    </div>
    <div class="form-group mt-md">
      <label class="form-label">Amount</label><br />
      <label class="text-primary text-inline">
        <svg style="margin-top: 0;" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <circle cx="12" cy="12" r="12" fill="#5A9CF5" />
            <path fill="#FFF" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width=".9" d="M14.582 7.04c.794-.13 2.875-.114 3.743 2.746.528 1.742.33 3.587 0 5.252h.505c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176h-1.903a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.53c.26-.85.256-2.844-.107-4.167-.304-1.315-1.26-2.383-2.454-2.383-.587 0-2.39.077-2.713 4.584v.24h-.366v-.24c-.323-4.507-2.126-4.584-2.713-4.584-1.194 0-2.15 1.068-2.454 2.383-.363 1.323-.368 3.316-.107 4.167h.53c.094 0 .17.079.17.176v.61a.173.173 0 0 1-.17.176H5.17a.173.173 0 0 1-.17-.175v-.611c0-.097.076-.176.17-.176h.505c-.33-1.665-.528-3.51 0-5.252.868-2.86 2.949-2.876 3.743-2.745 1.454.302 2.204 1.34 2.582 2.555.378-1.216 1.128-2.253 2.582-2.555z" />
          </g>
        </svg>&nbsp;<span>${data.amount}</span></label>
    </div>
  </div>
      `;
    await mozoModal.componentOnReady()
    await mozoModal.openModal()
  }
}

export const ShowMessage = {
  closeModal: CloseModal,
  accessWalletFail: AccessWalletFail,
  showTransactionForm: ShowTransactionForm,
  showTransactionWallet: ShowTransactionWallet,
  showTransferSuccess: ShowTransferSuccess,
  showTransferFail: ShowTransferFail,
  openWallet: OpenWallet,
  presentPopover: PresentPopover,
  transactionDetail: TransactionDetail
}