import { Component, Prop, Element, Event, EventEmitter} from '@stencil/core';
import SimpleBar from 'simplebar';

@Component({
  tag: 'mozo-scroll-container',
  styleUrl: 'mozo-scroll-container.scss',
  //shadow: true
})
export class MozoScrollContainer {
  @Prop() maxHeight: string = "300px"
  @Element() el!: HTMLElement;
  @Event() endBottomScrollHandle: EventEmitter;

  componentDidLoad() {
    const self = this
    var elScroll = new SimpleBar(this.el.querySelector(".scroll-bar-container"));
    
    elScroll.getScrollElement().addEventListener('scroll', function (e) {
      const scrollVerticalContainer = e.target.parentNode.querySelector(".simplebar-track.vertical")
      setTimeout(() => {
        const scrollVertical = scrollVerticalContainer.querySelector(".simplebar-scrollbar")
        const top = parseInt(scrollVertical.style.transform.replace(/[^0-9\-.,]/g, '').split(',')[1]) || 0

        const height = parseInt(scrollVertical.offsetHeight) || 0

        if (scrollVerticalContainer.offsetHeight - top - height <= 5) {
          self.endBottomScrollHandle.emit(e.target);
        }
          
      }, 100)
    });

  }

  render() {
    return (
      <div class="scroll-bar-container" style={{ maxHeight: this.maxHeight }} data-simplebar>
        <slot></slot>
      </div>)
  }
}
