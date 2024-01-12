import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, stock, id }) => {

    return (
        <div className='card-container bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
            <div className="flex">
                <div className="w-36 mr-8">
                    <img className="rounded-xl" src={image} alt="Product Photo" />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="font-bold text-[#263238] text-[26px]">{title}</h2>
                    <hr className="border-t-1 border-[#bdbdbd] my-3" />
                    <div className="flex">
                        <p className="mr-3 text-[#263238] font-semibold">Rp {price}0</p>
                        <p className="text-[#7B7B7B]">Stock:
                            <span className="text-[#65B741]"> {stock}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 mx-auto">
                <Link to={`/admin/product/${id}`} className="w-full mr-6">
                    <button className="text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full">Change Product</button>
                </Link>
                <button className="text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full">Delete Product</button>
            </div>
        </div>
    );
};

export default ProductCard;