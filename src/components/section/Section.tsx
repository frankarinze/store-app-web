import { SideBar } from "../sidebar/sidebar";
import "./section.css";

export const HeaderMeta = () => {
    return (
        <div>
        <div className="section-wrapper">
            <div className="section-left">
                <h1 className="product-title">About the Samurai King Resting</h1>
                <p className="product-category">Pets</p>
                <p className="product-description">
                    So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder

                </p>

                <p className="py-5 product-description">
                text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.
                </p>


            </div>
            
            <div className="section-right">
                <SideBar/>
            </div>

        </div>
            <div className="border-b-2 m-3 border-gray-300"></div>
        </div>
    );
}