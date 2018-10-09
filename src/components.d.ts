/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'st-popup-menu';
import '@ionic/core';
import 'ionicons';


declare global {

  namespace StencilComponents {
    interface MozoAddressBook {
      'coinType': string;
    }
  }

  interface HTMLMozoAddressBookElement extends StencilComponents.MozoAddressBook, HTMLStencilElement {}

  var HTMLMozoAddressBookElement: {
    prototype: HTMLMozoAddressBookElement;
    new (): HTMLMozoAddressBookElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-address-book': HTMLMozoAddressBookElement;
  }
  interface ElementTagNameMap {
    'mozo-address-book': HTMLMozoAddressBookElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-address-book': JSXElements.MozoAddressBookAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoAddressBookAttributes extends HTMLAttributes {
      'coinType'?: string;
      'onSelectAddressBook'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoDropdown {
      'name': string;
    }
  }

  interface HTMLMozoDropdownElement extends StencilComponents.MozoDropdown, HTMLStencilElement {}

  var HTMLMozoDropdownElement: {
    prototype: HTMLMozoDropdownElement;
    new (): HTMLMozoDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-dropdown': HTMLMozoDropdownElement;
  }
  interface ElementTagNameMap {
    'mozo-dropdown': HTMLMozoDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-dropdown': JSXElements.MozoDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoDropdownAttributes extends HTMLAttributes {
      'name'?: string;
      'onOnToggle'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoHistory {
      'coinType': string;
      'maxHeight': string;
    }
  }

  interface HTMLMozoHistoryElement extends StencilComponents.MozoHistory, HTMLStencilElement {}

  var HTMLMozoHistoryElement: {
    prototype: HTMLMozoHistoryElement;
    new (): HTMLMozoHistoryElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-history': HTMLMozoHistoryElement;
  }
  interface ElementTagNameMap {
    'mozo-history': HTMLMozoHistoryElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-history': JSXElements.MozoHistoryAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoHistoryAttributes extends HTMLAttributes {
      'coinType'?: string;
      'maxHeight'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoMessagesAccessWallet {
      'call': () => void;
    }
  }

  interface HTMLMozoMessagesAccessWalletElement extends StencilComponents.MozoMessagesAccessWallet, HTMLStencilElement {}

  var HTMLMozoMessagesAccessWalletElement: {
    prototype: HTMLMozoMessagesAccessWalletElement;
    new (): HTMLMozoMessagesAccessWalletElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-messages-access-wallet': HTMLMozoMessagesAccessWalletElement;
  }
  interface ElementTagNameMap {
    'mozo-messages-access-wallet': HTMLMozoMessagesAccessWalletElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-messages-access-wallet': JSXElements.MozoMessagesAccessWalletAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoMessagesAccessWalletAttributes extends HTMLAttributes {
      'call'?: () => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoMessageTransferFail {
      'message': string;
      'transferMozo': (e: any) => Promise<void>;
    }
  }

  interface HTMLMozoMessageTransferFailElement extends StencilComponents.MozoMessageTransferFail, HTMLStencilElement {}

  var HTMLMozoMessageTransferFailElement: {
    prototype: HTMLMozoMessageTransferFailElement;
    new (): HTMLMozoMessageTransferFailElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-message-transfer-fail': HTMLMozoMessageTransferFailElement;
  }
  interface ElementTagNameMap {
    'mozo-message-transfer-fail': HTMLMozoMessageTransferFailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-message-transfer-fail': JSXElements.MozoMessageTransferFailAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoMessageTransferFailAttributes extends HTMLAttributes {
      'message'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoMessageTransferSuccess {
      'hash': string;
      'transferMozo': (e: any) => Promise<void>;
    }
  }

  interface HTMLMozoMessageTransferSuccessElement extends StencilComponents.MozoMessageTransferSuccess, HTMLStencilElement {}

  var HTMLMozoMessageTransferSuccessElement: {
    prototype: HTMLMozoMessageTransferSuccessElement;
    new (): HTMLMozoMessageTransferSuccessElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-message-transfer-success': HTMLMozoMessageTransferSuccessElement;
  }
  interface ElementTagNameMap {
    'mozo-message-transfer-success': HTMLMozoMessageTransferSuccessElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-message-transfer-success': JSXElements.MozoMessageTransferSuccessAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoMessageTransferSuccessAttributes extends HTMLAttributes {
      'hash'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoModal {
      'closeModal': () => void;
      'content': HTMLElement;
      'createModal': (modalContent: any) => Promise<void>;
      'openModal': () => void;
      'title': string;
    }
  }

  interface HTMLMozoModalElement extends StencilComponents.MozoModal, HTMLStencilElement {}

  var HTMLMozoModalElement: {
    prototype: HTMLMozoModalElement;
    new (): HTMLMozoModalElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-modal': HTMLMozoModalElement;
  }
  interface ElementTagNameMap {
    'mozo-modal': HTMLMozoModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-modal': JSXElements.MozoModalAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoModalAttributes extends HTMLAttributes {
      'content'?: HTMLElement;
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoOffchain {
      'amount': number;
      'showQrCode': boolean;
      'toAddress': string;
      'transferMozo': (e: any) => Promise<void>;
    }
  }

  interface HTMLMozoOffchainElement extends StencilComponents.MozoOffchain, HTMLStencilElement {}

  var HTMLMozoOffchainElement: {
    prototype: HTMLMozoOffchainElement;
    new (): HTMLMozoOffchainElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-offchain': HTMLMozoOffchainElement;
  }
  interface ElementTagNameMap {
    'mozo-offchain': HTMLMozoOffchainElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-offchain': JSXElements.MozoOffchainAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoOffchainAttributes extends HTMLAttributes {
      'amount'?: number;
      'showQrCode'?: boolean;
      'toAddress'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoScrollContainer {
      'maxHeight': string;
    }
  }

  interface HTMLMozoScrollContainerElement extends StencilComponents.MozoScrollContainer, HTMLStencilElement {}

  var HTMLMozoScrollContainerElement: {
    prototype: HTMLMozoScrollContainerElement;
    new (): HTMLMozoScrollContainerElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-scroll-container': HTMLMozoScrollContainerElement;
  }
  interface ElementTagNameMap {
    'mozo-scroll-container': HTMLMozoScrollContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-scroll-container': JSXElements.MozoScrollContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoScrollContainerAttributes extends HTMLAttributes {
      'maxHeight'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoTransferForm {
      'amount': number;
      'toAddress': string;
      'transferMozo': (e: any) => Promise<void>;
    }
  }

  interface HTMLMozoTransferFormElement extends StencilComponents.MozoTransferForm, HTMLStencilElement {}

  var HTMLMozoTransferFormElement: {
    prototype: HTMLMozoTransferFormElement;
    new (): HTMLMozoTransferFormElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-transfer-form': HTMLMozoTransferFormElement;
  }
  interface ElementTagNameMap {
    'mozo-transfer-form': HTMLMozoTransferFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-transfer-form': JSXElements.MozoTransferFormAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoTransferFormAttributes extends HTMLAttributes {
      'amount'?: number;
      'toAddress'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MozoTransfer {
      'amount': number;
      'toAddress': string;
      'transferMozo': (e: any) => Promise<void>;
      'value': string;
    }
  }

  interface HTMLMozoTransferElement extends StencilComponents.MozoTransfer, HTMLStencilElement {}

  var HTMLMozoTransferElement: {
    prototype: HTMLMozoTransferElement;
    new (): HTMLMozoTransferElement;
  };
  interface HTMLElementTagNameMap {
    'mozo-transfer': HTMLMozoTransferElement;
  }
  interface ElementTagNameMap {
    'mozo-transfer': HTMLMozoTransferElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'mozo-transfer': JSXElements.MozoTransferAttributes;
    }
  }
  namespace JSXElements {
    export interface MozoTransferAttributes extends HTMLAttributes {
      'amount'?: number;
      'toAddress'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyComponent {
      'first': string;
      'last': string;
    }
  }

  interface HTMLMyComponentElement extends StencilComponents.MyComponent, HTMLStencilElement {}

  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-component': JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface StAutoComplete {
      'backgroundColor': string;
      'borderColor': string;
      'borderWidth': string;
      'delay': number;
      'target': string;
      'trigger': string;
    }
  }

  interface HTMLStAutoCompleteElement extends StencilComponents.StAutoComplete, HTMLStencilElement {}

  var HTMLStAutoCompleteElement: {
    prototype: HTMLStAutoCompleteElement;
    new (): HTMLStAutoCompleteElement;
  };
  interface HTMLElementTagNameMap {
    'st-auto-complete': HTMLStAutoCompleteElement;
  }
  interface ElementTagNameMap {
    'st-auto-complete': HTMLStAutoCompleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'st-auto-complete': JSXElements.StAutoCompleteAttributes;
    }
  }
  namespace JSXElements {
    export interface StAutoCompleteAttributes extends HTMLAttributes {
      'backgroundColor'?: string;
      'borderColor'?: string;
      'borderWidth'?: string;
      'delay'?: number;
      'onHide'?: (event: CustomEvent) => void;
      'onShow'?: (event: CustomEvent) => void;
      'target'?: string;
      'trigger'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;