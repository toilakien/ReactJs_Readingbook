function BreakCrumb({location}) {
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb">
                    <li className="text-primary "><a>Home</a></li>
                    <li className="text-primary "><a>{location}</a></li>
                </ol>
            </nav>
        </div>
    )
}
export default BreakCrumb;