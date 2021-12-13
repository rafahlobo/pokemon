import "../styles/components/container.scss"

const Container = props => {
    return (
        <div className="Container">
            {props.children}
        </div>
    )
}

export default Container