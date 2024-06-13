const SignupForm = () => {



    return (
        <div>
            <form method="post">
                <div className="flex flex-col gap-3 w-1/2">
                    <h1>Sign up</h1>
                    <label className="italic font-semibold">Username</label>
                    <input id="username"
                     name="username"
                     type="description"
                     required={true}/>

                    <label className="italic font-semibold">Password</label>
                    <input id="password"
                     name="password"
                     type="description"
                     required={true}/>

                    <label className="italic font-semibold">Confirm Password</label>
                    <input id="confirm_password"
                     name="confirm_password"
                     type="description"
                     required={true}/>
                </div>
            </form>
        </div>
    )
}

export default SignupForm;
