const ProductCard = ({ image, title, sold, price }) => {

    return (
        <div className="w-full py-8 px-6 rounded-xl bg-[#f3f2f2] hover:bg-[#ebe8e8]">
            <div>
                <img className="rounded-md" src={image} alt="Product Photo" />
                <h1 className="font-bold text-xl mt-4 mb-1">{title}</h1>
                <div className="flex items-center">
                    <p className="font-medium text-base">{sold} Sold</p>
                    <span className="border-l-2 h-3 border-black mx-2"></span>
                    <p className="font-medium text-base">Rp {price}0</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;