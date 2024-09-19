import { RefObject } from 'react';
type Ref = RefObject<Element | null | undefined>;
type Entry = IntersectionObserverEntry | null;
interface IntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | Document | null;
    rootMargin?: string;
    initialRef?: Ref;
}
declare const useIntersectionObserver: (options?: IntersectionObserverOptions) => [Ref, Entry];
export default useIntersectionObserver;
//# sourceMappingURL=useIntersectionObserver.d.ts.map