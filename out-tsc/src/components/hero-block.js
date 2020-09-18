var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '@power-elements/lazy-image';
import { css, customElement, html, property } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { uiActions } from '../redux/actions';
import { ThemedElement } from './themed-element';
let HeroBlock = class HeroBlock extends ThemedElement {
    constructor() {
        super(...arguments);
        this.active = false;
        this.backgroundImage = '';
        this.backgroundColor = '#fff';
        this.fontColor = '#000';
        this.hideLogo = false;
    }
    static get styles() {
        return [
            ...super.styles,
            css `
        :host {
          margin-top: -56px;
          display: block;
          border-bottom: 1px solid var(--divider-color);
        }

        .hero-block {
          height: 100%;
          position: relative;
          color: inherit;
        }

        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s;
          position: absolute;
        }

        .hero-overlay[show] {
          opacity: 1;
        }

        .hero-image {
          transition: background-color 0.3s;
          position: absolute;
          --lazy-image-fit: cover;
        }

        .container {
          padding: 0;
          width: 100%;
          height: unset;
          z-index: 0;
          position: unset;
        }

        .hero-content {
          padding: 80px 32px 32px;
          position: unset;
        }

        div ::slotted(.hero-title) {
          margin: 30px 0;
          font-size: 40px;
        }

        div ::slotted(.hero-description) {
          margin-bottom: 30px;
          max-width: 600px;
        }

        @media (min-width: 812px) {
          :host {
            margin-top: -64px;
          }

          .hero-content {
            padding-top: 120px;
            padding-bottom: 60px;
          }
        }
      `,
        ];
    }
    render() {
        return html `
      <div
        class="hero-block"
        style="${styleMap({ color: this.fontColor })}"
        layout
        start
        vertical
        center-justified
      >
        ${this.backgroundImage && this.image}
        <div class="hero-overlay" ?show="${!!this.backgroundImage}" fit></div>
        <div class="container">
          <div class="hero-content">
            <slot></slot>
          </div>
        </div>
      </div>
      <slot name="bottom"></slot>
    `;
    }
    get image() {
        return html `
      <lazy-image
        class="hero-image"
        src="${this.backgroundImage}"
        style="${styleMap({ backgroundColor: this.backgroundColor })}"
        fit
      ></lazy-image>
    `;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (this.active) {
            uiActions.setHeroSettings({
                backgroundImage: this.backgroundImage,
                backgroundColor: this.backgroundColor,
                fontColor: this.fontColor,
                hideLogo: this.hideLogo,
            });
        }
    }
};
__decorate([
    property({ type: Boolean })
], HeroBlock.prototype, "active", void 0);
__decorate([
    property({ type: String, attribute: 'background-image' })
], HeroBlock.prototype, "backgroundImage", void 0);
__decorate([
    property({ type: String, attribute: 'background-color' })
], HeroBlock.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String, attribute: 'font-color' })
], HeroBlock.prototype, "fontColor", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-logo' })
], HeroBlock.prototype, "hideLogo", void 0);
HeroBlock = __decorate([
    customElement('hero-block')
], HeroBlock);
export { HeroBlock };
//# sourceMappingURL=hero-block.js.map