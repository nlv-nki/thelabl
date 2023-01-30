const CatalogItem = (props) => {
  return (
    <div className="catalogItem">
      {props.label !== undefined && <div className="catalogItem__label catalogItem__label--purple">{props.label}</div>}

      <div className="catalogItem__link-image">
        <figure className="catalogItem__image">
          <img alt={props.name} className="catalogItem____img" src={props.image} />
        </figure>
      </div>
      <div className="catalogItem__content">
        <div className="catalogItem__title">{props.name}</div>
      </div>
      <div className="catalogItem__footer">
        <p className="catalogItem__price">
          от {props.price}
          <span>₽</span>
        </p>
      </div>
    </div>
  );
};

export default CatalogItem;
