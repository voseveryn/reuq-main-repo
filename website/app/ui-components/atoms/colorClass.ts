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

export const colorClassBg = (color: color):string => {
    switch(color)
    {
        case 'classic':
            return 'bg-[#fff]'
        case 'reverse':
            return 'bg-[#000000]'
        case 'grey':
            return 'bg-[#D3D3D3]'
        default:
            return '';
    }
}

export const colorClassText = (color: color):string => {
    switch(color)
    {
        case 'classic':
            return 'text-black'
        case 'reverse':
            return 'text-white'
        case 'grey':
            return 'text-black'
        default:
            return '';
    }
}