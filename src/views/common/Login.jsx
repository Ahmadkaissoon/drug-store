import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LOGIN_SCHEMA from "../../data/dashboard/loginSchema/LoginSchema";
import drugStoreImg from "../../assets/common/images/drugStoreImg.jpg";
import drugs from "../../assets/common/images/drugs.png";
import Button from "../../components/common/Button";

const Login = () => {
  const schema = z.object(LOGIN_SCHEMA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    // login page with horizontal flex layout
    <div dir="rtl" className="w-full h-full flex overflow-hidden">
      {/* form seciton container */}
      <div className="h-full lg:w-[45%] md:w-[50%]  w-full bg-main-color flex justify-center items-center !p-4">
        {/* form seciton with vertical flex layout */}
        <div className="flex flex-col justify-center py-40  max-w-[450px] w-full gap-8">
          {/* login form header */}
          <div className="h-full w-full flex flex-col justify-center ">
            <h3 className="text-size-28 text-white-color text-center font-extrabold">
              أهلا وسهلا في DRUG SOTRE{" "}
            </h3>
            <div className="text-size-16 text-white-color my-6">
              يمكنك تسجيل الدخول{" "}
            </div>
          </div>
          <form onSubmit={console.log("success")} id="login-form">
            {/* form inputs section */}
            <div className="flex flex-col gap-10 mb-6">
              <div className="flex flex-col gap-6 w-full">
                <label
                  htmlFor="email"
                  className="text-size-24 text-white-color font-normal"
                >
                  البريد الإلكتروني :
                </label>
                <input
                  {...register("email")}
                  type={"email"}
                  placeholder={"name@gmail.com"}
                  name={"email"}
                  id="email"
                  label={"Email"}
                  className="flex text-main-color h-[53px] rounded-lg font-light bg-white-color placeholder:text-placeholder-color indent-4 outline-none text-base shadow-shadow"
                />
              </div>
              <div className="flex flex-col gap-6 w-full">
                <label
                  htmlFor="password"
                  className="text-size-24 text-white-color font-normal"
                >
                  كلمة المرور :
                </label>
                <input
                  {...register("password")}
                  type={"password"}
                  placeholder={"Enter your password"}
                  name={"password"}
                  id="password"
                  label={"Password"}
                  className="flex text-main-color h-[53px] rounded-lg font-light bg-white-color  placeholder:text-placeholder-color indent-4 outline-none text-base shadow-shadow"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center ">
            {/* disable submit button during call login api */}
            <Button
              title={"تسجيل دخول"}
              styleType="form"
              color="accept_color"
              isSubmit={true}
              id={"login-form"}
            />
          </div>
          {/* form buttons section */}
        </div>
      </div>
      {/* login page left section with only a login image */}
      <div className="h-full lg:w-[55%] md:w-[50%] w-0 bg-main-color flex justify-center items-center ">
        <div className="h-[100svh] lg:w-[55vw] md:w-[50vw] w-0">
          <img
            src={drugs}
            alt="drug-image"
            className="h-[100svh] lg:w-[55vw] md:w-[50vw] w-0 object-cover shadow-shadow "
          />
        </div>
        <div className="bg-black/75 absolute h-[100svh] lg:w-[55vw] md:w-[50vw] w-0"></div>
        {/* Main Image in Absolute Position */}
        <div className="absolute m-auto z-[100] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] overflow-hidden rounded-2xl shadow-shadow">
          <img
            src={drugStoreImg}
            alt="main-image"
            className="h-full w-full object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
