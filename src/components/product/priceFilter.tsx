import "./product.css";

type PriceFilterProps = {
    data?:any;
    checked?: any;
}
export const PriceFilter = ({
    data,
    checked,
}: PriceFilterProps): JSX.Element => {
    return (
        <div className="price-filter-wrapper">
            <div className="text-left">
                <span className="text-black font-bold text-base">Price range</span>
                <div className="mt-2 ">
                    {data.map((item: any) => (
                    <div>
                        <label className="inline-flex items-center py-4 w-52">
                            <input type="checkbox" className="form-checkbox " { ...item.checked } />
                            <span className ="ml-4">{item?.range}</span>
                        </label>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}