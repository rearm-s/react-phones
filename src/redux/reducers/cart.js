let initiateState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
}

const phones = (state = initiateState, action) => {

    switch (action.type) {
        case 'ADD_PHONES_CART': {

            const currentPhoneItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newObj = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPhoneItems,
                    totalPrice: currentPhoneItems.reduce((sum, obj) => obj.price + sum, 0)
                }

            }
            const totalCount = Object.keys(newObj).reduce((sum, key) => newObj[key].items.length + sum, 0)
            const totalPrice = Object.keys(newObj).reduce((sum, key) => newObj[key].totalPrice + sum, 0)

            return {
                ...state,
                items: newObj,
                totalCount: totalCount,
                totalPrice: totalPrice
            }
        }
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        case 'PLUS_CART_ITEM': {
            const newObjItems = [...state.items[action.payload].items, state.items[action.payload].items[0], ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: newObjItems.reduce((sum, obj) => obj.price + sum, 0),
                },
            };

            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItem = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItem,
                    totalPrice: newObjItem.reduce((sum, obj) => obj.price + sum, 0),
                },

            };
            const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            };
        }
        default:
            return state;
    }
}


export default phones;