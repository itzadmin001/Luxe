
function Container(props) {
    return (
        <div className={`${props.clasess} max-w-[1280px] mx-auto `}>
            {props.children}
        </div>
    )
}

export default Container
