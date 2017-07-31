// Type definitions for react-quill 1.0
// Project: https://github.com/zenoamaro/react-quill
// Definitions by: Barrokgl <https://github.com/Barrokgl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as QuillModule from 'quill';

type Editor = QuillModule.Quill;

export interface Range {
    index?: number;
    lenght?: number;
}

export interface Toolbar {
    container?: string;
    handlers?: {
        [key: string]: (value?: string) => void;
    }
}

export interface KeyboardContext {
    collapsed?: boolean;
    empty?: boolean;
    format?: string[] | { [key: string]: string | boolean };
    offset?: number;
    prefix?: RegExp;
    suffix?: RegExp;
}

export interface Keyboard {
    key?: string;
    shortKey?: boolean;
    shiftKey?: boolean;
    handler?: (range: Range, context: any) => void;
    context?: KeyboardContext;
}

export interface History {
    delay?: number;
    maxStack?: number;
    userOnly?: boolean;
}

type MatcherParam = [string | Node, (node: Node, delta: QuillModule.DeltaStatic) => QuillModule.DeltaStatic]
export interface Clipboard {
    matchers?: MatcherParam[];
    matchVisual?: boolean;
}

export interface Modules {
    toolbar?: string | string[] | string[][] | { [key: string]: string }[] | Toolbar | string[] | { [key: string]: string } | Toolbar[];
    keyboard?: {
        bindings: {
            [key: string]: Keyboard;
        };
    };
    history?: History;
    clipboard?: Clipboard;
    formula?: boolean;
    syntax?: boolean;
}

export interface ReactQuillProps {
    id?: string;
    className?: string;
    theme?: string;
    style?: {
        [key: string]: string;
    };
    readOnly?: boolean;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    modules?: Modules;
    formats?: string[];
    bounds?: string | Node;
    onChange?: (content?: string, delta?: QuillModule.DeltaStatic, source?: string, editor?: Editor) => void;
    onChangeSelection?: (range: Range, source: string, editor?: any) => void;
    onKeyPress?: (event: React.SyntheticEvent<any>) => void;
    onKeyDown?: (event: React.SyntheticEvent<any>) => void;
    onKeyUp?: (event: React.SyntheticEvent<any>) => void;
    children?: React.ReactElement<any>;
}

declare class ReactQuill extends React.Component<ReactQuillProps, any> { }

export interface UnprivilegedEditor {
    getLength(): number;
    getText(index?: number, lenght?: number): string;
    getContents(index?: number, length?: number): QuillModule.DeltaStatic;
    getSelection(focus?: boolean): QuillModule.RangeStatic;
    getBounds(index: number, length?: number): QuillModule.BoundsStatic;
}

export interface QuillMixinType {
    createEditor($el: string | Node, options?: QuillModule.QuillOptionsStatic): Editor;
    hookEditor(editor: Editor): void;
    unhookEditor(editor: Editor): void;
    setEditorReadOnly(editor: Editor, value: boolean): void;
    setEditorContents(editor: Editor, value: string): void;
    setEditorSelection(editor: Editor, range?: Range): void;
    makeUnprivilegedEditor(editor: Editor): UnprivilegedEditor;
}
export const QuillMixin: QuillMixinType;

export interface QuillToolbarProps {
    id?: string;
    className?: string;
    style?: {
        [key: string]: string;
    };
    items?: string | string[] | string[][] | { [key: string]: string }[] | Toolbar | string[] | { [key: string]: string } | Toolbar[];
}

export class QuilToolbal extends React.Component<QuillToolbarProps, any> { }

export default ReactQuill
