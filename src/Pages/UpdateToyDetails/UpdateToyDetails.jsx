import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateToyDetails = () => {
  const toyData = useLoaderData();
  const [toy, setToy] = useState(toyData);
  //   console.log(toy);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      fetch(
        `https://my-toy-market-server.vercel.app/updateToy/${toy._id}`,
        options
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result?.modifiedCount > 0) {
            toast.success("Successfully updated");
          } else if (result?.matchedCount > 0) {
            toast("Your Product is upto data");
          }
        });
    }
  };
  return (
    <div className="py-10 md:py-16 ">
      <form
        className="border md:min-w-[28rem] mx-auto mt-4 md:max-w-[32rem] p-5 w-full md:py-10 md:px-20 bg-slate-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center text-2xl font-semibold text-slate-700">
          Update your Toy
        </h1>
        <div className="w-full">
          <label htmlFor="toyName" className="label">
            Toy Name:
          </label>
          <input
            type="text"
            id="toyName"
            required
            defaultValue={toy.toyName}
            {...register("toyName", { required: true })}
            placeholder="Enter toy name"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="toyPicture" className="label">
            Picture Url of Toy:
          </label>
          <input
            type="text"
            id="toyPicture"
            required
            defaultValue={toy.toyPicture}
            {...register("toyPicture", { required: true })}
            placeholder="Enter toy's picture URL"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <label htmlFor="sellerName" className="label">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            required
            defaultValue={toy.sellerName}
            {...register("sellerName", { required: true })}
            placeholder="Seller name"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <label htmlFor="sellerEmail" className="label">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            required
            value={toy.sellerEmail}
            readOnly
            {...register("sellerEmail", { required: true })}
            placeholder="Seller email"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <label htmlFor="subCategory" className="label">
            Sub-category:
          </label>
          <input
            type="text"
            id="subCategory"
            required
            defaultValue={toy.subCategory}
            {...register("subCategory", { required: true })}
            placeholder="Sub-category name"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="price" className="label">
            Price:
          </label>
          <input
            type="text"
            id="price"
            required
            defaultValue={toy.price}
            {...register("price", { required: true })}
            placeholder="Enter price"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
          {/* {priceError && <p className="text-red-600">{priceError}</p>} */}
        </div>
        <div className="w-full">
          <label htmlFor="ratings" className="label">
            Ratings:
          </label>
          <input
            type="text"
            id="ratings"
            required
            defaultValue={toy.ratings}
            {...register("ratings", { required: true })}
            placeholder="Enter ratings"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
        </div>
        <div className="w-full">
          <label htmlFor="availableQuantity" className="label">
            Available quantity:
          </label>
          <input
            type="text"
            id="availableQuantity"
            required
            defaultValue={toy.availableQuantity}
            {...register("availableQuantity", { required: true })}
            placeholder="Available quantity"
            className="py-2 px-2 rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 w-full max-w-lg"
          />
          {/* {quantityError && <p className="text-red-600">{quantityError}</p>} */}
        </div>

        <div className="w-full">
          <label className="label" htmlFor="description">
            Description:
          </label>
          <textarea
            required
            defaultValue={toy.description}
            {...register("description", { required: true })}
            placeholder="Enter a brief description"
            className="py-2 px-2 w-full resize-none rounded-md border border-slate-300 focus:outline-none focus:border-slate-400 max-w-sm"
          ></textarea>
        </div>

        <input
          className="w-full mt-4 py-2 max-w-md  bg-blue-600 rounded-md text-white text-xl hover:bg-blue-700"
          type="submit"
          value="Update"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateToyDetails;
