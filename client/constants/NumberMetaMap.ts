/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import NumberType from './NumberType';

interface NumberMeta {
    name: string;
    description: string;
}

const NumberMetaMap: Map<NumberType, NumberMeta> = new Map([
    [ NumberType.Bic, { name: 'BIC', description: 'Business Identifier Code' } ],
    [ NumberType.CreditCard, { name: 'Credit card', description: 'Credit card number' } ],
    [ NumberType.Cusip, { name: 'CUSIP', description: 'Committee on Uniform Security Identification Procedures' } ],
    [ NumberType.Cvv, { name: 'CVV', description: 'Card Verification Value' } ],
    [ NumberType.Ean, { name: 'EAN', description: 'International Article Number' } ],
    [ NumberType.Imei, { name: 'IMEI', description: 'International Mobile Equipment Identity' } ],
    [ NumberType.Imo, { name: 'IMO', description: 'International Maritime Organization' } ],
    [ NumberType.Isbn, { name: 'ISBN', description: 'International Standard Book Number' } ],
    [ NumberType.Isin, { name: 'ISIN', description: 'International Securities Identification Number' } ],
    [ NumberType.Ismn, { name: 'ISMN', description: 'International Standard Music Number' } ],
    [ NumberType.Issn, { name: 'ISSN', description: 'International Standard Serial Number' } ],
    [ NumberType.Npi, { name: 'NPI', description: 'National Provider Identifier' } ],
    [ NumberType.Nric, { name: 'NRIC', description: 'Singaporean National Registration Identity Card' } ],
    [ NumberType.Rtn, { name: 'RTN', description: 'Routing Transit Number' } ],
    [ NumberType.Sedol, { name: 'SEDOL', description: 'Stock Exchange Daily Official List' } ],
    [ NumberType.Sin, { name: 'SIN', description: 'Canadian Social Insurance Number' } ],
    [ NumberType.Ssn, { name: 'SSN', description: 'Social Security Number' } ],
    [ NumberType.Vin, { name: 'VIN', description: 'Vehicle Identification Number' } ],
]);

export default NumberMetaMap;
