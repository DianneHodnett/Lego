import React, {Component} from 'react'
import Paper from 'material-ui/Paper'


export default class extends Component {
    render () {
        const brick = this.props.brick
        return <Paper className="flexBox" zDepth={4}>
            <img width="40%" src={brick.imgURL}/>
            <h4>{brick.name}</h4>
            {/*<div>{brick.color}</div>*/}
            {/*<p>{brick.price}</p>*/}
        </Paper>;
    }
}
export const BrickFunc = (brick) => {
        return (
            <li>
                {brick.name}
                <br/>
                <img width="20%" src={brick.imgURL}/>
            </li>
        );
    }


