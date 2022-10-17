import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = (props) => {
    const params = useParams();
    return (
        <>
            <h1>One quote</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
