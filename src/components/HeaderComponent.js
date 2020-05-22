
import React from "react";
import history from '../routes/history';
export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div className="mt-0">
                <h4 onClick={() => {
                    history.push('/')

                }} className="cursorPointer" style={{ margin: 0, padding: 0, textAlign: 'justify' }}><strong>abhikumar.xyz</strong></h4>
                <div style={{ textAlign: 'justify' }} className="">
                    <p style={{ margin: 0, padding: 0, fontSize: 14 }}>Tech | Motivation | Part Time Chef</p>
                </div>
            </div>
        );
    }
}
