import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import GiftSVG from '../assets/ProductLabels/GiftSVG';
import ProductSVG from '../assets/ProductLabels/ProductSVG';
import PromoSVG from '../assets/ProductLabels/PromoSVG';
import PromotionSVG from '../assets/ProductLabels/PromotionSVG';
import SetSVG from '../assets/ProductLabels/SetSVG';
import './includes/ProductLabel.css'

export enum ProductItemTypeEnum {
    REGULAR = 'REGULAR',
    STATIC_SET = 'STATIC_SET',
    DYNAMIC_SET = 'DYNAMIC_SET',
    SET_COMPOSITION_ITEM = 'SET_COMPOSITION_ITEM',
    OLD_PROMOTION = 'OLD_PROMOTION',
}

export enum ProductItemSubTypeEnum {
    GIFT = 'GIFT',
    MAIN = 'MAIN',
    PROMO = 'PROMO',
    SET_COMPOSITION_ITEM = 'SET_COMPOSITION_ITEM',
    OLD_PROMOTION = 'OLD_PROMOTION',
}
export interface IProductLabelProps {
    /**
     * Enumeration of product type
     */
    productType: ProductItemTypeEnum | null;
    /**
     * Enumeration of product subtype
     */
    productSubType: ProductItemSubTypeEnum | null;
    /**
     * 
     * Flag to indicate that a label is used to mark **Old promotion** item.
     * No matter what will be passed in **productType** and **productSubType** props.
     */
    isPromotion: boolean;
    /**
     * Text to show as a label
     */
    text: string;
}

const ProductLabel: FunctionComponent<IProductLabelProps> = ({
    productType,
    productSubType,
    isPromotion,
    text,
}): JSX.Element => {
    if (isPromotion) {
        return (
            <div className={cn('product-label-wrapper', 'promotion')}>
                <div className="product-label__icon"><PromotionSVG /></div>
                <div className="product-label__name">{text}</div>
            </div>
        )
    }

    if (productType === ProductItemTypeEnum.DYNAMIC_SET || productType === ProductItemTypeEnum.STATIC_SET) {
        return (
            <div className={cn('product-label-wrapper', 'set')}>
                <div className="product-label__icon"><SetSVG /></div>
                <div className="product-label__name">{text}</div>
            </div>
        )
    }

    if (productSubType === ProductItemSubTypeEnum.MAIN) {
        return (
            <div className={cn('product-label-wrapper', 'product')}>
                <div className="product-label__icon"><ProductSVG /></div>
                <div className="product-label__name">{text}</div>
            </div>
        )
    }

    if (productSubType === ProductItemSubTypeEnum.GIFT) {
        return (
            <div className={cn('product-label-wrapper', 'gift')}>
                <div className="product-label__icon"><GiftSVG /></div>
                <div className="product-label__name">{text}</div>
            </div>
        )
    }

    if (productSubType === ProductItemSubTypeEnum.PROMO) {
        return (
            <div className={cn('product-label-wrapper', 'promo')}>
                <div className="product-label__icon"><PromoSVG /></div>
                <div className="product-label__name">{text}</div>
            </div>
        )
    }

    return <></>;
};

export default ProductLabel;
