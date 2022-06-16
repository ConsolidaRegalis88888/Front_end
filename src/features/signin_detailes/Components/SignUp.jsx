import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <h2>Sign up</h2> <span>Already have an account?&nbsp;</span> <a>Sign in</a>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password"/>
                <button>Sign up</button>
            </form>
            <p>By signing in to your account you agree with our <a><b>Privacy Policy</b></a> and <a><b>Terms
                of Use</b></a></p>
        </div>
    );
};

export default SignUp;