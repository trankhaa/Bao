import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckOutPage/CheckOutPage";
import Homepage from "../pages/Homepage/Homepage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSuccessPage from "../pages/OrderSucessPage/OrderSucessPage";
import OrderTrackingPage from "../pages/OrderSucessPage/OrderTrackingPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import TinTucPage from '../pages/TinTucPage/TinTucPage';

export const routes = [
    {
        path: '/',
        page: Homepage
    },
    {
        path: '/order',
        page: OrderPage,

    },
    {
        path: '/products',
        page: ProductsPage,

    },
    {
        path: '/type',
        page: TypeProductPage,

    },
    {
        path: '/sign-in',
        page: SignInPage,

    },
    {
        path: '/sign-up',
        page: SignUpPage,

    },
    {
        path: '/product-details/:productId',
        page: ProductDetailsPage, // Truyền param productId vào trang chi tiết sản phẩm
    },
    {
        path: '/cart',
        page: CartPage,

    },
    {
        path: '/check',
        page: CheckoutPage,

    },
    {
        path: '/sucess',
        page: OrderSuccessPage,

    },
    {
        path: '/tracking',
        page: OrderTrackingPage,

    },
    {
        path: '*',
        page: NotFoundPage
    },
    {
        path: '/product-details/:productId',
        page: ProductDetailsPage, // Điều hướng đến trang chi tiết sản phẩm
    },
    {
        path: '/products/:category', // Thêm route cho danh mục
        page: ProductsPage, // Dẫn đến trang sản phẩm với danh mục tương ứng
    },
    {
        path: '/tin-tuc',
        page: TinTucPage,
    },
]