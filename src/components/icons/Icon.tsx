import React from 'react';
import { TIconList, iconList } from './icons';
import IconWrapper from './IconWrapper';

type TIcon = {
    icon: TIconList
    width?: number
    height?: number
    fill?: string
    className?: string

}

const Icon = ({icon, height,width,fill,className}:TIcon) => {
    return (
        <IconWrapper fill={fill} width={width} height={height}className={className}>
            {iconList[icon]}
        </IconWrapper>
    );
};

export default Icon;