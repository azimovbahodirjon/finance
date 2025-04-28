import { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import "./Transactions.scss";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getAvatar = (rawPath) => {
  const fileName = rawPath.split("/").pop();
  return `/images/avatars/${fileName}`;
};

function Transactions() {
  const { data, isPending: isLoading } = useCollection("transactions");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Latest");
  const [categoryOption, setCategoryOption] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = data
    ?.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCategory =
        categoryOption === "All" || item.category === categoryOption;
      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "Oldest":
          return new Date(a.date) - new Date(b.date);
        case "A to Z":
          return a.name.localeCompare(b.name);
        case "Z to A":
          return b.name.localeCompare(a.name);
        case "Highest":
          return b.amount - a.amount;
        case "Lowest":
          return a.amount - b.amount;
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => setCurrentPage(page);
  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortOption("Latest");
    setCategoryOption("All");
    setCurrentPage(1);
  };

  return (
    <section className="transactions-container">
      <h2 className="transactions-title">Transactions</h2>
      <div className="transactions-menu">
        <div className="transactions-menu-wrap">
          <div className="input-wrapper">
            <input
              className="transactions-inp"
              type="text"
              placeholder="Search transaction"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <img
              src="/images/icon-search.svg"
              alt="Search"
              className="search-icon"
            />
          </div>
          <div className="transactions-navmenu">
            <div className="transactions-select">
              <p className="select-label">Sort by</p>
              <select
                className="select"
                value={sortOption}
                onChange={(e) => {
                  setSortOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </div>
            <div className="transactions-select">
              <p className="select-label">Category</p>
              <select
                className="select"
                value={categoryOption}
                onChange={(e) => {
                  setCategoryOption(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">All Transactions</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
              </select>
            </div>
            <button className="clear-filters-btn" onClick={handleClearFilters}>
              Clear Filters
            </button>
          </div>
        </div>

        <div className="nav-transaction">
          <div>Recipient / Sender</div>
          <div>Category</div>
          <div>Transaction Date</div>
          <div className="nav-text-end">Amount</div>
        </div>

        <div className="transaction-list">
          {isLoading ? (
            <div className="loading-message">Loading transactions...</div>
          ) : paginatedData?.length > 0 ? (
            paginatedData.map((trans, idx) => (
              <div key={idx} className="transaction-item">
                <div className="name-block">
                  <img
                    src={getAvatar(trans.avatar)}
                    alt={trans.name}
                    className="avatar-img"
                    onError={(e) => {
                      e.currentTarget.src =
                        "/images/avatars/default-avatar.png";
                    }}
                  />
                  <h3>{trans.name}</h3>
                </div>
                <div className="info-block">
                  <h3>{trans.category}</h3>
                </div>
                <div className="info-block">
                  <h3>{formatDate(trans.date)}</h3>
                </div>
                <div className="amount-block">
                  <h3
                    className="amount"
                    style={{
                      color: trans.amount < 0 ? "#F50057" : "#277C78", // Red for negative, green for positive
                    }}
                  >
                    {trans.amount < 0
                      ? `-$${Math.abs(trans.amount).toFixed(2)}`
                      : `+$${trans.amount.toFixed(2)}`}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <div className="no-transactions-message">
              No transactions found.
            </div>
          )}
        </div>

        {paginatedData?.length > 0 && (
          <div className="pagination">
            <button
              className={`prev-next ${currentPage === 1 ? "disabled" : ""}`}
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            <div className="page-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`page-button ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageClick(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              className={`prev-next ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Transactions;
