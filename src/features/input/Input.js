import "./input.css";
import { useForm } from '@formspree/react';

const Input = () => {
    const [state, handleSubmit, reset] = useForm('xleqapwj');
    if (state.succeeded) {
        return (
            <div className="reset-block">
                <p className="input-text">Thank you for signing up!</p>
                <button 
                    onClick={reset}
                    className="btn-reset"
                >
                    Reset
                </button>
            </div>
        );
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                />
                <button 
                    className="btn-submit"
                    type="submit" 
                    disabled={state.submitting}>
                        Sign up
                </button>
            </form>
        </div>
    )
}

export default Input;