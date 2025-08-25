import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import drugStoreImg from "../../../assets/common/images/drugStoreImg.jpg";
import drugs from "../../../assets/common/images/drugs.png";
import Button from "@/components/common/Button";
import REGISTER_SCHEMA from "../../../data/dashboard/registerSchema/RegisterSchema";

const Register = () => {
  const schema = z.object(REGISTER_SCHEMA);

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
    <div dir="rtl" className="w-full h-full flex overflow-hidden">
      <div className="h-full lg:w-[45%] md:w-[50%]  w-full bg-main-color flex justify-center items-center !p-4">
        <div className="flex flex-col justify-center py-40  max-w-[450px] w-full gap-8">
          <div className="h-full w-full flex flex-col justify-center ">
            <h3 className="text-size-28 text-white-color text-center font-extrabold">
              أهلا وسهلا في DRUG SOTRE{" "}
            </h3>

          </div>
          <form onSubmit={console.log("success")} id="login-form">
            <div className="flex flex-col gap-10 mb-0">
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
              <div className="flex flex-col gap-6 w-full">
                <label
                  htmlFor="password"
                  className="text-size-24 text-white-color font-normal"
                >
                 تأكيد كلمة المرور :
                </label>
                <input
                  {...register("confirmPassword")}
                  type={"password"}
                  placeholder={"Enter your password again"}
                  name={"confirmPassword"}
                  id="confirmPassword"
                  label={"Confirm Password"}
                  className="flex text-main-color h-[53px] rounded-lg font-light bg-white-color  placeholder:text-placeholder-color indent-4 outline-none text-base shadow-shadow"
                />
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center">
            <span className="text-white-color text-base">
              لديك حساب بالفعل ؟{" "}
              <a href="/login" className="text-accept_color underline hover:text-accept_color/80 transition">
                تسجيل الدخول
              </a>
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <Button
              title={"تسجيل دخول"}
              styleType="form"
              color="accept_color"
              isSubmit={true}
              id={"login-form"}
            />
          </div>
        </div>
      </div>
      <div className="h-full lg:w-[55%] md:w-[50%] w-0 bg-main-color flex justify-center items-center ">
        <div className="h-[100svh] lg:w-[55vw] md:w-[50vw] w-0">
          <img
            src={drugs}
            alt="drug-image"
            className="h-[100svh] lg:w-[55vw] md:w-[50vw] w-0 object-cover shadow-shadow "
          />
        </div>
        <div className="bg-black/75 absolute h-[100svh] lg:w-[55vw] md:w-[50vw] w-0"></div>
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
}
 
export default Register;