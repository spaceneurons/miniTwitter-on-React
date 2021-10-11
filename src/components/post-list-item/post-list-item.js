import React, {Component} from "react";
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        //ПРИВЯЗВАЕМ к контексту!!!!!!!!!
        this.onImportant=this.onImportant.bind(this);
        this.onLike=this.onLike.bind(this);
    }

    // эо происходит когда мы кликаем на кнопку звездочки он работает с состоянием
    // нашего компонента. Мы меняем important на противоположное значение
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {label} = this.props;
        const {important, like} =this.state;
        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={this.onLike}>
                    
                    {label}
                </span>
                <div className="d-flex justtify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
