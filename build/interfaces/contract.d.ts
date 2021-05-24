import { Keyed } from '.';
export interface Contract {
    address: string;
    functions: Keyed;
}
