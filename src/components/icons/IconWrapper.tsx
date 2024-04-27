import React from 'react';
type TIcon = {
    children: React.ReactNode;
    width?: number
    height?: number
    fill?: string
    className?: string
}
const IconWrapper = ({children,fill="none",height=10,width=10,className=''}:TIcon) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 18 22" fill={fill} xmlns="http://www.w3.org/2000/svg">
            {children}
        </svg>
    );
};

export default IconWrapper;