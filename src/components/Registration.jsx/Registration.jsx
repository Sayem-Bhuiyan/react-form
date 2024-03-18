const Registration = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-purple-500">
      <form className="w-2/3 lg:w-2/5 bg-white rounded shadow-lg p-8">
        <h1 className="text-4xl mb-6 text-purple-500 text-center">
          Signup Form
        </h1>

        <label className="mb-2 text-lg">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
        />

        <label className="mb-2 text-lg">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
        />

        <label className="mb-2 text-lg">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="py-2 px-1 border-2 border-solid border-gray-400 w-full rounded text-lg mb-3"
        />

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-purple-500 rounded h-12 w-20 text-xl text-white"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
