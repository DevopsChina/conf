var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, css } from 'lit-element';
import { uiActions } from '../redux/actions';
import { ThemedElement } from './themed-element';
let AboutBlock = class AboutBlock extends ThemedElement {
    static get styles() {
        return [
            ...super.styles,
            css `
        .container {
          padding-top: 64px;
        }

        .content {
          display: grid;
          grid-gap: 32px;
          grid-template-columns: 1fr;
        }

        .statistics-block {
          width: 100%;
          display: grid;
          grid-gap: 32px 16px;
          grid-template-columns: repeat(2, 1fr);
        }

        .numbers {
          font-size: 40px;
        }

        .numbers::after {
          content: '';
          display: block;
          height: 2px;
          width: 64px;
          background-color: var(--default-primary-color);
        }

        .label {
          margin-top: 4px;
        }

        @media (min-width: 640px) {
          .content {
            grid-gap: 64px;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          }

          .statistics-block {
            grid-gap: 32px;
          }

          .numbers {
            font-size: 56px;
          }
        }
      `,
        ];
    }
    render() {
        return html `
      <div class="container">
        <div class="content">
          <div>
            <h1 class="container-title">{$ aboutBlock.title $}</h1>
            <p>{$ aboutBlock.callToAction.featuredSessions.description $}</p>
            <a
              href="{$ aboutBlock.callToAction.featuredSessions.link $}"
              ga-on="click"
              ga-event-category="video"
              ga-event-action="watch"
              ga-event-label="about block - {$ aboutBlock.callToAction.featuredSessions.label $}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <paper-button class="animated icon-right">
                <span class="cta-label">{$ aboutBlock.callToAction.featuredSessions.label $}</span>
                <iron-icon icon="hoverboard:arrow-right-circle"></iron-icon>
              </paper-button>
            </a>

            <p>{$ aboutBlock.callToAction.howItWas.description $}</p>
            <paper-button
              class="animated icon-right"
              @click="${this.playVideo}"
              ga-on="click"
              ga-event-category="video"
              ga-event-action="watch"
              ga-event-label="about block - {$ aboutBlock.callToAction.howItWas.label $}"
            >
              <span>{$ aboutBlock.callToAction.howItWas.label $}</span>
              <iron-icon icon="hoverboard:arrow-right-circle"></iron-icon>
            </paper-button>
          </div>

          <div class="statistics-block">
            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.attendees.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.attendees.label $}</div>
            </div>

            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.days.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.days.label $}</div>
            </div>

            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.sessions.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.sessions.label $}</div>
            </div>

            <div class="item">
              <div class="numbers">{$ aboutBlock.statisticsBlock.tracks.number $}</div>
              <div class="label">{$ aboutBlock.statisticsBlock.tracks.label $}</div>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    playVideo() {
        uiActions.toggleVideoDialog({
            title: '{$  aboutBlock.callToAction.howItWas.title $}',
            youtubeId: '{$  aboutBlock.callToAction.howItWas.youtubeId $}',
            disableControls: true,
            opened: true,
        });
    }
};
AboutBlock = __decorate([
    customElement('about-block')
], AboutBlock);
export { AboutBlock };
//# sourceMappingURL=about-block.js.map