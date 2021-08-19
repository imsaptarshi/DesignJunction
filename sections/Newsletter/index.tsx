import React, { useState } from "react";
import { ArrowDown } from "react-iconly";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { toast } from "react-hot-toast";

const NewsLetter: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setSubscribed] = useState(false);

  return (
    <div>
      <div className="mx-auto pt-4 w-16 h-16 bg-white rounded-full transform translate-y-8">
        <div className="flex justify-center">
          <ArrowDown primaryColor="black" size="large" />
        </div>
      </div>
      <div className="px-10 lg:px-0 text-center light-gradient rounded-xl text-xl md:text-2xl lg:text-3xl font-medium lg:font-medium xl:font-bold pt-20 pb-14 lg:mx-20">
        <div className="px-4 md:px-20 xl:px-52">
          Be the first to be notified about newly added resources!
        </div>
        <MailchimpSubscribe
          url={String(process.env.NEXT_PUBLIC_MAILCHIMP_URL)}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <form
                className="mx-auto mt-8 flex h-14 md:w-96 inner-shadow bg-blue-500.5 rounded-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  subscribe({ EMAIL: email });
                  toast.promise(
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        if (status === "error") {
                          setEmail("");
                          reject();
                        } else {
                          setSubscribed(true);
                          setEmail("");
                          resolve("success");
                        }
                      }, 2000);
                    }),
                    {
                      loading: "Just a moment...",
                      success: <b>We got you!</b>,
                      error: !isSubscribed ? (
                        <b>Something went wrong.</b>
                      ) : (
                        <b>You are already subscribed.</b>
                      ),
                    }
                  );
                  console.log(status, message);
                }}
              >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  required
                  type="email"
                  name="email"
                  className="rounded-l-full newsletter-input pl-8 w-5/12 md:w-60 bg-transparent outline-none text-base lg:text-lg"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="ml-auto hover:bg-blue-900 hover:shadow-lg duration-200 bg-blue-700 rounded-full text-sm font-medium lg:text-base lg:font-medium px-6 py-2"
                >
                  Count me in!
                </button>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
