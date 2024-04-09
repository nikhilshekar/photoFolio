import styles from  "./navbar.module.css"


// for upper nav bar of the page
export default function Navbar(){
    return(
        <>
            <div className={styles.navbar}>    
                {/* name and logo of photo album  */}
             
                <span>PhotoAlbum</span>
            </div>
        </>
    )
}