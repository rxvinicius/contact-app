import Contact from "./Contact";

const ContactList = ({ data, currentPage, getAllContacts }) => (
  <main className="main">
    {data?.content?.length === 0 ? (
      <div>No Contacts. Please add a new contact.</div>
    ) : (
      <>
        {/* Contact info */}
        <ul className="contact__list">
          {data?.content?.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>

        {/* Pagination */}
        {data.totalPages > 1 && (
          <div className="pagination">
            <a
              onClick={() => getAllContacts(currentPage - 1)}
              className={currentPage === 0 && "disabled"}
            >
              &laquo;
            </a>

            {[...Array(data.totalPages).keys()].map((page, index) => (
              <a
                key={index}
                onClick={() => getAllContacts(page)}
                className={currentPage === page && "active"}
              >
                {page + 1}
              </a>
            ))}

            <a
              onClick={() => getAllContacts(currentPage + 1)}
              className={currentPage + 1 === data.totalPages && "disabled"}
            >
              &raquo;
            </a>
          </div>
        )}
      </>
    )}
  </main>
);

export default ContactList;
