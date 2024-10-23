import { FieldValues, Path, UseFormProps } from 'react-hook-form';
import { RegisterInputReturnType } from '../components/Form/Input/Input.types';
import { Schema } from '../utils/schema';
import { ValidationErrors } from '../utils/schema/schema.types';
/**
 * This builds on top of the react-hook-form library
 * to provide a consistent handling of form state
 *
 * Designed to be used with TextInput & PasswordInput
 * and could be extended to support other input types
 *
 */
declare const useIndyForm: <T extends FieldValues>(schema: Schema<T>, options?: UseFormProps<T>) => {
    registerControlledInput: (key: keyof T, name?: string) => RegisterInputReturnType<T>;
    methods: {
        setFormError: (message: string) => void;
        setFieldError: (name: Path<T>, message: string) => void;
        getFormError: () => string | undefined;
        getFieldErrors: () => string[];
        getFieldValidationHints: (id: keyof T) => Record<keyof T, {
            [key: string]: {
                passes: boolean;
                hint?: string;
            };
        }>[keyof T];
        setError: import('react-hook-form').UseFormSetError<T>;
        watch: import('react-hook-form').UseFormWatch<T>;
        getValues: import('react-hook-form').UseFormGetValues<T>;
        getFieldState: import('react-hook-form').UseFormGetFieldState<T>;
        clearErrors: import('react-hook-form').UseFormClearErrors<T>;
        setValue: import('react-hook-form').UseFormSetValue<T>;
        trigger: import('react-hook-form').UseFormTrigger<T>;
        formState: import('react-hook-form').FormState<T>;
        resetField: import('react-hook-form').UseFormResetField<T>;
        reset: import('react-hook-form').UseFormReset<T>;
        handleSubmit: import('react-hook-form').UseFormHandleSubmit<T, undefined>;
        unregister: import('react-hook-form').UseFormUnregister<T>;
        control: import('react-hook-form').Control<T, any>;
        register: import('react-hook-form').UseFormRegister<T>;
        setFocus: import('react-hook-form').UseFormSetFocus<T>;
    };
    formState: {
        errors: ValidationErrors<T>;
        isDirty: boolean;
        isLoading: boolean;
        isSubmitted: boolean;
        isSubmitSuccessful: boolean;
        isSubmitting: boolean;
        isValidating: boolean;
        isValid: boolean;
        disabled: boolean;
        submitCount: number;
        defaultValues?: Readonly<import('react-hook-form').DeepPartial<T>> | undefined;
        dirtyFields: Partial<Readonly<import('react-hook-form').DeepMap<import('react-hook-form').DeepPartial<T>, boolean>>>;
        touchedFields: Partial<Readonly<import('react-hook-form').DeepMap<import('react-hook-form').DeepPartial<T>, boolean>>>;
        validatingFields: Partial<Readonly<import('react-hook-form').DeepMap<import('react-hook-form').DeepPartial<T>, boolean>>>;
    };
};
export default useIndyForm;
//# sourceMappingURL=useIndyForm.d.ts.map