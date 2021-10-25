import Services from '../abstracts/services';
export default class extends Services {
    tokenToUSD(a: string, t: number, k: string): Promise<number>;
    tokenQuote(t: number, k: string): Promise<number>;
}
