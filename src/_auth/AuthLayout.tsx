import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    const isAutneticated = false;

    return (
        <>
            {isAutneticated ?
                (
                    <Navigate to="/" />
                ) : (
                    <>
                        <section className="flex flex-1 justify-center items-center flex-col py-10">
                            <Outlet />
                        </section>

                        <img
                            src="./public/assets/illustrations/secure.svg"
                            alt="some images"
                            className="hidden xl:block h-screen w-1/2 object-contain bg-no-repeat p-20" />
                    </>
                )}
        </>
    )
}

export default AuthLayout