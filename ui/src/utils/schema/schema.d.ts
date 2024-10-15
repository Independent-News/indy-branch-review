import { default as SchemaEntry } from './schemaEntry';
import { ValidationError, ValidationErrors } from './schema.types';
/**
 * Schema class made up of SchemaEntry objects, creating a
 * chainable schema format for validating data
 */
declare class Schema<T> {
    private self;
    fields: (keyof T)[];
    names: Record<keyof T, string>;
    errors: ValidationErrors<T>;
    validationHints: Record<keyof T, {
        [key: string]: {
            passes: boolean;
            hint?: string;
        };
    }>;
    constructor(schema: Record<keyof T, SchemaEntry>);
    /**
     * Add a schema entry to the schema
     * @param name human readable field name to be used in messaging
     * @returns a new SchemaEntry object
     */
    static add(name: string): SchemaEntry;
    /**
     * @param field field ID/key
     * @returns SchemaEntry for the given field
     */
    get(field: keyof T): Record<keyof T, SchemaEntry>[keyof T];
    /**
     * @param field field ID/key
     * @returns SchemaEntry for the given field
     */
    getErrors(field: keyof T): ValidationErrors<T>[keyof T];
    /**
     * @param field field ID/key
     * @param errors  validation errors to set for the given field
     */
    setErrors(field: keyof T, errors: ValidationError[] | null): void;
    getValidationHints(field: keyof T): Record<keyof T, {
        [key: string]: {
            passes: boolean;
            hint?: string;
        };
    }>[keyof T];
    setValidationHints(field: keyof T, key: string, passes: boolean, hint?: string, errorType?: string): void;
    initValidationHint(field: keyof T): void;
    initValidationHints(): void;
    resetValidationHints(field: keyof T): void;
    /**
     * Validate a value against the schema for a singular field
     *
     * @param key field ID/key
     * @param value field value
     * @param values an object containing all field vales, required for some validations (e.g. isMatch)
     * @returns an array of errors for the given field
     */
    validate(field: keyof T, value: unknown, values: Record<string, unknown>): Promise<ValidationErrors<T>[keyof T] | undefined>;
}
export default Schema;
//# sourceMappingURL=schema.d.ts.map