import { Component, Event, EventEmitter, Prop, State, Element } from "@stencil/core";
import {ShowMessage} from "../../utils/helpers"

@Component({
  tag: 'mozo-dropdown',
  styleUrl: 'mozo-dropdown.scss'
})
export class MozoDropdown {

  public items: Array<any> = [
    {
      heading: 'Virtual DOM',
      description: 'A tree of custom objects representing a part of the DOM which can be acted upon quicker than manipulating the DOM itself'
    },
    {
      heading: 'Async rendering',
      description: 'Allows parts of a component state to be rendered asynchronously (I.e. via XHR)'
    },
    {
      heading: 'Reactive data-binding',
      description: 'Allows data binding to be implemented through binding a state variable to an onChange event which allows the state to be changed as the input value changes'
    },
    {
      heading: 'TypeScript',
      description: 'A superset of JavaScript providing strong typing and class based programming constructs'
    },
    {
      heading: 'JSX',
      description: 'JavaScriptXML allows DOM nodes to be built with HTML-like syntax'
    }
  ];

  @Prop() name: string;

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  @Element() el: HTMLElement;



  toggleComponent(): void {
    this.toggle = !this.toggle;
    // When the user click emit the toggle state value
    // A event can emit any type of value
    this.onToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div>
        {/* <h2 onClick={() => this.toggleComponent()}>{this.name} {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}</h2> */}
        <a onClick={(e) => {
         ShowMessage.presentPopover(e, {className: "widh-md", component: document.querySelector("mozo-address-book")})
        }}> <small class="text-inline"><svg class="small" xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12">
        <path fill="#5A9CF5" fill-rule="evenodd" d="M1.854 1.034C2.586.344 3.468 0 4.5 0c1.032 0 1.914.345 2.646 1.034.732.69 1.098 1.52 1.098 2.491 0 .972-.366 1.803-1.098 2.492-.732.69-1.614 1.034-2.646 1.034-1.032 0-1.914-.345-2.646-1.034-.732-.69-1.098-1.52-1.098-2.492 0-.971.366-1.802 1.098-2.491zM0 10.594c0-.747.414-1.405 1.242-1.975.828-.571 1.914-.856 3.258-.856 1.308 0 2.385.285 3.231.856C8.577 9.189 9 9.847 9 10.593c0 .373-.429.7-1.287.983C6.855 11.86 5.784 12 4.5 12c-1.344 0-2.43-.141-3.258-.424C.414 11.294 0 10.966 0 10.593z"/>
    </svg>&nbsp;{this.name}</small></a>
        
      </div>
    )
  }
}
