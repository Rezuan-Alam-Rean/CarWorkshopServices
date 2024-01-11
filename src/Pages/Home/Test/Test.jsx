

const Test = () => {
    return (
        <form className="border border-[color:var(--Dark-05,#D0D0D0)] flex max-w-[611px] flex-col px-20 py-12 rounded-xl border-solid max-md:px-5">
          <header className="text-neutral-700 text-center text-4xl font-semibold self-center whitespace-nowrap mt-9">
            Sign Up
          </header>
          <div className="text-neutral-700 text-lg font-semibold self-stretch mt-14 max-md:max-w-full max-md:mt-10">
            Name
          </div>
          <div className="text-neutral-400 text-base leading-8 whitespace-nowrap border border-[color:var(--Dark-06,#E8E8E8)] bg-white self-stretch justify-center mt-6 pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              className="w-full"
              aria-label="Your name"
              aria-role="textbox"
            />
          </div>
          <div className="text-neutral-700 text-lg font-semibold self-stretch mt-10 max-md:max-w-full">
            Email
          </div>
          <div className="text-neutral-400 text-base leading-8 whitespace-nowrap border border-[color:var(--Dark-06,#E8E8E8)] bg-white self-stretch justify-center mt-6 pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              className="w-full"
              aria-label="Your email"
              aria-role="textbox"
            />
          </div>
          <div className="text-neutral-700 text-lg font-semibold self-stretch mt-8 max-md:max-w-full">
            Confirm Password
          </div>
          <div className="text-neutral-400 text-base leading-8 whitespace-nowrap border border-[color:var(--Dark-06,#E8E8E8)] bg-white self-stretch justify-center mt-6 pl-6 pr-16 py-6 rounded-xl border-solid items-start max-md:max-w-full max-md:px-5">
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              id="password"
              className="w-full"
              aria-label="Your password"
              aria-role="textbox"
            />
          </div>
          <button
            className="text-white text-xl font-semibold leading-8 whitespace-nowrap bg-orange-600 self-stretch justify-center items-center mt-7 px-16 py-6 rounded-xl max-md:max-w-full max-md:px-5"
            type="submit"
          >
            Sign Up
          </button>
          <div className="text-neutral-700 text-lg font-medium self-center whitespace-nowrap mt-9">
            Or Sign Up with
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78428e13792942da5aacc9700bca13a6996338b31afcc3f3e95d0446f0e87526?apiKey=7ee62b203d884396a364329ab06e1c6e&"
            alt=""
            className="aspect-[3.58] object-contain object-center w-[197px] overflow-hidden self-center max-w-full mt-8"
          />
          <div className="text-orange-600 text-lg self-center whitespace-nowrap mt-14 mb-6 max-md:mt-10">
            Already have an account?{" "}
            <span className="font-semibold text-orange-600">Login</span>
          </div>
        </form>
      );
};

export default Test;



