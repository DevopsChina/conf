var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '@material/mwc-button';
import { customElement, html, internalProperty } from 'lit-element';
import { ReduxMixin } from '../mixins/redux-mixin';
import { dialogsActions } from '../redux/actions';
import { DIALOGS } from '../redux/constants';
import { ThemedElement } from './themed-element';
let AuthRequired = class AuthRequired extends ReduxMixin(ThemedElement) {
    constructor() {
        super(...arguments);
        this.signedIn = false;
    }
    render() {
        return html `
      <div class="container">
        <mwc-button
          label="{$ signIn $}"
          @click="${() => this.signIn()}"
          ?hidden="${this.signedIn}"
          dense
        ></mwc-button>
        <slot name="prompt" ?hidden="${this.signedIn}"></slot>
        <slot ?hidden="${!this.signedIn}"></slot>
      </div>
    `;
    }
    stateChanged(state) {
        this.signedIn = state.user.signedIn;
    }
    signIn() {
        dialogsActions.openDialog(DIALOGS.SIGNIN);
    }
};
__decorate([
    internalProperty()
], AuthRequired.prototype, "signedIn", void 0);
AuthRequired = __decorate([
    customElement('auth-required')
], AuthRequired);
export { AuthRequired };
//# sourceMappingURL=auth-required.js.map