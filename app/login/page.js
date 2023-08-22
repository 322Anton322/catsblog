'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useCallback, useRef } from "react";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const router = useRouter();

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const credentials = {
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
        };

        console.log(credentials);

        router.replace('/');
    }, [emailRef, passwordRef, router]);

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-red-600 sm:text-3xl">
                        Login
                    </h1>
                    <form
                        action=""
                        onSubmit={onSubmit}
                        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                    >
                        <p className="text-center text-lg font-medium">
                            Sign in to your account
                        </p>

                        <div>
                            <label for="email" className="sr-only">
                                Email
                            </label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                    ref={emailRef}
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" className="sr-only">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                    ref={passwordRef}
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-red-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <Link className="underline" href="/">
                                Sign up
                            </Link >
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
