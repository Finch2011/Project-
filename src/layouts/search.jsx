import "./search.scss"

function Search() {
    return (
        <>
        <div className="search-conteiner">
            <img src="../public/assets/search.svg" alt="" />
            <input type="search" placeholder="Search song, playslist, artist..." />
        </div>
        </>
    )
}
export default Search