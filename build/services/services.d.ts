import Services from '../abstracts/services';
export default class extends Services {
    arweaveToUsd(a: string, k: string): Promise<number>;
    arweaveQuote(k: string): Promise<number>;
}
