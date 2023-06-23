import { CSSResult, LitElement, PropertyValueMap, TemplateResult, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

@customElement('my-list')
export class MyList extends LitElement  {
    public static get styles(): CSSResult {
        return css`
            #container {
                display: flex;
                flex-direction: column;
            }
        `
    }

    @property()
    declare value: string;

    @state()
    declare list: ListItem[];

    @query("#textInput", true)
    declare input: HTMLInputElement;

    private submitButtonClickHandler(event?: MouseEvent): void {
        this.list.push({
            label: this.input.value
        });
        this.requestUpdate("list");
    }

    private inputKeyDownHandler(event?: KeyboardEvent): void {
        if (event.key === "Enter") {
            this.submitButtonClickHandler();
        }
    }

    constructor() {
        super();
        this.list = []
    }

    protected override willUpdate(changes: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.willUpdate(changes);
        if (this.hasUpdated && changes.has("list")) {
            this.input.value = ""
        }

    }

    private removeByIndex(index: number): void {
        this.list.splice(index, 1); 
        this.requestUpdate("list");
    }

    protected override render(): TemplateResult {
        return html`
            <div id="container">
                <div>
                    <input id="textInput" .value=${this.value}
                        @keydown=${this.inputKeyDownHandler} 
                    ></input>
                    <button @click=${this.submitButtonClickHandler}>Submit</button>
                </div>

                <ul>
                    ${this.list.map((item, index) => html`
                        <li>${item.label} <button @click=${() => this.removeByIndex(index)}>X</button></li>
                    `)}
                </ul>
            </div>
        `;
    }
}

interface ListItem {
    label: string;
    value?: unknown;
}