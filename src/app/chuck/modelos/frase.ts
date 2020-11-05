import { Interface } from "readline"

export interface Frase {
    value: string; // contains the quote
    icon_url: string;
    id: string; // id of the random quote
    url: string; // URL (containing the id) to the quote
}
