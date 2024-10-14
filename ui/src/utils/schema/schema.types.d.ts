import { FieldError } from 'react-hook-form';
export type PrimitiveType = 'string' | 'number' | 'boolean';
export type CharacterType = 'letters' | 'digits' | 'uppercaseLetters' | 'lowercaseLetters';
type UnknownValue = unknown;
export type UnknownValues = Record<string, UnknownValue>;
export type ValidationError = FieldError & {
    messageBuilder: (fieldName: string) => string;
};
export type ValidationErrors<T> = Record<keyof T | 'root', ValidationError[]>;
type ValidationFn = (value: UnknownValue, values: UnknownValues, hint?: string) => ValidationError | null | Promise<ValidationError | null>;
export type SchemaType = {
    validate: ValidationFn;
};
export type UnknownFn = (...args: unknown[]) => SchemaType;
export type SchemaFn = () => SchemaType;
export type ValidatorFn = SchemaFn | UnknownFn;
export type Validator = [ValidatorFn, UnknownValue[]];
export type ValidationErrorConfig = {
    type: string;
    condition: boolean;
    message: string;
    messageBuilder: (fieldName: string) => string;
};
export {};
//# sourceMappingURL=schema.types.d.ts.map