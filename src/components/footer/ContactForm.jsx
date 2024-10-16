import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("movqqegd");
  const [checkSuceeded, setcheckSuceeded] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setcheckSuceeded(true);
      const timeout = setTimeout(() => {
        setcheckSuceeded(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <>
      {!checkSuceeded ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-xl">Enter Your Email Address</label>
          <input
            className=" text-black w-full pl-4 lg:text-xl rounded-full outline-none   h-10"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            cols={10}
            rows={3}
            id="message"
            name="message"
            className="border-none outline-none text-black p-1 rounded-lg"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="rounded-full text-white bg-black border-2 border-solid outline-none w-28 h-8 text-sm font-bold "
          >
            {checkSuceeded ? "Submitting" : "Submit"}
          </button>
        </form>
      ) : (
        <p>Thanks for joining!</p>
      )}
    </>
  );
}

export default ContactForm;
