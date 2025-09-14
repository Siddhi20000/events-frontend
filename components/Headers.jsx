import "bootstrap-icons/font/bootstrap-icons.css";

const Headers=({ searchTerm, setSearchTerm })=>{
    return(
        <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <img src="https://help.meetup.com/hc/theming_assets/01K3RD8CPEASEWDEXZ6XC1DPVV" alt="" width="75" height="45" />
                <form className="d-flex align-items-center justify-content-between" role="search">
                    <i className="bi bi-search bg-light text-secondary me-2" style={{ fontSize: "12px" }}></i>
                    <input className="form-control form-control-sm bg-light text-secondary border-light" 
                    type="search" 
                    placeholder="Search by title and tags"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
            </div>
        </nav>
        <hr />
        </>
    )
}

export default Headers;


