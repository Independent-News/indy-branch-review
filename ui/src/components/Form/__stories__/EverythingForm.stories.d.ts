import { Schema } from '..';
declare const defaultArgs: {
    onSubmit: (data: unknown) => void;
    schema: Schema<{
        email: unknown;
        password: unknown;
        birthYear: unknown;
        fruit: unknown;
        terms: unknown;
        optIn: unknown;
    }>;
};
/**
 * This is the 'everything and the kitchen sink' form - every input
 * type in one form
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
            fruit: unknown;
            terms: unknown;
            optIn: unknown;
        }>;
    };
};
//# sourceMappingURL=EverythingForm.stories.d.ts.map