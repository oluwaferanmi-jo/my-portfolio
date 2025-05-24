import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // I Will Call EmailJS or another service here
    reset();
  };

  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Contact me</h2>
        <p className="text-gray-400 text-sm mb-10">
          Cultivating Connections: Reach Out And Connect With Me.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6 text-left"
        >
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>


          <div>
            <select
              {...register("service", { required: "Service is required" })}
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md"
            >
              <option value="web">Web Development</option>
              <option value="uiux">UI/UX Design</option>
              <option value="branding">Branding</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>

        

          <div className="md:col-span-2">
            <textarea
              {...register("details")}
              placeholder="Project Details..."
              rows="4"
              className="w-full bg-gray-800 text-white px-4 py-3 rounded-md resize-none"
            />
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="px-6 py-3 border border-gray-500 text-white rounded-md hover:bg-orange-500 transition-all"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
