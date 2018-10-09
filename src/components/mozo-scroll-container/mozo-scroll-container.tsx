import { Component, Prop, Element } from '@stencil/core';
import SimpleBar from 'simplebar';

@Component({
  tag: 'mozo-scroll-container',
  styleUrl: 'mozo-scroll-container.scss',
  //shadow: true
})
export class MozoScrollContainer {
  @Prop() maxHeight: string = "300px"
  @Element() el!: HTMLElement;

  componentDidLoad() {
    

    var elScroll = new SimpleBar(this.el.querySelector(".scroll-bar-container"));
    elScroll.getScrollElement().addEventListener('scroll', function(e) {
      console.log(e.target)
    });
    
  }
  
  render() {
    return (
      <div class="scroll-bar-container" style={{maxHeight: this.maxHeight}} data-simplebar>
        <slot></slot>
      </div>)
  }
}
