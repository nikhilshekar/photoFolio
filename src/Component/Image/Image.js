// import styles
import styles from "./image.module.css";

// to show all the images within an album
export default function Image(props) {
  const { image, index, handleImageEdit, handleImageDelete, openLightbox } =
    props;

  return (
    <>
      {/* main container of Image */}
      <div className={styles.imageCard}>
        {/* showing image */}
        <div className={styles.imageBox}>
          <img
            src={image.link}
            alt="image"
            onClick={() => openLightbox(index)}
          />
        </div>

        {/* Image name with buttons to delete or edit image */}
        <div className={styles.imageInfo}>
          {image.name}
          {/* for edit */}
        </div>
        <div className={styles.btnSection}>
          <button
            className={`${styles.imageBtn} ${styles.editBtn}`}
            onClick={() => handleImageEdit(image)}
          > 
          </button>
          <button
            className={`${styles.imageBtn} ${styles.deleteBtn}`}
            onClick={() => handleImageDelete(image)}
          >
          </button>
        </div>
      </div>
    </>
  );
}
