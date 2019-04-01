import * as React from 'react';
import axios from 'axios';

export default class AddReviewComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            review: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    private handleSubmit(event: any) {
        event.preventDefault();
        axios.post("http://localhost:8080/add-book-review", {
          review: this.state.review,
          title: this.props.title,
          userId: null,
          stars: 4
        })
            .catch(error => alert(error));
    }

   

    handleChange(event: any) {
        this.setState({ review: event.target.value });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.review} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}