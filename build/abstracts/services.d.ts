import { Keyed } from '../interfaces';
export default abstract class implements Keyed {
    [key: string]: any;
    abstract arweaveToUsd(a: string, k: string): Promise<number>;
    abstract arweaveQuote(k: string): Promise<number>;
}
