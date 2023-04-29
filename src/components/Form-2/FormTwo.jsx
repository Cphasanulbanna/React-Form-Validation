import React, { useState } from "react";

//css
import "./form2.css";

const FormTwo = () => {
    //form field data state
    const [formData, setFormData] = useState({
        firstName: "",
        place: "",
        country: "",
        skills: [],
    });

    //error message state
    const [errors, setErrors] = useState({
        firstName: "",
        place: "",
        country: "",
        skills: "",
    });

    //storing data into state
    const handleDataChange = (e) => {
        const value = e.target.value;
        const fieldName = e.target.name;

        if (fieldName === "skills") {
            const isContain = formData?.skills.includes(value);
            setFormData({
                ...formData,
                skills: isContain
                    ? formData?.skills.filter((skill) => skill !== value)
                    : [...formData.skills, value],
            });
        } else {
            setFormData({ ...formData, [fieldName]: value });
        }
    };

    //handling error messages
    const validateFields = (e) => {
        const value = e.target.value;
        const field = e.target.name;

        if (value === "") {
            setErrors({ ...errors, [field]: "This field is required" });
        } else {
            setErrors({ ...errors, [field]: "" });
        }

        //validating country selection
        if ((field === "country" && formData?.country === "") || formData?.country === "select") {
            setErrors({ ...errors, [field]: "This field is required" });
        }

        //validating skills
        if (field === "skills") {
            if (formData?.skills.length === 0) {
                setErrors({ ...errors, [field]: "This field is required" });
            } else {
                setErrors({ ...errors, [field]: "" });
            }
        }
    };

    //form submit function
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="main-container">
            <h1>Second Form</h1>
            <p>onBlur validation</p>
            <form
                action=""
                onSubmit={handleFormSubmit}
            >
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
                        onBlur={validateFields}
                    />
                    <span className="error-message">{errors?.firstName}</span>
                </div>

                <div className="input-container">
                    <label htmlFor="place">
                        place<span>*</span>
                    </label>
                    <input
                        name="place"
                        value={formData?.place}
                        type="text"
                        onChange={handleDataChange}
                        placeholder="place"
                        onBlur={validateFields}
                    />
                    <span className="error-message">{errors?.place}</span>
                </div>
                <div className="input-container">
                    <label htmlFor="country">
                        country<span>*</span>
                    </label>
                    <select
                        onChange={handleDataChange}
                        name="country"
                        value={formData?.country}
                        onBlur={validateFields}
                    >
                        <option>select</option>
                        <option value="UAE">UAE</option>
                        <option value="INDIA">INDIA</option>
                        <option value="KSA">KSA</option>
                    </select>
                    <span className="error-message">{errors?.country}</span>
                </div>

                <div className="input-container">
                    <label htmlFor="skills">
                        skills<span>*</span>
                    </label>
                    <div className="checkbox-container">
                        <div className="check-box">
                            <label htmlFor="react">React</label>
                            <input
                                value="React"
                                type="checkbox"
                                name="skills"
                                id="react"
                                onChange={handleDataChange}
                                onBlur={validateFields}
                            />
                        </div>
                        <div className="check-box">
                            <label htmlFor="Js">Js</label>
                            <input
                                value="Js"
                                type="checkbox"
                                name="skills"
                                id="Js"
                                onChange={handleDataChange}
                                onBlur={validateFields}
                            />
                        </div>
                        <div className="check-box">
                            <label htmlFor="python">python</label>
                            <input
                                value="python"
                                type="checkbox"
                                name="skills"
                                id="python"
                                onChange={handleDataChange}
                                onBlur={validateFields}
                            />
                        </div>
                    </div>

                    <span className="error-message">{errors?.skills}</span>
                </div>
                <button type="submit">submit</button>
            </form>
        </section>
    );
};

export default FormTwo;
