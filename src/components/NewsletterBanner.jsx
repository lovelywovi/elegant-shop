function NewsletterBanner({ className }) {
  return (
    <div
      className={
        "bg-[url('/src/assets/newsletter.png')] h-96 w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-black text-4xl font-bold " +
        className
      }
    >
      <h2 className="text-4xl font-medium">Join Our Newsletter</h2>
      <p className="text-lg font-normal pt-2">
        Sign up for deals, new products and promotions
      </p>
      <div className="flex items-center justify-center mt-4 text-lg font-medium gap-4 border-b-[1px] border-[#6C7275] py-2 pt-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.07675 6.53081C4.23299 6.01864 4.70925 5.64606 5.27254 5.64606H19.2725C19.8358 5.64606 20.3121 6.01864 20.4683 6.53081L12.2725 11.9947L4.07675 6.53081ZM2.52257 6.88232C2.52244 6.89032 2.52242 6.89832 2.52254 6.90631V16.8961C2.52254 18.4148 3.75376 19.6461 5.27254 19.6461H19.2725C20.7913 19.6461 22.0225 18.4148 22.0225 16.8961V6.90629M20.5225 8.29744V16.8961C20.5225 17.5864 19.9629 18.1461 19.2725 18.1461H5.27254C4.58218 18.1461 4.02254 17.5864 4.02254 16.8961V8.29744L11.8565 13.5201C12.1084 13.688 12.4366 13.688 12.6886 13.5201L20.5225 8.29744ZM22.0225 6.88235C22.0151 5.36987 20.7868 4.14606 19.2725 4.14606H5.27254C3.75834 4.14606 2.52997 5.36986 2.52257 6.88232"
            fill="#141718"
          />
        </svg>

        <input
          type="email"
          placeholder="Email address"
          className="text-[#292b2c] bg-transparent focus:outline-none font-medium w-[30rem]"
        />
        <button className="text-[#6C7275]">Signup</button>
      </div>
    </div>
  );
}

export default NewsletterBanner;
