import { html, PolymerElement } from '@polymer/polymer';
class StickyElement extends PolymerElement {
    constructor() {
        super();
        this.active = false;
        this.waiting = false;
        this._onScroll = this._onScroll.bind(this);
    }
    static get template() {
        return html `
      <style>
        :host {
          display: block;
        }

        #content::before {
          position: absolute;
          right: 0;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 5px;
          content: '';
          transition: opacity 0.4s;
          pointer-events: none;
          opacity: 0;
          box-shadow: inset 0 5px 6px -3px rgba(0, 0, 0, 0.4);
          will-change: opacity;
        }

        .sticked {
          margin-top: 56px;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 9;
        }

        #content.sticked::before {
          opacity: 1;
        }

        @media (min-width: 812px) {
          .sticked {
            margin-top: 64px;
          }
        }
      </style>

      <div id="trigger"></div>
      <div id="content">
        <slot></slot>
      </div>
    `;
    }
    static get is() {
        return 'sticky-element';
    }
    static get properties() {
        return {
            active: {
                type: Boolean,
                observer: '_toggleListener',
            },
        };
    }
    _toggleListener(active) {
        if (active) {
            window.addEventListener('scroll', this._onScroll);
        }
        else {
            window.removeEventListener('scroll', this._onScroll);
            this.$.content.classList.remove('sticked');
        }
    }
    _onScroll() {
        if (this.waiting) {
            return;
        }
        this.waiting = true;
        clearTimeout(this.endScrollHandle);
        this._toggleSticky();
        setTimeout(() => {
            this.waiting = false;
        }, 100);
        this.endScrollHandle = setTimeout(() => {
            this._toggleSticky();
        }, 200);
    }
    _toggleSticky() {
        const scrollTop = this.$.trigger.getBoundingClientRect().top;
        if (scrollTop > 64 && this.$.content.classList.contains('sticked')) {
            this.$.content.classList.remove('sticked');
            this.dispatchEvent(new CustomEvent('element-sticked', {
                bubbles: true,
                composed: true,
                detail: {
                    sticked: false,
                },
            }));
        }
        else if (scrollTop <= 64 && !this.$.content.classList.contains('sticked')) {
            // TODO: Remove type cast
            this.style.height = `${this.$.content.offsetHeight}px`;
            this.$.content.classList.add('sticked');
            this.dispatchEvent(new CustomEvent('element-sticked', {
                bubbles: true,
                composed: true,
                detail: {
                    sticked: true,
                },
            }));
        }
    }
}
window.customElements.define(StickyElement.is, StickyElement);
//# sourceMappingURL=sticky-element.js.map