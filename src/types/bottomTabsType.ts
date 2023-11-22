import { BottomTabBarButtonProps  } from '@react-navigation/bottom-tabs';

interface item {
    icon:string
    label:string
}

export interface TabButtonContent extends  BottomTabBarButtonProps,item{
}