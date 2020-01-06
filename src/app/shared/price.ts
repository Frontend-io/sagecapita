import { Currencies } from '../shared/currencies.enum';

export interface Price {
    [Currencies.USD]: number;
    [Currencies.NGN]: number;
    [Currencies.GDP]: number;
}
