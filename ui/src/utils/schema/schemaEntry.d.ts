import { SchemaFn, Validator, PrimitiveType } from './schema.types';
import { doesMatch, hasMin, hasMax, hasRange, containsNoSpaces, matchesRegex } from './schemaFunctions';
/**
 * SchemaEntry class designed to be used with the Schema class to
 * create a chainable schema format for validating flat data e.g. new Schema().string().isEmail(0)
 */
declare class SchemaEntry {
    name: string;
    primitiveType: PrimitiveType;
    isRequired?: boolean;
    validators: Validator[];
    /**
     * @param name name of the field to be used in messaging
     */
    constructor(name: string);
    private initialise;
    private checkValid;
    string(): SchemaEntry;
    number(): SchemaEntry;
    boolean(): SchemaEntry;
    required(): SchemaEntry;
    /**
     * A check to validate field value is an email
     *
     * @returns SchemaEntry
     */
    isEmail(...args: Parameters<SchemaFn>): SchemaEntry;
    /**
     * A check to validate field value matches another field's value
     *
     * @param fieldName
     * @returns SchemaEntry
     */
    doesMatch(...args: Parameters<typeof doesMatch>): SchemaEntry;
    /**
     * A check to validate field has a minimum length or minimum
     * count of letters/digits
     *
     * @param minLength
     * @param countType
     * @returns SchemaEntry
     */
    hasMin(...params: Parameters<typeof hasMin>): SchemaEntry;
    /**
     * A check to validate field has a maximum length or maximum
     * count of letters/digits
     *
     * @param minLength
     * @param countType
     * @returns SchemaEntry
     */
    hasMax(...params: Parameters<typeof hasMax>): SchemaEntry;
    /**
     * A check to validate field has a range of length or count of
     * letters/digits
     *
     * @param minLength
     * @param maxLength
     * @param countType
     * @returns SchemaEntry
     */
    hasRange(...params: Parameters<typeof hasRange>): SchemaEntry;
    /**
     * A check to validate field contains no spaces
     * @returns SchemaEntry
     */
    containsNoSpaces(...params: Parameters<typeof containsNoSpaces>): SchemaEntry;
    /**
     * A check to validate field matches the required format
     * @returns SchemaEntry
     */
    matchesRegex(...params: Parameters<typeof matchesRegex>): SchemaEntry;
}
export default SchemaEntry;
//# sourceMappingURL=schemaEntry.d.ts.map