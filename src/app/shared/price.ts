import { Currencies } from '../shared/currencies.enum';

export interface Price {
    [Currencies.USD]: number;
    [Currencies.NGN]: number;
    [Currencies.GBP]: number;
}
