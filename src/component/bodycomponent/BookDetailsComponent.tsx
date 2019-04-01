import * as React from "react";
import AddReviewComponent from './bookcomponents/AddReviewComponent';

export default class BookDetailsComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            book: [],
            reviewlist: []
        }
    }

    async componentDidMount() {
        await this.fetchBookInformation();
        await this.fetchReviews(this.state.book.title);
    }

    async fetchBookInformation() {
        const response = await fetch(`http://localhost:8080/book/${this.props.match.params.id}`);
        const json = await response.json();
        this.setState({ book: json });
    }

    async fetchReviews(booktitle: string) {
        const response = await fetch(`http://localhost:8080/book-review/${booktitle}`);
        const json = await response.json();
        this.setState({ reviewlist: json });
    }

    render() {
        const { book } = this.state;
        return (
            <div>
                <img src={book.imageUrl} alt={book.title} />
                <h3>{book.title}</h3>
                {this.displayReviews()}
                <AddReviewComponent title={book.title} />
            </div>
        );
    }

    private displayReviews() {
        const { reviewlist } = this.state;
        return (
            <div>
                {reviewlist.map((review: any) =>
                    <div key={review.id}>
                        <h4>{review.review}</h4>
                    </div>
                )}
            </div>
        );
    }
}
