import { FC } from 'react';
/**
 * @todo fix storyshotting of Time Ago. It is currently being skipped
 * due to async behaviour.
 */
declare const _default: {
    title: string;
    component: ({ lang, timestamp }: import('./TimeAgo.types').TimeAgoProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    decorators: ((Story: FC) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
export declare const Default: {
    args: {
        timestamp: number;
    };
};
export declare const Secs: {
    args: {
        timestamp: number;
    };
};
export declare const Mins: {
    args: {
        timestamp: number;
    };
};
export declare const Hours: {
    args: {
        timestamp: number;
    };
};
export declare const Days: {
    args: {
        timestamp: number;
    };
};
//# sourceMappingURL=TimeAgo.stories.d.ts.map