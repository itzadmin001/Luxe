
function Container(props) {
    return (
        <div className={`${props.clasess} max-w-screen-2xl mx-auto`}>
            {props.children}
        </div>
    )
}

export default Container
