import { Schema } from '..';
declare const defaultArgs: {
    onSubmit: (data: unknown) => void;
    schema: Schema<{
        email: unknown;
        password: unknown;
        birthYear: unknown;
        terms: unknown;
    }>;
};
/**
 * This is a simple form, composed of the following components
 * and making use of the useIndyForm hook:
 * FormProvider, Form, TextInput, PasswordInput, SelectInput, Checkbox
 */
declare const _default: {
    title: string;
    component: ({ children, ...props }: import('react').PropsWithChildren) => import("react/jsx-runtime").JSX.Element;
    render: (props: typeof defaultArgs) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
export declare const Default: {
    args: {
        onSubmit: (data: unknown) => void;
        schema: Schema<{
            email: unknown;
            password: unknown;
            birthYear: unknown;
            terms: unknown;
        }>;
    };
};
//# sourceMappingURL=SimpleForm.stories.d.ts.map