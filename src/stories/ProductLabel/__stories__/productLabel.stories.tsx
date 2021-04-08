import ProductLabel, { ProductItemSubTypeEnum, ProductItemTypeEnum, IProductLabelProps } from '../ProductLabel';
import React from 'react';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'ProductLabel/Product label - Design',
  component: ProductLabel,
  argTypes: {
    productType: {
        options: [
            ProductItemTypeEnum.REGULAR,
            ProductItemTypeEnum.STATIC_SET,
            ProductItemTypeEnum.DYNAMIC_SET,
        ],
    },
    productSubType: {
        options: [
            ProductItemSubTypeEnum.GIFT,
            ProductItemSubTypeEnum.MAIN,
            ProductItemSubTypeEnum.PROMO,
        ],
    },
  },
} as Meta;

const Template: Story<IProductLabelProps> = (args) => <ProductLabel {...args} />;

export const MAIN = Template.bind({});
MAIN.args = {
  productType: ProductItemTypeEnum.REGULAR,
  productSubType: ProductItemSubTypeEnum.MAIN,
  isPromotion: false,
  text: 'Product label',
};

export const SimplePromo = Template.bind({});
SimplePromo.args = {
  productType: ProductItemTypeEnum.REGULAR,
  productSubType: ProductItemSubTypeEnum.PROMO,
  isPromotion: false,
  text: 'Product label',
};

export const SimpleGift = Template.bind({});
SimpleGift.args = {
  productType: ProductItemTypeEnum.REGULAR,
  productSubType: ProductItemSubTypeEnum.GIFT,
  isPromotion: false,
  text: 'Product label',
};

export const Promotion = Template.bind({});
Promotion.args = {
  productType: null,
  productSubType: null,
  isPromotion: true,
  text: 'Product label',
};

export const Set = Template.bind({});
Set.args = {
    productType: ProductItemTypeEnum.STATIC_SET,
    productSubType: ProductItemSubTypeEnum.MAIN,
  isPromotion: false,
  text: 'Product label',
};