import { render } from 'lit-html';
export const fixture = async (html) => {
    render(html, document.body);
    const element = document.body.firstElementChild;
    if (!element) {
        throw new Error('Component not rendered');
    }
    await element.updateComplete;
    if (!element.shadowRoot) {
        throw new Error('ShadowDOM not rendered');
    }
    const { shadowRoot } = element;
    if (shadowRoot.children.length !== 1) {
        if (shadowRoot.children.length === 0) {
            throw new Error('Component templates must render a child');
        }
        console.warn('Component templates should render a single child');
    }
    return {
        element,
        shadowRoot: shadowRoot,
        container: shadowRoot.firstElementChild,
    };
};
//# sourceMappingURL=fixtures.js.map