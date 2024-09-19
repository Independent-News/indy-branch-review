import { FieldValues, Resolver } from 'react-hook-form';
import { Schema } from './schema';
import { CharacterType, ValidationErrors } from './schema/schema.types';
export declare const hintId: <T>(id: keyof T) => string;
export declare const errorId: <T>(id: keyof T) => string;
export declare const capitalise: (str: string) => string;
export declare const count: (value: string, type?: CharacterType) => number;
export declare const parseString: (value?: unknown) => {};
export declare const getAllErrors: <T extends FieldValues>(schema: Schema<T>, values: T) => Promise<ValidationErrors<T>>;
export declare const resolver: <T extends FieldValues>(schema: Schema<T>) => Resolver<T>;
//# sourceMappingURL=formValidation.d.ts.map