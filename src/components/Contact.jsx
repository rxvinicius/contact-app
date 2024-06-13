import { Link } from "react-router-dom";

const formatText = (text, size = 20) =>
  text ? `${text.substring(0, size)}${text.length >= size ? "..." : ""}` : "";

const Contact = ({ contact }) => (
  <Link to={`/contacts/${contact.id}`} className="contact__item">
    <div className="contact__header">
      <div className="contact__image">
        <img
          src={contact.photoUrl || "/assets/icons/profile-placeholder.svg"}
          alt={contact.name}
        />
      </div>

      <div className="container_contact_name_photo">
        <p className="contact_name">{formatText(contact?.name, 20)}</p>
        <p className="contact_title">{contact.title}</p>
      </div>
    </div>

    <div className="contact__body">
      <p>
        <i className="bi bi-envelope"></i> {formatText(contact?.email)}
      </p>
      <p>
        <i className="bi bi-geo"></i> {contact.address}
      </p>
      <p>
        <i className="bi bi-telephone"></i> {contact.phone}
      </p>
      <p>
        {contact.status.toLocaleLowerCase() === "active" ? (
          <i className="bi bi-check-circle"></i>
        ) : (
          <i className="bi bi-x-circle"></i>
        )}
        {contact.status}
      </p>
    </div>
  </Link>
);

export default Contact;
