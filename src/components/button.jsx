const Button = (props) => {
    return (
        <>
            <button className="border-2 h-max p-2 bg-white" onClick={ props.onClick }>{props.children}</button>
        </>
    );
};

export default Button;