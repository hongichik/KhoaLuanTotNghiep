import ProductType from '../components/type/ProductType';

interface DetailProductState {
  status: boolean;
  product: ProductType | null; // kiểu dữ liệu của product là ProductType hoặc {}
}

interface DetailProductAction {
  type: string;
  product?: ProductType;
}

const initialState: DetailProductState = {
  status: false,
  product: null,
};

const DetailProductReducer = (state = initialState,action: DetailProductAction): DetailProductState => {
  switch (action.type) {
    case 'SHOW_PRODUCT': {
      return {
        ...state,
        status: true,
        product: action.product || null, // nếu không có action.product thì gán product bằng {}
      };
    }
    case 'HIDE_PRODUCT': {
      return {
        ...state,
        status: false,
        product: null,
      };
    }
    default:
      return state;
  }
};

export default DetailProductReducer;
