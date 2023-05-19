import React from "react";

const CustomerSaying = () => {
  return (
    <div className="py-10 md:py-16">
      <h1 className="text-2xl md:text-3xl text-center font-semibold text-slate-700 my-5">
        Customer Saying !!
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10 md:px-32">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded-full w-32 h-32 ml-4"
              src="https://i.ibb.co/0QL1xjb/customer-2.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Eddie</h2>
            <p>
              I cannot speak highly enough of your staff's friendliness and
              helpfulness.
            </p>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className="rounded-full w-32 h-32 ml-4"
              src="https://i.ibb.co/4gv5kPX/customer-1.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body w-1/2">
            <h2 className="card-title">Emmale</h2>
            <p>
              "I am truly impressed with the outstanding quality of the products
              I received from your store."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSaying;
