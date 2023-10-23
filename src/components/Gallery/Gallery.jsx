import "./Gallery.scss";

export default function Gallery({ data }) {
  return (
    <div className="c-gallery">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-4">
            <div className="c-gallery__item">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <button className="b-btn b-btn--sec">Detalle</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
