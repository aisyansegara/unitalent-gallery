// ProductSearchFormSection.js
import React from 'react';
import SearchForm from './SearchForm';

const ProductSearchFormSection = ({ onSearch }) => {
    return (
        <div className="product-search-form-section">
            <SearchForm onSearch={onSearch} />
        </div>
    );
};

export default ProductSearchFormSection;

// import React, {useState} from "react";
// import Container from "react-bootstrap/Container";
// import { Form, Button } from "react-bootstrap";

// const SearchForm = ({ onSearch } ) => {
//     const [query, setQuery] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSearch(query);
//     };

//     return (
//         <Container>
//             <Form className="search-form d-flex justify-content-center mt-5" onSubmit={handleSubmit}>
//                 <Form.Group className="me-2 w-50">
//                     <Form.Control className="border-2" type="text" placeholder="Search for product name..." value={query} onChange={(e) => setQuery(e.target.value)} />
//                 </Form.Group>
//                 <Button variant="success" type="submit">Search</Button>
//             </Form>
//         </Container>
//     )
// };
// export default SearchForm;