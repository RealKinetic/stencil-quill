/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface QuillComponent {
    'bounds': HTMLElement | string;
    'content': string;
    'customToolbarPosition': 'top' | 'bottom';
    'format': 'object' | 'html' | 'text' | 'json';
    'formats': string[];
    'modules': { [index: string]: Object };
    'placeholder': string;
    'readOnly': boolean;
    'scrollingContainer': HTMLElement | string;
    'strict': boolean;
    'styles': any;
    'theme': string;
  }
  interface QuillComponentAttributes extends StencilHTMLAttributes {
    'bounds'?: HTMLElement | string;
    'content'?: string;
    'customToolbarPosition'?: 'top' | 'bottom';
    'format'?: 'object' | 'html' | 'text' | 'json';
    'formats'?: string[];
    'modules'?: { [index: string]: Object };
    'onOnContentChanged'?: (event: CustomEvent<{
      editor: any
      content: any
      text: string
      html: string
      delta: any
      oldDelta: any
      source: string
    }>) => void;
    'onOnInitialised'?: (event: CustomEvent<any>) => void;
    'onOnSelectionChanged'?: (event: CustomEvent<{
      editor: any
      range: any
      oldRange: any
      source: string
    }>) => void;
    'placeholder'?: string;
    'readOnly'?: boolean;
    'scrollingContainer'?: HTMLElement | string;
    'strict'?: boolean;
    'styles'?: any;
    'theme'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'QuillComponent': Components.QuillComponent;
  }

  interface StencilIntrinsicElements {
    'quill-component': Components.QuillComponentAttributes;
  }


  interface HTMLQuillComponentElement extends Components.QuillComponent, HTMLStencilElement {}
  var HTMLQuillComponentElement: {
    prototype: HTMLQuillComponentElement;
    new (): HTMLQuillComponentElement;
  };

  interface HTMLElementTagNameMap {
    'quill-component': HTMLQuillComponentElement
  }

  interface ElementTagNameMap {
    'quill-component': HTMLQuillComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
