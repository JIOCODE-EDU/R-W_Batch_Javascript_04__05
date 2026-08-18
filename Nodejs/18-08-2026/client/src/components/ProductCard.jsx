import React from "react";
import {useNavigate} from 'react-dom'
const ProductCard = () => {

  const navigate = useNavigate()

  return (
    <div className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
      <a href="#">
        <img
          className="rounded-base mb-6"
          src="/docs/images/products/apple-watch.png"
          alt="product image"
        />
      </a>
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
          <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
            4.8 out of 5
          </span>
        </div>
        <a href="#">
          <h5 className="text-xl text-heading font-semibold tracking-tight">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight
          </h5>
        </a>
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-extrabold text-heading">$599</span>
          <button
            type="button"
            className="inline-flex items-center  text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
