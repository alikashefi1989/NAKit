export type ElementSize = 'l' | 'm';

export const formElementSize: Record<ElementSize, string> = {
    l: '3.125',
    m: '2.875',
};

type FormElementSize = keyof typeof formElementSize;
export default FormElementSize;