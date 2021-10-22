import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button";
import classNames from "classnames";


const PhoneBlock = ({id, name, imageUrl, price, types, sizes, onAddPhone, countOfItems}) => {


    const colorPhone = ['синий', 'красный'];
    const [activeColor, setActiveColor] = useState(types[0]);

    const sizesPhone = [64, 128, 512];
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const [currentPrice, setCurrentPrice] = useState(price)


    const onSelectColor = (index) => {
        setActiveColor(index)
    }

    const onSelectSize = (index) => {
        setActiveSize(index)

        if(index == 64) {
            setCurrentPrice(price)
        }
        if(index == 128) {
            setCurrentPrice(price + Math.trunc(price/100*10))
        }
        if(index == 512) {
            setCurrentPrice(price + Math.trunc(price/100*25))
        }
    }


    const onAddPhoneToCart = () => {
        const phoneObj = {
            id,
            name,
            imageUrl,
            price: currentPrice,
            size: activeSize,
            type: colorPhone[activeColor]
        }
        onAddPhone(phoneObj)
    }

    return (
        <div className="phone-block">
            <img
                className="phone-block__image"
                src={imageUrl}
                alt="Phone"
            />
            <h4 className="phone-block__title">{name}</h4>
            <div className="phone-block__selector">
                <ul>
                    {colorPhone.map((type, index) => {
                        return <li
                            key={type}
                            onClick={() => onSelectColor(index)}
                            className={classNames({
                                active: activeColor === index,
                                disabled: !types.includes(index)
                            })}>
                            {type}
                        </li>
                    })}
                </ul>
                <ul>
                    {sizesPhone.map((size, index) => {
                        return <li
                            key={size}
                            onClick={() => onSelectSize(size)}
                            className={activeSize === size ? 'active' : !sizes.includes(size) ? 'disabled' : ''}
                        >
                            {size}
                        </li>
                    })}
                </ul>
            </div>
            <div className="phone-block__bottom">
                <div className="phone-block__price">{currentPrice} грн.</div>
                <Button className="button--add" onClick={onAddPhoneToCart} outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {countOfItems && <i>{countOfItems}</i>}
                </Button>
            </div>
        </div>
    )
}

PhoneBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired
}

PhoneBlock.defaultTypes = {
    types: [],
    size: [],
}

export default PhoneBlock;