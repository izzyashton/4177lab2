function ApartmentCard({ image, title, address, rating, tags }) {
  return (
    <div className="apartment-card">
      <img src={image} alt={title} />

      <div className="card-content">
        <div className="rating">⭐ {rating}</div>

        <h3>{title}</h3>
        <p>{address}</p>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard;
