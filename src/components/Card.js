import React from 'react';
import { getImageUrl } from '../../config';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      summaryShowing: false,
        like: false,
    };
  }

    likeMovie = () => {
        this.setState(prevState => ({
            like: !prevState.like,
        }));
    };


  toggleSummary = () => {
    const { summaryShowing } = this.state;

    this.setState({
      summaryShowing: !summaryShowing,
    });
  };

  render() {
    const { summaryShowing } = this.state;
    const {
      data: {
        poster_path,
        original_title,
        overview,
        release_date,
        vote_average,
        vote_count,
      },
    } = this.props;

    return (
      <div className="card">
        <div className="card__image" style={{ backgroundImage: `url(${getImageUrl(poster_path)})` }} />

        <div className="card__title">
          {original_title}
        </div>

          <div onClick={() => this.likeMovie()} className="card__like">
              <i className={!this.state.like ? 'fa fa-heart-o' : 'fa fa-heart'}/>
          </div>

        <div className="card__subtitle">
          <span>{release_date}</span>
          <span>{vote_average} ({vote_count} votes)</span>
        </div>

        {summaryShowing
          ? (
            <div className="card-info">
              <div className="card-info__header">Summary</div>
              <div className="card-info__description">
                {overview}
              </div>
            </div>
          )
          : null
        }

        <div className="button" onClick={() => this.toggleSummary()}>Show summary</div>
      </div>

    );
  }
}

export default Card;
