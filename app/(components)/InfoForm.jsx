"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InfoForm = ({ post }) => {

    const EDITMODE = post._id === "new" ? false : true
    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


    if (EDITMODE) {
        const response = await fetch(`api/Posts/${post._id}`, {
            method: "PUT",
            body: JSON.stringify({ formData }),
                "Content-Type": "application/json",
        });

        if (!response.ok) {
            console.log(response);
            throw new Error("Failed to update Post");
        }
    } else {
        const response = await fetch("/api/Posts", {
            method: "POST",
            body: JSON.stringify({ formData }),
                "Content-Type": "application/json"
        });
    }



        router.refresh();
        router.push("/");
    };

    const startingPostData = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        about_me: ""
    };
    if (EDITMODE) {
        startingPostData["first_name"] = post.first_name
        startingPostData["last_name"] = post.last_name
        startingPostData["email"] = post.email
        startingPostData["phone"] = post.phone
        startingPostData["about_me"] = post.about_me


    }

    const [formData, setFormData] = useState(startingPostData);

    return (
        <div>
            <h3 className="flex justify-center mt-10">{ EDITMODE ? "Update your Post" : "Create your Post"}</h3>

        <div className="flex justify-center mt-10">
            <form method="post" onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={formData.first_name}
                            type="text"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            name="first_name"
                            placeholder="Name"
                        />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            id="grid-last-name"
                            name="last_name"
                            onChange={handleChange}
                            value={formData.last_name}
                            type="text"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input
                            id="grid-email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            type="email"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="example@example.com"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
                            Phone
                        </label>
                        <input
                            id="grid-phone"
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
                            type="tel"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="123-456-7890"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-about-me">
                            About Me
                        </label>
                        <input
                            id="grid-about-me"
                            name="about_me"
                            onChange={handleChange}
                            value={formData.about_me}
                            type="text"
                            required
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="A few words about you"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="italic font-serif bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        value={EDITMODE ? "Edit your Post" : "Submit your Post"}
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default InfoForm;
