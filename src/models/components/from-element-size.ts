export type ElementSize = 'l' | 'm';

export const formElementSize: Record<ElementSize, string> = {
    l: '3',
    m: '2.5',
};

type FormElementSize = keyof typeof formElementSize;
export default FormElementSize;