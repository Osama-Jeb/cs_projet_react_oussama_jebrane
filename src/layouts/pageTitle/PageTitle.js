import "./_pageTitle.scss";


export const PageTitle = (props) => {
    return (
        <>
            <div className="pageTitle">
                <h1 className="text-light fw-bolder">{props.children}</h1>
            </div>
        </>
    )
}