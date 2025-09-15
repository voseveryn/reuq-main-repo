type color = 'classic' | 'reverse' | 'grey'

export const colorClass = (color: color):string => {
    switch(color)
    {
        case 'classic':
            return 'bg-[#fff] text-black'
        case 'reverse':
            return 'bg-[#000000] text-white'
        case 'grey':
            return 'bg-[#D3D3D3] text-black'
        default:
            return '';
    }
}