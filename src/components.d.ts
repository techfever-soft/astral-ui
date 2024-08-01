/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AstralThemeColor } from "./utils/types/theme.types";
import { AstralThemeColor as AstralThemeColor1 } from "./components";
export { AstralThemeColor } from "./utils/types/theme.types";
export { AstralThemeColor as AstralThemeColor1 } from "./components";
export namespace Components {
    interface AstralAccordion {
        "color": AstralThemeColor;
        "multiple": boolean;
        "openedIndex": number;
    }
    interface AstralAccordionPanel {
        "index": number;
        "opened": boolean;
        "raised": boolean;
        "stroked": boolean;
    }
    interface AstralBreadcrumb {
        "color": AstralThemeColor1;
        "separator": string;
    }
    interface AstralBreadcrumbItem {
        "active": boolean;
        "color"?: AstralThemeColor1;
        "disabled": boolean;
        "href"?: string;
        "separatorContent": string;
    }
    interface AstralButton {
        "color": AstralThemeColor;
        "disabled": boolean;
        "extendedfab": boolean;
        "fab": boolean;
        "raised": boolean;
        "stroked": boolean;
    }
    interface AstralCheckbox {
        "checked": boolean;
        "color": AstralThemeColor1;
        "indeterminate": boolean;
    }
    interface AstralDivider {
    }
    interface AstralIcon {
        "color": AstralThemeColor1;
        "fontSet": 'material' | 'font-awesome';
        "name": string;
        "size": string;
    }
    interface AstralModal {
        "modalTitle": string;
    }
    interface AstralPane {
        "raised": boolean;
        "stroked": boolean;
    }
}
declare global {
    interface HTMLAstralAccordionElement extends Components.AstralAccordion, HTMLStencilElement {
    }
    var HTMLAstralAccordionElement: {
        prototype: HTMLAstralAccordionElement;
        new (): HTMLAstralAccordionElement;
    };
    interface HTMLAstralAccordionPanelElement extends Components.AstralAccordionPanel, HTMLStencilElement {
    }
    var HTMLAstralAccordionPanelElement: {
        prototype: HTMLAstralAccordionPanelElement;
        new (): HTMLAstralAccordionPanelElement;
    };
    interface HTMLAstralBreadcrumbElement extends Components.AstralBreadcrumb, HTMLStencilElement {
    }
    var HTMLAstralBreadcrumbElement: {
        prototype: HTMLAstralBreadcrumbElement;
        new (): HTMLAstralBreadcrumbElement;
    };
    interface HTMLAstralBreadcrumbItemElement extends Components.AstralBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLAstralBreadcrumbItemElement: {
        prototype: HTMLAstralBreadcrumbItemElement;
        new (): HTMLAstralBreadcrumbItemElement;
    };
    interface HTMLAstralButtonElement extends Components.AstralButton, HTMLStencilElement {
    }
    var HTMLAstralButtonElement: {
        prototype: HTMLAstralButtonElement;
        new (): HTMLAstralButtonElement;
    };
    interface HTMLAstralCheckboxElement extends Components.AstralCheckbox, HTMLStencilElement {
    }
    var HTMLAstralCheckboxElement: {
        prototype: HTMLAstralCheckboxElement;
        new (): HTMLAstralCheckboxElement;
    };
    interface HTMLAstralDividerElement extends Components.AstralDivider, HTMLStencilElement {
    }
    var HTMLAstralDividerElement: {
        prototype: HTMLAstralDividerElement;
        new (): HTMLAstralDividerElement;
    };
    interface HTMLAstralIconElement extends Components.AstralIcon, HTMLStencilElement {
    }
    var HTMLAstralIconElement: {
        prototype: HTMLAstralIconElement;
        new (): HTMLAstralIconElement;
    };
    interface HTMLAstralModalElement extends Components.AstralModal, HTMLStencilElement {
    }
    var HTMLAstralModalElement: {
        prototype: HTMLAstralModalElement;
        new (): HTMLAstralModalElement;
    };
    interface HTMLAstralPaneElement extends Components.AstralPane, HTMLStencilElement {
    }
    var HTMLAstralPaneElement: {
        prototype: HTMLAstralPaneElement;
        new (): HTMLAstralPaneElement;
    };
    interface HTMLElementTagNameMap {
        "astral-accordion": HTMLAstralAccordionElement;
        "astral-accordion-panel": HTMLAstralAccordionPanelElement;
        "astral-breadcrumb": HTMLAstralBreadcrumbElement;
        "astral-breadcrumb-item": HTMLAstralBreadcrumbItemElement;
        "astral-button": HTMLAstralButtonElement;
        "astral-checkbox": HTMLAstralCheckboxElement;
        "astral-divider": HTMLAstralDividerElement;
        "astral-icon": HTMLAstralIconElement;
        "astral-modal": HTMLAstralModalElement;
        "astral-pane": HTMLAstralPaneElement;
    }
}
declare namespace LocalJSX {
    interface AstralAccordion {
        "color"?: AstralThemeColor;
        "multiple"?: boolean;
        "openedIndex"?: number;
    }
    interface AstralAccordionPanel {
        "index"?: number;
        "opened"?: boolean;
        "raised"?: boolean;
        "stroked"?: boolean;
    }
    interface AstralBreadcrumb {
        "color"?: AstralThemeColor1;
        "separator"?: string;
    }
    interface AstralBreadcrumbItem {
        "active"?: boolean;
        "color"?: AstralThemeColor1;
        "disabled"?: boolean;
        "href"?: string;
        "separatorContent"?: string;
    }
    interface AstralButton {
        "color"?: AstralThemeColor;
        "disabled"?: boolean;
        "extendedfab"?: boolean;
        "fab"?: boolean;
        "raised"?: boolean;
        "stroked"?: boolean;
    }
    interface AstralCheckbox {
        "checked"?: boolean;
        "color"?: AstralThemeColor1;
        "indeterminate"?: boolean;
    }
    interface AstralDivider {
    }
    interface AstralIcon {
        "color"?: AstralThemeColor1;
        "fontSet"?: 'material' | 'font-awesome';
        "name"?: string;
        "size"?: string;
    }
    interface AstralModal {
        "modalTitle"?: string;
    }
    interface AstralPane {
        "raised"?: boolean;
        "stroked"?: boolean;
    }
    interface IntrinsicElements {
        "astral-accordion": AstralAccordion;
        "astral-accordion-panel": AstralAccordionPanel;
        "astral-breadcrumb": AstralBreadcrumb;
        "astral-breadcrumb-item": AstralBreadcrumbItem;
        "astral-button": AstralButton;
        "astral-checkbox": AstralCheckbox;
        "astral-divider": AstralDivider;
        "astral-icon": AstralIcon;
        "astral-modal": AstralModal;
        "astral-pane": AstralPane;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "astral-accordion": LocalJSX.AstralAccordion & JSXBase.HTMLAttributes<HTMLAstralAccordionElement>;
            "astral-accordion-panel": LocalJSX.AstralAccordionPanel & JSXBase.HTMLAttributes<HTMLAstralAccordionPanelElement>;
            "astral-breadcrumb": LocalJSX.AstralBreadcrumb & JSXBase.HTMLAttributes<HTMLAstralBreadcrumbElement>;
            "astral-breadcrumb-item": LocalJSX.AstralBreadcrumbItem & JSXBase.HTMLAttributes<HTMLAstralBreadcrumbItemElement>;
            "astral-button": LocalJSX.AstralButton & JSXBase.HTMLAttributes<HTMLAstralButtonElement>;
            "astral-checkbox": LocalJSX.AstralCheckbox & JSXBase.HTMLAttributes<HTMLAstralCheckboxElement>;
            "astral-divider": LocalJSX.AstralDivider & JSXBase.HTMLAttributes<HTMLAstralDividerElement>;
            "astral-icon": LocalJSX.AstralIcon & JSXBase.HTMLAttributes<HTMLAstralIconElement>;
            "astral-modal": LocalJSX.AstralModal & JSXBase.HTMLAttributes<HTMLAstralModalElement>;
            "astral-pane": LocalJSX.AstralPane & JSXBase.HTMLAttributes<HTMLAstralPaneElement>;
        }
    }
}
