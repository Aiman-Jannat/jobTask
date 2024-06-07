import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import 'react-datepicker/dist/react-datepicker.css';
import { HiOutlineCalendar, HiOutlineChevronDown } from 'react-icons/hi'; 
import { FaDollarSign } from "react-icons/fa";
import { PiCurrencyDollarLight } from "react-icons/pi";
const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
   
  } = useForm();
  

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-10">
      {/* header */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl ">Reservation</p>
        <button className="px-4 py-3 text-sm font-semibold rounded-md bg-[#5D5CFF] text-white">
          Print/Download
        </button>
      </div>
      
      <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-white  rounded-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* column 1 */}
        <div>
        <div className="">
          <p className="w-full border-2 font-bold text-xl border-x-0 border-t-0 border-[#5D5CFF] p-2">
            Reservation Details
          </p>
          {/* Reservation form */}
          <div className="border p-3 mt-2">
            <div className="mb-4 flex flex-col">
              <label htmlFor="name" className="mb-2 text-gray-700">
                Name
              </label>
              <input
                id="name"
                className={`border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } p-2 rounded`}
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div className="mb-4 flex w-full flex-col">
              <label htmlFor="pickupDate" className="mb-2 text-gray-700">
                Pickup Date<span className="text-red-500">*</span>
              </label>
              <div className="relative border  w-full">
              <Controller
          control={control}
          name="pickupDate"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              className={`relative ${errors.pickupDate ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-[395px]`}
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
            
          )}
          
          />
          <HiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
              {errors.pickupDate && (
                <span className="text-red-500 text-sm">
                  Pickup Date is required
                </span>
              )}
            </div>
            <div className="mb-4 relative w-full flex-col">
              <label htmlFor="returnDate" className="mb-2 text-gray-700">
                Return Date<span className="text-red-500">*</span>
              </label>
              <div className="relative w-full mt-2 border">
              <Controller
          control={control}
          name="returnDate"
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              className={`${errors.returnDate ? 'border-red-500' : ''} p-2 rounded w-[395px]`}
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
            
          )}
          
          />
          <HiOutlineCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
              {errors.pickupDate && (
                <span className="text-red-500 text-sm">
                  Pickup Date is required
                </span>
              )}
            </div>

           

            <div className="mb-4 flex justify-between items-center ">
              <label htmlFor="duration" className="mb-2 text-gray-700">
                Duration
              </label>
              <input
                id="duration"
                type="text"
                placeholder="1 week 1 day"
                readOnly
                className="border border-gray-300 p-2 rounded"
                {...register("duration")}
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="discount" className="mb-2 text-gray-700">
                Discount
              </label>
              <input
                id="discount"
                type="number"
                className="border border-gray-300 p-2 rounded"
                {...register("discount")}
              />
            </div>

            </div>
          
        </div>
        <div className="">
        <p className="w-full mt-5 border-2 font-bold text-xl border-x-0 border-t-0 border-[#5D5CFF] p-2">
            Vehicle Information
          </p>
          <div className="border p-3 mt-2">
        <div className="mb-4 flex flex-col">
          
        <label htmlFor="vehicleType" className="mb-2 text-gray-700">
          Vehicle Type<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Controller
            control={control}
            name="vehicleType"
            rules={{ required: true }}
            render={({ field }) => (
              <select
                {...field}
                id="vehicleType"
                className={`border ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full appearance-none`}
              >
                <option value=""></option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
              </select>
            )}
          />
          <HiOutlineChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.vehicleType && <span className="text-red-500 text-sm">Vehicle Type is required</span>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="vehicle" className="mb-2 text-gray-700">
          Vehicle<span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="vehicle"
            type="text"
            className={`border ${errors.vehicle ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
            {...register('vehicle', { required: true })}
          />
          <HiOutlineChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {errors.vehicle && <span className="text-red-500 text-sm">Vehicle is required</span>}
      </div>
      </div>
          </div>
        </div>
        
        {/* column 2 */}
        <div>
        <div>
          <p className="w-full border-2 font-bold text-xl border-x-0 border-t-0 border-[#5D5CFF] p-2">
            Customer Information
          </p>
          <div className="">
       
          <div className="border p-3 mt-2">
          <div className="mb-4 flex flex-col">
        <label htmlFor="firstName" className="mb-2 text-gray-700">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
          {...register('firstName', { required: true })}
        />
        {errors.firstName && <span className="text-red-500 text-sm">First Name is required</span>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="lastName" className="mb-2 text-gray-700">
          Last Name<span className="text-red-500">*</span>
        </label>
        <input
          id="lastName"
          type="text"
          className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <span className="text-red-500 text-sm">Last Name is required</span>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="email" className="mb-2 text-gray-700">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
      </div>

      <div className="mb-4 flex flex-col">
        <label htmlFor="phone" className="mb-2 text-gray-700">
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
          {...register('phone', { required: true })}
        />
        {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}
      </div>


          </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="w-full border-2 text-xl font-bold border-x-0 border-t-0 border-[#5D5CFF] p-2">
            Additional Charges
          </p>
          <div className="border mt-3  p-3">
          
      <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          className="mr-2"
          defaultValue={'9'}
          {...register('additionalCharge')}
        />
        <label htmlFor="checkbox" className="text-gray-700">Collision Damage Waiver</label>
      </div>
      <p className="mb-4 flex justify-center items-center"><PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight> 9.00</p>
      </div>
      <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          className="mr-2"
          defaultValue={'15'}
          {...register('additionalCharge')}
        />
        <label htmlFor="checkbox" className="text-gray-700">Liability Insurance</label>
      </div>
      <p className="mb-4 flex justify-center items-center"><PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight> 15.00</p>
      </div>
      <div className="flex  justify-between items-center">
          <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          className="mr-2"
          defaultValue={'11.5'}
          {...register('Rental Tax')}
        />
        <label htmlFor="checkbox" className="text-gray-700">Liability Insurance</label>
      </div>
      <p className="mb-4 flex justify-center items-center"><PiCurrencyDollarLight className="font-mono"></PiCurrencyDollarLight> 11.5%</p>
      </div>

     
          </div>
          
        </div>
        </div>
        {/* column 3 */}
        <div>
          <p className="w-full border-2 font-bold text-xl border-x-0 border-t-0 border-[#5D5CFF] p-2">
            Charges Summary
          </p>
          <div className="border p-3 bg-[#DFDFFF] mt-3">
          <table className="table-auto  w-full">
      <thead className="border-2 border-x-0 text-left border-t-0 border-purple-700">
        <tr className="">
          <th className="py-2 px-4 " colSpan="2">Charge</th>
          <th className="py-2 px-4 ms-3">Unit</th>
          <th className="py-2 px-4 ">Rate</th>
          <th className="py-2 px-4 ">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border" colSpan="2">Daily</td>
          <td className="py-2 px-4 border ms-3">1</td>
          <td className="py-2 px-4 border">$99.00</td>
          <td className="py-2 px-4 border">$99.00</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border" colSpan="2">Weekly</td>
          <td className="py-2 px-4 border">1</td>
          <td className="py-2 px-4 border">$390.00</td>
          <td className="py-2 px-4 border">$390.00</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border" colSpan="3">Collision Damage Waiver</td>
          
          <td className="py-2 px-4 border">$9.00</td>
          <td className="py-2 px-4 border">$9.00</td>
        </tr>
        <tr className="font-bold">
          <td className="py-2 pt-5 px-4 border" colSpan="4">Total</td>
          <td className="py-2 px-4 pt-5 border">$498.00</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
          </div>
        </div>
        </div>
        </form>
      
    </div>
  );
};

export default Main;
