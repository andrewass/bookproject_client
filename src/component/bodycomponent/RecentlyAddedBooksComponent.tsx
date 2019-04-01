import axios from "axios";
import * as React from "react";
import { Link } from 'react-router-dom';


export default class RecentlyAddedBooksComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/recent-books", {
            params: {
                count: this.props.count
            }
        })
            .then(response => {
                this.setState({
                    books: response.data
                })
            })
            .catch(error => alert("Failed getting books " + error))
    }

    render() {
        const { books } = this.state;
        return (
            <div>
                <h1>Recently added books</h1>
                {books.map((book: any) =>
                    <div key={book.id}>
                        <Link to={`/book/${book.id}`} >
                            <img src={book.imageUrl} alt={book.title} />
                            <h3>{book.title}</h3>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}