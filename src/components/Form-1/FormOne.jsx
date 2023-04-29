import React, { useState } from "react";

//css
import "./form1.css";

function FormOne() {
    //form fields state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dob: "",
    });

    //error message state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        dob: "",
    });

    //input data storing & validating function
    const handleDataChange = (e) => {
        //storing input data to state
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

        //validating fields while changing input
        if (e.target.value === "") {
            setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
        } else {
            setErrors({ ...errors, [e.target.name]: "" });
        }

        //additional validation for email
        if (e.target.name === "email" && e.target.value !== "") {
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
                setErrors({ ...errors, [e.target.name]: "Invalid mail" });
            }
        }
    };

    //form submission function
    const handleFormSubmit = (e) => {
        e.preventDefault();
        validateFields(formData);
    };

    //validating all fields when form submitted
    const validateFields = () => {
        const keys = Object.keys(formData);
        keys.map((key) => {
            if (formData[key] === "") {
                setErrors((prev) => ({ ...prev, [key]: `${key} is required` }));
            } else {
                setErrors((prev) => ({ ...prev, [key]: "" }));
            }

            //checking if email is valid when field is not empty
            if (key === "email") {
                if (
                    formData[key] !== "" &&
                    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData[key])
                ) {
                    setErrors((prev) => ({ ...prev, [key]: "invalid email" }));
                }
            }
        });
    };

    //scroll to bottom function
    const viewSecondForm = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };
    return (
        <section className="main-container">
            <h1>First Form</h1>
            <p>onSubmit, onChange validation</p>
            <form onSubmit={handleFormSubmit}>
                <div className="input-container">
                    <label htmlFor="firstName">
                        first name<span>*</span>
                    </label>
                    <input
                        name="firstName"
                        value={formData?.firstName}
                        type="text"
                        onChange={handleDataChange}
                        placeholder="firstname"
                    />
                    <span className="error-message">{errors?.firstName}</span>
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">
                        last name<span>*</span>
                    </label>
                    <input
                        name="lastName"
                        value={formData?.lastName}
                        type="text"
                        onChange={handleDataChange}
                        placeholder="lastname"
                    />
                    <span className="error-message">{errors?.lastName}</span>
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">
                        email<span>*</span>
                    </label>
                    <input
                        name="email"
                        value={formData?.email}
                        type="email"
                        onChange={handleDataChange}
                        placeholder="email"
                    />
                    <span className="error-message">{errors?.email}</span>
                </div>
                <div className="input-container">
                    <label htmlFor="lastName">
                        gender<span>*</span>
                    </label>
                    <div className="gender">
                        <input
                            name="gender"
                            value={"male"}
                            type="radio"
                            onChange={handleDataChange}
                        />
                        <input
                            type="radio"
                            onChange={handleDataChange}
                            value={"female"}
                            name="gender"
                        />
                    </div>

                    <span className="error-message">{errors?.gender}</span>
                </div>
                <div className="input-container">
                    <label htmlFor="date">
                        date<span>*</span>
                    </label>
                    <input
                        name="dob"
                        value={formData?.date}
                        type="date"
                        onChange={handleDataChange}
                    />
                    <span className="error-message">{errors?.dob}</span>
                </div>
                <button type="submit">submit</button>
            </form>
            <span
                className="button"
                onClick={viewSecondForm}
            >
                View 2nd Form
            </span>
        </section>
    );
}

export default FormOne;
