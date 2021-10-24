import React, {useCallback, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PhoneBlock from "../components/PhoneBlock/PhoneBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from './../redux/actions/filters'
import {fetchPhones} from "../redux/actions/phones";
import LoadingBlock from "../components/PhoneBlock/LoadingBlock";
import {addPhonesToCart} from "../redux/actions/cart";

const categoryNames = ['Apple', 'Huawei', 'Xiaomi'];
const sortNames = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'}
];

const Home = () => {

    const phones = useSelector(({phones}) => phones.phones);
    const isLoaded = useSelector(({phones}) => phones.isLoaded);
    const { category, sortBy} = useSelector(({filters} ) => filters);
    const dispatch = useDispatch();

    const cartItems = useSelector(({cart}) => cart.items);


    useEffect(() => {
        dispatch(fetchPhones(sortBy, category))
    }, [category, sortBy, ])


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])


    const onSelectSortBy = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])


    const onAddPhone = phoneObj => {
        dispatch(addPhonesToCart(phoneObj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category} items={categoryNames} onClickCategory={onSelectCategory}/>
                <Sort activeSortType={sortBy.type} items={sortNames} onClickSortType={onSelectSortBy}/>
            </div>
            <h2 className="content__title">Все телефоны</h2>
            <div className="content__items">
                {isLoaded && phones.map(phone =>
                    <PhoneBlock {...phone} key={phone.id} onAddPhone={onAddPhone} countOfItems={cartItems[phone.id] && cartItems[phone.id].items.length} />
                )}
                {!isLoaded &&
                    Array(9).fill(0).map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}

export default Home;