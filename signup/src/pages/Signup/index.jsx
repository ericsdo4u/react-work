import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import style from '../../component/pageTemplate/index.module.css';
import image from "../../assets/signup.png"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Icon} from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';


const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z0-9\-_.]{3,20}$/, 'Username should only contain letters, digits, -, _, or .')
            .required('Username is required'),

        password: Yup.string()
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/, 'Invalid password')
            .required('Password is required'),
    });

    const handleSubscribe = async (values, {resetForm}) => {
        setIsLoading(true);
        try {
            const payload = {
                password: values.password,
                status: 'signed_up',
                username: values.username

            };
            console.log(payload)
            const response = await axios.post("http://localhost:8080/signup", payload);

            if (response.data.successful) {
                toast.success(`Hi ${values.username}, You are now a citizen`, {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                resetForm();
            } else {
                toast.error('signup failed. Please try again', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error('signup failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.imgContainer}>
                <img src={image} alt="" className={style.image}/>
            </div>
            <div className={style.formDiv}>
                    <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={validationSchema}
                onSubmit={handleSubscribe}
            >
                {({values, errors, touched, handleChange, handleBlur}) => (
                    <Form>
                        <div className={style.container}>
                            <div className={style.signup}>
                                <h1>Welcome !</h1>
                                <p>Sign up by providing the information below</p>
                            </div>
                        </div>

                        <div className={style.inputSection}>
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{
                                        borderColor: errors.username && touched.username ? 'red' : 'inherit',
                                    }}
                                />
                                {errors.username && touched.username &&
                                    <div className={style.error}>{errors.username}</div>}
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{
                                        borderColor: errors.password && touched.password ? 'red' : 'inherit',
                                    }}
                                />
                                {errors.password && touched.password &&
                                    <div className={style.error}>{errors.password}</div>}
                            </div>
                            <div className={style.btn}>
                                <button type="submit" className={style.btn}>
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <Icon width={24} height={24} icon={loadingLoop}/>
                                        </div>
                                    ) : (
                                        'Signup'
                                    )}
                                </button>
                            </div>
                        </div>
                    </Form>
                    )}
</Formik>
            </div>
<ToastContainer/>
</div>
)
;
}
;
export default Signup;