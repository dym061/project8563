import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadCatalogData = async () => {
      const response = await fetch("/catalog.json");
      const data = await response.json();
	  data.sort((a, b) => a.category.localeCompare(b.category)); // Sort categories alphabetically
      setCatalog(data);
    };
    loadCatalogData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? catalog.flatMap((category) => category.items)
      : catalog.find((category) => category.category === selectedCategory)
          .items;
		  
  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Navbar />
      <section className="con m2 py1">
        <h1 className="h1 txtfont1 txtcenter">Catalog</h1>
        <div className="catalog_dropdown txtfont3 txtcol4">
          
          <select
            id="category_select"
			className="txtfont3 txtsize16 txtcol4 border bordercol2 border1 borderround1 p2 m2"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>
            {catalog.map((category) => (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            ))}
          </select>
        </div>
        <div className="catalog_items dflex">
          {filteredItems.map((item) => (
            <div 
			  key={item.code} 
			  className="catalog_item shadow1"
			  onClick={() => openModal(item)}
			>
              <img src={item.src} alt={item.code} />
              <span>{item.code}</span>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="modal">
            <div className="modal_overlay" onClick={closeModal}></div>
            <div className="modal_content">
              <button className="close_button" onClick={closeModal}>
                X
              </button>
			  <div className="dflex dflexm">
                <img className="shadow1" src={selectedItem.src} alt={selectedItem.code} />
                <div className="item_info">
                  <h2 className="txtfont3 txtsize24 txtbold">{selectedItem.code}</h2>
                  <p className="txtfont3 txtcol4">{selectedItem.desc}</p>
                  <p>Dimensions: {selectedItem.dim}</p>
                </div>
			  </div>
            </div>
          </div>
        )}
      </section>
      <FloatButtons />
      <Footer />
    </>
  );
};

export default Catalog;