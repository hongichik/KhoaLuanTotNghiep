import ProductType from '../components/type/ProductType';

interface PayProductState {
  products: ProductType[]
}

interface PayProductAction {
  type: string;
  products?: ProductType[];
  product?: ProductType;
}

const initialState: PayProductState = {
  products: [],
};

const PayProductReducer = (state = initialState,action: PayProductAction): PayProductState => {

  switch (action.type) {
    case 'ADD_PRODUCTS': {
      return {
        ...state,
        products: action.products || [],
      };
    }
    case 'ADD_PRODUCT': {
      return {
        products: action.product ? [...state.products,action.product] : state.products,
      };
    }
    case 'DELETE_PRODUCT': {
      return {
        products: state.products.filter(item =>item !== action.product),

      };
    }
    case 'DELETE_ALL_PRODUCT': {
      return {
        products: [],
      };
    }
    default:
      return state;
  }
};

export default PayProductReducer;
