type Aligment = 'left' | 'center' | 'right'


export const alignmentClass = (aligment: Aligment): string => {
    switch (aligment){
        case 'left':
            return 'text-left items-start justify-start';
        case 'center':
            return 'text-center items-center justify-center'
        case 'right':
            return 'text-right items-end justify-end'
        default:
            return '';
    }
} 