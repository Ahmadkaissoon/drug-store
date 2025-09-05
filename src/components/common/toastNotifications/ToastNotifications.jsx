import toast, { ToastBar, Toaster } from "react-hot-toast";

// toast notification component, using react-hot-toast library
function ToastNotifications() {
  // console.log("clicked not");
  return (
    <>
      <Toaster
        gutter={10} // gap between toasts
        position="top-right" // toast position
        toastOptions={{
          duration: 5000, // duration before disappearing
          style: {
            // style of toast
            padding: "1rem 1rem",
            border: "1px solid rgba(var(--hover-color), .2)",
            background: "rgba(var(--main-color), .75)",
            backdropFilter: "blur(15px)",
            color: "rgb(var(--white-color))",
          },
        }}
      >
        {(t) => (
          // disappear the toast on click on it
          <div onClick={() => toast.dismiss(t.id)}>
            <ToastBar toast={t} />
          </div>
        )}
      </Toaster>
    </>
  );
}

export default ToastNotifications;
