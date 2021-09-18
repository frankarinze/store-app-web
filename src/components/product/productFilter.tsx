import "./product.css";

type ProductFilterProps = {
    data?:any;
    checked?: any;
}
export const ProductFilter = ({
    data,
    checked,
}: ProductFilterProps): JSX.Element => {
    return (
        <div className="product-filter-wrapper">
            <div className="text-left">
                <span className="text-black font-bold my-2 text-base ">Category</span>
                <div className="mt-2 ">
                    {data.map((item: any) => (
                    <div>
                        <label className="inline-flex items-center py-4 w-52">
                            <input type="checkbox" className="form-checkbox " { ...item.checked } />
                            <span className ="ml-4">{item?.category}</span>
                        </label>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}