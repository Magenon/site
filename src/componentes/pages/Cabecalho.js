import React from 'react';

const Cabecalho = props => {
    return (
        <div>            
            <div className="jumbotron text-center">
                <h1>Companhia</h1>
                <p>Especializada em Tecnologia.</p>
                <form>
                    <div className="input-group">
                        <input type="email" className="form-control" size="50" placeholder="Email Address" required />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>           
        </div>
    )
}
export default Cabecalho;