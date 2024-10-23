export declare const enum Step {
    INITIAL = "initial",
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}
type State = {
    step: Step;
    data: unknown;
    error?: string;
};
export type ResponseTransformer = (data: unknown) => unknown;
type Options = {
    url: string;
    initialData: unknown;
    triggerFetch?: boolean;
    responseTransformer?: ResponseTransformer;
};
interface Return extends State {
    fetchData: () => Promise<unknown>;
}
export declare const useFetch: ({ url, initialData, triggerFetch, responseTransformer, }: Options) => Return;
export {};
//# sourceMappingURL=useFetch.d.ts.map