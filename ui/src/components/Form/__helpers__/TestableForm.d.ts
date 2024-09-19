import { default as React, ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Schema } from '..';
import { RegisterInputReturnType } from '../Input/Input.types';
type FormData = Record<string, unknown>;
type TestableFormProps = {
    onSubmit: SubmitHandler<FormData>;
    schema: Schema<FormData>;
    children: (args: {
        registerControlledInput: (id: string, name?: string) => RegisterInputReturnType<FormData>;
    }) => ReactNode;
};
/**
 * This wrapper exists to make testing easier by setting up a simple form
 * and accepting input elements as children to be tested.
 *
 * This should not be used in production, but may be helpful reference
 *
 */
declare const TestableForm: React.FC<TestableFormProps>;
export default TestableForm;
//# sourceMappingURL=TestableForm.d.ts.map