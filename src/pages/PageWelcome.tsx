import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, books } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>
			<p>There are {books.length} books:</p>
			<div className="books">
				{books.map((book) => {
					return (
						<div className="book" key={book._id}>
							<img src={book.imageUrl} />
							<div className="info">
								<div className="title">
									<a href={book.buyUrl}></a> {book.title}
								</div>
								<div className="description">
									{book.description}
								</div>
								<div className="language">{book.language}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
